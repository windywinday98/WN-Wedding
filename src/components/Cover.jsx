import { motion } from 'framer-motion';

export default function Cover({ onOpen }) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex flex-col items-center justify-between py-6 px-6 text-center bg-[#FDFDFC] overflow-hidden"
    >
      {/* Nama Windy & Naufal */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full pt-2"
      >
        <h1 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-invitato font-medium leading-tight">
          WINDY <span className="font-light">&</span><br />NAUFAL
        </h1>
        <p className="font-script text-3xl text-invitato mt-0.5">wedding day</p>
      </motion.div>

      {/* Foto Cover Diperbesar */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        className="w-72 md:w-80 h-[410px] md:h-[460px] bg-gray-200 overflow-hidden shadow-xl my-2"
      >
        <img 
          src="/images/welcome.png"
          alt="Cover Couple" 
          className="w-full h-full object-cover brightness-110 contrast-110 saturate-75"
        />
      </motion.div>

      {/* Tanggal & Tombol Let's Begin */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="pb-2"
      >
        <p className="font-serif text-lg tracking-[0.2em] text-invitato mb-3">
          27 / 09 / 2026
        </p>

        <button 
          onClick={onOpen}
          className="bg-invitato text-white font-serif italic px-8 py-2.5 rounded-full text-base hover:bg-invitato/90 transition-all shadow-sm cursor-pointer"
        >
          Buka Undangan
        </button>
      </motion.div>
    </motion.section>
  );
}