import React from 'react';
import { motion } from 'framer-motion';
import Divider from './Divider';

export default function Event() {
  return (
    <section className="py-20 px-6 bg-[#F4F7F9] flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
        
        {/* CONTAINER UTAMA FOTO SEBAGAI BACKGROUND */}
        <div className="relative w-full min-h-[580px] lg:min-h-[520px] flex items-center">
          <img 
            src="/images/DSC03242.jpg" 
            alt="Windy & Naufal Save The Date" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* GRADIENT GELAP HANYA TERFOKUS DI SISI KANAN */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 lg:bg-gradient-to-r lg:from-transparent lg:via-black/35 lg:to-black/85"></div>

          {/* AREA TEKS DIKUNCI HANYA DI AREA TENGAH KE KANAN */}
          <div className="relative w-full flex flex-col justify-center items-center lg:items-end lg:pr-12 py-10 px-6 lg:px-8 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[48%] flex flex-col items-center lg:items-end text-center lg:text-right"
            >
              <h2 className="font-script text-4xl lg:text-5xl text-[#C2D9ED] mb-1 drop-shadow-lg">Save The Date</h2>
              
              <p className="font-serif text-sm lg:text-base font-medium text-white mb-2 drop-shadow-md">Minggu, 27 September 2026</p>
              
              <Divider className="text-white mb-3" />

              {/* AKAD */}
              <div className="mb-2 w-full">
                <h3 className="font-serif text-base lg:text-lg tracking-widest text-[#C2D9ED] font-semibold mb-0.5 drop-shadow-md">AKAD</h3>
                <p className="font-serif text-xs lg:text-sm text-gray-100 font-medium drop-shadow-sm">08.00 - 10.00 WIB</p>
              </div>

              {/* Garis Pemisah Tipis */}
              <div className="w-12 h-px bg-white/50 my-1.5"></div>

              {/* RESEPSI */}
              <div className="mb-4 w-full">
                <h3 className="font-serif text-base lg:text-lg tracking-widest text-[#C2D9ED] font-semibold mb-0.5 drop-shadow-md">RESEPSI</h3>
                <p className="font-serif text-xs lg:text-sm text-gray-100 font-medium mb-1.5 drop-shadow-sm">11.00 - 14.00 WIB</p>
                
                <p className="font-serif font-bold text-white text-sm lg:text-base mb-0.5 drop-shadow-md">Aula Badarusamsi Ditkuad</p>
                <p className="font-serif text-[11px] lg:text-xs text-gray-200 leading-relaxed drop-shadow-sm">
                  Jl. Menado No.8, Merdeka, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40113
                </p>
              </div>

              {/* TOMBOL LIHAT LOKASI */}
              <div>
                <a 
                  href="https://maps.app.goo.gl/..." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#3B6E8C] text-white font-serif text-xs lg:text-sm tracking-wider px-6 py-2.5 rounded-full shadow-lg hover:bg-[#2c536c] transition-all border border-white/30"
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