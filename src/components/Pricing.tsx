import { Check } from 'lucide-react';

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
  return (
    <section id="pricing" className="py-28 sm:py-36 bg-bg-light dark:bg-bg-dark border-b border-border-light dark:border-border-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-20">
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
          <div className="bg-white dark:bg-zinc-900 border border-border-light dark:border-border-dark rounded-2xl p-8 flex flex-col justify-between shadow-sm">
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
                href="#download"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-800 text-text-light dark:text-text-dark hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Pro Card */}
          <div className="bg-white dark:bg-zinc-900 border-2 border-primary dark:border-text-dark rounded-2xl p-8 flex flex-col justify-between shadow-sm relative">
            {/* Recommended Badge */}
            <div className="absolute top-4 right-4 bg-primary text-white dark:bg-text-dark dark:text-zinc-950 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
              Popular
            </div>

            <div className="text-left">
              <span className="text-[10px] font-bold text-primary dark:text-text-dark uppercase tracking-wider">Pro Developer</span>
              <div className="flex items-baseline mt-4">
                <span className="font-display font-semibold text-4xl text-text-light dark:text-text-dark">$5</span>
                <span className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark ml-2">/ month</span>
              </div>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-3 leading-relaxed">Unlock advanced tools and custom SDK themes.</p>

              {/* Feature List */}
              <ul className="mt-8 space-y-4">
                {proFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs text-text-light dark:text-text-dark">
                    <Check className="h-4 w-4 text-secondary dark:text-text-dark shrink-0" strokeWidth={2} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <a
                href="#download"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold rounded-lg bg-primary hover:bg-primary/95 text-white dark:bg-text-dark dark:hover:bg-text-dark/95 dark:text-zinc-950 transition-colors shadow-sm"
              >
                Upgrade to Pro
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
