import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactAPI } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      // Use contactAPI service to submit form
      const response = await contactAPI.submitForm(formData);
      
      if (response.data.success) {
        setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(response.data.message || 'Terjadi kesalahan saat mengirim pesan');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: error.response?.data?.message || error.message || 'Terjadi kesalahan. Silakan coba lagi.' 
      });
    }
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
            <h1 className="font-pixel text-4xl md:text-5xl mb-6">KONTAK KAMI</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Hubungi kami untuk informasi lebih lanjut atau kolaborasi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white border-t-4 border-b-4 border-digcity-orange">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-pixel text-3xl mb-6">PESAN</h2>
              <p className="text-gray-700 mb-6">
                Isi formulir dibawah ini untuk mengirimkan pesan kepada kami. Kami akan merespons 
                pesan Anda secepat mungkin.
              </p>
              
              {formStatus.isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pixel-card bg-green-50 border-green-500"
                >
                  <h3 className="font-pixel text-xl text-green-600 mb-2">Terima Kasih!</h3>
                  <p className="text-gray-700">
                    Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-pixel text-digcity-teal">
                      NAMA
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 pixel-border focus:border-digcity-orange focus:outline-none"
                      placeholder="Nama lengkap anda"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-pixel text-digcity-teal">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 pixel-border focus:border-digcity-orange focus:outline-none"
                      placeholder="Email anda"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-pixel text-digcity-teal">
                      SUBJEK
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 pixel-border focus:border-digcity-orange focus:outline-none"
                      placeholder="Subjek pesan"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-pixel text-digcity-teal">
                      PESAN
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full p-3 pixel-border focus:border-digcity-orange focus:outline-none"
                      placeholder="Tulis pesan anda disini..."
                    ></textarea>
                  </div>
                  
                  {formStatus.error && (
                    <div className="text-red-500">{formStatus.error}</div>
                  )}
                  
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus.isSubmitting}
                      className="pixel-btn w-full"
                    >
                      {formStatus.isSubmitting ? 'MENGIRIM...' : 'KIRIM PESAN'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-pixel text-3xl mb-6">INFORMASI KONTAK</h2>
              
              <div className="space-y-8">
                <div className="pixel-card">
                  <div className="flex items-start">
                    <div className="bg-digcity-yellow w-12 h-12 flex items-center justify-center mr-4 pixel-border">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-pixel text-xl mb-2">LOKASI</h3>
                      <p className="text-gray-700">
                        Fakultas Ekonomi dan Bisnis<br />
                        Universitas Ibn Khaldun Bogor<br />
                        Jl. K.H. Sholeh Iskandar<br />
                        Bogor, Jawa Barat
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pixel-card">
                  <div className="flex items-start">
                    <div className="bg-digcity-orange w-12 h-12 flex items-center justify-center mr-4 pixel-border">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-pixel text-xl mb-2">EMAIL</h3>
                      <p className="text-gray-700">
                        <a 
                          href="mailto:digcity@example.com" 
                          className="text-digcity-blue hover:text-digcity-orange transition-colors"
                        >
                          digcity@example.com
                        </a>
                      </p>
                      <p className="text-gray-700 mt-2">
                        <a 
                          href="mailto:recruitment.digcity@example.com" 
                          className="text-digcity-blue hover:text-digcity-orange transition-colors"
                        >
                          recruitment.digcity@example.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pixel-card">
                  <div className="flex items-start">
                    <div className="bg-digcity-blue w-12 h-12 flex items-center justify-center mr-4 pixel-border">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h3 className="font-pixel text-xl mb-2">MEDIA SOSIAL</h3>
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          <a 
                            href="https://instagram.com/digcity" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-digcity-blue hover:text-digcity-orange transition-colors"
                          >
                            Instagram: @digcity
                          </a>
                        </p>
                        <p className="text-gray-700">
                          <a 
                            href="https://twitter.com/digcity" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-digcity-blue hover:text-digcity-orange transition-colors"
                          >
                            Twitter: @digcity
                          </a>
                        </p>
                        <p className="text-gray-700">
                          <a 
                            href="https://linkedin.com/company/digcity" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-digcity-blue hover:text-digcity-orange transition-colors"
                          >
                            LinkedIn: DIGCITY
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pixel-card">
                  <div className="flex items-start">
                    <div className="bg-digcity-teal w-12 h-12 flex items-center justify-center mr-4 pixel-border">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-pixel text-xl mb-2">JAM OPERASIONAL</h3>
                      <p className="text-gray-700">
                        Senin - Jumat: 09:00 - 16:00<br />
                        Sabtu: 09:00 - 12:00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-pixel text-3xl mb-4">TEMUKAN KAMI</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Kunjungi sekretariat DIGCITY di Universitas Ibn Khaldun Bogor.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="pixel-border overflow-hidden"
          >
            {/* Map placeholder - would be replaced with actual map component */}
            <div className="h-96 bg-gradient-to-r from-digcity-blue/20 to-digcity-teal/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">🗺️</span>
                <p className="font-pixel text-xl text-digcity-teal">
                  PETA LOKASI DIGCITY
                </p>
                <p className="text-gray-700 mt-2">
                  Universitas Ibn Khaldun Bogor
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-white border-t-4 border-digcity-orange">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-pixel text-3xl mb-4">PERTANYAAN UMUM</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan yang sering diajukan.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'Bagaimana cara bergabung dengan DIGCITY?',
                answer: 'Untuk bergabung dengan DIGCITY, Anda harus mengikuti proses rekrutmen yang biasanya dibuka setiap awal semester. Informasi rekrutmen akan diumumkan melalui media sosial resmi DIGCITY.'
              },
              {
                question: 'Apakah DIGCITY hanya untuk mahasiswa Bisnis Digital?',
                answer: 'Ya, DIGCITY adalah himpunan mahasiswa yang khusus untuk mahasiswa Program Studi Bisnis Digital di Universitas Ibn Khaldun Bogor.'
              },
              {
                question: 'Apa saja keuntungan menjadi anggota DIGCITY?',
                answer: 'Sebagai anggota DIGCITY, Anda akan mendapatkan kesempatan untuk mengembangkan soft skills dan hard skills, membangun jaringan, mengikuti berbagai pelatihan dan workshop, serta kesempatan untuk terlibat dalam berbagai proyek menarik.'
              },
              {
                question: 'Bagaimana cara berkolaborasi dengan DIGCITY?',
                answer: 'Untuk kolaborasi atau kerjasama, Anda dapat menghubungi kami melalui email atau mengisi formulir kontak yang tersedia di website ini. Tim kami akan merespons secepat mungkin.'
              },
              {
                question: 'Apakah DIGCITY menyediakan merchandise?',
                answer: 'Ya, DIGCITY memiliki program merchandise yang dikelola oleh Divisi ECRAV. Merchandise dapat dibeli melalui platform online atau langsung di sekretariat DIGCITY.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="pixel-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-pixel text-xl mb-3 text-digcity-orange">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
