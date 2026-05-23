import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  FiGithub, FiLinkedin, FiMail, FiArrowUp,
  FiMapPin, FiPhone, FiExternalLink, FiCode,
} from 'react-icons/fi';
import { SiDjango, SiDocker } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const footerLinks = [
  { label: 'About',          to: 'about' },
  { label: 'Skills',         to: 'skills' },
  { label: 'Experience',     to: 'experience' },
  { label: 'Projects',       to: 'projects' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact',        to: 'contact' },
];

const socials = [
  { icon: FiGithub,   href: 'https://github.com/NoumanIjazz',                              label: 'GitHub',   color: '#e2e8f0' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/muhammad-nouman-ijaz-188726370', label: 'LinkedIn', color: '#0077b5' },
  { icon: FiMail,     href: 'mailto:noumanabbasi629@gmail.com',                            label: 'Email',    color: '#00d4ff' },
];

const techStack = [
  { icon: FiCode,   label: 'React' },
  { icon: SiDjango,  label: 'Django' },
  { icon: FaAws,     label: 'AWS' },
  { icon: SiDocker,  label: 'Docker' },
];

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`relative overflow-hidden ${
      isDark
        ? 'bg-[#060b18] border-t border-[#1e3a5f]/50'
        : 'bg-white border-t border-slate-100'
    }`}>

      {/* Top gradient band */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: isDark
          ? 'linear-gradient(90deg, transparent, #00d4ff 40%, #7c3aed 60%, transparent)'
          : 'linear-gradient(90deg, transparent, #0ea5e9 40%, #7c3aed 60%, transparent)'
        }} />

      {/* Background glow orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-64 pointer-events-none rounded-full"
        style={{ background: isDark
          ? 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }} />
      <div className="absolute top-0 right-0 w-80 h-64 pointer-events-none rounded-full"
        style={{ background: isDark
          ? 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }} />

      {/* ── Main footer grid ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Col 1: Brand ── */}
          <div className="lg:col-span-2">
            <Link to="hero" smooth duration={600} className="cursor-pointer inline-block mb-4">
              <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className={`absolute inset-0 border rounded-sm ${isDark ? 'border-cyber-cyan/50' : 'border-sky-400/60'}`}
                  />
                  <FiCode size={16} className={`z-10 ${isDark ? 'text-cyber-cyan' : 'text-sky-500'}`} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className={`font-mono font-black text-base tracking-wider ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <span className={isDark ? 'text-cyber-cyan' : 'text-sky-500'}>Nouman</span> Ijaz
                  </span>
                  <span className={`font-mono text-[9px] tracking-[0.2em] mt-0.5 ${isDark ? 'text-cyber-muted' : 'text-slate-400'}`}>
                    FULL-STACK DEV · DEVOPS
                  </span>
                </div>
              </motion.div>
            </Link>

            <p className={`text-sm leading-relaxed max-w-xs mb-5 ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>
              Building secure, scalable web applications with modern stacks.
              Certified AWS Cloud Practitioner based in Lahore, Pakistan.
            </p>

            {/* Contact chips */}
            <div className="flex flex-col gap-2">
              {[
                { icon: FiMapPin, text: 'Lahore, Pakistan' },
                { icon: FiMail,   text: 'noumanabbasi629@gmail.com', href: 'mailto:noumanabbasi629@gmail.com' },
                { icon: FiPhone,  text: '+92 308 228 9122',           href: 'tel:+923082289122' },
              ].map(({ icon: Icon, text, href }) => (
                <motion.a
                  key={text}
                  href={href}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-2 text-xs font-mono w-fit ${
                    href
                      ? isDark ? 'text-cyber-muted hover:text-cyber-cyan cursor-pointer' : 'text-slate-400 hover:text-sky-600 cursor-pointer'
                      : isDark ? 'text-cyber-muted' : 'text-slate-400'
                  } transition-colors duration-200`}
                >
                  <Icon size={11} className={isDark ? 'text-cyber-cyan/60' : 'text-sky-400'} />
                  {text}
                </motion.a>
              ))}
            </div>

            {/* Built with stack */}
            <div className="flex items-center gap-2 mt-5">
              <span className={`text-[10px] font-mono tracking-wider ${isDark ? 'text-cyber-muted/60' : 'text-slate-300'}`}>BUILT WITH</span>
              {techStack.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3, scale: 1.15 }}
                  title={label}
                  className={`p-1.5 rounded-lg border ${isDark ? 'border-cyber-border/30 bg-cyber-surface/50 text-cyber-muted hover:text-white' : 'border-slate-100 bg-slate-50 text-slate-400 hover:text-slate-700'} transition-colors cursor-default`}
                >
                  <Icon size={13} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Col 2: Navigation ── */}
          <div>
            <h4 className={`font-mono text-xs tracking-[0.2em] font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-800'}`}>
              NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link, i) => (
                <motion.li key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-70}
                    className={`flex items-center gap-2 text-sm cursor-pointer transition-colors duration-200 w-fit group ${
                      isDark ? 'text-cyber-muted hover:text-cyber-cyan' : 'text-slate-500 hover:text-sky-600'
                    }`}
                  >
                    <span className={`w-1 h-1 rounded-full transition-colors duration-200 ${isDark ? 'bg-cyber-cyan/30 group-hover:bg-cyber-cyan' : 'bg-slate-300 group-hover:bg-sky-500'}`} />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Connect ── */}
          <div>
            <h4 className={`font-mono text-xs tracking-[0.2em] font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-800'}`}>
              CONNECT
            </h4>
            <div className="space-y-3">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-3 text-sm transition-colors duration-200 group ${
                    isDark ? 'text-cyber-muted hover:text-white' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isDark
                      ? 'border-cyber-border/40 bg-cyber-surface/40 group-hover:border-opacity-60'
                      : 'border-slate-100 bg-slate-50 group-hover:shadow-sm'
                  }`}
                    style={{ '--hover-color': color }}
                  >
                    <Icon size={13} style={{ color }} />
                  </div>
                  <span>{label}</span>
                  <FiExternalLink size={10} className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity" />
                </motion.a>
              ))}
            </div>

            {/* Availability pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono ${
                isDark ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400' : 'border-emerald-200 bg-emerald-50 text-emerald-600'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to Opportunities
            </motion.div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className={`border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isDark ? 'border-cyber-border/20' : 'border-slate-100'
        }`}>
          <p className={`text-xs font-mono text-center sm:text-left ${isDark ? 'text-cyber-muted' : 'text-slate-400'}`}>
            © 2026{' '}
            <span className={isDark ? 'text-white' : 'text-slate-700'}>Muhammad Nouman Ijaz</span>
            {' '}— Crafted with React.js & passion
          </p>

          {/* Social icon row */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                title={label}
                className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-200 ${
                  isDark
                    ? 'border-cyber-border/40 text-cyber-muted hover:text-white hover:border-cyber-cyan/50'
                    : 'border-slate-200 text-slate-400 hover:border-sky-300 bg-slate-50 hover:bg-white hover:shadow-sm'
                }`}
              >
                <Icon size={13} style={{ color }} />
              </motion.a>
            ))}

            {/* Back to top */}
            <Link to="hero" smooth duration={800}>
              <motion.div
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`ml-1 w-8 h-8 rounded-xl border flex items-center justify-center cursor-pointer transition-all duration-200 ${
                  isDark
                    ? 'border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg hover:shadow-[0_0_12px_rgba(0,212,255,0.4)]'
                    : 'border-sky-200 text-sky-500 bg-sky-50 hover:bg-sky-500 hover:text-white hover:shadow-md'
                }`}
                title="Back to top"
              >
                <FiArrowUp size={13} />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
