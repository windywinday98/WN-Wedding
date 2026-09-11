import React from 'react';
import { motion } from 'framer-motion';
import Divider from './Divider';

export default function Event() {
  return (
    <section className="py-20 px-6 bg-[#F4F7F9] flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
        
        {/* CONTAINER UTAMA FOTO SEBAGAI BACKGROUND */}
        <div className="relative w-full h-[650px] lg:h-[560px]">
          <img 
            src="/images/event.png" 
            alt="Windy & Naufal Save The Date" 
            className="w-full h-full object-cover"
          />
          
          {/* GRADIENT GELAP HANYA TERFOKUS DI SISI KANAN */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30 lg:bg-gradient-to-r lg:from-transparent lg:via-black/35 lg:to-black/85"></div>

          {/* AREA TEKS DIKUNCI HANYA DI AREA TENGAH KE KANAN */}
          <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-end lg:pr-12 p-6 lg:p-8 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[48%] flex flex-col items-center lg:items-end text-center lg:text-right"
            >
              <h2 className="font-script text-5xl lg:text-6xl text-[#C2D9ED] mb-1 drop-shadow-lg">Save The Date</h2>
              
              {/* Tanggal diperbesar */}
              <p className="font-serif text-base lg:text-lg font-medium text-white mb-3 drop-shadow-md">Minggu, 27 September 2026</p>
              
              <Divider className="text-white mb-4" />

              {/* AKAD */}
              <div className="mb-3 w-full">
                <h3 className="font-serif text-lg lg:text-xl tracking-widest text-[#C2D9ED] font-semibold mb-0.5 drop-shadow-md">AKAD</h3>
                {/* Jam diperbesar */}
                <p className="font-serif text-sm lg:text-base text-gray-100 font-medium drop-shadow-sm">08.00 - 10.00 WIB</p>
              </div>

              {/* Garis Pemisah Tipis */}
              <div className="w-16 h-px bg-white/50 my-2"></div>

              {/* RESEPSI */}
              <div className="mb-5 w-full">
                <h3 className="font-serif text-lg lg:text-xl tracking-widest text-[#C2D9ED] font-semibold mb-0.5 drop-shadow-md">RESEPSI</h3>
                {/* Jam diperbesar */}
                <p className="font-serif text-sm lg:text-base text-gray-100 font-medium mb-2 drop-shadow-sm">11.00 - 14.00 WIB</p>
                
                {/* Nama Gedung & Alamat diperbesar */}
                <p className="font-serif font-bold text-white text-base lg:text-lg mb-1 drop-shadow-md">Aula Badarusamsi Ditkuad</p>
                <p className="font-serif text-xs lg:text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                  Jl. Menado No.8, Merdeka, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40113
                </p>
              </div>

              {/* TOMBOL LIHAT LOKASI */}
              <div>
                <a 
                  href="https://maps.app.goo.gl/B9eEDrBRQFw6N69f7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#3B6E8C] text-white font-serif text-sm tracking-wider px-7 py-3 rounded-full shadow-lg hover:bg-[#2c536c] transition-all border border-white/30"
                >
                  Lihat Lokasi
                </a>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}