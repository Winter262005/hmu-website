import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Connor',
    role: 'Lead Compiler Architect',
    username: 'sconnor_dev',
    avatar: '👩‍💻',
    text: 'HitMeUp completely changed our code review flow. I can ask questions directly from GitHub profile pages instead of switching to Slack and losing context. The E2EE makes it super secure.',
  },
  {
    name: 'Marcus Vance',
    role: 'Full Stack Engineer',
    username: 'mvance',
    avatar: '👨‍💻',
    text: 'Repository-linked group chats are a game changer. The moment we start a repo, we have a secure room ready where we share commits, issues, and media seamlessly.',
  },
  {
    name: 'Elena Rostova',
    role: 'Open Source Maintainer',
    username: 'elena_r',
    avatar: '👩‍💻',
    text: 'As a maintainer, I receive many queries. HitMeUp lets me display my status (e.g. Focus) and lets contributors DM me securely without revealing my personal email address.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 sm:py-36 bg-white dark:bg-zinc-900 border-b border-border-light dark:border-border-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-20">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-text-light dark:text-text-dark mb-4">
            Loved by Developers Everywhere
          </h2>
          <p className="font-sans text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            See how developers are using HitMeUp to sync, communicate, and build secure products.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAF8] dark:bg-zinc-950 border border-border-light dark:border-border-dark p-6 rounded-2xl flex flex-col justify-between text-left transition-colors"
            >
              <div>
                {/* Rating stars */}
                <div className="flex gap-1 mb-5 text-[#6B7280]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={1} />
                  ))}
                </div>
                <p className="font-sans text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed italic">
                  "{test.text}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-3.5 mt-8 pt-6 border-t border-border-light/60 dark:border-border-dark/60">
                <div className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-sm">
                  {test.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-text-light dark:text-text-dark">{test.name}</h4>
                  <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark mt-0.5 font-medium">
                    {test.role} • <span className="text-[#334155] dark:text-text-dark">@{test.username}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
