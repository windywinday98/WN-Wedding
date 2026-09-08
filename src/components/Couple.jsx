import { motion } from 'framer-motion';

export default function Couple() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-6 bg-[#FDFDFC] border-b border-gray-100 flex flex-col items-center"
    >
      
      <p className="font-script text-5xl text-invitato mb-4 text-center">The Couple</p>
      <div className="w-12 h-px bg-invitato/30 mx-auto mb-16"></div>

      <div className="w-full max-w-[360px] relative flex flex-col items-center">
        
        {/* BARIS 1: WINDY */}
        <div className="w-full flex items-center justify-between mb-4">
          <motion.div 
            initial={{ opacity: 0, x: -30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[45%] text-right pr-2 flex flex-col items-end justify-center"
          >
            <h2 className="font-serif text-2xl tracking-wider text-invitato font-bold mb-1">WINDY</h2>
            <p className="font-sans text-xs text-gray-700 mb-3">Windy Windayanti</p>
            <p className="font-serif italic text-xs text-gray-400 mb-1">Putri dari</p>
            <p className="font-sans text-[11px] text-gray-600 leading-relaxed text-right">
              Bapak Deni Kunendar &<br />Ibu Yeni Haryani
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-[50%] flex justify-end"
          >
            <div className="w-48 h-64 bg-gray-200 overflow-hidden shadow-md">
              <img src="/images/windy.png" alt="Windy" className="w-full h-full object-cover brightness-110 contrast-110 saturate-75" />
            </div>
          </motion.div>
        </div>

        {/* SIMBOL & */}
        <div className="absolute left-[45%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <span className="font-script text-7xl text-invitato drop-shadow-sm">&</span>
        </div>

        {/* BARIS 2: NAUFAL */}
        <div className="w-full flex items-center justify-between mt-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="w-[50%] flex justify-start"
          >
            <div className="w-48 h-64 bg-gray-200 overflow-hidden shadow-md">
              <img src="/images/naufal.png" alt="Naufal" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-[45%] text-left pl-2 flex flex-col items-start justify-center"
          >
            <h2 className="font-serif text-2xl tracking-wider text-invitato font-bold mb-1">NAUFAL</h2>
            <p className="font-sans text-xs text-gray-700 mb-3">Muhamad Naufal Fathoni</p>
            <p className="font-serif italic text-xs text-gray-400 mb-1">Putra Pertama dari</p>
            <p className="font-sans text-[11px] text-gray-600 leading-relaxed text-left">
              Bapak Eka Julvikar &<br />Ibu Dwi Wahyuni
            </p>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}