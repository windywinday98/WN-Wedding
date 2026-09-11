import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from './supabaseClient';
import Cover from './components/Cover';
import Couple from './components/Couple';
import Event from './components/Event';
import RSVP from './components/RSVP';
import Gallery from './components/Gallery';
import Divider from './components/Divider';
import MandalaLogo from './components/MandalaLogo';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  // --- NAMA TAMU DINAMIS ---
  const queryParams = new URLSearchParams(window.location.search);
  const guestName = queryParams.get('to') || 'Tamu Undangan';

  // --- LOGIKA COUNTDOWN TIMER (27 September 2026, 08:00 WIB) ---
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-09-27T08:00:00+07:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // --- AMBIL DATA WISHES DARI SUPABASE ---
  const [wishesList, setWishesList] = useState([]);

  const fetchWishes = async () => {
    const { data, error } = await supabase
      .from('wishes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Gagal memuat ucapan:', error);
    } else {
      setWishesList(data || []);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleAddWish = async (newWish) => {
    const { error } = await supabase
      .from('wishes')
      .insert([newWish]);

    if (error) {
      console.error('Gagal mengirim ucapan:', error);
      alert('Terjadi kesalahan saat mengirim ucapan.');
    } else {
      fetchWishes(); // Refresh data setelah berhasil dikirim
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen overflow-hidden bg-[#DCE5ED] relative">
      
      <audio ref={audioRef} src="/audio/cincin.mp3" loop />

      {isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={toggleAudio}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-[#3B6E8C] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#3B6E8C]/90 transition-all cursor-pointer border-2 border-white/20"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-[spin_3s_linear_infinite]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          )}
        </motion.button>
      )}

      {/* SISI KIRI: Foto Backdrop Besar di PC */}
      <div className="hidden lg:block lg:w-[65%] h-full relative overflow-hidden">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/images/hero.png" 
          alt="Prewedding Backdrop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[18%] right-[8%] text-right"
        >
          <p className="font-script text-3xl xl:text-4xl text-white mb-1 drop-shadow-md">the wedding of</p>
          <h1 className="font-serif text-4xl xl:text-5xl tracking-[0.12em] text-white drop-shadow-md">WINDY & NAUFAL</h1>
        </motion.div>
      </div>

      {/* SISI KANAN: Konten Undangan */}
      <div className="w-full lg:w-[35%] h-full bg-[#FDFDFC] overflow-y-auto shadow-2xl relative flex flex-col">
        
        {!isOpen ? (
          <Cover onOpen={() => {
            setIsOpen(true);
            if (audioRef.current) {
              audioRef.current.play();
              setIsPlaying(true);
            }
          }} />
        ) : (
          <div className="flex flex-col w-full">
            
            {/* BAGIAN SAMBUTAN & FOTO DENGAN MOTION TERPISAH */}
            <section className="pt-8 pb-16 px-6 text-center bg-[#3B6E8C] text-white border-b border-white/10 overflow-hidden">
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif italic text-xs text-white/80 mb-2"
              >
                Kepada, Bapak/Ibu/Saudara/i
              </motion.p>

              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif text-2xl tracking-wider text-white font-bold mb-6"
              >
                {guestName}
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Divider className="text-white/80 mb-6" />
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-sans text-xs text-white/90 leading-relaxed mb-6 max-w-xs mx-auto"
              >
                Merajut sakinah bukan tentang ketiadaan badai, melainkan menemukan rumah. Kebahagiaan ini kian utuh dengan kehadiran Anda untuk merayakannya bersama kami.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full h-72 bg-gray-200 mb-6 overflow-hidden shadow-md rounded-lg"
              >
                <img src="/images/hero.png" alt="Welcome" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="font-serif italic text-xs text-white/90 leading-relaxed px-2">
                  "Dan di antara tanda-tanda keagungan-Nya, Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, agar kamu menemukan ketenangan batin di sisinya, serta menumbuhkan rasa cinta dan kasih sayang di antara kalian. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda kebesaran Allah bagi kaum yang berpikir."
                </p>
                <p className="font-serif text-[10px] text-white/70 mt-2">[QS. Ar-Rum: 21]</p>
              </motion.div>

            </section>

            <Couple />
            <Event />

            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="py-14 px-6 text-center bg-[#FDFDFC] border-b border-gray-100"
            >
              <div className="flex justify-center items-center gap-4 text-invitato font-serif text-2xl mb-2">
                <span>{String(timeLeft.days).padStart(2, '0')}</span><span>:</span>
                <span>{String(timeLeft.hours).padStart(2, '0')}</span><span>:</span>
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span><span>:</span>
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
              <div className="flex justify-center gap-10 text-[10px] font-sans tracking-widest text-gray-500 uppercase">
                <span>Days</span><span>Hours</span><span>Minute</span><span>Second</span>
              </div>
            </motion.section>

            <Gallery />

            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="py-14 px-6 text-center bg-[#FDFDFC] border-b border-gray-100"
            >
              <p className="font-script text-4xl text-invitato mb-1">Wedding Gift</p>
              <Divider />
              <p className="font-sans text-[11px] text-gray-600 mb-6 leading-relaxed max-w-xs mx-auto">
                Bagi keluarga dan kerabat yang ingin mengirimkan tanda kasih, dapat melalui nomor rekening berikut:
              </p>

              <div className="space-y-3 max-w-xs mx-auto">
                <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-200/80 text-center shadow-xs">
                  <p className="font-serif text-sm font-bold text-invitato tracking-wider mb-0.5">BANK BCA</p>
                  <p className="font-sans text-xs font-semibold text-gray-800 tracking-wider mb-0.5">5140831851</p>
                  <p className="font-sans text-[10px] text-gray-500 mb-3">a.n. Windy Windayanti</p>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText("5140831851");
                      alert("Nomor rekening BCA berhasil disalin!");
                    }}
                    className="w-full bg-invitato text-white py-1.5 rounded-md text-[11px] tracking-wider hover:bg-invitato/90 transition-all cursor-pointer shadow-xs"
                  >
                    Copy Number
                  </button>
                </div>

                <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-200/80 text-center shadow-xs">
                  <p className="font-serif text-sm font-bold text-invitato tracking-wider mb-0.5">BANK MANDIRI</p>
                  <p className="font-sans text-xs font-semibold text-gray-800 tracking-wider mb-0.5">1300016299334</p>
                  <p className="font-sans text-[10px] text-gray-500 mb-3">a.n. Windy Windayanti</p>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText("1300016299334");
                      alert("Nomor rekening Mandiri berhasil disalin!");
                    }}
                    className="w-full bg-invitato text-white py-1.5 rounded-md text-[11px] tracking-wider hover:bg-invitato/90 transition-all cursor-pointer shadow-xs"
                  >
                    Copy Number
                  </button>
                </div>
              </div>
            </motion.section>

            <RSVP onAddWish={handleAddWish} />

            {/* KIND WORDS SECTION */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="py-16 px-6 bg-[#FDFDFC] border-b border-gray-100"
            >
              <p className="font-script text-4xl text-invitato mb-1 text-center">Kind Words</p>
              <Divider />
              <p className="font-serif italic text-xs text-gray-500 text-center mb-6">"Love is the natural trajectory woven into every being. It is a quiet, cosmic longing that draws all existence toward kamāl, its truest perfection and highest good." - Ibn Sina</p>

              <div className="max-w-sm mx-auto space-y-3 max-h-80 overflow-y-auto pr-1">
                {wishesList.length === 0 ? (
                  <p className="text-center text-xs text-gray-400 italic py-4">
                    Belum ada yang memberikan ucapan, jadilah yang pertama!
                  </p>
                ) : (
                  wishesList.map((wish, index) => (
                    <div key={index} className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-200/80 text-left shadow-xs">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-serif font-bold text-xs text-invitato">{wish.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                          {wish.attendance}
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-gray-600 leading-relaxed italic">"{wish.message}"</p>
                    </div>
                  ))
                )}
              </div>
            </motion.section>

            {/* CLOSING SECTION */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="py-16 px-6 text-center bg-[#3B6E8C] text-white"
            >
              <p className="font-serif tracking-widest text-xs text-white/80 uppercase mb-6">OUR SINCERE REGARDS,</p>
              
              <MandalaLogo className="text-white mb-4" />

              <h2 className="font-serif text-xl tracking-wider text-white mb-8">WINDY & NAUFAL</h2>

              <div className="w-full h-72 bg-gray-200 overflow-hidden shadow-md mb-8 rounded-xl">
                <img 
                  src="/images/closing.png" 
                  alt="Closing Couple" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-[10px] text-white/70 space-y-1">
                <a 
                  href="https://www.youtube.com/watch?v=J0EFfdCgdMU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors cursor-pointer"
                >
                  Song by David Bayu - Cincin
                </a>
                <p>Created with Love</p>
                <p>© 2026 Windy & Naufal. All Right Reserved</p>
              </div>
            </motion.section>

          </div>
        )}

      </div>

    </div>
  );
}