module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#800000',
          50: '#fdf2f2',
          100: '#fce4e4',
          400: '#a83232',
          500: '#8a0000',
          600: '#800000',
          700: '#6b0000',
          800: '#4a0000',
          900: '#330000',
        },
        saffron: '#FF9933',
        gold: '#D4AF37',
        cream: {
          DEFAULT: '#FFFDD0',
          50: '#FFFEF2',
          100: '#FFFDD0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(128,0,0,0.08)',
        card: '0 10px 30px -10px rgba(128,0,0,0.18)',
        'gold-glow': '0 0 40px rgba(212,175,55,0.35)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        spinSlow: 'spinSlow 30s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
