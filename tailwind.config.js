/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        cyber: {
          bg: '#060b18',
          surface: '#0d1526',
          card: '#111d35',
          border: '#1e3a5f',
          cyan: '#00d4ff',
          cyan2: '#00b8e6',
          purple: '#7c3aed',
          purple2: '#9f67ff',
          text: '#e2e8f0',
          muted: '#94a3b8',
          accent: '#38bdf8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.7), 0 0 80px rgba(0, 212, 255, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'cyber-grid': `linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)`,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.1) 50%, transparent 100%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(0,212,255,0.3), 0 0 40px rgba(0,212,255,0.1)',
        'cyber-lg': '0 0 40px rgba(0,212,255,0.4), 0 0 80px rgba(0,212,255,0.2)',
        'purple': '0 0 20px rgba(124,58,237,0.4), 0 0 40px rgba(124,58,237,0.2)',
        'card': '0 4px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
