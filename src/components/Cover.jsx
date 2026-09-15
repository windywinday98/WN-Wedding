import React from 'react';
import { motion } from 'framer-motion';

export default function Cover({ onOpen }) {
  return (
    // h-[100dvh] dan overflow-hidden mengunci seluruh halaman tepat 1 layar penuh tanpa bisa di-scroll
    <div className="flex flex-col items-center justify-between h-[100dvh] w-full py-4 sm:py-6 px-4 bg-[#FDFDFC] overflow-hidden">
      
      {/* BAGIAN ATAS: NAMA & JUDUL */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center shrink-0"
      >
        <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.2em] text-[#3B6E8C] mb-1 uppercase leading-snug">
          Windy &<br/>Naufal
        </h1>
        <p className="font-script text-3xl sm:text-4xl text-[#3B6E8C]">
          Wedding Day
        </p>
      </motion.div>

      {/* BAGIAN TENGAH: FOTO (TINGGINYA MENYESUAIKAN LAYAR / VIEWPORT) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        // Menggunakan h-[38vh] sampai h-[45vh] agar fotonya proporsional dan dijamin muat di satu layar
        className="w-auto h-[38vh] sm:h-[42vh] lg:h-[45vh] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative shrink-0 my-2"
      >
        <img 
          src="/images/welcome.png" 
          alt="Windy & Naufal Cover" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* BAGIAN BAWAH: TANGGAL & TOMBOL */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center flex flex-col items-center shrink-0"
      >
        <p className="font-serif tracking-[0.3em] text-xs sm:text-sm text-[#3B6E8C] mb-2 sm:mb-3">
          27 / 09 / 2026
        </p>
        <button 
          onClick={onOpen} 
          className="bg-[#3B6E8C] text-white px-8 py-2.5 sm:py-3 rounded-full font-serif text-xs sm:text-sm tracking-wider hover:bg-[#2c536c] transition-all shadow-lg active:scale-95 cursor-pointer"
        >
          Buka Undangan
        </button>
      </motion.div>

    </div>
  );
}