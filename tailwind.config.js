export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        invitato: '#3B6E8C', // Warna Steel Blue utama yang elegan
      }
    },
  },
  plugins: [],
}