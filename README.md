# DigCity - Digital Business Student Society Website

Website profile untuk DigCity (Digital Business Student Society) dengan konsep pixelated, digital, dan modern yang terinspirasi dari Stardew Valley.

## Fitur Utama

- **Design Pixelated & Digital**: Tampilan website bergaya pixelated dengan sentuhan modern
- **Responsif**: Tampilan yang menyesuaikan dengan berbagai ukuran layar
- **Animasi Menarik**: Efek parallax dan animasi interaktif
- **Integrasi Backend**: API untuk mengelola konten website secara dinamis
- **Database MySQL**: Menggunakan XAMPP untuk penyimpanan data

## Teknologi yang Digunakan

### Frontend
- React.js untuk UI library
- React Router untuk navigasi
- TailwindCSS untuk styling
- Framer Motion untuk animasi
- Axios untuk HTTP requests

### Backend
- Node.js dengan Express
- MySQL untuk database (melalui XAMPP)
- Multer untuk upload file

## Struktur Folder

```
web-digcity/
├── client/               # Frontend (React)
│   ├── public/           # Asset publik
│   ├── src/              # Source code
│   │   ├── assets/       # Gambar, font, dll
│   │   ├── components/   # Komponen React
│   │   ├── pages/        # Halaman website
│   │   ├── services/     # Integrasi API
│   │   └── styles/       # CSS & TailwindCSS
├── server/               # Backend (Node.js)
│   ├── src/              # Source code
│   │   ├── config/       # Konfigurasi
│   │   ├── controllers/  # Controller API
│   │   ├── models/       # Model database
│   │   └── routes/       # Route API
```

## Cara Instalasi

### Prasyarat
- Node.js (versi 14 atau lebih tinggi)
- XAMPP (untuk MySQL)
- NPM atau Yarn

### Langkah-langkah

1. Clone repository
```bash
git clone https://github.com/username/web-digcity.git
cd web-digcity
```

2. Instalasi dan jalankan frontend
```bash
cd client
npm install
npm start
```

3. Instalasi dan jalankan backend
```bash
cd server
npm install
npm run dev
```

4. Setup database MySQL
   - Buka XAMPP dan start MySQL
   - Buka phpMyAdmin (http://localhost/phpmyadmin)
   - Buat database baru bernama `digcity_db`
   - Import file SQL dari `/server/src/config/database.sql`

5. Website akan berjalan di:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Panduan Pengembangan

### Frontend

Untuk menambahkan halaman baru:
1. Buat file baru di `client/src/pages/`
2. Tambahkan route di `client/src/App.js`

### Backend

Untuk menambahkan API endpoint baru:
1. Buat controller di `server/src/controllers/`
2. Tambahkan route di `server/src/routes/`
3. Daftarkan route di `server/src/index.js`

## Grand Design DigCity

Website ini mengikuti grand design DigCity 2024-2025 dengan fokus pada:
- **Visi**: Mewujudkan organisasi yang Berdampak, Adaptif, Inovatif, Kompeten
- **Misi**: Memperkuat kolaborasi, pengembangan diri, kontribusi nyata, dan sistem organisasi
- **Struktur Organisasi**: BPH (Executive Committee) dan 4 Divisi utama (CMI, ECRAV, POD, PR)

## Kontribusi

Untuk berkontribusi pada proyek ini:
1. Fork repository
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Ajukan Pull Request

## Lisensi

Hak Cipta © 2025 DigCity. Seluruh hak dilindungi.
