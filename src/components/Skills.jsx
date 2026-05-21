import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiPython, SiDjango, SiReact, SiTypescript, SiDocker,
  SiGithubactions, SiPostgresql, SiMysql,
  SiPhp, SiLaravel, SiLinux, SiGit, SiSvelte, SiTailwindcss,
  SiNodedotjs, SiJavascript, SiHtml5, SiCss
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { FiLayers } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const categories = [
  {
    id: 'backend',
    label: 'Backend',
    color: '#00d4ff',
    skills: [
      { name: 'Python', icon: SiPython, level: 90, years: '3y' },
      { name: 'Django & DRF', icon: SiDjango, level: 88, years: '2y' },
      { name: 'Node.js', icon: SiNodedotjs, level: 72, years: '1y' },
      { name: 'PHP / Laravel', icon: SiLaravel, level: 70, years: '1y' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#7c3aed',
    skills: [
      { name: 'React.js', icon: SiReact, level: 85, years: '2y' },
      { name: 'JavaScript', icon: SiJavascript, level: 85, years: '3y' },
      { name: 'TypeScript', icon: SiTypescript, level: 75, years: '1y' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88, years: '2y' },
      { name: 'HTML5 / CSS3', icon: SiHtml5, level: 92, years: '4y' },
      { name: 'Svelte', icon: SiSvelte, level: 65, years: '6m' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    color: '#f59e0b',
    skills: [
      { name: 'AWS (Certified)', icon: FaAws, level: 82, years: '1y' },
      { name: 'Docker', icon: SiDocker, level: 80, years: '1y' },
      { name: 'GitHub Actions', icon: SiGithubactions, level: 78, years: '1y' },
      { name: 'Linux', icon: SiLinux, level: 80, years: '2y' },
      { name: 'Git', icon: SiGit, level: 90, years: '3y' },
    ],
  },
  {
    id: 'database',
    label: 'Databases',
    color: '#10b981',
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 85, years: '3y' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 75, years: '1y' },
    ],
  },
];

function SkillBar({ skill, color, inView, delay, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <skill.icon size={14} style={{ color }} />
          <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-700'}`}>{skill.name}</span>
          <span className={`text-xs font-mono ${isDark ? 'text-cyber-muted' : 'text-slate-400'}`}>{skill.years}</span>
        </div>
        <span className="font-mono text-xs font-semibold" style={{ color }}>{skill.level}%</span>
      </div>
      <div className={`h-2 overflow-hidden relative rounded-full ${isDark ? 'bg-cyber-border/30' : 'bg-slate-100'}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: delay + 0.2 }}
          className="h-full relative rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        >
          {isDark && (
            <div className="absolute right-0 top-0 bottom-0 w-4"
              style={{ background: `linear-gradient(90deg, transparent, ${color})`, filter: 'blur(3px)' }} />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('backend');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { isDark } = useTheme();

  const activeCat = categories.find(c => c.id === activeTab);

  const techCloud = [
    { icon: SiPython, name: 'Python', color: '#3b82f6' },
    { icon: SiDjango, name: 'Django', color: '#10b981' },
    { icon: SiReact, name: 'React', color: isDark ? '#00d4ff' : '#0ea5e9' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3b82f6' },
    { icon: SiJavascript, name: 'JavaScript', color: '#f59e0b' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#10b981' },
    { icon: SiDocker, name: 'Docker', color: isDark ? '#00d4ff' : '#0ea5e9' },
    { icon: FaAws, name: 'AWS', color: '#f59e0b' },
    { icon: SiGithubactions, name: 'CI/CD', color: '#7c3aed' },
    { icon: SiLinux, name: 'Linux', color: isDark ? '#e2e8f0' : '#475569' },
    { icon: SiMysql, name: 'MySQL', color: isDark ? '#00d4ff' : '#0ea5e9' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#3b82f6' },
    { icon: SiTailwindcss, name: 'Tailwind', color: isDark ? '#00d4ff' : '#0ea5e9' },
    { icon: SiGit, name: 'Git', color: '#f87171' },
    { icon: SiPhp, name: 'PHP', color: '#7c3aed' },
    { icon: SiHtml5, name: 'HTML5', color: '#f87171' },
  ];

  return (
    <section id="skills" className={`relative py-24 overflow-hidden ${isDark ? '' : 'bg-gradient-to-b from-slate-50 to-white'}`}>
      {!isDark && (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', filter: 'blur(30px)' }} />
        </>
      )}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(6,11,24,0) 0%, rgba(13,21,38,0.5) 50%, rgba(6,11,24,0) 100%)' }} />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.1 }}
            className={`font-mono text-xs tracking-[0.25em] mb-2 ${isDark ? 'text-cyber-cyan' : 'text-sky-500'}`}
          >02 / SKILLS</motion.p>
          <h2 className="section-heading">Technical Arsenal</h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
            className="w-24 h-0.5 mx-auto mt-4 origin-center"
            style={{ background: isDark ? 'linear-gradient(90deg, transparent, #00d4ff, transparent)' : 'linear-gradient(90deg, transparent, #0ea5e9, #7c3aed, transparent)' }}
          />
          <p className={`text-sm mt-4 max-w-xl mx-auto ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>
            Tools and technologies I wield to build production-grade software
          </p>
        </motion.div>

        {/* Tech cloud */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {techCloud.map(({ icon: Icon, name, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.035, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.15, y: -6, transition: { duration: 0.2 } }}
              className={`flex flex-col items-center gap-2 p-4 border cursor-default group rounded-xl transition-all duration-300 ${
                isDark
                  ? 'border-cyber-border/30 bg-cyber-surface/40 hover:border-cyber-cyan/40 hover:bg-cyber-surface/80 hover:shadow-cyber'
                  : 'border-slate-100 bg-white hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/50'
              }`}
              style={!isDark ? { boxShadow: '0 1px 4px rgba(15,23,42,0.04)' } : {}}
            >
              <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4 }}>
                <Icon size={24} style={{ color }} />
              </motion.div>
              <span className={`text-xs font-mono transition-colors ${isDark ? 'text-cyber-muted group-hover:text-white' : 'text-slate-400 group-hover:text-slate-700'}`}>{name}</span>
            </motion.div>
          ))}
        </div>

        {/* Tabbed skill bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="cyber-card p-8"
        >
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <FiLayers className={`mr-2 ${isDark ? 'text-cyber-cyan' : 'text-sky-500'}`} />
            {categories.map(cat => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-4 py-2 text-xs font-mono tracking-wider border transition-all duration-300 rounded-lg ${
                  activeTab === cat.id
                    ? ''
                    : isDark
                      ? 'text-cyber-muted border-cyber-border/30 hover:text-white hover:border-cyber-border'
                      : 'text-slate-400 border-slate-200 hover:text-slate-700 hover:border-slate-300 bg-white'
                }`}
                style={activeTab === cat.id ? {
                  borderColor: cat.color,
                  background: isDark ? `${cat.color}18` : `${cat.color}12`,
                  color: cat.color,
                  boxShadow: isDark ? `0 0 14px ${cat.color}35` : `0 3px 12px ${cat.color}25`,
                  fontWeight: 700,
                } : {}}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {activeCat.skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                color={activeCat.color}
                inView={true}
                delay={i * 0.08}
                isDark={isDark}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
