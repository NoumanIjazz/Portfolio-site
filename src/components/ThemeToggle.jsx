import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`relative w-14 h-7 rounded-full border transition-all duration-300 flex items-center px-1 ${
        isDark
          ? 'bg-cyber-cyan/10 border-cyber-cyan/40'
          : 'bg-amber-100 border-amber-300'
      }`}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label="Toggle theme"
    >
      {/* Track icons */}
      <FiMoon size={10} className={`absolute left-1.5 transition-opacity duration-300 ${isDark ? 'opacity-60 text-cyber-cyan' : 'opacity-20 text-slate-400'}`} />
      <FiSun size={10} className={`absolute right-1.5 transition-opacity duration-300 ${!isDark ? 'opacity-80 text-amber-500' : 'opacity-20 text-slate-400'}`} />

      {/* Thumb */}
      <motion.div
        animate={{ x: isDark ? 0 : 28 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`w-5 h-5 rounded-full shadow-md flex items-center justify-center z-10 ${
          isDark ? 'bg-cyber-cyan' : 'bg-amber-400'
        }`}
      >
        {isDark
          ? <FiMoon size={10} className="text-cyber-bg" />
          : <FiSun size={10} className="text-white" />
        }
      </motion.div>
    </motion.button>
  );
}
