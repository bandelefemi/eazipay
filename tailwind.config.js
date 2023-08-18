/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // purge: [],
  theme: {
    extend: {
      backgroundImage: {
        'logo-pattern': "url('/assets/backgrounds/side-nav.svg')",
        'wallet-bg': "url('/assets/backgrounds/walletbg.svg')",
        'landing-top': "url('/assets/backgrounds/landingtop.svg')",
        'wave-middle': "url('/assets/backgrounds/wave.svg')",
        'how-it-works': "url('/assets/landing/BG.svg')",
        'free-forever': "url('/assets/landing/free.svg')",
        'contact-bg': "url('/assets/landing/contactbg.svg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
