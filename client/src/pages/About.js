import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
            <h1 className="font-pixel text-4xl md:text-5xl mb-6">TENTANG KAMI</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Mengenal lebih dekat DIGCITY - Digital Business Student Society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 bg-white border-t-4 border-b-4 border-digcity-orange">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-pixel text-3xl mb-6">VISI</h2>
              <div className="pixel-card mb-6">
                <p className="text-gray-700">
                  Mewujudkan DIGCITY sebagai organisasi yang Berdampak, Adaptif, Inovatif, Kompeten, yang menjadi wadah bagi mahasiswa Bisnis Digital untuk mengembangkan potensi diri, berprestasi, serta berkontribusi nyata bagi kemajuan program studi, fakultas, universitas, dan masyarakat.
                </p>
              </div>
              <h3 className="font-pixel text-xl mb-4">Penjelasan Visi:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-digcity-orange mr-3 mt-2 pixel-border"></span>
                  <span className="text-gray-700"><strong className="text-digcity-teal">Berdampak:</strong> Memberikan manfaat nyata bagi mahasiswa, program studi, universitas, dan masyarakat</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-digcity-yellow mr-3 mt-2 pixel-border"></span>
                  <span className="text-gray-700"><strong className="text-digcity-teal">Adaptif:</strong> Mampu menyesuaikan diri dengan perubahan zaman dan kebutuhan mahasiswa</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-digcity-blue mr-3 mt-2 pixel-border"></span>
                  <span className="text-gray-700"><strong className="text-digcity-teal">Inovatif:</strong> Menjadi pelopor dalam menciptakan program dan kegiatan baru yang bermanfaat</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-digcity-teal mr-3 mt-2 pixel-border"></span>
                  <span className="text-gray-700"><strong className="text-digcity-teal">Kompeten:</strong> Memastikan anggota memiliki pengetahuan dan keterampilan mendalam dalam bidangnya</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-pixel text-3xl mb-6">MISI</h2>
              <ul className="space-y-6">
                <li className="pixel-card">
                  <div className="flex">
                    <div className="bg-digcity-orange w-10 h-10 flex items-center justify-center mr-4 font-pixel text-white pixel-border">1</div>
                    <p className="text-gray-700">
                      Memperkuat budaya kolaborasi dan sinergi antar anggota DIGCITY serta dengan seluruh mahasiswa Bisnis Digital, Himpunan lain, dan seluruh civitas akademik di Universitas Ibn Khaldun Bogor.
                    </p>
                  </div>
                </li>
                <li className="pixel-card">
                  <div className="flex">
                    <div className="bg-digcity-yellow w-10 h-10 flex items-center justify-center mr-4 font-pixel text-black pixel-border">2</div>
                    <p className="text-gray-700">
                      Menyelenggarakan program pengembangan diri yang komprehensif dan inovatif untuk meningkatkan kompetensi mahasiswa di bidang akademik, non-akademik, dan kewirausahaan.
                    </p>
                  </div>
                </li>
                <li className="pixel-card">
                  <div className="flex">
                    <div className="bg-digcity-blue w-10 h-10 flex items-center justify-center mr-4 font-pixel text-white pixel-border">3</div>
                    <p className="text-gray-700">
                      Memberikan kontribusi pemikiran dan karya nyata bagi kemajuan program studi, fakultas, universitas, dan masyarakat umum.
                    </p>
                  </div>
                </li>
                <li className="pixel-card">
                  <div className="flex">
                    <div className="bg-digcity-teal w-10 h-10 flex items-center justify-center mr-4 font-pixel text-white pixel-border">4</div>
                    <p className="text-gray-700">
                      Mengembangkan sistem organisasi yang transparan, akuntabel, dan berkelanjutan.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organization Structure Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-pixel text-3xl md:text-4xl mb-4">STRUKTUR ORGANISASI</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Struktur organisasi DIGCITY yang terinspirasi dari struktur perusahaan digital modern.
            </p>
          </motion.div>

          {/* Executive Committee */}
          <div className="mb-16">
            <h3 className="font-pixel text-2xl mb-8 text-center">BPH (Executive Committee)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                className="pixel-card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-digcity-orange rounded-full flex items-center justify-center pixel-border">
                  <span className="font-pixel text-white text-xl">CEO</span>
                </div>
                <h4 className="font-pixel text-xl mb-2">Chief Executive Officer</h4>
                <p className="text-gray-700">Ketua Himpunan</p>
              </motion.div>

              <motion.div
                className="pixel-card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-digcity-yellow rounded-full flex items-center justify-center pixel-border">
                  <span className="font-pixel text-black text-xl">COO</span>
                </div>
                <h4 className="font-pixel text-xl mb-2">Chief Operating Officer</h4>
                <p className="text-gray-700">Wakil Ketua</p>
              </motion.div>

              <motion.div
                className="pixel-card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-digcity-blue rounded-full flex items-center justify-center pixel-border">
                  <span className="font-pixel text-white text-xl">CAO</span>
                </div>
                <h4 className="font-pixel text-xl mb-2">Chief Administrative Officer</h4>
                <p className="text-gray-700">Sekretaris</p>
              </motion.div>

              <motion.div
                className="pixel-card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-digcity-teal rounded-full flex items-center justify-center pixel-border">
                  <span className="font-pixel text-white text-xl">CFO</span>
                </div>
                <h4 className="font-pixel text-xl mb-2">Chief Financial Officer</h4>
                <p className="text-gray-700">Bendahara</p>
              </motion.div>
            </div>
          </div>

          {/* Divisions */}
          <h3 className="font-pixel text-2xl mb-8 text-center">Divisi</h3>
          <div className="space-y-6">
            {[
              {
                name: 'CMI',
                fullName: 'Creative Media Information',
                desc: 'Mengelola konten kreatif dan informasi, membuat materi visual, video, dan pengelolaan media sosial.',
                color: 'bg-digcity-orange',
                text: 'text-white',
                delay: 0
              },
              {
                name: 'ECRAV',
                fullName: 'Economy Creative',
                desc: 'Mengembangkan program ekonomi kreatif dan menjalin hubungan dengan stakeholder eksternal.',
                color: 'bg-digcity-yellow',
                text: 'text-black',
                delay: 0.1
              },
              {
                name: 'POD',
                fullName: 'People Organizing and Development',
                desc: 'Mengelola sumber daya manusia dan mengembangkan kepemimpinan dan keterampilan anggota.',
                color: 'bg-digcity-blue',
                text: 'text-white',
                delay: 0.2
              },
              {
                name: 'PR',
                fullName: 'Public Relation',
                desc: 'Menjaga citra organisasi di mata publik dan mengelola hubungan dengan media dan promosi kegiatan.',
                color: 'bg-digcity-teal',
                text: 'text-white',
                delay: 0.3
              }
            ].map((div, index) => (
              <motion.div
                key={index}
                className="pixel-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: div.delay }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  <div className={`${div.color} w-20 h-20 flex items-center justify-center rounded mb-4 md:mb-0 md:mr-6 pixel-border`}>
                    <span className={`font-pixel ${div.text} text-2xl`}>{div.name}</span>
                  </div>
                  <div>
                    <h4 className="font-pixel text-xl mb-2 text-center md:text-left">{div.fullName}</h4>
                    <p className="text-gray-700">{div.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-white border-t-4 border-digcity-orange">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-pixel text-3xl md:text-4xl mb-4">NILAI ORGANISASI</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Nilai-nilai yang menjadi landasan DIGCITY dalam berorganisasi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Etika',
                desc: 'Menjaga integritas, transparansi, dan kejujuran dalam semua aspek',
                icon: '🔍',
                delay: 0
              },
              {
                name: 'Loyalitas',
                desc: 'Mendahulukan kepentingan himpunan dan membangun hubungan solid',
                icon: '❤️',
                delay: 0.1
              },
              {
                name: 'Eksplorasi',
                desc: 'Terbuka terhadap ide-ide baru dan pengembangan diri',
                icon: '🔭',
                delay: 0.2
              },
              {
                name: 'Generasi',
                desc: 'Mengembangkan potensi individu untuk regenerasi yang kuat',
                icon: '🌱',
                delay: 0.3
              },
              {
                name: 'Aksi',
                desc: 'Merealisasikan ide dan rencana dengan sistem evaluasi yang jelas',
                icon: '🚀',
                delay: 0.4
              },
              {
                name: 'Netralisme',
                desc: 'Menciptakan suasana kerja inklusif tanpa diskriminasi',
                icon: '🤝',
                delay: 0.5
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="pixel-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: value.delay }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <span className="text-4xl block mb-4">{value.icon}</span>
                  <h3 className="font-pixel text-xl mb-3">{value.name}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
