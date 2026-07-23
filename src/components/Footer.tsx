
export default function Footer() {
  return (
    <footer id="contact" className="bg-white dark:bg-zinc-900 border-t border-border-light dark:border-border-dark py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          
          {/* Logo Column */}
          <div className="md:col-span-1 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#0F172A] dark:bg-zinc-800 rounded-lg flex items-center justify-center text-white text-[9px] font-bold tracking-wider shrink-0 shadow-sm">
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
                <a href="#features" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">Features</a>
              </li>
              <li>
                <a href="#screenshots" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">Screenshots</a>
              </li>
              <li>
                <a href="#pricing" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">Pricing</a>
              </li>
              <li>
                <a
                  href="https://chromewebstore.google.com/detail/hitmeup-for-github/kceaihfcmciaaaodlanhkfkahjggncpo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors font-medium"
                >
                  Install Extension
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2: Resources */}
          <div>
            <h5 className="font-display font-semibold text-xs text-text-light dark:text-text-dark uppercase tracking-wider mb-4">Resources</h5>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="#documentation" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#faq" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">FAQ</a>
              </li>
              <li>
                <a href="mailto:founder@hitmeupfg.co.in" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">Support Contact</a>
              </li>
            </ul>
          </div>

          {/* Links 3: Legal & Social */}
          <div>
            <h5 className="font-display font-semibold text-xs text-text-light dark:text-text-dark uppercase tracking-wider mb-4">Legal</h5>
            <ul className="space-y-3 text-xs mb-6">
              <li>
                <a href="privacy.html" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">Terms of Service</a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 text-text-muted-light dark:text-text-muted-dark">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-light dark:hover:text-text-dark transition-colors" aria-label="GitHub">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-light dark:hover:text-text-dark transition-colors" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764.784-1.764 1.75-1.764.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-light dark:hover:text-text-dark transition-colors" aria-label="Discord">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border-light dark:border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-text-muted-light dark:text-text-muted-dark">
          <p>© 2026 HitMeUp. All rights reserved. Not affiliated with GitHub Inc.</p>
          <p className="flex items-center gap-1">
            Built with 💜 for developers.
          </p>
        </div>
      </div>
    </footer>
  );
}
