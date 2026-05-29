import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiAward, FiCalendar, FiShield, FiCheckCircle, FiGlobe } from 'react-icons/fi';
import { FaAws } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const certifications = [
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issued: 'May 2, 2026',
    expires: 'May 2, 2029',
    credentialId: '6617c2f9-1583-431d-82af-a5dd5394800d',
    verifyUrl: 'https://www.credly.com/badges/6617c2f9-1583-431d-82af-a5dd5394800d/public_url',
    color: '#f59e0b',
    icon: FaAws,
    iconColor: '#f59e0b',
    badge: '☁️',
    highlights: [
      'Certified AWS Cloud Practitioner with validated foundational knowledge of global cloud infrastructure & core AWS services',
      'Skilled in strategic AI/ML and Generative AI (GenAI) integration using appropriate AWS technologies',
      'Adept at implementing operational excellence and cloud cost-optimization strategies',
      'Committed to cloud governance best practices and responsible AI deployment in enterprise cloud-native environments',
    ],
    tags: ['Cloud Computing', 'AWS Services', 'Security & Compliance', 'AI/ML on AWS', 'Cost Optimization'],
  },
  {
    id: 2,
    title: 'English Works! Program',
    issuer: 'U.S. Embassy — Regional English Language Office (RELO)',
    issued: 'February 2025',
    expires: 'Lifetime',
    credentialId: 'EW-RELO-PKI-2025',
    verifyUrl: 'https://pk.usembassy.gov/education-culture/',
    color: '#10b981',
    icon: FiGlobe,
    iconColor: '#10b981',
    badge: '🌐',
    highlights: [
      'Completed 240 hours of intensive Business English & 21st Century Employability Skills training sponsored by the U.S. Embassy Regional English Language Office (RELO), Islamabad',
      'Developed cross-cultural communication competencies essential for global professional environments — enabling effective collaboration with international clients and distributed teams',
      'Mastered workplace communication frameworks: professional writing, presentations, negotiation language, and virtual team dynamics aligned with U.S. Embassy standards',
      'Sponsored by COMSATS University Islamabad, Vehari campus, and certified by Public Affairs Officer Sandeep K. Paul, U.S. Consulate General, Lahore',
    ],
    tags: ['Business English', 'Cross-Cultural Communication', 'Employability Skills', 'U.S. Embassy', 'Professional Development'],
  },
  {
    id: 3,
    title: 'Claude Code in Action',
    issuer: 'Anthropic / Skilljar',
    issued: 'May 7, 2026',
    expires: 'Ongoing',
    credentialId: '9q5oyuuxa2a3',
    verifyUrl: 'https://verify.skilljar.com/c/9q5oyuuxa2a3',
    color: '#00d4ff',
    icon: FiShield,
    iconColor: '#00d4ff',
    badge: '🤖',
    highlights: [
      'Certified in Claude Code in Action — advanced proficiency in Anthropic\'s AI-native engineering tools',
      'Expertise in integrating Claude\'s CLI and agentic capabilities to automate complex coding tasks',
      'Adept at utilizing state-of-the-art LLM reasoning to enhance developer productivity',
      'Staying at the forefront of AI-assisted engineering bridging traditional development and autonomous agentic systems',
    ],
    tags: ['AI Engineering', 'Claude CLI', 'Agentic Systems', 'LLM Integration', 'Automation'],
  },
];

const trainings = [
  {
    title: 'HTML & CSS Fundamentals',
    issuer: 'Online Certification Course',
    period: 'Mar 2024',
    color: '#7c3aed',
    icon: '💻',
  },
];

