import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppInner() {
  const { isDark } = useTheme();
  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-cyber-bg text-cyber-text' : 'bg-white text-slate-900'}`}>
      {/* Light mode: fixed ambient gradient mesh */}
      {!isDark && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 65%)', filter: 'blur(60px)' }} />
          <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)', filter: 'blur(60px)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 65%)', filter: 'blur(50px)' }} />
        </div>
      )}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
