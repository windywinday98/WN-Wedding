import { motion } from 'framer-motion';

export default function Event() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 px-6 text-center bg-[#E8F0F6]" /* <-- Warna BG ditebalkan di sini */
    >
      <p className="font-script text-4xl text-invitato mb-2">Save The Date</p>
      <p className="font-serif text-xl text-invitato mb-3">Minggu, 27 September 2026</p>
      <div className="w-12 h-px bg-invitato/30 mx-auto mb-10"></div>
      

      {/* Akad Nikah */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="font-serif text-xl tracking-widest text-invitato uppercase mb-2">Akad Nikah</h3>
        <p className="font-serif text-xl text-invitato mb-3">08.00 - 10.00 WIB</p>
        <p className="font-sans text-sm font-semibold text-gray-800 mb-1">Aula Badarusamsi Ditkuad</p>
        <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
          Jl. Menado No.8, Merdeka, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40113
        </p>
      </motion.div>

      <div className="w-8 h-px bg-gray-300 mx-auto mb-12"></div>

      {/* Resepsi */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h3 className="font-serif text-xl tracking-widest text-invitato uppercase mb-2">Resepsi</h3>
        <p className="font-serif text-xl text-invitato mb-3">11.00 - 14.00 WIB</p>
        <p className="font-sans text-sm font-semibold text-gray-800 mb-1">Aula Badarusamsi Ditkuad</p>
        <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-xs mx-auto mb-6">
          Jl. Menado No.8, Merdeka, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40113
        </p>
        
        <div className="flex justify-center mt-2">
          <a 
            href="https://maps.app.goo.gl/b47CiVXB2tG352xS9" 
            target="_blank" 
            rel="noreferrer"
            className="bg-invitato text-white font-sans text-xs px-8 py-2.5 rounded-full hover:bg-invitato/90 transition-all shadow-sm cursor-pointer"
          >
            Lihat Lokasi
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}