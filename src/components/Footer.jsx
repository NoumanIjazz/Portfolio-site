import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiCode, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="relative border-t border-cyber-border/30 py-10">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), rgba(124,58,237,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 flex items-center justify-center border border-cyber-cyan/60 rotate-45">
              <FiCode className="text-cyber-cyan text-xs -rotate-45" />
            </div>
            <span className="font-mono font-bold text-sm">
              <span className="text-cyber-cyan">NI</span>
              <span className="text-cyber-muted">.</span>
              <span className="text-white">DEV</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-cyber-muted text-xs font-mono text-center">
            © 2026 <span className="text-white">Muhammad Nouman Ijaz</span> — Built with React.js & ❤️
          </p>

          {/* Social + Back to top */}
          <div className="flex items-center gap-3">
            {[
              { icon: FiGithub, href: 'https://github.com/NoumanIjazz' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/muhammad-nouman-ijaz-188726370' },
              { icon: FiMail, href: 'mailto:Nouman.Ijaz@horizondigital.au' },
            ].map(({ icon: Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-cyber-border/40 flex items-center justify-center text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-all duration-300">
                <Icon size={13} />
              </a>
            ))}

            <Link to="hero" smooth duration={800}
              className="ml-2 w-8 h-8 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan cursor-pointer hover:bg-cyber-cyan/10 transition-all duration-300">
              <FiArrowUp size={13} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
