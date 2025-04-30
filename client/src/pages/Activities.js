import React from 'react';
import { motion } from 'framer-motion';

const Activities = () => {
  // Data aktivitas dari masing-masing divisi
  const divisionActivities = [
    {
      name: 'ECRAV',
      title: 'Economy Creative',
      color: 'bg-digcity-yellow',
      text: 'text-black',
      shortTerm: [
        'Riset Pasar Merchandise',
        'Peluncuran Produk Pertama (kaos, tote bag)',
        'Pemasaran melalui Media Sosial',
        'Bekerja Sama dengan Influencer Lokal'
      ],
      longTerm: [
        'Ekspansi Produk Merchandise',
        'Pemasaran Offline (event, bazar)',
        'Kolaborasi dengan Brand Terkemuka',
        'Membangun Sistem E-Commerce'
      ]
    },
    {
      name: 'CMI',
      title: 'Creative Media Information',
      color: 'bg-digcity-orange',
      text: 'text-white',
      shortTerm: [
        'Pembuatan Konten Kreatif',
        'Pengelolaan Media Sosial',
        'Kolaborasi dengan Influencer'
      ],
      longTerm: [
        'Strategi Konten Tahunan',
        'Pengembangan Kanal Media (YouTube, podcast)',
        'Branding Digital'
      ]
    },
    {
      name: 'POD',
      title: 'People Organizing and Development',
      color: 'bg-digcity-blue',
      text: 'text-white',
      shortTerm: [
        'Rekrutmen Anggota Baru',
        'Pelatihan Kepemimpinan DIGIMON',
        'Program Pengembangan Diri (workshop, seminar)'
      ],
      longTerm: [
        'Pembangunan Program Karir',
        'Peningkatan Sistem Pengelolaan Anggota',
        'Pengembangan Jaringan dan Kolaborasi'
      ]
    },
    {
      name: 'PR',
      title: 'Public Relations',
      color: 'bg-digcity-teal',
      text: 'text-white',
      shortTerm: [
        'Pengelolaan Citra Publik',
        'Penyebaran Siaran Pers',
        'Kampanye Sosial Media'
      ],
      longTerm: [
        'Kampanye Branding Organisasi',
        'Partisipasi dalam Event Eksternal'
      ]
    }
  ];

  // Data untuk galeri event
  const events = [
    {
      id: 1,
      title: 'DIGCITY Recruitment Day',
      date: 'Agustus 2024',
      image: 'event1.jpg', // Placeholder - akan diganti dengan gambar real
      desc: 'Rekrutmen anggota baru untuk bergabung dengan DIGCITY.'
    },
    {
      id: 2,
      title: 'Digital Business Workshop',
      date: 'September 2024',
      image: 'event2.jpg', // Placeholder
      desc: 'Workshop tentang bisnis digital untuk mahasiswa Universitas Ibn Khaldun Bogor.'
    },
    {
      id: 3,
      title: 'DIGCITY Annual Conference',
      date: 'Oktober 2024',
      image: 'event3.jpg', // Placeholder
      desc: 'Konferensi tahunan tentang perkembangan bisnis digital dan teknologi terkini.'
    },
    {
      id: 4,
      title: 'Digital Marketing Masterclass',
      date: 'November 2024',
      image: 'event4.jpg', // Placeholder
      desc: 'Masterclass tentang digital marketing bersama praktisi industri.'
    },
    {
      id: 5,
      title: 'Merchandise Launch Event',
      date: 'Desember 2024',
      image: 'event5.jpg', // Placeholder
      desc: 'Peluncuran merchandise resmi DIGCITY untuk mahasiswa dan umum.'
    },
    {
      id: 6,
      title: 'Leadership Camp',
      date: 'Januari 2025',
      image: 'event6.jpg', // Placeholder
      desc: 'Camp kepemimpinan untuk anggota DIGCITY dan mahasiwa Bisnis Digital.'
    },
  ];

  // Fungsi untuk menampilkan aktivitas (program kerja) tiap divisi
  const renderDivisionActivities = () => {
    return divisionActivities.map((division, index) => (
      <motion.div
        key={index}
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-6">
          <div className={`${division.color} w-16 h-16 flex items-center justify-center pixel-border mr-4`}>
            <span className={`font-pixel ${division.text} text-xl`}>{division.name}</span>
          </div>
          <h3 className="font-pixel text-2xl">{division.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="pixel-card">
            <h4 className="font-pixel text-digcity-orange text-xl mb-4">Program Jangka Pendek</h4>
            <ul className="space-y-2">
              {division.shortTerm.map((program, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-digcity-yellow mr-3 mt-2 pixel-border"></span>
                  <span className="text-gray-700">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pixel-card">
            <h4 className="font-pixel text-digcity-blue text-xl mb-4">Program Jangka Panjang</h4>
            <ul className="space-y-2">
              {division.longTerm.map((program, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-digcity-blue mr-3 mt-2 pixel-border"></span>
                  <span className="text-gray-700">{program}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    ));
  };

  // Fungsi untuk menampilkan galeri event
  const renderEventGallery = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className="pixel-card overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="h-48 bg-gradient-to-r from-digcity-orange to-digcity-blue mb-4 flex items-center justify-center">
              <span className="font-pixel text-white text-2xl">EVENT {event.id}</span>
              {/* Actual image would replace the placeholder above */}
              {/* <img src={`/assets/events/${event.image}`} alt={event.title} className="w-full h-full object-cover" /> */}
            </div>
            <h3 className="font-pixel text-xl mb-2">{event.title}</h3>
            <p className="text-digcity-orange font-bold mb-2">{event.date}</p>
            <p className="text-gray-700">{event.desc}</p>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Header Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="font-pixel text-4xl md:text-5xl mb-6">KEGIATAN KAMI</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Program kerja dan kegiatan DIGCITY dalam mengembangkan potensi mahasiswa Bisnis Digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Division Activities Section */}
      <section className="py-12 bg-white border-t-4 border-b-4 border-digcity-orange">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-pixel text-3xl md:text-4xl mb-4">PROGRAM KERJA DIVISI</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Program kerja dari masing-masing divisi untuk periode 2024-2025.
            </p>
          </motion.div>

          {renderDivisionActivities()}
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-pixel text-3xl md:text-4xl mb-4">AGENDA KEGIATAN</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Kegiatan-kegiatan yang diselenggarakan oleh DIGCITY selama periode 2024-2025.
            </p>
          </motion.div>

          {renderEventGallery()}
        </div>
      </section>

      {/* Reporting System Section */}
      <section className="py-12 bg-gradient-to-r from-digcity-blue to-digcity-teal text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-pixel text-3xl md:text-4xl mb-4 text-white">SISTEM PELAPORAN</h2>
            <p className="text-lg max-w-3xl mx-auto">
              DIGCITY menggunakan platform Padlet.com sebagai sistem pelaporan kegiatan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white text-gray-800 p-6 pixel-border"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-4">
                <span className="text-4xl">📅</span>
              </div>
              <h3 className="font-pixel text-digcity-orange text-xl text-center mb-4">Absensi & Agenda</h3>
              <p className="text-center">
                Absensi Bulanan dan Agenda Kegiatan yang dapat diakses oleh seluruh anggota.
              </p>
            </motion.div>

            <motion.div
              className="bg-white text-gray-800 p-6 pixel-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-4">
                <span className="text-4xl">📋</span>
              </div>
              <h3 className="font-pixel text-digcity-orange text-xl text-center mb-4">Program Kerja</h3>
              <p className="text-center">
                Laporan Program Kerja Per 3 Bulan untuk evaluasi dan penyesuaian.
              </p>
            </motion.div>

            <motion.div
              className="bg-white text-gray-800 p-6 pixel-border"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-4">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="font-pixel text-digcity-orange text-xl text-center mb-4">Rekapitulasi</h3>
              <p className="text-center">
                Rekapitulasi Laporan Bulanan dan Tahunan untuk arsip dan akreditasi.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
