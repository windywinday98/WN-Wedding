import React from 'react';
import { motion } from 'framer-motion';

export default function Cover({ onOpen }) {
  return (
    <div className="flex flex-col items-center justify-between h-[100dvh] w-full py-6 lg:py-8 px-4 bg-[#FDFDFC] overflow-hidden">
      
      {/* BAGIAN ATAS: NAMA & JUDUL */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center shrink-0"
      >
        <h1 className="font-serif text-3xl lg:text-3xl tracking-[0.2em] text-[#3B6E8C] mb-2 uppercase leading-snug">
          Windy &<br/>Naufal
        </h1>
        <p className="font-script text-4xl lg:text-5xl text-[#3B6E8C]">
          Wedding Day
        </p>
      </motion.div>

      {/* BAGIAN TENGAH: FOTO */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        // Jarak margin (my) di HP dikurangi jadi my-2 agar ada sisa ruang lebih banyak untuk foto
        // Untuk PC dikunci di lg:my-4 (tidak berubah dari sebelumnya)
        className="flex-1 min-h-0 flex justify-center items-center w-full my-2 lg:my-4"
      >
        {/* 
          - HP: max-w dinaikkan ke 320px dan max-h ke 520px (foto jauh lebih lebar & panjang)
          - PC: lg:max-h-[460px] mengunci tampilan PC agar persis sama dengan versi sebelumnya
        */}
        <div className="w-full h-full max-w-[320px] max-h-[520px] lg:max-h-[460px] rounded-[2rem] overflow-hidden shadow-2xl relative shrink-0">
          <img 
            src="/images/welcome.png" 
            alt="Windy & Naufal Cover" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>

      {/* BAGIAN BAWAH: TANGGAL & TOMBOL */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center flex flex-col items-center shrink-0"
      >
        <p className="font-serif tracking-[0.3em] text-sm lg:text-lg text-[#3B6E8C] mb-4 sm:mb-5">
          27 / 09 / 2026
        </p>
        <button 
          onClick={onOpen} 
          className="bg-[#3B6E8C] text-white px-8 py-3 lg:px-10 lg:py-3.5 rounded-full font-serif text-sm tracking-wider hover:bg-[#2c536c] transition-all shadow-lg active:scale-95 cursor-pointer"
        >
          Buka Undangan
        </button>
      </motion.div>

    </div>
  );
}