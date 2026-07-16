import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { ReactLenis } from 'lenis/react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [showInstallPopup, setShowInstallPopup] = useState(false);
  const [installStep, setInstallStep] = useState(0); // 0: Idle, 1: Installing, 2: Installed

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Hook up CTA click listeners to trigger mock installation flow
  useEffect(() => {
    const handleCtaClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest('a')?.getAttribute('href');
      if (href === '#download') {
        e.preventDefault();
        setShowInstallPopup(true);
        setInstallStep(1);
        
        setTimeout(() => {
          setInstallStep(2);
        }, 2200);
      }
    };

    document.addEventListener('click', handleCtaClick);
    return () => document.removeEventListener('click', handleCtaClick);
  }, []);

  const lenisOptions = {
    duration: 1.1, // Interpolation duration: ~1.0-1.2 seconds
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo easing curve
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <div className="min-h-screen bg-bg-light text-text-light dark:bg-zinc-950 dark:text-text-dark font-sans antialiased transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main>
          <Hero />
          <Features />
          <Screenshots />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <FAQ />
        </main>

        <Footer />

        {/* Mock Installation Interactive Popup Modal */}
        <AnimatePresence>
          {showInstallPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" data-lenis-prevent>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowInstallPopup(false)}
                className="absolute inset-0 bg-black/20 backdrop-blur-[0.125rem]"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="bg-white dark:bg-zinc-900 border border-border-light dark:border-border-dark/60 rounded-2xl p-6 shadow-xl relative max-w-sm w-full z-10 text-center font-sans"
              >
                <button
                  onClick={() => setShowInstallPopup(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg text-text-muted-light dark:text-text-muted-dark hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>

                {installStep === 1 ? (
                  <div className="py-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 animate-spin text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" className="opacity-25" stroke="currentColor" />
                        <path d="M12 2a10 10 0 0 1 10 10" className="opacity-75" fill="none" stroke="currentColor" />
                      </svg>
                    </div>
                    <h4 className="font-display font-semibold text-base text-text-light dark:text-text-dark">Adding to Chrome...</h4>
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-2 leading-relaxed">Connecting secure browser handshake...</p>
                  </div>
                ) : (
                  <div className="py-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                      <Check className="h-6 w-6" strokeWidth={2.5} />
                    </div>
                    <h4 className="font-display font-semibold text-base text-text-light dark:text-text-dark">Extension Installed!</h4>
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-2 leading-relaxed px-2">
                      HitMeUp has been successfully added. Refresh any GitHub page to see the Message & Inbox integrations.
                    </p>
                    <button
                      onClick={() => setShowInstallPopup(false)}
                      className="mt-6 w-full py-2 px-4 rounded-lg bg-primary hover:bg-primary/95 text-white dark:bg-text-dark dark:hover:bg-text-dark/95 dark:text-zinc-950 font-semibold text-xs transition-colors shadow-sm"
                    >
                      Done
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </ReactLenis>
  );
}

export default App;
