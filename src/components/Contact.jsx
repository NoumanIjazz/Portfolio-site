import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import {
  FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub,
  FiSend, FiCheck, FiAlertCircle, FiExternalLink
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

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
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = 'Name is required';
    if (!formData.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Enter a valid email';
    if (!formData.subject.trim()) e.subject = 'Subject is required';
    if (!formData.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name.trim(),
          from_email: formData.email.trim(),
          subject:    formData.subject.trim(),
          message:    formData.message.trim(),
          reply_to:   formData.email.trim(),
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputClass = (field) => `w-full border text-sm px-4 py-3 outline-none transition-colors font-mono rounded-lg ${
    errors[field]
      ? 'border-red-400 focus:border-red-500'
      : isDark
        ? 'bg-cyber-bg/60 border-cyber-border/50 text-white placeholder-cyber-muted/50 focus:border-cyber-cyan/60'
        : 'bg-white border-slate-200 text-slate-800 placeholder-slate-300 focus:border-sky-400'
  }`;

  return (
    <section id="contact" className={`relative py-24 overflow-hidden ${isDark ? '' : 'bg-gradient-to-b from-white to-slate-50'}`}>
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{ background: isDark ? 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div className="absolute top-1/4 left-0 w-80 h-80 pointer-events-none rounded-full"
        style={{ background: isDark ? 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />

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
            06 / CONTACT
          </motion.p>
          <h2 className="section-heading">Let&apos;s Build Together</h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
            className="w-24 h-0.5 mx-auto mt-4 origin-center"
            style={{ background: isDark ? 'linear-gradient(90deg, transparent, #00d4ff, transparent)' : 'linear-gradient(90deg, transparent, #0ea5e9, #7c3aed, transparent)' }}
          />
          <p className={`text-sm mt-4 max-w-xl mx-auto ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>
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
            <h3 className={`font-bold text-lg mb-6 ${isDark ? 'text-white' : 'text-slate-800'}`}>Get in Touch</h3>

            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 p-4 border group cursor-pointer transition-all duration-300 rounded-xl ${isDark ? 'border-cyber-border/30 bg-cyber-surface/40 hover:border-opacity-60' : 'border-slate-100 bg-white hover:shadow-md'}`}
                onClick={() => href && window.open(href, '_blank')}
              >
                <div className="w-10 h-10 border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 rounded-lg"
                  style={{ borderColor: `${color}50`, background: `${color}10` }}>
                  <Icon size={14} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-mono tracking-wider ${isDark ? 'text-cyber-muted' : 'text-slate-400'}`}>{label}</div>
                  <div className={`text-sm font-medium truncate ${isDark ? 'text-white' : 'text-slate-700'}`}>{value}</div>
                </div>
                {href && (
                  <FiExternalLink size={12} className={`opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ${isDark ? 'text-cyber-muted' : 'text-slate-400'}`} />
                )}
              </motion.div>
            ))}

            {/* Availability status */}
            <div className={`p-4 border rounded-xl mt-6 ${isDark ? 'border-green-500/20 bg-green-500/5' : 'border-green-200 bg-green-50'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-600 font-mono text-xs tracking-wider font-bold">OPEN TO WORK</span>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>
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
              <h3 className={`font-bold text-lg mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                <FiSend className={isDark ? 'text-cyber-cyan' : 'text-sky-500'} size={16} />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className={`block text-xs font-mono tracking-wider mb-2 ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>
                      YOUR NAME <span className={isDark ? 'text-cyber-cyan' : 'text-sky-500'}>*</span>
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className={inputClass('name')} />
                    {errors.name && <p className="mt-1 text-red-400 text-xs font-mono">{errors.name}</p>}
                  </div>
                  {/* Email */}
                  <div>
                    <label className={`block text-xs font-mono tracking-wider mb-2 ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>
                      EMAIL ADDRESS <span className={isDark ? 'text-cyber-cyan' : 'text-sky-500'}>*</span>
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className={inputClass('email')} />
                    {errors.email && <p className="mt-1 text-red-400 text-xs font-mono">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className={`block text-xs font-mono tracking-wider mb-2 ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>
                    SUBJECT <span className={isDark ? 'text-cyber-cyan' : 'text-sky-500'}>*</span>
                  </label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Collaboration / Job Opportunity / ..." className={inputClass('subject')} />
                  {errors.subject && <p className="mt-1 text-red-400 text-xs font-mono">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-xs font-mono tracking-wider mb-2 ${isDark ? 'text-cyber-muted' : 'text-slate-500'}`}>
                    MESSAGE <span className={isDark ? 'text-cyber-cyan' : 'text-sky-500'}>*</span>
                  </label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell me about your project, opportunity, or just say hello..." className={`${inputClass('message')} resize-none`} />
                  {errors.message && <p className="mt-1 text-red-400 text-xs font-mono">{errors.message}</p>}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 text-sm font-mono font-bold tracking-widest border rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                  style={
                    status === 'success'
                      ? { borderColor: '#10b981', color: '#10b981', background: 'rgba(16,185,129,0.1)' }
                      : isDark
                        ? { borderColor: '#00d4ff', color: '#00d4ff', background: 'rgba(0,212,255,0.08)' }
                        : { borderColor: '#0ea5e9', color: '#0284c7', background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)' }
                  }
                >
                  {status === 'idle' && (<><FiSend size={14} /> SEND MESSAGE</>)}
                  {status === 'sending' && (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className={`w-4 h-4 border-2 rounded-full border-t-sky-500 ${isDark ? 'border-cyber-cyan/30' : 'border-sky-200'}`}
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
                    className="text-green-500 text-xs font-mono text-center"
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
