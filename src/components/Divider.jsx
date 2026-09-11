export default function Divider({ className = "text-invitato" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 300 40" 
      className={`w-44 mx-auto mb-6 fill-current transition-colors ${className}`}
    >
      {/* Garis Kiri yang meruncing */}
      <path d="M10,20 Q40,19.5 75,19 L80,16 L85,20 L80,24 L75,21 Q40,20.5 10,20 Z" />
      
      {/* Titik Kiri */}
      <circle cx="95" cy="20" r="2.5" />
      
      {/* Oval Kiri */}
      <ellipse cx="115" cy="20" rx="12" ry="5.5" />
      
      {/* Bintang / Diamond Tengah */}
      <path d="M150,4 Q150,20 166,20 Q150,20 150,36 Q150,20 134,20 Q150,20 150,4 Z" />
      
      {/* Oval Kanan */}
      <ellipse cx="185" cy="20" rx="12" ry="5.5" />
      
      {/* Titik Kanan */}
      <circle cx="205" cy="20" r="2.5" />
      
      {/* Garis Kanan yang meruncing */}
      <path d="M290,20 Q260,19.5 225,19 L220,16 L215,20 L220,24 L225,21 Q260,20.5 290,20 Z" />
    </svg>
  );
}