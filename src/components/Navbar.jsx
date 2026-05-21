import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { SiReact } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { to: 'about',        label: 'About',        num: '01' },
  { to: 'skills',       label: 'Skills',        num: '02' },
  { to: 'experience',   label: 'Experience',    num: '03' },
  { to: 'projects',     label: 'Projects',      num: '04' },
  { to: 'certifications', label: 'Certs',       num: '05' },
  { to: 'contact',      label: 'Contact',       num: '06' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('');
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Desktop / tablet nav ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? 'bg-[#060b18]/85 backdrop-blur-2xl border-b border-[#1e3a5f]/60 shadow-[0_4px_30px_rgba(0,212,255,0.06)]'
              : 'bg-white/75 backdrop-blur-2xl border-b border-slate-200/80 shadow-[0_4px_24px_rgba(15,23,42,0.06)]'
            : 'bg-transparent'
        }`}
      >
        {/* Thin gradient accent line at very top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
          style={{ background: isDark
            ? 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.6) 40%, rgba(124,58,237,0.6) 60%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(14,165,233,0.5) 40%, rgba(124,58,237,0.5) 60%, transparent 100%)',
            opacity: scrolled ? 1 : 0, transition: 'opacity 0.4s ease'
          }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <Link to="hero" smooth duration={600} className="cursor-pointer group">
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="flex items-center gap-2.5"
              >
                {/* Icon mark */}
                <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <motion.div
                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className={`absolute inset-0 border rounded-sm ${isDark ? 'border-cyber-cyan/50' : 'border-sky-400/60'}`}
                  />
                  <SiReact size={14} className={`z-10 ${isDark ? 'text-cyber-cyan' : 'text-sky-500'}`} />
                </div>

                {/* Wordmark */}
                <div className="flex flex-col leading-none">
                  <span className={`font-mono font-black text-sm tracking-widest ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <span className={isDark ? 'text-cyber-cyan' : 'text-sky-500'}>Nouman</span>
                    {' '}Ijaz
                  </span>
                  <span className={`font-mono text-[9px] tracking-[0.2em] ${isDark ? 'text-cyber-muted' : 'text-slate-400'}`}>
                    FULL-STACK DEV
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* ── Desktop links ── */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  spy
                  offset={-70}
                  onSetActive={() => setActive(link.to)}
                  className={`relative px-3.5 py-2 text-sm font-medium tracking-wide cursor-pointer transition-colors duration-200 rounded-lg select-none ${
                    active === link.to
                      ? isDark ? 'text-cyber-cyan' : 'text-sky-600'
                      : isDark ? 'text-cyber-muted hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {/* Active pill background */}
                  {active === link.to && (
                    <motion.div
                      layoutId="nav-active-bg"
                      className={`absolute inset-0 rounded-lg ${isDark ? 'bg-cyber-cyan/8' : 'bg-sky-50'}`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={`font-mono text-[10px] mr-1 ${isDark ? 'text-cyber-cyan/35' : 'text-sky-400/60'}`}>
                    {link.num}.
                  </span>
                  <span className="relative z-10">{link.label}</span>
                  {/* Active underline */}
                  {active === link.to && (
                    <motion.div
                      layoutId="nav-indicator"
                      className={`absolute bottom-1 left-3 right-3 h-[2px] rounded-full ${isDark ? 'bg-cyber-cyan' : 'bg-sky-500'}`}
                      style={isDark ? { boxShadow: '0 0 6px rgba(0,212,255,0.8)' } : {}}
                    />
                  )}
                </Link>
              ))}

              <div className="ml-2 pl-2 border-l flex items-center gap-2.5 border-l-cyber-border/30">
                <ThemeToggle />

                <motion.a
                  href="/Nouman_Ijaz_CV.pdf"
                  download="Muhammad_Nouman_Ijaz_CV.pdf"
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-1.5 text-xs font-mono font-bold px-4 py-2 rounded-lg transition-all duration-300 ${
                    isDark
                      ? 'bg-cyber-cyan/10 border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]'
                      : 'bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-md hover:shadow-lg hover:from-sky-600 hover:to-violet-600'
                  }`}
                >
                  <FiDownload size={12} />
                  Resume
                </motion.a>
              </div>
            </div>

            {/* ── Mobile controls ── */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(v => !v)}
                className={`p-2 rounded-xl border transition-colors duration-200 ${
                  isDark
                    ? 'border-cyber-border/50 text-cyber-cyan bg-cyber-surface/50'
                    : 'border-slate-200 text-slate-600 bg-white/80'
                }`}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={menuOpen ? 'x' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{    rotate:  90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{  opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`fixed inset-0 z-40 md:hidden ${isDark ? 'bg-black/60' : 'bg-slate-900/40'} backdrop-blur-sm`}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{  x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col ${
                isDark
                  ? 'bg-[#0d1526] border-l border-cyber-border/50'
                  : 'bg-white border-l border-slate-100 shadow-2xl'
              }`}
            >
              {/* Drawer top accent */}
              <div className="h-[2px] w-full"
                style={{ background: 'linear-gradient(90deg, transparent, #0ea5e9, #7c3aed)' }} />

              {/* Header */}
              <div className={`flex items-center justify-between px-6 py-4 border-b ${isDark ? 'border-cyber-border/30' : 'border-slate-100'}`}>
                <div className="flex items-center gap-2">
                  <SiReact size={14} className={isDark ? 'text-cyber-cyan' : 'text-sky-500'} />
                  <span className={`font-mono font-bold text-sm ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <span className={isDark ? 'text-cyber-cyan' : 'text-sky-500'}>Nouman</span> Ijaz
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMenuOpen(false)}
                  className={`p-1.5 rounded-lg ${isDark ? 'text-cyber-muted hover:text-white' : 'text-slate-400 hover:text-slate-700'}`}
                >
                  <FiX size={18} />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.to}
                      smooth
                      duration={500}
                      offset={-70}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl mb-1 cursor-pointer transition-all duration-200 ${
                        active === link.to
                          ? isDark
                            ? 'bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20'
                            : 'bg-sky-50 text-sky-600 border border-sky-100'
                          : isDark
                            ? 'text-cyber-muted hover:text-white hover:bg-cyber-surface'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`font-mono text-[10px] w-5 ${isDark ? 'text-cyber-cyan/50' : 'text-sky-400'}`}>
                        {link.num}
                      </span>
                      <span className="font-medium">{link.label}</span>
                      {active === link.to && (
                        <span className={`ml-auto w-1.5 h-1.5 rounded-full ${isDark ? 'bg-cyber-cyan' : 'bg-sky-500'}`} />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer CTA */}
              <div className={`px-4 pb-8 pt-4 border-t ${isDark ? 'border-cyber-border/30' : 'border-slate-100'}`}>
                <motion.a
                  href="/Nouman_Ijaz_CV.pdf"
                  download="Muhammad_Nouman_Ijaz_CV.pdf"
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-mono font-bold text-sm transition-all duration-300 ${
                    isDark
                      ? 'bg-cyber-cyan/10 border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg'
                      : 'bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-md hover:shadow-lg'
                  }`}
                >
                  <FiDownload size={14} />
                  Download Resume
                </motion.a>

                {/* Social quick links */}
                <div className="flex justify-center gap-3 mt-4">
                  {[
                    { href: 'https://github.com/NoumanIjazz', label: 'GitHub' },
                    { href: 'https://www.linkedin.com/in/muhammad-nouman-ijaz-188726370', label: 'LinkedIn' },
                    { href: 'mailto:noumanabbasi629@gmail.com', label: 'Email' },
                  ].map(({ href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className={`text-[10px] font-mono px-3 py-1.5 rounded-lg border transition-colors ${
                        isDark ? 'border-cyber-border/40 text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan/40' : 'border-slate-200 text-slate-400 hover:text-sky-600 hover:border-sky-200'
                      }`}
                    >{label}</a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
