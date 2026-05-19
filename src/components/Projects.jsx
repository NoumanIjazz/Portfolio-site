import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiCode, FiCalendar, FiX, FiMaximize2 } from 'react-icons/fi';
import {
  SiDjango, SiReact, SiPython, SiGooglecloud,
  SiHtml5, SiCss, SiJavascript
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'COMSATS Portfolio & Talent Exchange',
    subtitle: 'Full-Stack Web Platform',
    period: 'Aug 2024 – Jul 2025',
    category: 'Full Stack',
    color: '#00d4ff',
    description: 'A comprehensive portfolio and talent exchange platform built for COMSATS University enabling students to showcase their work, connect with opportunities, and demonstrate skills to potential employers.',
    longDesc: 'Architected a scalable multi-user platform with role-based access control, real-time notifications, and advanced search/filter capabilities. Implemented RESTful APIs, secure file uploads to cloud storage, and a responsive dashboard with analytics.',
    tech: ['Django', 'React.js', 'PostgreSQL', 'REST APIs', 'AWS S3', 'JWT Auth'],
    techIcons: [SiDjango, SiReact, FaAws],
    highlights: ['Multi-role system (Students, Faculty, Employers)', 'Real-time notification system', 'Advanced search & filtering', 'Cloud file storage (AWS S3)', 'Responsive dashboard'],
    featured: true,
  },
  {
    id: 2,
    title: 'Netflix Clone – UI Design',
    subtitle: 'Frontend Semester Project',
    period: 'Jan 2024 – Feb 2024',
    category: 'Frontend',
    color: '#f87171',
    description: 'A pixel-perfect clone of the Netflix landing page and browsing interface, featuring responsive design, hover animations, and a dynamic content layout replicating the Netflix streaming platform UI.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    techIcons: [SiHtml5, SiCss, SiJavascript],
    highlights: ['Pixel-perfect Netflix UI', 'Smooth CSS animations', 'Fully responsive layout', 'Interactive hover effects'],
    featured: false,
  },
  {
    id: 3,
    title: 'Spotify Clone – UI Design',
    subtitle: 'Frontend Semester Project',
    period: 'Feb 2024 – Apr 2024',
    category: 'Frontend',
    color: '#1db954',
    description: 'A detailed Spotify web player clone featuring the music browser interface, playlist layouts, and playback controls. Built with attention to Spotify\'s design system including dark theme consistency.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox/Grid'],
    techIcons: [SiHtml5, SiCss, SiJavascript],
    highlights: ['Spotify design system', 'Dark theme UI', 'Music player controls', 'Playlist browser layout'],
    featured: false,
  },
  {
    id: 4,
    title: 'Unread Email Fetcher',
    subtitle: 'Google Cloud Integration',
    period: 'Nov 2024 – Dec 2024',
    category: 'Backend',
    color: '#7c3aed',
    description: 'An automated email management tool integrated with Google Cloud Console and Gmail API that fetches, categorizes, and displays unread emails with smart filtering and notification capabilities.',
    tech: ['Python', 'Google Cloud API', 'Gmail API', 'OAuth2', 'Django'],
    techIcons: [SiPython, SiGooglecloud, SiDjango],
    highlights: ['Gmail API integration', 'OAuth2 authentication', 'Smart categorization', 'Real-time notifications', 'Google Cloud Console'],
    featured: true,
  },
  {
    id: 5,
    title: 'Instagram Post Reader',
    subtitle: 'Public Profile Data Tool',
    period: 'Oct 2024 – Nov 2024',
    category: 'Backend',
    color: '#f59e0b',
    description: 'A web scraping and API integration tool for reading and analyzing Instagram posts from public profiles, featuring data extraction, caching, and analytics dashboard for social media monitoring.',
    tech: ['Python', 'Django', 'REST API', 'Data Parsing', 'Caching'],
    techIcons: [SiPython, SiDjango],
    highlights: ['Public profile data extraction', 'Intelligent caching layer', 'Analytics dashboard', 'Rate-limit handling', 'JSON data export'],
    featured: false,
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

function ProjectCard({ project, index, inView, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={() => onClick(project)}
      className="cyber-card p-6 cursor-pointer group hover:border-opacity-60 transition-all duration-300 relative overflow-hidden"
      style={{ '--hover-color': project.color }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:opacity-100 opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 px-2 py-0.5 text-xs font-mono border"
          style={{ borderColor: `${project.color}40`, color: project.color, background: `${project.color}10` }}>
          FEATURED
        </div>
      )}

      <div className="mb-4">
        {/* Category */}
        <span className="text-xs font-mono tracking-wider mb-3 block" style={{ color: project.color }}>
          {project.category}
        </span>
        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-gradient-mixed transition-colors">
          {project.title}
        </h3>
        <p className="text-cyber-muted text-sm mb-1">{project.subtitle}</p>
        <div className="flex items-center gap-1 text-cyber-muted text-xs font-mono">
          <FiCalendar size={10} />
          {project.period}
        </div>
      </div>

      <p className="text-cyber-muted text-sm leading-relaxed mb-5 line-clamp-3">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, 4).map(t => (
          <span key={t} className="px-2 py-0.5 text-xs font-mono border"
            style={{ borderColor: `${project.color}30`, color: project.color, background: `${project.color}08` }}>
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="px-2 py-0.5 text-xs font-mono text-cyber-muted border border-cyber-border/30">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-cyber-border/30">
        <div className="flex gap-1">
          {project.techIcons.map((Icon, i) => (
            <Icon key={i} size={14} className="text-cyber-muted" />
          ))}
        </div>
        <div className="flex items-center gap-1 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: project.color }}>
          <FiMaximize2 size={10} />
          View Details
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-cyber-bg/90 backdrop-blur-xl" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative cyber-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        style={{ borderColor: `${project.color}40` }}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />

        <button onClick={onClose} className="absolute top-4 right-4 text-cyber-muted hover:text-white p-1">
          <FiX size={18} />
        </button>

        <div className="mb-6">
          <span className="text-xs font-mono tracking-wider mb-2 block" style={{ color: project.color }}>
            {project.category}
          </span>
          <h2 className="text-2xl font-black text-white mb-1">{project.title}</h2>
          <p className="text-cyber-muted">{project.subtitle}</p>
          <div className="flex items-center gap-1 text-cyber-muted text-xs font-mono mt-2">
            <FiCalendar size={10} />
            {project.period}
          </div>
        </div>

        <p className="text-cyber-muted leading-relaxed mb-6 text-sm">{project.description}</p>
        {project.longDesc && (
          <p className="text-cyber-muted leading-relaxed mb-6 text-sm">{project.longDesc}</p>
        )}

        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 text-sm">Key Features</h4>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-cyber-muted">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.color }} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="px-3 py-1 text-xs font-mono border"
                style={{ borderColor: `${project.color}40`, color: project.color, background: `${project.color}10` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(13,21,38,0.3) 0%, rgba(6,11,24,0) 100%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-cyber-cyan text-xs tracking-widest mb-2">04 / PROJECTS</p>
          <h2 className="section-heading">Built in Production</h2>
          <div className="w-24 h-px mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }} />
          <p className="text-cyber-muted text-sm mt-4 max-w-xl mx-auto">
            A showcase of projects I&apos;ve engineered — click any card to see full details
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 flex-wrap mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 text-xs font-mono tracking-wider border transition-all duration-300 ${
                activeFilter === cat
                  ? 'text-cyber-bg border-cyber-cyan bg-cyber-cyan'
                  : 'text-cyber-muted border-cyber-border/40 hover:text-white hover:border-cyber-cyan/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                inView={inView}
                onClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
