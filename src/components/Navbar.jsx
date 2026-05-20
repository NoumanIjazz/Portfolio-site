import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';

const navLinks = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'certifications', label: 'Certs' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cyber-bg/90 backdrop-blur-xl border-b border-cyber-border/50 shadow-cyber'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="hero" smooth duration={500} className="cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="absolute inset-0 border border-cyber-cyan/60 rotate-45" />
                  <FiCode className="text-cyber-cyan text-sm z-10" />
                </div>
                <span className="font-mono font-bold text-sm tracking-wider">
                  <span className="text-cyber-cyan">Nouman</span>
                  <span className="text-cyber-muted"> </span>
                  <span className="text-white">Ijaz</span>
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  spy
                  onSetActive={() => setActive(link.to)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wider cursor-pointer transition-all duration-300 group ${
                    active === link.to ? 'text-cyber-cyan' : 'text-cyber-muted hover:text-white'
                  }`}
                >
                  <span className="font-mono text-cyber-cyan/40 text-xs mr-1">0{i + 1}.</span>
                  {link.label}
                  {active === link.to && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-px bg-cyber-cyan"
                    />
                  )}
                </Link>
              ))}

              <a
                href="/Nouman_Ijaz_CV.pdf"
                download="Muhammad_Nouman_Ijaz_CV.pdf"
                className="ml-4 cyber-btn-primary text-xs px-4 py-2"
              >
                <span className="font-mono">Download CV</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-cyber-cyan border border-cyber-border/50"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-cyber-bg/95 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-64 bg-cyber-surface border-l border-cyber-border/50 flex flex-col justify-center px-8 gap-4">
              {navLinks.map((link, i) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium text-cyber-text hover:text-cyber-cyan transition-colors cursor-pointer py-3 border-b border-cyber-border/30"
                >
                  <span className="font-mono text-cyber-cyan/50 text-xs">0{i + 1}.</span>
                  {link.label}
                </Link>
              ))}
              <a
                href="/Nouman_Ijaz_CV.pdf"
                download="Muhammad_Nouman_Ijaz_CV.pdf"
                className="mt-4 cyber-btn-primary text-center text-xs"
                onClick={() => setMenuOpen(false)}
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
