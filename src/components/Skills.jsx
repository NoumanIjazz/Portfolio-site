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

function SkillBar({ skill, color, inView, delay }) {
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
          <span className="text-white text-sm font-medium">{skill.name}</span>
          <span className="text-cyber-muted text-xs font-mono">{skill.years}</span>
        </div>
        <span className="font-mono text-xs" style={{ color }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-cyber-border/30 overflow-hidden relative">
        {/* Background shimmer */}
        <div className="absolute inset-0 opacity-30"
          style={{ background: `linear-gradient(90deg, transparent, ${color}20, transparent)`, backgroundSize: '200% 100%' }} />
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: delay + 0.2 }}
          className="h-full relative"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        >
          {/* Tip glow */}
          <div className="absolute right-0 top-0 bottom-0 w-4"
            style={{ background: `linear-gradient(90deg, transparent, ${color})`, filter: 'blur(3px)' }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('backend');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const activeCat = categories.find(c => c.id === activeTab);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(6,11,24,0) 0%, rgba(13,21,38,0.5) 50%, rgba(6,11,24,0) 100%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-cyber-cyan text-xs tracking-widest mb-2">02 / SKILLS</p>
          <h2 className="section-heading">Technical Arsenal</h2>
          <div className="w-24 h-px mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }} />
          <p className="text-cyber-muted text-sm mt-4 max-w-xl mx-auto">
            Tools and technologies I wield to build production-grade software
          </p>
        </motion.div>

        {/* Tech cloud - all icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {[
            { icon: SiPython, name: 'Python', color: '#3b82f6' },
            { icon: SiDjango, name: 'Django', color: '#10b981' },
            { icon: SiReact, name: 'React', color: '#00d4ff' },
            { icon: SiTypescript, name: 'TypeScript', color: '#3b82f6' },
            { icon: SiJavascript, name: 'JavaScript', color: '#f59e0b' },
            { icon: SiNodedotjs, name: 'Node.js', color: '#10b981' },
            { icon: SiDocker, name: 'Docker', color: '#00d4ff' },
            { icon: FaAws, name: 'AWS', color: '#f59e0b' },
            { icon: SiGithubactions, name: 'CI/CD', color: '#7c3aed' },
            { icon: SiLinux, name: 'Linux', color: '#e2e8f0' },
            { icon: SiMysql, name: 'MySQL', color: '#00d4ff' },
            { icon: SiPostgresql, name: 'PostgreSQL', color: '#3b82f6' },
            { icon: SiTailwindcss, name: 'Tailwind', color: '#00d4ff' },
            { icon: SiGit, name: 'Git', color: '#f87171' },
            { icon: SiPhp, name: 'PHP', color: '#7c3aed' },
            { icon: SiHtml5, name: 'HTML5', color: '#f87171' },
          ].map(({ icon: Icon, name, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ scale: 1.15, y: -3 }}
              className="flex flex-col items-center gap-2 p-4 border border-cyber-border/30 bg-cyber-surface/40 cursor-default transition-all duration-300 hover:border-cyber-cyan/30 group"
              style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
            >
              <Icon size={22} style={{ color }} className="group-hover:drop-shadow-lg" />
              <span className="text-xs text-cyber-muted font-mono group-hover:text-white transition-colors">{name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabbed skill bars */}
        <div className="cyber-card p-8">
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <FiLayers className="text-cyber-cyan mr-2" />
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs font-mono tracking-wider border transition-all duration-300 ${
                  activeTab === cat.id
                    ? 'text-white border-opacity-80'
                    : 'text-cyber-muted border-cyber-border/30 hover:text-white hover:border-cyber-border'
                }`}
                style={activeTab === cat.id ? {
                  borderColor: cat.color,
                  background: `${cat.color}15`,
                  color: cat.color,
                  boxShadow: `0 0 12px ${cat.color}30`,
                } : {}}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {activeCat.skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                color={activeCat.color}
                inView={true}
                delay={i * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
