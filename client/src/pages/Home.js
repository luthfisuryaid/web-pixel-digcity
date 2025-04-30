import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-pixel text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                DIGITAL BUSINESS STUDENT SOCIETY
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                Wadah bagi mahasiswa Bisnis Digital untuk mengembangkan potensi diri, 
                berprestasi, dan berkontribusi nyata.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="pixel-btn">
                  TENTANG KAMI
                </Link>
                <Link to="/contact" className="pixel-btn bg-digcity-blue border-black">
                  KONTAK
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-80 h-80">
                {/* Pixel art illustration of students/digital business */}
                <div className="absolute inset-0 animated-pixel">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
                    {/* Computer/Laptop Base */}
                    <rect x="60" y="120" width="80" height="10" fill="#333" />
                    <rect x="70" y="80" width="60" height="40" fill="#666" />
                    
                    {/* Screen */}
                    <rect x="75" y="85" width="50" height="30" fill="#00B7E5" />
                    
                    {/* Screen Content - DIGCITY text */}
                    <rect x="80" y="90" width="5" height="5" fill="#FFCD00" />
                    <rect x="80" y="95" width="5" height="5" fill="#FFCD00" />
                    <rect x="80" y="100" width="5" height="5" fill="#FFCD00" />
                    <rect x="80" y="105" width="5" height="5" fill="#FFCD00" />
                    
                    <rect x="85" y="90" width="5" height="5" fill="#FFCD00" />
                    <rect x="90" y="90" width="5" height="5" fill="#FFCD00" />
                    <rect x="85" y="95" width="5" height="5" fill="#FFCD00" />
                    <rect x="85" y="100" width="5" height="5" fill="#FFCD00" />
                    <rect x="90" y="100" width="5" height="5" fill="#FFCD00" />
                    <rect x="85" y="105" width="5" height="5" fill="#FFCD00" />
                    
                    {/* I */}
                    <rect x="100" y="90" width="5" height="20" fill="#FFCD00" />
                    
                    {/* G */}
                    <rect x="110" y="90" width="5" height="5" fill="#FFCD00" />
                    <rect x="115" y="90" width="5" height="5" fill="#FFCD00" />
                    <rect x="110" y="95" width="5" height="5" fill="#FFCD00" />
                    <rect x="110" y="100" width="5" height="5" fill="#FFCD00" />
                    <rect x="115" y="100" width="5" height="5" fill="#FFCD00" />
                    <rect x="110" y="105" width="5" height="5" fill="#FFCD00" />
                    <rect x="115" y="105" width="5" height="5" fill="#FFCD00" />
                    
                    {/* Flying Pixels */}
                    <rect x="50" y="60" width="5" height="5" fill="#FF9D00" />
                    <rect x="130" y="50" width="5" height="5" fill="#00B7E5" />
                    <rect x="100" y="30" width="5" height="5" fill="#FFCD00" />
                    <rect x="150" y="90" width="5" height="5" fill="#008999" />
                    <rect x="40" y="100" width="5" height="5" fill="#FF9D00" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="py-16 bg-white border-t-4 border-b-4 border-digcity-orange">
        <div className="container mx-auto px-4">
          <h2 className="font-pixel text-3xl md:text-4xl text-center mb-12">APA ITU DIGCITY?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="pixel-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-12 flex items-center justify-center mb-4">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="font-pixel text-xl text-center mb-4">VISI</h3>
              <p className="text-gray-700 text-center">
                Mewujudkan DIGCITY sebagai organisasi yang Berdampak, Adaptif, Inovatif, Kompeten untuk mengembangkan potensi mahasiswa.
              </p>
            </motion.div>
            
            <motion.div 
              className="pixel-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-12 flex items-center justify-center mb-4">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="font-pixel text-xl text-center mb-4">MISI</h3>
              <p className="text-gray-700 text-center">
                Memperkuat kolaborasi, menyelenggarakan program pengembangan diri, memberikan kontribusi nyata, dan mengembangkan sistem organisasi.
              </p>
            </motion.div>
            
            <motion.div 
              className="pixel-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-12 flex items-center justify-center mb-4">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="font-pixel text-xl text-center mb-4">NILAI</h3>
              <p className="text-gray-700 text-center">
                Etika, Loyalitas, Eksplorasi, Generasi, Aksi, dan Netralisme sebagai nilai-nilai yang dijunjung tinggi.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Divisions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-pixel text-3xl md:text-4xl text-center mb-12">DIVISI KAMI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg flex items-start border-2 border-b-4 border-r-4 border-black"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-digcity-orange w-16 h-16 flex items-center justify-center rounded mr-4 pixel-border">
                <span className="text-white font-pixel text-2xl">CMI</span>
              </div>
              <div>
                <h3 className="font-pixel text-xl mb-2">Creative Media Information</h3>
                <p className="text-gray-700">
                  Mengelola konten kreatif dan informasi, membuat materi visual, video, dan pengelolaan media sosial.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg flex items-start border-2 border-b-4 border-r-4 border-black"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-digcity-yellow w-16 h-16 flex items-center justify-center rounded mr-4 pixel-border">
                <span className="text-black font-pixel text-xl">ECRAV</span>
              </div>
              <div>
                <h3 className="font-pixel text-xl mb-2">Economy Creative</h3>
                <p className="text-gray-700">
                  Mengembangkan program ekonomi kreatif dan menjalin hubungan dengan stakeholder eksternal.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg flex items-start border-2 border-b-4 border-r-4 border-black"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-digcity-blue w-16 h-16 flex items-center justify-center rounded mr-4 pixel-border">
                <span className="text-white font-pixel text-2xl">POD</span>
              </div>
              <div>
                <h3 className="font-pixel text-xl mb-2">People Organizing and Development</h3>
                <p className="text-gray-700">
                  Mengelola sumber daya manusia dan mengembangkan kepemimpinan dan keterampilan anggota.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg flex items-start border-2 border-b-4 border-r-4 border-black"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-digcity-teal w-16 h-16 flex items-center justify-center rounded mr-4 pixel-border">
                <span className="text-white font-pixel text-2xl">PR</span>
              </div>
              <div>
                <h3 className="font-pixel text-xl mb-2">Public Relation</h3>
                <p className="text-gray-700">
                  Menjaga citra organisasi di mata publik dan mengelola hubungan dengan media dan promosi kegiatan.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-digcity-orange to-digcity-yellow text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-pixel text-3xl md:text-4xl mb-6 text-white">BERGABUNG DENGAN KAMI</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Ingin menjadi bagian dari DIGCITY? Kembangkan potensimu bersama kami dan jadilah bagian dari perubahan!
          </p>
          <Link to="/contact" className="inline-block pixel-btn bg-white text-digcity-orange hover:bg-black hover:text-white">
            HUBUNGI KAMI
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
