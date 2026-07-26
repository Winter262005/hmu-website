import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Sparkles, Code2, ShieldCheck, GitMerge } from 'lucide-react';

const milestones = [
  {
    phase: 'Phase 1: Foundation',
    time: 'Q1 2026',
    status: 'Completed',
    statusColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    statusIcon: CheckCircle2,
    icon: ShieldCheck,
    title: 'Secure Direct Messaging',
    description: 'Released the core browser extension with local key generation, cryptographic ECDH tunnels, AES-GCM encrypted DMs, and secure local PIN vault backup.',
    items: ['ECDH P-256 secure session agreements', 'AES-256-GCM DM encryption', 'Chrome Web Store official release', 'Vault backup PIN security (600k iterations PBKDF2)']
  },
  {
    phase: 'Phase 2: Group Channels',
    time: 'Q2 2026',
    status: 'In Progress',
    statusColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    statusIcon: Circle,
    icon: GitMerge,
    title: 'Repository Chats & Sync',
    description: 'Developing automated repository chat room generation. Connect with contributors in rooms created dynamically based on code repositories.',
    items: ['Auto-generation of repo channels', 'Collaborator list syncing', 'Markdown chat syntax rendering', 'Typing indicator synchronization']
  },
  {
    phase: 'Phase 3: Deep Integrations',
    time: 'Q3 2026',
    status: 'Upcoming',
    statusColor: 'text-zinc-500 bg-zinc-500/10 border-zinc-500/20 dark:text-zinc-400',
    statusIcon: Circle,
    icon: Code2,
    title: 'Interactive Dev Cards',
    description: 'Integrating rich preview cards for issues, commits, and pull requests directly in-chat. Allowing developers to review and interact without leaving the window.',
    items: ['Rich PR and Issue interactive previews', 'Inline code snippet compilation SDK', 'Custom workspace styling & Theme SDK', 'Group key rotation updates']
  },
  {
    phase: 'Phase 4: Advanced Utilities',
    time: 'Q4 2026',
    status: 'Upcoming',
    statusColor: 'text-zinc-500 bg-zinc-500/10 border-zinc-500/20 dark:text-zinc-400',
    statusIcon: Circle,
    icon: Sparkles,
    title: 'Enterprise & Security Sync',
    description: 'Rolling out security analysis overlays, offline message syncing via local vault queues, and enterprise-grade repository compliance integrations.',
    items: ['AI-powered code vulnerability alerts', 'Offline vault queues for message history', 'Compliance auditing and team metrics']
  }
];

export default function Roadmap() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  return (
    <section id="features" className="py-28 sm:py-36 bg-white dark:bg-bg-dark border-y border-border-light dark:border-border-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-20">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-text-light dark:text-text-dark mb-4">
            Development Roadmap
          </h2>
          <p className="font-sans text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            Our timeline for building the ultimate secure collaboration layer for GitHub. See what features are complete, in progress, and planned.
          </p>
        </div>

        {/* Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative border-l border-border-light dark:border-border-dark ml-4 md:ml-6 flex flex-col gap-16 text-left"
        >
          {milestones.map((milestone, idx) => {
            const StatusIcon = milestone.statusIcon;
            const Icon = milestone.icon;
            
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Timeline node dot indicator */}
                <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-white dark:bg-bg-dark border border-border-light dark:border-border-dark flex items-center justify-center transition-colors group-hover:border-border-light dark:group-hover:border-border-dark shadow-sm z-10">
                  <StatusIcon className={`h-3 w-3 ${milestone.status === 'Completed' ? 'text-emerald-500 fill-emerald-500/20' : milestone.status === 'In Progress' ? 'text-amber-500' : 'text-zinc-300 dark:text-zinc-700'}`} />
                </div>

                {/* Card Container */}
                <div
                  id={`card-roadmap-${idx}`}
                  className="bg-bg-light/40 dark:bg-card-dark/20 hover:bg-white dark:hover:bg-card-dark border border-border-light dark:border-border-dark hover:border-zinc-300 dark:hover:border-zinc-700 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col md:flex-row gap-6 items-start"
                >
                  {/* Phase Icon Banner */}
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-card-dark border border-border-light dark:border-border-dark flex items-center justify-center shrink-0 shadow-sm text-primary dark:text-zinc-300 transition-colors duration-300 group-hover:border-border-light dark:group-hover:border-border-dark">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                      <span className="text-[10px] font-bold tracking-wider text-text-muted-light dark:text-text-muted-dark uppercase">
                        {milestone.phase}
                      </span>
                      <span className="text-[10px] font-semibold text-text-muted-light dark:text-text-muted-dark">
                        • {milestone.time}
                      </span>
                      <span className={`inline-flex items-center text-[9px] font-bold px-2 py-0.5 rounded-full border ${milestone.statusColor}`}>
                        {milestone.status}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-base text-text-light dark:text-text-dark mb-3">
                      {milestone.title}
                    </h3>
                    <p className="font-sans text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-5 max-w-2xl">
                      {milestone.description}
                    </p>

                    {/* Sub-items checkmarks */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                      {milestone.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-text-light dark:text-text-dark/95">
                          <CheckCircle2 className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${milestone.status === 'Completed' ? 'text-emerald-500' : 'text-zinc-300 dark:text-zinc-700'}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
