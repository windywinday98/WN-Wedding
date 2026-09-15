import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabaseClient';
import Divider from './Divider';

export default function RSVP({ onAddWish }) {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('Siap hadir & ikut merayakan! 🎉');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mencegah klik double (mengatasi masalah data double)
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Mengirim data ke fungsi utama
    await onAddWish({ name, attendance, message });

    // Reset form, matikan loading, dan tampilkan modal sukses
    setName('');
    setAttendance('Siap hadir & ikut merayakan! 🎉');
    setMessage('');
    setIsSubmitting(false);
    setShowModal(true);

    // Pop-up hilang otomatis setelah 3 detik
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-6 bg-[#FDFDFC] border-b border-gray-100 relative"
    >
      <div className="max-w-md mx-auto">
        <p className="font-script text-4xl text-[#3B6E8C] mb-1 text-center">RSVP & Ucapan</p>
        <Divider className="mb-4" />
        <p className="font-sans text-xs text-gray-500 text-center mb-8">Berikan konfirmasi kehadiran dan doa terbaik Anda</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
          <div>
            <label className="block text-gray-500 mb-1">Nama Anda</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama..." 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3B6E8C]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-500 mb-1.5">Konfirmasi Kehadiran</label>
            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => setAttendance('Siap hadir & ikut merayakan! 🎉')}
                className={`py-2.5 px-3 rounded-md text-xs font-medium transition-all cursor-pointer border text-center ${
                  attendance === 'Siap hadir & ikut merayakan! 🎉'
                    ? 'bg-[#3B6E8C] text-white border-[#3B6E8C] shadow-xs'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                }`}
              >
                Siap hadir & ikut merayakan! 🎉
              </button>
              <button
                type="button"
                onClick={() => setAttendance('Belum bisa hadir, tapi doa menyertai 🙏')}
                className={`py-2.5 px-3 rounded-md text-xs font-medium transition-all cursor-pointer border text-center ${
                  attendance === 'Belum bisa hadir, tapi doa menyertai 🙏'
                    ? 'bg-[#3B6E8C] text-white border-[#3B6E8C] shadow-xs'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                }`}
              >
                Belum bisa hadir, tapi doa menyertai 🙏
              </button>
            </div>
          </div>

          <div>
            <label className="block text-gray-500 mb-1">Berikan ucapan atau doa...</label>
            <textarea 
              rows="3" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis ucapan..." 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3B6E8C] resize-none"
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#3B6E8C] text-white font-sans py-2.5 rounded-md hover:bg-[#2c536c] transition-all font-medium text-xs tracking-wider shadow-sm cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim RSVP'}
          </button>
        </form>
      </div>
    
      {/* MODAL POP-UP SUCCESS (Estetik & Mencegah Alert Bawaan) */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-white/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="bg-white px-6 py-8 rounded-2xl shadow-2xl border border-gray-100 text-center max-w-sm w-full"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[#3B6E8C] font-bold mb-2">Terima Kasih!</h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                Terima kasih, RSVP & ucapan Anda berhasil dikirim.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.section>
  );
}