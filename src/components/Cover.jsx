import React from 'react';
import { motion } from 'framer-motion';

export default function Cover({ onOpen }) {
  return (
    // Menggunakan min-h-[100dvh] agar mengambil tinggi penuh layar HP secara presisi
    <div className="flex flex-col items-center justify-between h-full min-h-[100dvh] py-10 px-6 bg-[#FDFDFC]">
      
      {/* BAGIAN ATAS: NAMA & JUDUL */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-6"
      >
        <h1 className="font-serif text-3xl sm:text-4xl tracking-[0.2em] text-[#3B6E8C] mb-2 uppercase leading-snug">
          Windy &<br/>Naufal
        </h1>
        <p className="font-script text-4xl sm:text-5xl text-[#3B6E8C] mt-1">
          Wedding Day
        </p>
      </motion.div>

      {/* BAGIAN TENGAH: FOTO (DIPERBESAR OTOMATIS MENGISI RUANG) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        // flex-1 akan membuat foto memanjang mengisi sisa ruang kosong
        // max-h-[65vh] menjaga agar foto tidak terlalu over-zoom di layar yang sangat panjang
        className="w-full max-w-sm sm:max-w-md flex-1 my-8 max-h-[65vh] rounded-3xl overflow-hidden shadow-2xl relative"
      >
        {/* Pastikan nama file fotonya sesuai, misalnya hero.png atau nama lain yg kamu pakai */}
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
        className="text-center mb-6 flex flex-col items-center"
      >
        <p className="font-serif tracking-[0.4em] text-sm sm:text-base text-[#3B6E8C] mb-8">
          27 / 09 / 2026
        </p>
        <button 
          onClick={onOpen} 
          className="bg-[#3B6E8C] text-white px-10 py-3.5 rounded-full font-serif text-sm tracking-wider hover:bg-[#2c536c] transition-all shadow-lg active:scale-95"
        >
          Buka Undangan
        </button>
      </motion.div>

    </div>
  );
}