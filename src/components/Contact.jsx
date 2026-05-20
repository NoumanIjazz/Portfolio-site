import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import {
  FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub,
  FiSend, FiCheck, FiAlertCircle, FiExternalLink
} from 'react-icons/fi';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'noumanabbasi629@gmail.com',
    href: 'mailto:noumanabbasi629@gmail.com',
    color: '#00d4ff',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+92 308 228 9122',
    href: 'tel:+923082289122',
    color: '#7c3aed',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Lahore, Pakistan',
    href: null,
    color: '#10b981',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'muhammad-nouman-ijaz',
    href: 'https://www.linkedin.com/in/muhammad-nouman-ijaz-188726370',
    color: '#0077b5',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'NoumanIjazz',
    href: 'https://github.com/NoumanIjazz',
    color: '#e2e8f0',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.subject,
          message:    formData.message,
          reply_to:   formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }} />
      <div className="absolute top-1/4 left-0 w-72 h-72 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-cyber-cyan text-xs tracking-widest mb-2">06 / CONTACT</p>
          <h2 className="section-heading">Let&apos;s Build Together</h2>
          <div className="w-24 h-px mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }} />
          <p className="text-cyber-muted text-sm mt-4 max-w-xl mx-auto">
            I&apos;m open to new opportunities, freelance projects, and collaborations.
            Feel free to reach out — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>

            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 border border-cyber-border/30 bg-cyber-surface/40 group cursor-pointer transition-all duration-300 hover:border-opacity-60"
                style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                onClick={() => href && window.open(href, '_blank')}
              >
                <div className="w-10 h-10 border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ borderColor: `${color}50`, background: `${color}10` }}>
                  <Icon size={14} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-cyber-muted text-xs font-mono tracking-wider">{label}</div>
                  <div className="text-white text-sm font-medium truncate">{value}</div>
                </div>
                {href && (
                  <FiExternalLink size={12} className="text-cyber-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                )}
              </motion.div>
            ))}

            {/* Availability status */}
            <div className="p-4 border border-green-500/20 bg-green-500/5 mt-6"
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-mono text-xs tracking-wider font-bold">OPEN TO WORK</span>
              </div>
              <p className="text-cyber-muted text-xs leading-relaxed">
                Available for full-time roles, remote positions, and freelance projects globally.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="cyber-card p-8">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <FiSend className="text-cyber-cyan" size={16} />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-cyber-muted tracking-wider mb-2">
                      YOUR NAME <span className="text-cyber-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-cyber-bg/60 border border-cyber-border/50 text-white text-sm px-4 py-3 outline-none focus:border-cyber-cyan/60 transition-colors placeholder-cyber-muted/50 font-mono"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-cyber-muted tracking-wider mb-2">
                      EMAIL ADDRESS <span className="text-cyber-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-cyber-bg/60 border border-cyber-border/50 text-white text-sm px-4 py-3 outline-none focus:border-cyber-cyan/60 transition-colors placeholder-cyber-muted/50 font-mono"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-cyber-muted tracking-wider mb-2">
                    SUBJECT <span className="text-cyber-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Collaboration / Job Opportunity / ..."
                    className="w-full bg-cyber-bg/60 border border-cyber-border/50 text-white text-sm px-4 py-3 outline-none focus:border-cyber-cyan/60 transition-colors placeholder-cyber-muted/50 font-mono"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-cyber-muted tracking-wider mb-2">
                    MESSAGE <span className="text-cyber-cyan">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    className="w-full bg-cyber-bg/60 border border-cyber-border/50 text-white text-sm px-4 py-3 outline-none focus:border-cyber-cyan/60 transition-colors placeholder-cyber-muted/50 font-mono resize-none"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 text-sm font-mono font-bold tracking-widest border transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                  style={
                    status === 'success'
                      ? { borderColor: '#10b981', color: '#10b981', background: 'rgba(16,185,129,0.1)' }
                      : { borderColor: '#00d4ff', color: '#00d4ff', background: 'rgba(0,212,255,0.08)' }
                  }
                >
                  {status === 'idle' && (<><FiSend size={14} /> SEND MESSAGE</>)}
                  {status === 'sending' && (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-cyber-cyan/30 border-t-cyber-cyan rounded-full"
                      />
                      TRANSMITTING...
                    </span>
                  )}
                  {status === 'success' && (<><FiCheck size={14} /> MESSAGE SENT!</>)}
                  {status === 'error' && (<><FiAlertCircle size={14} /> TRY AGAIN</>)}
                </motion.button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-xs font-mono text-center"
                  >
                    ✓ Message transmitted successfully! I&apos;ll respond within 24 hours.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
