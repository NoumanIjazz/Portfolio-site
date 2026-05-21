import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function SectionHeader({ number, title, subtitle }) {
  const { isDark } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-16"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-mono text-xs tracking-[0.25em] mb-3 ${isDark ? 'text-cyber-cyan' : 'text-sky-500'}`}
      >
        {number}
      </motion.p>
      <h2 className="section-heading">{title}</h2>
      {subtitle && (
        <p className={`text-sm mt-3 max-w-xl mx-auto ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>{subtitle}</p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-24 h-0.5 mx-auto mt-4 origin-center"
        style={{ background: isDark ? 'linear-gradient(90deg, transparent, #00d4ff, transparent)' : 'linear-gradient(90deg, transparent, #0ea5e9, #7c3aed, transparent)' }}
      />
    </motion.div>
  );
}
