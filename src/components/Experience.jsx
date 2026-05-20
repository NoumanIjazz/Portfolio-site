import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';
import { SiDjango, SiReact, SiDocker } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const experiences = [
  {
    role: 'Web Developer',
    company: 'Horizon Digital Pakistan',
    location: 'Lahore, Pakistan',
    period: 'Nov 2025 – Present',
    type: 'Full-Time',
    current: true,
    color: '#00d4ff',
    description: [
      'Developed and maintained REST APIs using Django & Django REST Framework (DRF) with secure JWT authentication.',
      'Built responsive frontend components with React.js, integrating seamlessly with backend services.',
      'Integrated frontend-backend communication using secure authentication mechanisms (JWT, OAuth).',
      'Deployed and managed production applications on AWS EC2 with Git-based CI/CD workflows.',
      'Optimized application performance, resolved critical bugs, and collaborated in agile sprint cycles.',
    ],
    tech: ['Python', 'Django', 'DRF', 'React.js', 'AWS EC2', 'Git', 'REST APIs', 'JWT'],
    techIcons: [SiDjango, SiReact, FaAws],
  },
];

const education = [
  {
    degree: 'BS Computer Science',
    institution: 'COMSATS University Islamabad',
    period: '2021 – 2025',
    gpa: '3.41 / 4.0',
    location: 'Vehari, Pakistan',
    color: '#7c3aed',
    highlights: [
      'Specialized in Web Development, Cloud Computing & Software Engineering',
      'Completed multiple advanced projects in Full-Stack Development',
      'Participated in national programming competitions',
      'Final year thesis on Cloud-Native Architecture patterns',
    ],
  },
  {
    degree: 'Intermediate (Pre-Engineering)',
    institution: 'Bahawalpur Board',
    period: '2019 – 2021',
    location: 'Bahawalpur, Pakistan',
    color: '#10b981',
    highlights: [
      'Mathematics, Physics & Computer Science',
      'Foundation in analytical problem-solving',
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-cyber-cyan text-xs tracking-widest mb-2">03 / EXPERIENCE</p>
          <h2 className="section-heading">Career & Education</h2>
          <div className="w-24 h-px mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Work Experience */}
          <div className="lg:col-span-3">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 text-white font-bold mb-8"
            >
              <FiBriefcase className="text-cyber-cyan" />
              <span>Work Experience</span>
              <div className="flex-1 h-px bg-cyber-border/40 ml-3" />
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, #00d4ff, #7c3aed, transparent)' }} />

              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 + 0.2 }}
                  className="relative pl-12 mb-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-5 w-5 h-5 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-3 h-3 border-2 rounded-full" style={{ borderColor: exp.color, background: '#060b18' }} />
                    {exp.current && (
                      <div className="absolute w-5 h-5 rounded-full animate-ping opacity-30" style={{ background: exp.color }} />
                    )}
                  </div>

                  <div className="cyber-card p-6 hover:border-cyber-cyan/30 transition-all duration-300">
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-bold text-lg">{exp.role}</h4>
                          {exp.current && (
                            <span className="flex items-center gap-1 px-2 py-0.5 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                              CURRENT
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm" style={{ color: exp.color }}>
                          <FiBriefcase size={12} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-cyber-muted text-xs font-mono mb-1">
                          <FiCalendar size={10} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 text-cyber-muted text-xs">
                          <FiMapPin size={10} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5">
                      {exp.description.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-cyber-muted">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs font-mono border"
                          style={{
                            borderColor: `${exp.color}30`,
                            color: exp.color,
                            background: `${exp.color}08`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-white font-bold mb-8"
            >
              <span>🎓</span>
              <span>Education</span>
              <div className="flex-1 h-px bg-cyber-border/40 ml-3" />
            </motion.h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, #7c3aed, #10b981, transparent)' }} />

              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 + 0.3 }}
                  className="relative pl-12 mb-8"
                >
                  <div className="absolute left-2 top-4 w-5 h-5 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-3 h-3 border-2 rounded-full rotate-45" style={{ borderColor: edu.color, background: '#060b18' }} />
                  </div>

                  <div className="cyber-card p-5">
                    <h4 className="text-white font-bold mb-1">{edu.degree}</h4>
                    <p className="text-sm font-medium mb-2" style={{ color: edu.color }}>{edu.institution}</p>

                    <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-cyber-muted font-mono">
                      <div className="flex items-center gap-1">
                        <FiCalendar size={10} />
                        {edu.period}
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">★</span>
                          GPA: <span className="text-white font-bold ml-1">{edu.gpa}</span>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-1.5">
                      {edu.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-cyber-muted">
                          <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: edu.color }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
