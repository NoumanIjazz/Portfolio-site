import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiMapPin, FiMail, FiPhone, FiCalendar, FiAward, FiGlobe } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const personalInfo = [
  { icon: FiCalendar, label: 'Date of Birth', value: '28 Feb 2000' },
  { icon: FiMapPin, label: 'Location', value: 'Lahore, Pakistan' },
  { icon: FiMail, label: 'Email', value: 'noumanabbasi629@gmail.com' },
  { icon: FiGlobe, label: 'Nationality', value: 'Pakistani' },
  { icon: FiAward, label: 'University', value: 'COMSATS University Islamabad' },
  { icon: FiAward, label: 'Degree', value: 'BS Computer Science – 3.41 GPA' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { isDark } = useTheme();

  return (
    <section id="about" className={`relative py-24 overflow-hidden ${isDark ? '' : 'bg-white'}`}>
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: isDark ? 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: isDark ? 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)', filter: 'blur(35px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.3em' }}
            animate={inView ? { opacity: 1, letterSpacing: '0.2em' } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`font-mono text-xs tracking-widest mb-2 ${isDark ? 'text-cyber-cyan' : 'text-sky-500'}`}
          >01 / ABOUT</motion.p>
          <h2 className="section-heading">Who Am I?</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '6rem' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px mx-auto mt-4"
            style={{ background: isDark ? 'linear-gradient(90deg, transparent, #00d4ff, transparent)' : 'linear-gradient(90deg, transparent, #0ea5e9, transparent)' }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cyber-card p-8 h-full relative overflow-hidden">
              {!isDark && (
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: 'linear-gradient(90deg, #0ea5e9, #7c3aed)' }} />
              )}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 border flex items-center justify-center rounded-lg ${isDark ? 'border-cyber-cyan/50 bg-cyber-cyan/5' : 'border-sky-200 bg-sky-50'}`}>
                  <FiUser className={isDark ? 'text-cyber-cyan' : 'text-sky-500'} size={14} />
                </div>
                <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-800'}`}>Professional Summary</h3>
              </div>

              <p className={`leading-relaxed mb-5 text-sm ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>
                I&apos;m a <span className={`font-semibold ${isDark ? 'text-cyber-cyan' : 'text-sky-600'}`}>Full-Stack Software Engineer & DevOps Engineer</span> with
                a passion for building secure, scalable, and high-performance web applications.
                Currently working at <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>Horizon Digital Pakistan</span> where I architect
                and deploy production-grade systems.
              </p>

              <p className={`leading-relaxed mb-5 text-sm ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>
                My expertise spans the full development lifecycle — from crafting clean, maintainable
                backend APIs with <span className={`font-semibold ${isDark ? 'text-cyber-purple2' : 'text-violet-600'}`}>Django & DRF</span> and
                dynamic UIs with <span className={`font-semibold ${isDark ? 'text-cyber-cyan' : 'text-sky-600'}`}>React.js & TypeScript</span>,
                to containerizing workloads with <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-700'}`}>Docker</span> and
                automating CI/CD pipelines via <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-700'}`}>GitHub Actions</span>.
              </p>

              <p className={`leading-relaxed text-sm ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>
                As a <span className="text-amber-500 font-semibold">Certified AWS Cloud Practitioner</span>, I design
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
            <h3 className={`font-bold text-lg mb-6 ${isDark ? 'text-white' : 'text-slate-800'}`}>Personal Details</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {personalInfo.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-start gap-3 p-4 border rounded-xl transition-all duration-200 ${isDark ? 'border-cyber-border/40 bg-cyber-surface/50 hover:border-cyber-cyan/30' : 'border-slate-100 bg-slate-50 hover:border-sky-200 hover:shadow-sm'}`}
                >
                  <div className={`mt-0.5 p-1.5 border rounded-lg ${isDark ? 'border-cyber-cyan/30 bg-cyber-cyan/5' : 'border-sky-100 bg-sky-50'}`}>
                    <Icon className={isDark ? 'text-cyber-cyan' : 'text-sky-500'} size={12} />
                  </div>
                  <div>
                    <div className={`text-xs font-mono tracking-wider mb-0.5 ${isDark ? 'text-cyber-muted' : 'text-slate-400'}`}>{label}</div>
                    <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-700'}`}>{value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Language skills */}
            <div className="cyber-card p-6 mt-4">
              <h4 className={`font-semibold mb-4 text-sm flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                <FiGlobe className={isDark ? 'text-cyber-cyan' : 'text-sky-500'} size={14} />
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
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-700'}`}>{lang}</span>
                      <span className={`font-mono ${isDark ? 'text-cyber-cyan' : 'text-sky-500'}`}>{level}</span>
                    </div>
                    <div className={`h-1.5 overflow-hidden rounded-full ${isDark ? 'bg-cyber-border/40' : 'bg-slate-100'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${pct}%` } : {}}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
                        className="h-full rounded-full"
                        style={{ background: isDark ? 'linear-gradient(90deg, #00d4ff, #7c3aed)' : 'linear-gradient(90deg, #0ea5e9, #7c3aed)' }}
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
