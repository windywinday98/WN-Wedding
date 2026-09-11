import { motion } from 'framer-motion';

export default function Cover({ onOpen }) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center py-8 px-6 text-center bg-[#FDFDFC] overflow-hidden gap-y-5"
    >
      {/* Nama Windy & Naufal */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full"
      >
        <h1 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-invitato font-medium leading-tight">
          WINDY <span className="font-light">&</span><br />NAUFAL
        </h1>
        <p className="font-script text-2xl text-invitato mt-0.5">Wedding Day</p>
      </motion.div>

      {/* Foto Cover dengan tinggi yang proporsional di HP */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        className="w-64 md:w-80 h-[340px] md:h-[460px] bg-gray-200 overflow-hidden shadow-xl rounded-lg my-1"
      >
        <img 
          src="/images/welcome.png"
          alt="Cover Couple" 
          className="w-full h-full object-cover brightness-110 contrast-110 saturate-75"
        />
      </motion.div>

      {/* Tanggal & Tombol Buka Undangan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full flex flex-col items-center"
      >
        <p className="font-serif text-base md:text-lg tracking-[0.2em] text-invitato mb-3">
          27 / 09 / 2026
        </p>

        <button 
          onClick={onOpen}
          className="bg-invitato text-white font-serif italic px-8 py-2.5 rounded-full text-sm md:text-base hover:bg-invitato/90 transition-all shadow-sm cursor-pointer"
        >
          Buka Undangan
        </button>
      </motion.div>
    </motion.section>
  );
}