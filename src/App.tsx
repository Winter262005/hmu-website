import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Screenshots from './components/Screenshots';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { ReactLenis, useLenis } from 'lenis/react';

function ScrollController() {
  const lenis = useLenis();
  const currentTargetYRef = useRef<number | null>(null);

  useEffect(() => {
    const handleManualScroll = () => {
      // If user scrolls manually, reset target so key presses base on actual position
      currentTargetYRef.current = null;
    };
    window.addEventListener('wheel', handleManualScroll, { passive: true });
    window.addEventListener('touchmove', handleManualScroll, { passive: true });
    window.addEventListener('mousedown', handleManualScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleManualScroll);
      window.removeEventListener('touchmove', handleManualScroll);
      window.removeEventListener('mousedown', handleManualScroll);
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in input or textarea fields
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      const isDown = e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey);
      const isUp = e.key === 'ArrowUp' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey);

      if (!isDown && !isUp) return;

      const elements = Array.from(document.querySelectorAll('main > section, footer')) as HTMLElement[];
      if (elements.length === 0) return;

      e.preventDefault();

      const scrollPos = window.scrollY;
      const baseScrollY = currentTargetYRef.current !== null ? currentTargetYRef.current : scrollPos;
      const threshold = 15; // small threshold to avoid minor alignment issues

      if (isDown) {
        const nextSec = elements.find(el => {
          const top = el.getBoundingClientRect().top + scrollPos;
          return top > baseScrollY + threshold;
        });
        if (nextSec) {
          const top = nextSec.getBoundingClientRect().top + scrollPos;
          currentTargetYRef.current = top;
          lenis.scrollTo(nextSec, { 
            offset: 0, 
            duration: 1.0,
            onComplete: () => {
              if (currentTargetYRef.current === top) {
                currentTargetYRef.current = null;
              }
            }
          });
        }
      } else if (isUp) {
        const prevSec = [...elements].reverse().find(el => {
          const top = el.getBoundingClientRect().top + scrollPos;
          return top < baseScrollY - threshold;
        });
        if (prevSec) {
          const top = prevSec.getBoundingClientRect().top + scrollPos;
          currentTargetYRef.current = top;
          lenis.scrollTo(prevSec, { 
            offset: 0, 
            duration: 1.0,
            onComplete: () => {
              if (currentTargetYRef.current === top) {
                currentTargetYRef.current = null;
              }
            }
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lenis]);

  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

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

  const lenisOptions = {
    duration: 1.1, // Interpolation duration: ~1.0-1.2 seconds
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo easing curve
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <ScrollController />
      <div className="min-h-screen bg-bg-light text-text-light dark:bg-bg-dark dark:text-text-dark font-sans antialiased transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main>
          <Hero />
          <Roadmap />
          <Screenshots />
          <HowItWorks />
          <Pricing />
          <FAQ />
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
