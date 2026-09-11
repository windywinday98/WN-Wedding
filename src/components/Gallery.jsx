import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Divider from './Divider';

// Pastikan ekstensi (.png / .jpg) sesuai dengan file aslinya di folder public/images/
const images = [
  "/images/gal-1.png",
  "/images/gal-2.png",
  "/images/gal-4.png",
  "/images/gal-5.png",
  "/images/gal-6.png",
  "/images/gal-7.png",
  "/images/gal-8.png",
  "/images/gal-9.png",
  "/images/gal-10.png",
  "/images/gal-11.png",
  "/images/gal-12.png",
  "/images/gal-13.png"
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 px-4 text-center bg-[#FDFDFC] border-b border-gray-100 overflow-hidden relative"
    >
      <p className="font-script text-5xl text-invitato mb-4 text-center">Our Gallery</p>
      <Divider />

      <div className="relative flex items-center justify-center h-[420px] w-full max-w-md mx-auto overflow-hidden select-none">
        {images.map((img, idx) => {
          let offset = (idx - currentIndex + images.length) % images.length;
          if (offset > images.length / 2) offset -= images.length;

          let position = 'hidden';
          if (offset === 0) position = 'center';
          else if (offset === 1) position = 'right';
          else if (offset === -1) position = 'left';

          return (
            <motion.div
              key={idx}
              animate={{
                x: position === 'left' ? '-45%' : position === 'right' ? '45%' : '0%',
                scale: position === 'center' ? 1 : 0.8,
                filter: position === 'center' ? 'grayscale(0%)' : 'grayscale(100%)',
                opacity: position === 'center' ? 1 : 0.5,
                zIndex: position === 'center' ? 20 : 10,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onClick={() => setCurrentIndex(idx)}
              className={`absolute w-[60%] h-[390px] bg-gray-200 overflow-hidden shadow-xl cursor-pointer ${
                position === 'hidden' ? 'pointer-events-none opacity-0' : ''
              }`}
              style={{ display: position === 'hidden' ? 'none' : 'block' }}
            >
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover" 
                className="w-full h-full object-cover brightness-110 contrast-110 saturate-75"
              />
            </motion.div>
          );
        })}
      </div>

      <p className="text-[11px] text-gray-400 mt-4 italic tracking-wide">
        "Love is the natural trajectory woven into every being. It is a quiet, cosmic longing that draws all existence toward kamāl, its truest perfection and highest good."<br />- Ibn Sina
      </p>
    </motion.section>
  );
}