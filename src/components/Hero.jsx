import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10" 
        style={{ backgroundImage: "url('/images/hero.png')" }}
        className="w-full h-full object-cover brightness-110 contrast-110 saturate-75"
      ></div>
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-white"
      >
        <p className="text-sm tracking-[0.3em] uppercase mb-6">Pernikahan</p>
        <h1 className="font-serif text-5xl md:text-7xl mb-8">Windy & Naufal</h1>
        <div className="w-px h-16 bg-white/50 mx-auto mb-8"></div>
        <p className="text-lg tracking-widest font-light">12 . 07 . 2025</p>
      </motion.div>
    </section>
  );
}