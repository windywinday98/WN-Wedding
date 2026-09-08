import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';

export default function RSVP({ onAddWish }) {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('Siap hadir & ikut merayakan! 🎉');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      alert('Mohon isi nama dan ucapan terlebih dahulu.');
      return;
    }

    setIsSubmitting(true);

    // Kirim langsung ke tabel wishes di Supabase
    const { error } = await supabase
      .from('wishes')
      .insert([{ name, attendance, message }]);

    setIsSubmitting(false);

    if (error) {
      console.error('Gagal mengirim ucapan:', error);
      alert('Terjadi kesalahan saat mengirim ucapan. Silakan coba lagi.');
    } else {
      // Panggil fungsi pembantu dari App.jsx untuk memperbarui daftar di layar
      onAddWish({ name, attendance, message });
      setName('');
      setMessage('');
      alert('Terima kasih! RSVP & ucapan Anda berhasil dikirim.');
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-6 bg-[#E8F0F6] border-b border-gray-100"
    >
      <div className="max-w-sm mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <h3 className="font-serif text-2xl text-center text-invitato font-bold mb-2">RSVP & Ucapan</h3>
        <p className="text-[11px] text-center text-gray-500 mb-6 font-sans">Berikan konfirmasi kehadiran dan doa terbaik Anda</p>
        
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
          <div>
            <label className="block text-gray-500 mb-1">Nama Anda</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama..." 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-invitato"
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
                    ? 'bg-invitato text-white border-invitato shadow-xs'
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
                    ? 'bg-invitato text-white border-invitato shadow-xs'
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-invitato resize-none"
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-invitato text-white font-sans py-2.5 rounded-md hover:bg-invitato/90 transition-all font-medium text-xs tracking-wider shadow-sm cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim RSVP'}
          </button>
        </form>
      </div>
    </motion.section>
  );
}