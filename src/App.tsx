import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Screenshots from './components/Screenshots';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
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
