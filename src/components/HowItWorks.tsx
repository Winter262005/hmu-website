import { Download, ShieldCheck, Zap } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Download,
    title: 'Install the Chrome Extension',
    description: 'Add the HitMeUp extension to your Chrome or Chromium-based browser with one click from the Web Store.',
  },
  {
    num: '02',
    icon: ShieldCheck,
    title: 'Sign in with GitHub',
    description: 'Authenticate securely using GitHub OAuth. Your private keypair is generated and stored locally in your browser sandbox.',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Start Collaborating',
    description: 'Visit any profile page to open a secure direct chat, or link group rooms to public/private repositories in seconds.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 sm:py-36 bg-white dark:bg-zinc-900 border-b border-border-light dark:border-border-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-20">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-text-light dark:text-text-dark mb-4">
            How HitMeUp Works
          </h2>
          <p className="font-sans text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            Zero configurations, maximum security. Get up and running in less than two minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-col items-start text-left relative">
                {/* step label */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-secondary dark:text-text-dark">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark tracking-wider uppercase">
                    Step {step.num}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-semibold text-base text-text-light dark:text-text-dark mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
