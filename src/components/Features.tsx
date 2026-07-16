import { motion } from 'framer-motion';
import {
  MessageSquare,
  GitPullRequest,
  ShieldCheck,
  FileImage,
  Loader,
  Pin,
  UserPlus,
  UserCheck,
  CheckCircle,
  FileCode,
  Flame,
  Palette,
  Layers,
} from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Direct Messaging',
    description: 'Start private chats with any GitHub user directly from their profile page.',
  },
  {
    icon: GitPullRequest,
    title: 'Repository Group Chats',
    description: 'Collaborate with the whole team in rooms linked automatically to your code repos.',
  },
  {
    icon: ShieldCheck,
    title: 'End-to-End Encryption',
    description: 'Zero-knowledge encryption using P-256 ECDH & AES-256-GCM. Your messages are server-invisible.',
  },
  {
    icon: FileImage,
    title: 'Media Sharing',
    description: 'Securely share images, base64 drawings, and screenshots directly in the chat.',
  },
  {
    icon: Loader,
    title: 'Typing Indicators',
    description: 'Real-time typing feedback that exists purely in-memory and is discarded when chat ends.',
  },
  {
    icon: Pin,
    title: 'Message Pinning',
    description: 'Pin up to 10 important messages or code snippets per room for easy reference.',
  },
  {
    icon: UserPlus,
    title: 'Invite Developers',
    description: 'Quickly invite collaborators to repository chats or secret rooms.',
  },
  {
    icon: UserCheck,
    title: 'Profile Cards',
    description: 'Hover over users to see their availability, recent work, and custom developer bio.',
  },
  {
    icon: CheckCircle,
    title: 'Availability Status',
    description: 'Set your focus, away, or online status so coworkers know when you are coding.',
  },
  {
    icon: FileCode,
    title: 'AI Code Analysis',
    description: 'Get automated AI analysis for shared code snippets directly in your threads.',
  },
  {
    icon: Flame,
    title: 'Burnable Chats',
    description: 'Create self-destructing rooms that erase history once all participants leave.',
  },
  {
    icon: Palette,
    title: 'Theme SDK',
    description: 'Customize the extension interface to blend perfectly with your favorite GitHub themes.',
  },
  {
    icon: Layers,
    title: 'Collaboration Cards',
    description: 'Embed issues, pull requests, and commit links as beautiful interactive previews.',
  },
];

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 4 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="features" className="py-28 sm:py-36 bg-white dark:bg-zinc-900 border-y border-border-light dark:border-border-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-20">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-text-light dark:text-text-dark mb-4">
            Built with Developers & Privacy in Mind
          </h2>
          <p className="font-sans text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            Everything you need for seamless developer communications, directly embedded inside your GitHub layout.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white dark:bg-zinc-950 border border-border-light dark:border-border-dark p-6 rounded-2xl flex flex-col text-left transition-colors duration-300 hover:border-zinc-400 dark:hover:border-zinc-700 shadow-sm"
              >
                <div className="text-primary dark:text-text-dark mb-4">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>

                <h3 className="font-display font-semibold text-sm text-text-light dark:text-text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="font-sans text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
