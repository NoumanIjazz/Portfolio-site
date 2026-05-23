import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#00d4ff' : '#7c3aed';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(0,212,255,0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
      for (let y = 0; y < canvas.height; y += 50) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 100) * 0.08;
            ctx.strokeStyle = '#00d4ff';
            ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
            ctx.restore();
          }
        });
        p.update(); p.draw();
      });
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animFrame); window.removeEventListener('resize', resize); };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/NoumanIjazz', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/muhammad-nouman-ijaz-188726370', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:noumanabbasi629@gmail.com', label: 'Email' },
  ];

  const stats = [
    { value: '1+', label: 'Year Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: '2', label: 'Certifications' },
  ];

  return (
    <section id="hero" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isDark ? 'bg-cyber-bg' : 'bg-gradient-to-br from-slate-50 via-sky-50/40 to-violet-50/30'}`}>
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Light mode decorative orbs */}
      {!isDark && (
        <>
          <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          <div className="absolute bottom-32 left-1/4 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)', filter: 'blur(35px)' }} />
          <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)', filter: 'blur(30px)' }} />
        </>
      )}

      {/* Dark mode glow */}
      {isDark && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)' }} />
        </div>
      )}

      {isDark && <div className="scanline" />}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 w-full min-w-0"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.04 }}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-full border ${
                  isDark ? 'border-cyber-cyan/30 bg-cyber-cyan/5 text-cyber-cyan' : 'border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE FOR OPPORTUNITIES
              </motion.div>
            </motion.div>

            {/* Greeting */}
            <motion.p variants={itemVariants} className={`font-mono text-sm tracking-widest mb-3 ${isDark ? 'text-cyber-cyan' : 'text-sky-600'}`}>
              &gt; Hello, World! I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-[2.4rem] sm:text-5xl lg:text-7xl font-black leading-tight mb-2 glitch-text break-words"
              data-text="Muhammad"
            >
              <span className={isDark ? 'text-white' : 'text-slate-800'}>Muhammad</span>
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="text-[2.4rem] sm:text-5xl lg:text-7xl font-black leading-tight mb-6 glitch-text break-words"
              data-text="Nouman Ijaz"
            >
              <span className="text-gradient-mixed">Nouman Ijaz</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-lg sm:text-2xl font-semibold mb-6 h-10">
              <span className={isDark ? 'text-cyber-muted' : 'text-slate-400'}>~/</span>
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer', 2000,
                  'DevOps Engineer', 2000,
                  'Cloud Architect (AWS)', 2000,
                  'Backend Engineer (Django)', 2000,
                  'React.js Developer', 2000,
                  'CI/CD Specialist', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className={`font-mono ${isDark ? 'text-cyber-cyan' : 'text-sky-600 font-bold'}`}
              />
              <span className={`w-0.5 h-7 cursor-blink ${isDark ? 'bg-cyber-cyan' : 'bg-sky-500'}`} />
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className={`text-base leading-relaxed mb-8 max-w-lg ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>
              Building secure, scalable web applications with modern stacks.
              Certified AWS Cloud Practitioner with deep expertise in Django, React,
              Docker & CI/CD pipelines. Turning complex problems into elegant solutions.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className={`relative text-center px-2 py-4 rounded-2xl overflow-hidden ${
                    isDark
                      ? 'bg-cyber-surface/60 border border-cyber-border/40'
                      : 'bg-white border border-slate-100 shadow-md'
                  }`}
                  style={isDark ? { boxShadow: 'inset 0 1px 0 rgba(0,212,255,0.08)' } : {}}
                >
                  {/* top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                    style={{ background: i === 0 ? 'linear-gradient(90deg,#00d4ff,#00b8e6)' : i === 1 ? 'linear-gradient(90deg,#7c3aed,#9f67ff)' : 'linear-gradient(90deg,#10b981,#34d399)' }} />
                  <div className={`text-2xl font-black mb-0.5 ${isDark ? '' : ''}`}
                    style={{ color: i === 0 ? '#00d4ff' : i === 1 ? '#9f67ff' : '#10b981' }}>
                    {stat.value}
                  </div>
                  <div className={`text-[10px] font-mono tracking-wide leading-tight ${isDark ? 'text-cyber-muted' : 'text-slate-400'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col xs:flex-row gap-3 mb-10">
              <Link to="projects" smooth duration={500} className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full cyber-btn-primary group justify-center"
                >
                  <span>View Projects</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >→</motion.span>
                </motion.button>
              </Link>
              <a href="/Nouman_Ijaz_CV.pdf" download="Muhammad_Nouman_Ijaz_CV.pdf" className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full cyber-btn-secondary group flex items-center justify-center gap-2"
                >
                  <FiDownload size={14} />
                  <span>Download CV</span>
                </motion.button>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className={`text-xs font-mono tracking-wider ${isDark ? 'text-cyber-muted' : 'text-slate-400'}`}>CONNECT:</span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`group relative w-10 h-10 border flex items-center justify-center transition-all duration-300 rounded-xl ${
                    isDark
                      ? 'border-cyber-border/50 text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan/60 hover:bg-cyber-cyan/5'
                      : 'border-slate-200 text-slate-400 hover:text-sky-500 hover:border-sky-300 bg-white/80 hover:bg-sky-50 shadow-sm backdrop-blur-sm'
                  }`}
                  title={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className={`absolute -inset-6 rounded-full border border-dashed ${isDark ? 'border-cyber-cyan/20' : 'border-sky-300/40'}`}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className={`absolute -inset-12 rounded-full border border-dashed ${isDark ? 'border-cyber-purple/15' : 'border-violet-300/30'}`}
              />

              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-full pointer-events-none"
                style={{ background: isDark
                  ? 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(124,58,237,0.08) 50%, transparent 70%)'
                }} />

              {/* Photo frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${isDark ? 'border-cyber-cyan' : 'border-sky-400'}`} />
                <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${isDark ? 'border-cyber-cyan' : 'border-sky-400'}`} />
                <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 ${isDark ? 'border-cyber-cyan' : 'border-sky-400'}`} />
                <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${isDark ? 'border-cyber-cyan' : 'border-sky-400'}`} />

                {isDark && (
                  <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-10">
                    <motion.div
                      animate={{ y: ['0%', '100%', '0%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                      className="w-full h-1/3"
                      style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,212,255,0.06), transparent)' }}
                    />
                  </div>
                )}

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className={`w-full h-full rounded-full overflow-hidden border-2 ${isDark ? 'border-cyber-cyan/40' : 'border-sky-300/60'}`}
                  style={{
                    boxShadow: isDark
                      ? '0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(0,212,255,0.1), inset 0 0 30px rgba(0,212,255,0.05)'
                      : '0 20px 60px rgba(14,165,233,0.2), 0 8px 24px rgba(124,58,237,0.1)'
                  }}
                >
                  <img
                    src="/profile.jpeg"
                    alt="Muhammad Nouman Ijaz"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    decoding="sync"
                  />
                </motion.div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                  whileHover={{ scale: 1.08 }}
                  className={`absolute -right-4 top-8 px-3 py-2 text-xs font-mono border shadow-lg ${
                    isDark ? 'bg-cyber-surface border-cyber-cyan/30 shadow-cyber' : 'bg-white/90 border-sky-200 backdrop-blur-sm rounded-xl'
                  }`}
                >
                  <span className={isDark ? 'text-cyber-cyan' : 'text-sky-600'}>AWS</span>
                  <span className={isDark ? 'text-white' : 'text-slate-700'}> Certified</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  whileHover={{ scale: 1.08 }}
                  className={`absolute -left-8 bottom-12 px-3 py-2 text-xs font-mono border shadow-lg ${
                    isDark ? 'bg-cyber-surface border-cyber-purple/30 shadow-purple' : 'bg-white/90 border-violet-200 backdrop-blur-sm rounded-xl'
                  }`}
                >
                  <span className={isDark ? 'text-cyber-purple2' : 'text-violet-600'}>Full-Stack</span>
                  <span className={isDark ? 'text-white' : 'text-slate-700'}> Dev</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  whileHover={{ scale: 1.08 }}
                  className={`absolute -right-6 bottom-16 px-3 py-2 text-xs font-mono border shadow-lg ${
                    isDark ? 'bg-cyber-surface border-green-500/30' : 'bg-white/90 border-emerald-200 backdrop-blur-sm rounded-xl'
                  }`}
                >
                  <span className="text-emerald-500 font-semibold">Open to Work</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className={`text-xs font-mono tracking-widest ${isDark ? 'text-cyber-muted' : 'text-slate-400'}`}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowDown className={isDark ? 'text-cyber-cyan' : 'text-sky-500'} size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