function CertCard({ cert, index, inView, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative group"
    >
      <div className="cyber-card p-8 h-full relative hover:shadow-xl transition-all duration-300">
        {/* Top gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
          style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }} />

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`relative w-16 h-16 flex items-center justify-center border-2 flex-shrink-0 rounded-xl`}
              style={{ borderColor: cert.color, background: `${cert.color}10` }}>
              <span className="text-2xl">{cert.badge}</span>
              <div className={`absolute -top-1 -right-1 w-4 h-4 border-2 border-green-400 rounded-full flex items-center justify-center ${isDark ? 'bg-cyber-bg' : 'bg-white'}`}>
                <FiCheckCircle size={8} className="text-green-500" />
              </div>
            </div>
            <div>
              <h3 className={`font-black text-xl leading-tight mb-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>{cert.title}</h3>
              <p className="font-semibold text-sm" style={{ color: cert.color }}>{cert.issuer}</p>
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className={`flex flex-wrap gap-4 mb-6 pb-6 border-b ${isDark ? 'border-cyber-border/30' : 'border-slate-100'}`}>
          <div className={`flex items-center gap-2 text-xs font-mono ${isDark ? 'text-cyber-muted' : 'text-slate-400'}`}>
            <FiCalendar size={10} className="text-green-500" />
            <span>Issued: <span className={isDark ? 'text-white' : 'text-slate-700'}>{cert.issued}</span></span>
          </div>
          <div className={`flex items-center gap-2 text-xs font-mono ${isDark ? 'text-cyber-muted' : 'text-slate-400'}`}>
            <FiCalendar size={10} style={{ color: cert.color }} />
            <span>Valid until: <span style={{ color: cert.color }}>{cert.expires}</span></span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-3 mb-6">
          {cert.highlights.map((h, i) => (
            <li key={i} className={`flex items-start gap-3 text-sm ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>
              <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cert.color }} />
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cert.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 text-xs font-mono border rounded-lg transition-all duration-300"
              style={{ borderColor: `${cert.color}30`, color: cert.color, background: `${cert.color}08` }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Verify button */}
        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold tracking-wider border rounded-lg transition-all duration-300 hover:scale-105"
          style={{
            borderColor: cert.color,
            color: cert.color,
            background: `${cert.color}10`,
          }}
        >
          <FiAward size={12} />
          {cert.credentialId.startsWith('EW-') ? 'VIEW PROGRAM' : 'VERIFY CREDENTIAL'}
          <FiExternalLink size={10} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const { isDark } = useTheme();

  return (
    <section id="certifications" className={`relative py-24 overflow-hidden ${isDark ? '' : 'bg-gradient-to-b from-slate-50 to-white'}`}>
      {!isDark && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, transparent 70%)', filter: 'blur(30px)' }} />
      )}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px pointer-events-none"
        style={{ background: isDark ? 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(124,58,237,0.2), transparent)' : 'linear-gradient(90deg, transparent, rgba(14,165,233,0.2), rgba(124,58,237,0.2), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.1 }}
            className={`font-mono text-xs tracking-[0.25em] mb-2 ${isDark ? 'text-cyber-cyan' : 'text-sky-500'}`}>
            05 / CERTIFICATIONS
          </motion.p>
          <h2 className="section-heading">Verified Expertise</h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
            className="w-24 h-0.5 mx-auto mt-4 origin-center"
            style={{ background: isDark ? 'linear-gradient(90deg, transparent, #00d4ff, transparent)' : 'linear-gradient(90deg, transparent, #0ea5e9, #7c3aed, transparent)' }}
          />
          <p className={`text-sm mt-4 max-w-xl mx-auto ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>
            Industry-recognized credentials validating my technical competencies
          </p>
        </motion.div>

        {/* Cert cards — first 2 side by side, 3rd centered */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {certifications.slice(0, 2).map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} inView={inView} isDark={isDark} />
          ))}
        </div>
        {certifications.length > 2 && (
          <div className="grid md:grid-cols-2 gap-8 mb-16 md:[&>*]:col-start-1 md:justify-center">
            <div className="md:col-span-1 md:max-w-xl md:mx-auto w-full">
              <CertCard cert={certifications[2]} index={2} inView={inView} isDark={isDark} />
            </div>
          </div>
        )}

        {/* Training section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className={`flex items-center gap-2 font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-800'}`}>
            <span>📚</span> Additional Training
            <div className={`flex-1 h-px ml-3 ${isDark ? 'bg-cyber-border/40' : 'bg-slate-200'}`} />
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {trainings.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className={`flex items-center gap-4 p-4 border rounded-xl transition-all duration-200 ${isDark ? 'border-cyber-border/30 bg-cyber-surface/40 hover:border-cyber-cyan/20' : 'border-slate-100 bg-slate-50 hover:shadow-sm'}`}
              >
                <span className="text-2xl">{t.icon}</span>
                <div>
                  <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-700'}`}>{t.title}</h4>
                  <p className={`text-xs ${isDark ? 'text-cyber-muted' : 'text-slate-400'}`}>{t.issuer}</p>
                  <p className="font-mono text-xs mt-0.5" style={{ color: t.color }}>{t.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
