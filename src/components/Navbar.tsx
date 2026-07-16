import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

// ─── Layout constants (px) ──────────────────────────────────────────────────
const PILL_W          = 70;
const LOGO_W          = 38;
const LEFT_PAD        = 20;
const LOGO_CENTER_LEFT = (PILL_W - LOGO_W) / 2; // = 16

// ─── Spring used for the logo position ───────────────────────────────────────
const LOGO_SPRING = { type: 'spring' as const, stiffness: 220, damping: 32, mass: 1 };

// ─── Parent container variants ───────────────────────────────────────────────
// The transition is embedded PER VARIANT so each direction can orchestrate its
// children differently.  delayChildren on "bar" ensures children only start
// fading in once the container spring has advanced enough.
const headerVariants = {
  bar: {
    width:        '94vw' as unknown as number,
    maxWidth:     900,
    borderRadius: 18,
    marginTop:    18,
    height:       65,
    boxShadow:    '0 1px 3px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.06)',
    // NO transition here — orchestration must live on the element's `transition` prop.
  },
  pill: {
    width:        PILL_W as unknown as number,
    maxWidth:     PILL_W,
    borderRadius: 23,
    marginTop:    20,
    height:       PILL_W,
    boxShadow:    '0 8px 32px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.08)',
    // NO transition here — orchestration must live on the element's `transition` prop.
  },
};

// ─── Child variants — opacity only ───────────────────────────────────────────
// No explicit `animate` on the child motion elements; they inherit the parent's
// `animate` key ("bar" | "pill") via Framer Motion variant propagation.
const childVariants = {
  bar:  { opacity: 1, transition: { duration: 0.22, ease: [0, 0, 0.2, 1] } },
  pill: { opacity: 0, transition: { duration: 0.10, ease: [0.4, 0, 1, 1] } },
};

// Wordmark also slides slightly on collapse
const wordmarkVariants = {
  bar:  { opacity: 1, x: 0,  transition: { duration: 0.22, ease: [0, 0, 0.2, 1] } },
  pill: { opacity: 0, x: -6, transition: { duration: 0.10, ease: [0.4, 0, 1, 1] } },
};

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features'     },
    { name: 'Pricing',  href: '#pricing'       },
    { name: 'Docs',     href: '#documentation' },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.header
        // "bar" = expanded, "pill" = collapsed.
        // Child motion elements with matching variant keys inherit this state.
        animate={scrolled ? 'pill' : 'bar'}
        variants={headerVariants}
        // BUG FIX: orchestration props (when, delayChildren) are only read from
        // the top-level `transition` prop — NOT from embedded variant transitions.
        // `when: 'beforeChildren'` during expand ensures the container spring
        // fully settles before children start fading in. No such gating on collapse.
        transition={scrolled
          ? { type: 'spring', stiffness: 220, damping: 32, mass: 1 }
          : { type: 'spring', stiffness: 220, damping: 32, mass: 1, when: 'beforeChildren' }
        }
        className="pointer-events-auto relative bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl overflow-hidden"
        style={{ willChange: 'width, border-radius, height, box-shadow, margin-top' }}
      >

        {/* ─── Logo — independent spring on `left`, not part of variant propagation ─── */}
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          // Explicit `animate` object (not a variant key) → not affected by parent variants.
          animate={{ left: scrolled ? LOGO_CENTER_LEFT : LEFT_PAD }}
          transition={LOGO_SPRING}
          className="absolute top-1/2 -translate-y-1/2 z-20 pointer-events-auto
                     w-[38px] h-[38px] flex-shrink-0
                     bg-[#0F172A] dark:bg-white rounded-[10px]
                     flex items-center justify-center
                     text-white dark:text-zinc-900 text-[10px] font-black tracking-wider shadow-sm"
          aria-label="Go to top"
        >
          HMU
        </motion.a>

        {/* ─── Wordmark — inherits "bar"/"pill" from parent via variant propagation ─── */}
        <motion.span
          variants={wordmarkVariants}
          // No `animate` prop → inherits parent's animate="bar"|"pill"
          // No `transition` prop → each variant state carries its own transition
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none z-20
                     text-[14px] font-semibold tracking-tight
                     text-text-light dark:text-text-dark whitespace-nowrap"
        style={{ left: LEFT_PAD + LOGO_W + 10 }}
        >
          HitMeUp
        </motion.span>

        {/* ─── Centre nav links ────────────────────────────────────────────────── */}
        <motion.nav
          variants={childVariants}
          style={{ pointerEvents: scrolled ? 'none' : 'auto' }}
          className="absolute inset-0 flex items-center justify-center gap-8 z-10"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-[14px] font-medium text-zinc-500 dark:text-zinc-400
                         hover:text-zinc-900 dark:hover:text-white
                         transition-colors tracking-wide whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </motion.nav>

        {/* ─── Right: dark-mode toggle + CTA ──────────────────────────────────── */}
        <motion.div
          variants={childVariants}
          style={{ pointerEvents: scrolled ? 'none' : 'auto' }}
          className="absolute right-4 top-0 bottom-0 flex items-center gap-2.5 z-30"
        >
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-lg flex items-center justify-center
                       text-zinc-400 dark:text-zinc-500
                       hover:text-zinc-700 dark:hover:text-zinc-200
                       hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-[19px] w-[19px]" /> : <Moon className="h-[19px] w-[19px]" />}
          </button>

          <a
            href="#download"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('pricing');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' });
            }}
            className="inline-flex items-center px-4 py-2 rounded-lg
                       text-[14px] font-semibold whitespace-nowrap
                       bg-zinc-900 hover:bg-zinc-700 text-white
                       dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-900
                       transition-colors shadow-sm"
          >
            Install free
          </a>
        </motion.div>

      </motion.header>
    </div>
  );
}
