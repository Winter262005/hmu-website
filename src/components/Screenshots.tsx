import { useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, Users, Key, AlertTriangle } from 'lucide-react';

const mockScreens = [
  {
    type: 'dm',
    title: 'Private End-to-End Encrypted DMs',
    description: 'Message developers right on their GitHub profiles. Keys are generated locally and never leave your browser.',
    icon: MessageSquare,
    badge: 'Secure DMs',
    content: (
      <div className="flex-1 flex flex-col h-full bg-zinc-50 dark:bg-zinc-950 text-left text-xs font-sans">
        <div className="px-4 py-3 bg-white dark:bg-zinc-900 border-b border-border-light dark:border-border-dark flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-text-light dark:text-text-dark">@octo_dev</span>
            <span className="text-[9px] bg-secondary/10 text-secondary px-1.5 py-0.5 rounded font-medium">E2EE Active</span>
          </div>
          <span className="text-[10px] text-text-muted-light dark:text-text-muted-dark">Online</span>
        </div>
        <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto max-h-[18.75rem]">
          <div className="self-start max-w-[80%] bg-zinc-200/80 dark:bg-zinc-800/80 p-2.5 rounded-lg rounded-tl-none text-text-light dark:text-text-dark">
            Hey! I saw your pull request on the parser. Looks solid!
          </div>
          <div className="self-end max-w-[80%] bg-primary text-white dark:bg-text-dark dark:text-zinc-950 p-2.5 rounded-lg rounded-tr-none">
            Thanks! Do you want to schedule a quick sync to review the compiler outputs?
          </div>
          <div className="self-start max-w-[80%] bg-zinc-200/80 dark:bg-zinc-800/80 p-2.5 rounded-lg rounded-tl-none text-text-light dark:text-text-dark">
            Sure, let's connect tomorrow morning. Send me your availability.
          </div>
        </div>
        <div className="p-3 bg-white dark:bg-zinc-900 border-t border-border-light dark:border-border-dark flex gap-2">
          <input readOnly value="Awesome, I'll send a slot soon." className="flex-1 bg-zinc-50 dark:bg-zinc-950 border border-border-light dark:border-border-dark rounded px-3 py-1.5 text-xs text-text-light dark:text-text-dark focus:outline-none" />
          <button className="bg-primary text-white dark:bg-text-dark dark:text-zinc-950 px-3 py-1.5 rounded font-medium text-xs">Send</button>
        </div>
      </div>
    ),
  },
  {
    type: 'group',
    title: 'Repository-Linked Group Chats',
    description: 'Automatically join chatrooms associated with any public or private GitHub repository to align with project members.',
    icon: Users,
    badge: 'Repo Channels',
    content: (
      <div className="flex-1 flex flex-col h-full bg-zinc-50 dark:bg-zinc-950 text-left text-xs font-sans">
        <div className="px-4 py-3 bg-white dark:bg-zinc-900 border-b border-border-light dark:border-border-dark flex justify-between items-center shadow-sm">
          <div>
            <span className="font-semibold text-text-light dark:text-text-dark">facebook/react</span>
            <span className="text-[9px] text-text-muted-light dark:text-text-muted-dark ml-2">#general</span>
          </div>
          <span className="text-[10px] text-text-muted-light dark:text-text-muted-dark">12 members</span>
        </div>
        <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto max-h-[18.75rem]">
          <div className="self-start max-w-[85%] bg-zinc-200/80 dark:bg-zinc-800/80 p-2.5 rounded-lg rounded-tl-none text-text-light dark:text-text-dark">
            <span className="font-bold text-[9px] block text-secondary mb-1">@dan_abramov</span>
            We need to check the concurrent rendering issues in React 19.
          </div>
          {/* PR Card link mock */}
          <div className="self-start max-w-[85%] bg-white dark:bg-zinc-900 border border-border-light dark:border-border-dark rounded-lg p-2.5 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="text-secondary font-bold bg-secondary/10 p-1.5 rounded text-[10px]">PR</div>
              <div>
                <span className="font-semibold text-text-light dark:text-text-dark block">#29402 Fix Concurrent UI hangs</span>
                <span className="text-[9px] text-text-muted-light dark:text-text-muted-dark">Opened by @acdlite</span>
              </div>
            </div>
            <a href="#" className="text-[10px] text-primary dark:text-text-dark font-semibold hover:underline">View PR</a>
          </div>
          <div className="self-end max-w-[85%] bg-primary text-white dark:bg-text-dark dark:text-zinc-950 p-2.5 rounded-lg rounded-tr-none">
            I'll review the concurrent schedules and run profiling metrics.
          </div>
        </div>
        <div className="p-3 bg-white dark:bg-zinc-900 border-t border-border-light dark:border-border-dark flex gap-2">
          <input readOnly value="Checking issue tracker..." className="flex-1 bg-zinc-50 dark:bg-zinc-950 border border-border-light dark:border-border-dark rounded px-3 py-1.5 text-xs text-text-light dark:text-text-dark focus:outline-none" />
          <button className="bg-primary text-white dark:bg-text-dark dark:text-zinc-950 px-3 py-1.5 rounded font-medium text-xs">Send</button>
        </div>
      </div>
    ),
  },
  {
    type: 'security',
    title: 'Backup Vault Security Settings',
    description: 'Export and encrypt your private cryptographic keys. Protect them with a local PIN and 600,000-iteration PBKDF2 vault sync.',
    icon: Key,
    badge: 'Vault Controls',
    content: (
      <div className="flex-1 flex flex-col h-full bg-zinc-50 dark:bg-zinc-950 text-left text-xs font-sans p-5">
        <div className="bg-white dark:bg-zinc-900 border border-border-light dark:border-border-dark rounded-xl p-4 flex flex-col gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="text-secondary">
              <Key className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-xs text-text-light dark:text-text-dark">Private Key Sync & Backup</h4>
              <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark">Securely sync keys to other browser sessions.</p>
            </div>
          </div>
          
          <div className="bg-zinc-100 dark:bg-zinc-800 border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark p-3 rounded-lg flex items-start gap-2 text-[10px] leading-relaxed">
            <AlertTriangle className="h-4 w-4 shrink-0 text-text-muted-light dark:text-text-muted-dark mt-0.5" />
            <span>Never share your Backup PIN. We do not store your PIN on our servers and cannot recover it if lost.</span>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-bold text-text-muted-light dark:text-text-muted-dark">ENTER SECURE BACKUP PIN</label>
            <div className="flex gap-2">
              <input type="password" value="••••••••" readOnly className="bg-zinc-50 dark:bg-zinc-950 border border-border-light dark:border-border-dark rounded px-3 py-1.5 text-xs text-text-light dark:text-text-dark flex-1" />
              <button className="bg-primary hover:bg-primary/95 text-white dark:bg-text-dark dark:text-zinc-950 font-semibold px-4 py-1.5 rounded transition-colors text-xs shadow-sm">
                Upload Backup
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Screenshots() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="screenshots" className="py-28 sm:py-36 bg-bg-light dark:bg-bg-dark border-b border-border-light dark:border-border-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div className="text-left max-w-2xl">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-text-light dark:text-text-dark mb-4">
              Designed to Blend Perfectly Into GitHub
            </h2>
            <p className="font-sans text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              Take a look at how HitMeUp brings real-time encrypted communications to your profile pages, repository codebases, and developer tools.
            </p>
          </div>
          {/* Scroll Buttons */}
          <div className="hidden md:flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded bg-white dark:bg-zinc-900 border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4.5 w-4.5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded bg-white dark:bg-zinc-900 border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
        >
          {mockScreens.map((screen, idx) => {
            return (
              <div
                key={idx}
                className="w-full md:w-[36.25rem] shrink-0 snap-start bg-white dark:bg-zinc-900 border border-border-light dark:border-border-dark rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6"
              >
                {/* Header */}
                <div className="text-left border-b border-border-light dark:border-border-dark pb-5">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">{screen.badge}</span>
                  <h3 className="font-display font-semibold text-lg text-text-light dark:text-text-dark mt-1">{screen.title}</h3>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed mt-2">
                    {screen.description}
                  </p>
                </div>

                {/* Simulated Browser Frame */}
                <div className="border border-border-light dark:border-border-dark rounded-xl overflow-hidden bg-white dark:bg-zinc-900 flex flex-col">
                  {/* Top bar */}
                  <div className="bg-[#FAF9F6] dark:bg-zinc-950 px-4 py-2 border-b border-border-light dark:border-border-dark flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-800 block"></span>
                      <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-800 block"></span>
                      <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-800 block"></span>
                    </div>
                    <div className="text-[9px] font-mono text-text-muted-light dark:text-text-muted-dark bg-white dark:bg-zinc-900 px-2 py-0.5 border border-border-light dark:border-border-dark rounded">
                      hitmeup.app/dashboard
                    </div>
                    <div className="w-8"></div>
                  </div>
                  
                  {/* Simulated Content */}
                  <div className="h-64 flex flex-col">
                    {screen.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
