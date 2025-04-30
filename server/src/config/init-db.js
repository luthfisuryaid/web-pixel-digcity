/**
 * Script untuk inisialisasi database DigCity pada XAMPP
 * 
 * Cara penggunaan:
 * 1. Pastikan XAMPP (MySQL) sudah berjalan
 * 2. Jalankan script ini dengan perintah: node src/config/init-db.js
 */

const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../../.env') });

const initDatabase = async () => {
  try {
    console.log('Memulai inisialisasi database DigCity...');
    
    // Baca file SQL
    const sqlFilePath = path.join(__dirname, 'database.sql');
    const sqlScript = fs.readFileSync(sqlFilePath, 'utf8');
    
    // Koneksi ke MySQL tanpa database (root connection)
    const rootConnection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      multipleStatements: true
    });
    
    console.log('Terhubung ke MySQL server...');
    
    // Eksekusi SQL script
    console.log('Menjalankan SQL script...');
    await rootConnection.query(sqlScript);
    
    console.log('SQL script berhasil dijalankan.');
    console.log(`Database '${process.env.DB_NAME || 'digcity_db'}' berhasil dibuat dan diinisialisasi.`);
    
    await rootConnection.end();
    console.log('Koneksi database ditutup.');
    
    console.log('\nInisialisasi database selesai! 🎉');
    console.log('Anda sekarang dapat menjalankan aplikasi DigCity.');
    
  } catch (error) {
    console.error('Error saat inisialisasi database:', error);
    process.exit(1);
  }
};

// Jalankan inisialisasi
initDatabase();
