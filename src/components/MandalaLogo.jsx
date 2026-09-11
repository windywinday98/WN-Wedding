export default function MandalaLogo({ className = "text-white" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 140 140" 
        className="w-28 h-28 lg:w-32 lg:h-32 drop-shadow-md"
      >
        {/* Lingkaran Luar Berpola Putus-putus */}
        <circle cx="70" cy="70" r="64" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.5"/>
        
        {/* Bingkai Lingkaran Ganda */}
        <circle cx="70" cy="70" r="60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
        <circle cx="70" cy="70" r="54" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.6"/>
        
        {/* Kelopak Ornamen Mandala Melingkar */}
        <g fill="currentColor" opacity="0.25">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, index) => (
            <path 
              key={index} 
              d="M70 6 C72.5 18 72.5 28 70 34 C67.5 28 67.5 18 70 6 Z" 
              transform={`rotate(${angle} 70 70)`} 
            />
          ))}
        </g>
        
        {/* Lingkaran Dalam Pemisah */}
        <circle cx="70" cy="70" r="46" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.85"/>
        
        {/* Titik-titik Aksen di dalam Mandala */}
        <g fill="currentColor" opacity="0.6">
          {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle, index) => (
            <circle key={index} cx="70" cy="18" r="1.2" transform={`rotate(${angle} 70 70)`} />
          ))}
        </g>

        {/* Teks Inisial WN di Tengah */}
        <text 
          x="70" 
          y="78" 
          textAnchor="middle" 
          fill="currentColor" 
          fontFamily="serif" 
          fontSize="24" 
          letterSpacing="4" 
          fontWeight="300"
        >
          WN
        </text>
      </svg>
    </div>
  );
}