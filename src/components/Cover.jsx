import React from 'react';
import { motion } from 'framer-motion';

export default function Cover({ onOpen }) {
  return (
    // justify-between menjaga teks tetap di atas dan tombol di bawah
    // overflow-y-auto memastikan jika layar HP sangat kecil, halamannya tetap bisa di-scroll tanpa terpotong
    <div className="flex flex-col items-center justify-between min-h-[100dvh] py-10 px-6 bg-[#FDFDFC] overflow-y-auto">
      
      {/* BAGIAN ATAS: NAMA & JUDUL */}
      {/* shrink-0 mencegah elemen ini menyusut paksa */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-2 sm:mt-4 shrink-0"
      >
        <h1 className="font-serif text-3xl sm:text-4xl tracking-[0.2em] text-[#3B6E8C] mb-2 uppercase leading-snug">
          Windy &<br/>Naufal
        </h1>
        <p className="font-script text-4xl sm:text-5xl text-[#3B6E8C] mt-2">
          Wedding Day
        </p>
      </motion.div>

      {/* BAGIAN TENGAH: FOTO (UKURAN MUTLAK AGAR PASTI POTRAIT) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        // Ukuran diatur secara spesifik: kecil di HP (250x350), membesar di layar lebar
        className="w-[250px] h-[350px] sm:w-[300px] sm:h-[400px] lg:w-[320px] lg:h-[440px] my-8 rounded-[2rem] overflow-hidden shadow-2xl relative shrink-0"
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
        className="text-center mb-2 sm:mb-4 flex flex-col items-center shrink-0"
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