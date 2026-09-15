import React from 'react';
import { motion } from 'framer-motion';

export default function Cover({ onOpen }) {
  return (
    <div className="flex flex-col items-center justify-between h-[100dvh] w-full py-8 lg:py-10 px-4 bg-[#FDFDFC] overflow-hidden">
      
      {/* BAGIAN ATAS: NAMA & JUDUL (Ukurannya diturunkan agar lebih seimbang) */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center shrink-0"
      >
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl tracking-[0.2em] text-[#3B6E8C] mb-2 uppercase leading-snug">
          Windy &<br/>Naufal
        </h1>
        <p className="font-script text-4xl sm:text-5xl lg:text-5xl text-[#3B6E8C]">
          Wedding Day
        </p>
      </motion.div>

      {/* BAGIAN TENGAH: FOTO (Tetap besar dan proporsional 55% layar) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-auto h-[40vh] sm:h-[45vh] lg:h-[55vh] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl relative shrink-0 my-4"
      >
        <img 
          src="/images/welcome.png" 
          alt="Windy & Naufal Cover" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* BAGIAN BAWAH: TANGGAL & TOMBOL (Tetap proporsional) */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center flex flex-col items-center shrink-0"
      >
        <p className="font-serif tracking-[0.3em] text-sm sm:text-base lg:text-xl text-[#3B6E8C] mb-4 sm:mb-5">
          27 / 09 / 2026
        </p>
        <button 
          onClick={onOpen} 
          className="bg-[#3B6E8C] text-white px-8 py-3 lg:px-12 lg:py-3.5 rounded-full font-serif text-sm lg:text-base tracking-wider hover:bg-[#2c536c] transition-all shadow-lg active:scale-95 cursor-pointer"
        >
          Buka Undangan
        </button>
      </motion.div>

    </div>
  );
}