import React from 'react';
import { motion } from 'framer-motion';

export default function Cover({ onOpen }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] py-12 px-6 bg-[#FDFDFC]">
      
      {/* BAGIAN ATAS: NAMA & JUDUL (Teks Diperkecil) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-6 lg:mb-8"
      >
        <h1 className="font-serif text-2xl sm:text-3xl lg:text-3xl tracking-[0.2em] text-[#3B6E8C] mb-2 uppercase leading-snug">
          Windy &<br/>Naufal
        </h1>
        <p className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#3B6E8C] mt-1 lg:mt-2">
          Wedding Day
        </p>
      </motion.div>

      {/* BAGIAN TENGAH: FOTO (UKURAN MUTLAK AGAR PASTI POTRAIT) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        // Menggunakan nilai absolut untuk width dan height agar BENTUKNYA TERKUNCI POTRAIT
        className="w-[260px] h-[350px] sm:w-[300px] sm:h-[400px] lg:w-[320px] lg:h-[440px] mb-8 lg:mb-10 rounded-[2rem] overflow-hidden shadow-2xl relative shrink-0"
      >
        <img 
          src="/images/welcome.png" 
          alt="Windy & Naufal Cover" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* BAGIAN BAWAH: TANGGAL & TOMBOL */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center flex flex-col items-center"
      >
        <p className="font-serif tracking-[0.4em] text-xs sm:text-sm lg:text-base text-[#3B6E8C] mb-6 lg:mb-8">
          27 / 09 / 2026
        </p>
        <button 
          onClick={onOpen} 
          className="bg-[#3B6E8C] text-white px-8 py-3 lg:px-10 lg:py-3.5 rounded-full font-serif text-xs lg:text-sm tracking-wider hover:bg-[#2c536c] transition-all shadow-lg active:scale-95"
        >
          Buka Undangan
        </button>
      </motion.div>

    </div>
  );
}