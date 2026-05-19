import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiAward, FiCalendar, FiShield, FiCheckCircle } from 'react-icons/fi';
import { FaAws } from 'react-icons/fa';

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
    title: 'English Works! Program',
    issuer: 'RELO Pakistan (U.S. Embassy)',
    period: 'Aug 2024 – Feb 2025',
    color: '#10b981',
    icon: '🌐',
  },
  {
    title: 'HTML & CSS Fundamentals',
    issuer: 'Online Certification Course',
    period: 'Mar 2024',
    color: '#7c3aed',
    icon: '💻',
  },
];

function CertCard({ cert, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Outer glow on hover */}
      <div
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${cert.color}30, transparent 60%)`, filter: 'blur(1px)' }}
      />

      <div className="cyber-card p-8 h-full relative">
        {/* Top gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }} />

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            {/* Icon circle */}
            <div className="relative w-16 h-16 flex items-center justify-center border-2 flex-shrink-0"
              style={{ borderColor: cert.color, background: `${cert.color}10` }}>
              <span className="text-2xl">{cert.badge}</span>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-2 border-green-400 bg-cyber-bg rounded-full flex items-center justify-center">
                <FiCheckCircle size={8} className="text-green-400" />
              </div>
            </div>
            <div>
              <h3 className="text-white font-black text-xl leading-tight mb-1">{cert.title}</h3>
              <p className="font-semibold text-sm" style={{ color: cert.color }}>{cert.issuer}</p>
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-cyber-border/30">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-muted">
            <FiCalendar size={10} className="text-green-400" />
            <span>Issued: <span className="text-white">{cert.issued}</span></span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-muted">
            <FiCalendar size={10} style={{ color: cert.color }} />
            <span>Valid until: <span style={{ color: cert.color }}>{cert.expires}</span></span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-3 mb-6">
          {cert.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-cyber-muted">
              <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cert.color }} />
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cert.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 text-xs font-mono border transition-all duration-300 hover:opacity-80"
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
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold tracking-wider border transition-all duration-300 hover:scale-105"
          style={{
            borderColor: cert.color,
            color: cert.color,
            background: `${cert.color}10`,
          }}
        >
          <FiAward size={12} />
          VERIFY CREDENTIAL
          <FiExternalLink size={10} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(124,58,237,0.2), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-cyber-cyan text-xs tracking-widest mb-2">05 / CERTIFICATIONS</p>
          <h2 className="section-heading">Verified Expertise</h2>
          <div className="w-24 h-px mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }} />
          <p className="text-cyber-muted text-sm mt-4 max-w-xl mx-auto">
            Industry-recognized credentials validating my technical competencies
          </p>
        </motion.div>

        {/* Cert cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} inView={inView} />
          ))}
        </div>

        {/* Training section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="flex items-center gap-2 text-white font-bold mb-6">
            <span>📚</span> Additional Training
            <div className="flex-1 h-px bg-cyber-border/40 ml-3" />
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {trainings.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-4 p-4 border border-cyber-border/30 bg-cyber-surface/40"
                style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
              >
                <span className="text-2xl">{t.icon}</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">{t.title}</h4>
                  <p className="text-cyber-muted text-xs">{t.issuer}</p>
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
