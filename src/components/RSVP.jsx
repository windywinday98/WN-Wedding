import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Divider from './Divider';

export default function RSVP({ onAddWish }) {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'Siap hadir & ikut merayakan! 🎉',
    message: ''
  });
  
  // State untuk mengunci tombol (mencegah double submit)
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State untuk memunculkan pop-up modal estetik
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Cegah submit ganda jika sedang loading
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    // Jalankan fungsi tambah data ke Supabase dari App.jsx
    await onAddWish(formData);

    // Setelah berhasil: reset form, matikan loading, dan tampilkan pop-up
    setFormData({ name: '', attendance: 'Siap hadir & ikut merayakan! 🎉', message: '' });
    setIsSubmitting(false);
    setShowModal(true);

    // Pop-up akan hilang otomatis setelah 3 detik
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-serif text-xs text-gray-600 mb-1.5 ml-1">Nama Anda</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#F4F7F9] border border-gray-200/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3B6E8C]/50 focus:ring-1 focus:ring-[#3B6E8C]/50 transition-all text-gray-700"
              placeholder="Tuliskan nama Anda"
            />
          </div>

          <div>
            <label className="block font-serif text-xs text-gray-600 mb-1.5 ml-1">Konfirmasi Kehadiran</label>
            <select 
              value={formData.attendance}
              onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
              className="w-full bg-[#F4F7F9] border border-gray-200/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3B6E8C]/50 focus:ring-1 focus:ring-[#3B6E8C]/50 transition-all text-gray-700 appearance-none"
            >
              <option value="Siap hadir & ikut merayakan! 🎉">Siap hadir & ikut merayakan! 🎉</option>
              <option value="Belum bisa hadir, tapi doa menyertai 🙏">Belum bisa hadir, tapi doa menyertai 🙏</option>
            </select>
          </div>

          <div>
            <label className="block font-serif text-xs text-gray-600 mb-1.5 ml-1">Pesan & Doa</label>
            <textarea 
              required
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#F4F7F9] border border-gray-200/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3B6E8C]/50 focus:ring-1 focus:ring-[#3B6E8C]/50 transition-all text-gray-700 resize-none"
              placeholder="Tuliskan doa terbaik untuk kami..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full text-white font-serif tracking-wider text-sm py-3.5 rounded-xl shadow-md transition-all ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#3B6E8C] hover:bg-[#2c536c] active:scale-[0.98]'
            }`}
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
          </button>
        </form>
      </div>

      {/* MODAL POP-UP SUCCESS (Menggantikan Alert Bawaan) */}
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
                RSVP & ucapan tulus Anda telah berhasil dikirimkan.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.section>
  );
}