import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiMapPin, FiMail, FiPhone, FiCalendar, FiAward, FiGlobe } from 'react-icons/fi';

const personalInfo = [
  { icon: FiCalendar, label: 'Date of Birth', value: '28 Feb 2000' },
  { icon: FiMapPin, label: 'Location', value: 'Lahore, Pakistan' },
  { icon: FiMail, label: 'Email', value: 'Nouman.Ijaz@horizondigital.au' },
  { icon: FiGlobe, label: 'Nationality', value: 'Pakistani' },
  { icon: FiAward, label: 'University', value: 'COMSATS University, Vehari' },
  { icon: FiAward, label: 'Degree', value: 'BS Computer Science – 3.41 GPA' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-cyber-cyan text-xs tracking-widest mb-2">01 / ABOUT</p>
          <h2 className="section-heading">Who Am I?</h2>
          <div className="w-24 h-px mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="cyber-card p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border border-cyber-cyan/50 flex items-center justify-center">
                  <FiUser className="text-cyber-cyan" size={14} />
                </div>
                <h3 className="text-white font-bold text-lg">Professional Summary</h3>
              </div>

              <p className="text-cyber-muted leading-relaxed mb-5 text-sm">
                I&apos;m a <span className="text-cyber-cyan font-semibold">Versatile Full-Stack Developer & DevOps Engineer</span> with
                a passion for building secure, scalable, and high-performance web applications.
                Currently working at <span className="text-white font-semibold">Horizon Digital Pakistan</span> where I architect
                and deploy production-grade systems.
              </p>

              <p className="text-cyber-muted leading-relaxed mb-5 text-sm">
                My expertise spans the full development lifecycle — from crafting clean, maintainable
                backend APIs with <span className="text-cyber-purple2 font-semibold">Django & DRF</span> and
                dynamic UIs with <span className="text-cyber-cyan font-semibold">React.js & TypeScript</span>,
                to containerizing workloads with <span className="text-white font-semibold">Docker</span> and
                automating CI/CD pipelines via <span className="text-white font-semibold">GitHub Actions</span>.
              </p>

              <p className="text-cyber-muted leading-relaxed text-sm">
                As a <span className="text-yellow-400 font-semibold">Certified AWS Cloud Practitioner</span>, I design
                cloud-native architectures that balance performance with cost-efficiency.
                I thrive in agile environments where I can bridge the gap between development and operations,
                delivering software that solves real-world problems.
              </p>

              {/* Values */}
              <div className="mt-8 flex flex-wrap gap-2">
                {['Clean Code', 'Scalable Architecture', 'Agile', 'Cloud-Native', 'CI/CD', 'Security First'].map(v => (
                  <span key={v} className="tech-tag">{v}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Info grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-white font-bold text-lg mb-6">Personal Details</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {personalInfo.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(0,212,255,0.4)' }}
                  className="flex items-start gap-3 p-4 border border-cyber-border/40 bg-cyber-surface/50"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                >
                  <div className="mt-0.5 p-1.5 border border-cyber-cyan/30 bg-cyber-cyan/5">
                    <Icon className="text-cyber-cyan" size={12} />
                  </div>
                  <div>
                    <div className="text-cyber-muted text-xs font-mono tracking-wider mb-0.5">{label}</div>
                    <div className="text-white text-sm font-medium">{value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Language skills */}
            <div className="cyber-card p-6 mt-4">
              <h4 className="text-white font-semibold mb-4 text-sm flex items-center gap-2">
                <FiGlobe className="text-cyber-cyan" size={14} />
                Language Proficiency
              </h4>
              <div className="space-y-3">
                {[
                  { lang: 'English', level: 'C2 Proficient', pct: 92 },
                  { lang: 'Urdu', level: 'Native', pct: 100 },
                  { lang: 'Punjabi', level: 'Native', pct: 100 },
                ].map(({ lang, level, pct }) => (
                  <div key={lang}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white font-medium">{lang}</span>
                      <span className="text-cyber-cyan font-mono">{level}</span>
                    </div>
                    <div className="h-1.5 bg-cyber-border/40 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${pct}%` } : {}}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
                        className="h-full"
                        style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
