import { Check, Clock } from 'lucide-react';
import { useExtensionUrl } from '../hooks/useExtensionUrl';

const freeFeatures = [
  'Unlimited Direct Messaging',
  'Repository Group Chats',
  'Basic Developer Profiles',
  'Standard Media Sharing',
];

const proFeatures = [
  'AI Code Snippet Analysis',
  'Interactive Collaboration Cards',
  'Advanced Developer Profiles',
  'Extension Theme Marketplace',
  'Availability & Custom Focus Status',
  'Premium Workspace Themes',
  'Early Access to Future Premium Tools',
];

export default function Pricing() {
  const extensionUrl = useExtensionUrl();
  return (
    <section id="pricing" className="py-20 md:py-16 md:min-h-screen md:flex md:flex-col md:justify-center bg-bg-light dark:bg-bg-dark border-b border-border-light dark:border-border-dark transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-12">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-text-light dark:text-text-dark mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="font-sans text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            Connect for free or upgrade to unlock advanced developer tools, integrations, and personalization.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Free Card */}
          <div className="bg-white dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div className="text-left">
              <span className="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">Free Plan</span>
              <div className="flex items-baseline mt-4">
                <span className="font-display font-semibold text-3xl text-text-light dark:text-text-dark">$0</span>
                <span className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark ml-2">/ forever</span>
              </div>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-3 leading-relaxed">Perfect for independent developers looking for secure chat.</p>

              {/* Feature List */}
              <ul className="mt-8 space-y-4">
                {freeFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs text-text-light dark:text-text-dark">
                    <Check className="h-4 w-4 text-primary dark:text-text-dark shrink-0" strokeWidth={2} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <a
                id="btn-pricing-free-start"
                href={extensionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold rounded-lg bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark hover:bg-border-light dark:hover:bg-border-dark transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Pro Card */}
          <div className="bg-white dark:bg-card-dark border-2 border-terracotta rounded-2xl p-8 flex flex-col justify-between shadow-sm relative">
            {/* Coming Soon Badge */}
            <div className="absolute top-4 right-4 bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded flex items-center gap-1">
              <Clock className="h-2.5 w-2.5" />
              Coming Soon
            </div>

            <div className="text-left">
              <span className="text-[10px] font-bold text-terracotta uppercase tracking-wider">Pro Developer</span>
              <div className="flex items-baseline mt-4">
                <span className="font-display font-semibold text-4xl text-text-light dark:text-text-dark">$5</span>
                <span className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark ml-2">/ month</span>
              </div>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-3 leading-relaxed">Unlock advanced tools and custom SDK themes.</p>

              {/* Feature List */}
              <ul className="mt-8 space-y-4">
                {proFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs text-text-light dark:text-text-dark">
                    <Check className="h-4 w-4 text-terracotta shrink-0" strokeWidth={2} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 group relative">
              <button
                id="btn-pricing-pro-disabled"
                disabled
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-bg-light dark:bg-bg-dark text-text-muted-light dark:text-text-muted-dark cursor-not-allowed opacity-70 transition-colors select-none"
                aria-label="Pro plan coming soon"
              >
                <Clock className="h-3.5 w-3.5 shrink-0" />
                Coming Soon
              </button>
              {/* Tooltip */}
              <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[14rem] rounded-lg bg-zinc-900 dark:bg-zinc-700 text-white text-[10px] leading-relaxed px-3 py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg z-10">
                Pro is coming soon — stay tuned!
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-700" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
