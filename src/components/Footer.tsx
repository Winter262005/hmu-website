import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useExtensionUrl } from '../hooks/useExtensionUrl';

export default function Footer() {
  const extensionUrl = useExtensionUrl();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setErrorMessage('Email address is required.');
      return;
    }
    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setErrorMessage('');
    setEmail('');
    // Reset success message after 4s
    setTimeout(() => {
      setStatus('idle');
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-bg-light dark:bg-bg-dark border-t border-border-light dark:border-border-dark py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-left">
          
          {/* Logo Column */}
          <div className="flex flex-col items-start">
            <a id="lnk-brand-footer" href="#" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#0F172A] dark:bg-card-dark rounded-lg flex items-center justify-center text-white text-[9px] font-bold tracking-wider shrink-0 shadow-sm">
                HMU
              </div>
              <span className="font-display font-semibold text-lg tracking-tight text-text-light dark:text-text-dark">
                HitMeUp
              </span>
            </a>
            <p className="font-sans text-xs text-text-muted-light dark:text-text-muted-dark mt-4 leading-relaxed max-w-[200px]">
              Real-time, zero-knowledge end-to-end encrypted messaging integrated right onto GitHub profile and repository pages.
            </p>
          </div>

          {/* Links 1: Platform */}
          <div>
            <h5 className="font-display font-semibold text-xs text-text-light dark:text-text-dark uppercase tracking-wider mb-4">Platform</h5>
            <ul className="space-y-3 text-xs">
              <li>
                <a id="lnk-footer-features" href="#features" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">Roadmap</a>
              </li>
              <li>
                <a id="lnk-footer-screenshots" href="#screenshots" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">Screenshots</a>
              </li>
              <li>
                <a id="lnk-footer-pricing" href="#pricing" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">Pricing</a>
              </li>
              <li>
                <a
                  id="lnk-footer-install"
                  href={extensionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors font-medium"
                >
                  Install Extension
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2: Resources & Legal */}
          <div>
            <h5 className="font-display font-semibold text-xs text-text-light dark:text-text-dark uppercase tracking-wider mb-4">Resources</h5>
            <ul className="space-y-3 text-xs mb-4">
              <li>
                <a id="lnk-footer-guide" href="/welcome/index.html" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">Guide</a>
              </li>
              <li>
                <a id="lnk-footer-faq" href="#faq" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">FAQ</a>
              </li>
              <li>
                <a id="lnk-footer-privacy" href="privacy.html" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Links 3: Newsletter Form */}
          <div className="flex flex-col items-start">
            <h5 className="font-display font-semibold text-xs text-text-light dark:text-text-dark uppercase tracking-wider mb-4">Stay Updated</h5>
            <p className="font-sans text-xs text-text-muted-light dark:text-text-muted-dark mb-4 leading-relaxed">
              Get notifications about security audits and new features.
            </p>
            <form onSubmit={handleSubscribe} className="w-full flex flex-col gap-2">
              <div className="flex gap-2 w-full">
                <input
                  id="inp-newsletter-email"
                  type="email"
                  placeholder="Enter email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-lg px-3 py-2 text-xs text-text-light dark:text-text-dark focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors"
                />
                <button
                  id="btn-newsletter-subscribe"
                  type="submit"
                  className="bg-primary hover:bg-primary/95 text-white dark:bg-text-dark dark:text-zinc-950 px-3 py-2 rounded-lg text-xs font-semibold shadow-sm flex items-center justify-center transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Status messages */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 mt-1 font-semibold"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span>Successfully subscribed!</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5 text-[10px] text-rose-600 dark:text-rose-400 mt-1 font-semibold"
                  >
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border-light dark:border-border-dark flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] text-text-muted-light dark:text-text-muted-dark">
          <p>© 2026 HitMeUp. All rights reserved. Not affiliated with GitHub Inc.</p>
          
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-4 text-text-muted-light dark:text-text-muted-dark">
              <a id="lnk-footer-github" href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-light dark:hover:text-text-dark transition-colors" aria-label="GitHub">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              <a id="lnk-footer-linkedin" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-light dark:hover:text-text-dark transition-colors" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764.784-1.764 1.75-1.764.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            
            <p className="flex items-center gap-1">
              Built with 💜 for developers.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
