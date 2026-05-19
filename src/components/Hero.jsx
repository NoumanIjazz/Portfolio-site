import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';

export default function Hero() {
  const canvasRef = useRef(null);

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
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
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
      // Grid lines
      ctx.strokeStyle = 'rgba(0,212,255,0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }
      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 100) * 0.08;
            ctx.strokeStyle = '#00d4ff';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        });
        p.update();
        p.draw();
      });
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Radial glow center */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)' }} />
      </div>

      {/* Scan line */}
      <div className="scanline" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 border border-cyber-cyan/30 bg-cyber-cyan/5 text-xs font-mono text-cyber-cyan">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                AVAILABLE FOR OPPORTUNITIES
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.p variants={itemVariants} className="font-mono text-cyber-cyan text-sm tracking-widest mb-3">
              &gt; Hello, World! I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-2 glitch-text"
              data-text="Muhammad"
            >
              <span className="text-white">Muhammad</span>
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-6 glitch-text"
              data-text="Nouman Ijaz"
            >
              <span className="text-gradient-mixed">Nouman Ijaz</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-xl sm:text-2xl font-semibold mb-6 h-10">
              <span className="text-cyber-muted">~/</span>
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
                className="text-cyber-cyan font-mono"
              />
              <span className="w-0.5 h-7 bg-cyber-cyan animate-pulse" />
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-cyber-muted text-base leading-relaxed mb-8 max-w-lg">
              Building secure, scalable web applications with modern stacks.
              Certified AWS Cloud Practitioner with deep expertise in Django, React,
              Docker & CI/CD pipelines. Turning complex problems into elegant solutions.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8 mb-8">
              {[
                { value: '1+', label: 'Year Experience' },
                { value: '10+', label: 'Projects Built' },
                { value: '2', label: 'Certifications' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-gradient-cyan">{stat.value}</div>
                  <div className="text-xs text-cyber-muted font-mono tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <Link to="projects" smooth duration={500}>
                <button className="cyber-btn-primary group">
                  <span>View Projects</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
              <a href="/Nouman_Ijaz_CV.pdf" download>
                <button className="cyber-btn-secondary group flex items-center gap-2">
                  <FiDownload size={14} />
                  <span>Download CV</span>
                </button>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="text-cyber-muted text-xs font-mono tracking-wider">CONNECT:</span>
              {[
                { icon: FiGithub, href: 'https://github.com/NoumanIjazz', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/muhammad-nouman-ijaz-188726370', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:Nouman.Ijaz@horizondigital.au', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 border border-cyber-border/50 flex items-center justify-center text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan/60 transition-all duration-300"
                  title={label}
                >
                  <Icon size={16} />
                  <div className="absolute inset-0 bg-cyber-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-6 rounded-full border border-dashed border-cyber-cyan/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-12 rounded-full border border-dashed border-cyber-purple/15"
              />

              {/* Glow rings */}
              <div className="absolute -inset-4 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)' }} />

              {/* Hexagonal frame */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                {/* Corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-cyan" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-cyan" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-cyan" />

                {/* Scan overlay */}
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-10">
                  <motion.div
                    animate={{ y: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    className="w-full h-1/3"
                    style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,212,255,0.06), transparent)' }}
                  />
                </div>

                {/* Profile image */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full h-full rounded-full overflow-hidden border-2 border-cyber-cyan/40"
                  style={{ boxShadow: '0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(0,212,255,0.1), inset 0 0 30px rgba(0,212,255,0.05)' }}
                >
                  <img
                    src="/profile.jpeg"
                    alt="Muhammad Nouman Ijaz"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Color overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-cyber-purple/5" />
                </motion.div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                  className="absolute -right-4 top-8 bg-cyber-surface border border-cyber-cyan/30 px-3 py-2 text-xs font-mono shadow-cyber"
                >
                  <span className="text-cyber-cyan">AWS</span>
                  <span className="text-white"> Certified</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -left-8 bottom-12 bg-cyber-surface border border-cyber-purple/30 px-3 py-2 text-xs font-mono shadow-purple"
                >
                  <span className="text-cyber-purple2">Full-Stack</span>
                  <span className="text-white"> Dev</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  className="absolute -right-6 bottom-16 bg-cyber-surface border border-green-500/30 px-3 py-2 text-xs font-mono"
                >
                  <span className="text-green-400">Open to Work</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-cyber-muted text-xs font-mono tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowDown className="text-cyber-cyan" size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
