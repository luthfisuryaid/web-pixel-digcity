-- Drop database if exists and create a new one
DROP DATABASE IF EXISTS digcity_db;
CREATE DATABASE digcity_db;
USE digcity_db;

-- Table for contact submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_read BOOLEAN DEFAULT FALSE
);

-- Table for events
CREATE TABLE IF NOT EXISTS events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  event_date DATETIME NOT NULL,
  image_url VARCHAR(255),
  location VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table for dynamic content
CREATE TABLE IF NOT EXISTS content (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(50) NOT NULL UNIQUE,
  content_json JSON NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table for divisions
CREATE TABLE IF NOT EXISTS divisions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  color VARCHAR(20) NOT NULL,
  icon VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table for division programs
CREATE TABLE IF NOT EXISTS division_programs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  division_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  is_long_term BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (division_id) REFERENCES divisions(id) ON DELETE CASCADE
);

-- Table for organization members
CREATE TABLE IF NOT EXISTS organization_members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  position VARCHAR(100) NOT NULL,
  position_code VARCHAR(10) NOT NULL,
  division_id INT,
  image_url VARCHAR(255),
  position_order INT NOT NULL,
  FOREIGN KEY (division_id) REFERENCES divisions(id) ON DELETE SET NULL
);

-- Table for division members
CREATE TABLE IF NOT EXISTS division_members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  division_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL,
  FOREIGN KEY (division_id) REFERENCES divisions(id) ON DELETE CASCADE
);

-- Insert seed data for divisions
INSERT INTO divisions (name, full_name, description, color) VALUES
('CMI', 'Creative Media Information', 'Mengelola konten kreatif dan informasi, membuat materi visual, video, dan pengelolaan media sosial.', '#FF9D00'),
('ECRAV', 'Economy Creative', 'Mengembangkan program ekonomi kreatif dan menjalin hubungan dengan stakeholder eksternal.', '#FFCD00'),
('POD', 'People Organizing and Development', 'Mengelola sumber daya manusia dan mengembangkan kepemimpinan dan keterampilan anggota.', '#00B7E5'),
('PR', 'Public Relation', 'Menjaga citra organisasi di mata publik dan mengelola hubungan dengan media dan promosi kegiatan.', '#008999');

-- Insert seed data for division programs
INSERT INTO division_programs (division_id, name, description, is_long_term) VALUES
(1, 'Pembuatan Konten Kreatif', 'Membuat konten visual dan video untuk media sosial DigCity', FALSE),
(1, 'Pengelolaan Media Sosial', 'Mengelola akun media sosial DigCity untuk meningkatkan awareness', FALSE),
(1, 'Kolaborasi dengan Influencer', 'Berkolaborasi dengan influencer untuk memperluas jangkauan', FALSE),
(1, 'Strategi Konten Tahunan', 'Menyusun strategi konten untuk setahun ke depan', TRUE),
(1, 'Pengembangan Kanal Media', 'Mengembangkan kanal media baru seperti YouTube dan podcast', TRUE),
(1, 'Branding Digital', 'Mengembangkan dan menjaga branding digital DigCity', TRUE),

(2, 'Riset Pasar Merchandise', 'Melakukan riset untuk pengembangan merchandise DigCity', FALSE),
(2, 'Peluncuran Produk Pertama', 'Meluncurkan produk merchandise pertama seperti kaos dan tote bag', FALSE),
(2, 'Pemasaran melalui Media Sosial', 'Memasarkan produk melalui media sosial', FALSE),
(2, 'Bekerja Sama dengan Influencer Lokal', 'Berkolaborasi dengan influencer lokal untuk promosi', FALSE),
(2, 'Ekspansi Produk Merchandise', 'Mengembangkan varian produk merchandise baru', TRUE),
(2, 'Pemasaran Offline', 'Memasarkan produk melalui event dan bazar', TRUE),
(2, 'Kolaborasi dengan Brand Terkemuka', 'Berkolaborasi dengan brand terkemuka untuk co-branding', TRUE),
(2, 'Membangun Sistem E-Commerce', 'Membangun sistem e-commerce untuk penjualan online', TRUE),

(3, 'Rekrutmen Anggota Baru', 'Menyelenggarakan proses rekrutmen anggota baru', FALSE),
(3, 'Pelatihan Kepemimpinan DIGIMON', 'Menyelenggarakan pelatihan kepemimpinan untuk anggota', FALSE),
(3, 'Program Pengembangan Diri', 'Menyelenggarakan workshop dan seminar untuk pengembangan diri', FALSE),
(3, 'Pembangunan Program Karir', 'Mengembangkan program karir untuk anggota', TRUE),
(3, 'Peningkatan Sistem Pengelolaan Anggota', 'Meningkatkan sistem pengelolaan anggota untuk tracking kemajuan', TRUE),
(3, 'Pengembangan Jaringan dan Kolaborasi', 'Mengembangkan jaringan dan kolaborasi dengan pihak eksternal', TRUE),

(4, 'Pengelolaan Citra Publik', 'Mengelola dan menjaga citra DigCity di mata publik', FALSE),
(4, 'Penyebaran Siaran Pers', 'Menyebarkan siaran pers untuk kegiatan-kegiatan penting', FALSE),
(4, 'Kampanye Sosial Media', 'Menyelenggarakan kampanye di media sosial', FALSE),
(4, 'Kampanye Branding Organisasi', 'Menyelenggarakan kampanye branding organisasi jangka panjang', TRUE),
(4, 'Partisipasi dalam Event Eksternal', 'Berpartisipasi dalam event-event eksternal untuk meningkatkan awareness', TRUE);

-- Insert seed data for organization members (BPH)
INSERT INTO organization_members (name, position, position_code, division_id, position_order) VALUES
('John Doe', 'Ketua Himpunan', 'CEO', NULL, 1),
('Jane Smith', 'Wakil Ketua', 'COO', NULL, 2),
('Mike Johnson', 'Sekretaris', 'CAO', NULL, 3),
('Sarah Williams', 'Bendahara', 'CFO', NULL, 4),
('David Lee', 'Kepala Divisi', 'DIV', 1, 5),
('Emily Chen', 'Kepala Divisi', 'DIV', 2, 6),
('Robert Kim', 'Kepala Divisi', 'DIV', 3, 7),
('Lisa Wang', 'Kepala Divisi', 'DIV', 4, 8);

-- Insert sample events
INSERT INTO events (title, description, event_date, location) VALUES
('DIGCITY Recruitment Day', 'Rekrutmen anggota baru untuk bergabung dengan DIGCITY.', '2024-08-15 00:00:00', 'Gedung Fakultas Ekonomi dan Bisnis'),
('Digital Business Workshop', 'Workshop tentang bisnis digital untuk mahasiswa Universitas Ibn Khaldun Bogor.', '2024-09-20 00:00:00', 'Aula Universitas'),
('DIGCITY Annual Conference', 'Konferensi tahunan tentang perkembangan bisnis digital dan teknologi terkini.', '2024-10-10 00:00:00', 'Grand Ballroom Hotel Salak');
