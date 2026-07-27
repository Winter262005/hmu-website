import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, Users, Key, Lock, Shield, Settings, User, Folder } from 'lucide-react';

const mockScreens = [
  {
    type: 'dm',
    title: 'Injected Profile Direct Messaging',
    description: 'Adds a secure E2EE chat drawer directly into GitHub user profile pages. Cryptographic keys are generated locally and never leave your sandbox.',
    icon: MessageSquare,
    url: 'github.com/octocat',
    content: (
      <div className="flex-1 flex flex-col h-full bg-bg-light dark:bg-bg-dark text-left text-xs font-sans relative">
        
        {/* GitHub Injected Profile Mockup */}
        <div className="flex-1 p-3.5 flex flex-col justify-between overflow-y-auto select-none bg-white dark:bg-card-dark pr-[10.5rem] transition-colors duration-300">
          <div>
            {/* GitHub Top bar */}
            <div className="flex items-center gap-1.5 pb-2 mb-3 border-b border-border-light dark:border-border-dark">
              <div className="w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                <User className="h-2 w-2 text-zinc-500" />
              </div>
              <div className="h-1.5 w-16 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
            </div>

            {/* Profile Info */}
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-border-light dark:border-border-dark flex items-center justify-center shadow-sm text-zinc-500">
                <User className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-semibold text-[10px] text-text-light dark:text-text-dark leading-tight font-display">The Octocat</h4>
                <p className="text-[8px] text-text-muted-light dark:text-text-muted-dark leading-none">octocat</p>
              </div>
            </div>

            {/* Injected Secure Chat Button */}
            <div className="mt-3 flex gap-1.5">
              <div className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-[8px] border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark">Follow</div>
              <div className="px-2 py-0.5 rounded bg-secondary/15 text-secondary border border-secondary/20 dark:bg-secondary/20 dark:text-zinc-200 text-[8px] font-semibold flex items-center gap-0.5">
                <Lock className="h-2 w-2" /> Message
              </div>
            </div>
            
            {/* Tabs */}
            <div className="mt-4 border-b border-border-light dark:border-border-dark pb-1 text-[8px] flex gap-2 text-text-muted-light dark:text-text-muted-dark font-medium">
              <span className="text-text-light dark:text-text-dark border-b-2 border-[#FD8C73] pb-1">Overview</span>
              <span>Repositories (12)</span>
            </div>
          </div>
        </div>

        {/* Injected E2EE Sidebar Drawer */}
        <div className="absolute right-0 top-0 bottom-0 w-[10.5rem] bg-[#FAFAF8] dark:bg-bg-dark border-l border-border-light dark:border-border-dark flex flex-col z-20 shadow-lg transition-colors duration-300">
          <div className="px-2 py-1.5 bg-white dark:bg-card-dark border-b border-border-light dark:border-border-dark flex items-center justify-between shrink-0">
            <span className="font-bold text-[8px] text-text-light dark:text-text-dark truncate">octocat (E2EE)</span>
          </div>
          
          <div className="flex-1 p-2 flex flex-col gap-2 overflow-y-auto max-h-[10.5rem] no-scrollbar">
            <div className="self-start max-w-[90%] bg-white dark:bg-zinc-800 border border-border-light dark:border-border-dark p-1.5 rounded-lg rounded-tl-none text-[8px] text-text-light dark:text-text-dark leading-relaxed">
              Check out the parser build outputs. Looks clean!
            </div>
            <div className="self-end max-w-[90%] bg-primary text-white dark:bg-text-dark dark:text-zinc-950 p-1.5 rounded-lg rounded-tr-none text-[8px] leading-relaxed">
              Great! Syncing changes now.
            </div>
          </div>
          
          <div className="p-1.5 border-t border-border-light dark:border-border-dark bg-white dark:bg-card-dark">
            <div className="bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded px-1 py-0.5 flex gap-1 items-center">
              <input readOnly value="Awesome!" className="flex-1 bg-transparent text-[8px] text-text-light dark:text-text-dark focus:outline-none select-none" />
              <button className="bg-primary text-white dark:bg-text-dark dark:text-zinc-950 text-[7px] font-semibold px-1 py-0.2 rounded shadow-sm">Send</button>
            </div>
          </div>
        </div>

      </div>
    ),
  },
  {
    type: 'group',
    title: 'Repository Group Channels',
    description: 'Injects automated group chat tabs into GitHub repositories. Discuss bugs, pull requests, and commits securely with the codebase contributors.',
    icon: Users,
    url: 'github.com/facebook/react',
    content: (
      <div className="flex-1 flex flex-col h-full bg-bg-light dark:bg-bg-dark text-left text-xs font-sans relative">
        
        {/* GitHub Injected Repo Page Mockup */}
        <div className="flex-1 p-3.5 flex flex-col justify-between overflow-y-auto select-none bg-white dark:bg-card-dark pr-[10.5rem] transition-colors duration-300">
          <div>
            {/* GitHub Repo Title Header */}
            <div className="flex items-center gap-1 pb-2 border-b border-border-light dark:border-border-dark">
              <div className="w-3.5 h-3.5 bg-zinc-100 dark:bg-zinc-800 rounded flex items-center justify-center shrink-0">
                <Folder className="h-2.5 w-2.5 text-zinc-500" />
              </div>
              <span className="text-[9px] font-bold text-accent">facebook/react</span>
              <span className="text-[7px] bg-zinc-100 dark:bg-zinc-800 border border-border-light dark:border-border-dark px-1 rounded ml-1.5 font-medium text-text-muted-light dark:text-text-muted-dark">Public</span>
            </div>

            {/* Repo code tabs */}
            <div className="mt-3 flex gap-2 text-[8px] font-semibold text-text-muted-light dark:text-text-muted-dark pb-1 border-b border-border-light dark:border-border-dark">
              <span className="text-text-light dark:text-text-dark border-b-2 border-[#FD8C73] pb-1">Code</span>
              <span>Issues (430)</span>
              <span>Pull Requests (12)</span>
            </div>

            {/* PR Mock */}
            <div className="mt-3 p-2 border border-border-light dark:border-border-dark rounded bg-bg-light/40 dark:bg-bg-dark/20">
              <div className="text-[8px] font-semibold text-text-light dark:text-text-dark">#29402 Fix Concurrent UI hangs</div>
              <p className="text-[7px] text-text-muted-light dark:text-text-muted-dark mt-0.5">Opened by @acdlite</p>
            </div>
          </div>
        </div>

        {/* Injected E2EE Sidebar Drawer */}
        <div className="absolute right-0 top-0 bottom-0 w-[10.5rem] bg-[#FAFAF8] dark:bg-bg-dark border-l border-border-light dark:border-border-dark flex flex-col z-20 shadow-lg transition-colors duration-300">
          <div className="px-2 py-1.5 bg-white dark:bg-card-dark border-b border-border-light dark:border-border-dark flex items-center justify-between shrink-0">
            <span className="font-bold text-[8px] text-text-light dark:text-text-dark truncate">react-general (E2EE)</span>
          </div>
          
          <div className="flex-1 p-2 flex flex-col gap-2 overflow-y-auto max-h-[10.5rem] no-scrollbar">
            <div className="self-start max-w-[90%] bg-white dark:bg-zinc-800 border border-border-light dark:border-border-dark p-1.5 rounded-lg rounded-tl-none text-[8px] text-text-light dark:text-text-dark leading-relaxed">
              <span className="font-bold text-[7px] text-secondary block">@dan_abramov</span>
              Concurrent rendering is looking solid in build.
            </div>
            <div className="self-end max-w-[90%] bg-primary text-white dark:bg-text-dark dark:text-zinc-950 p-1.5 rounded-lg rounded-tr-none text-[8px] leading-relaxed">
              Agreed, running profiling.
            </div>
          </div>
          
          <div className="p-1.5 border-t border-border-light dark:border-border-dark bg-white dark:bg-card-dark">
            <div className="bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded px-1 py-0.5 flex gap-1 items-center">
              <input readOnly value="Running tests..." className="flex-1 bg-transparent text-[8px] text-text-light dark:text-text-dark focus:outline-none select-none" />
              <button className="bg-primary text-white dark:bg-text-dark dark:text-zinc-950 text-[7px] font-semibold px-1 py-0.2 rounded shadow-sm">Send</button>
            </div>
          </div>
        </div>

      </div>
    ),
  },
  {
    type: 'security',
    title: 'Backup Vault Settings',
    description: 'Features a dedicated local dashboard inside the extension options. Sync keys securely across other browsers with 600,000-iteration PBKDF2 vault encryption.',
    icon: Key,
    url: 'chrome-extension://hitmeup/options.html',
    content: (
      <div className="flex-1 flex flex-col h-full bg-bg-light dark:bg-bg-dark text-left text-xs font-sans p-4 transition-colors duration-300">
        <div className="bg-white dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-3 flex flex-col gap-3 shadow-sm transition-colors duration-300">
          
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="text-secondary">
              <Settings className="h-4.5 w-4.5" />
            </div>
            <div>
              <h4 className="font-semibold text-[10px] text-text-light dark:text-text-dark leading-tight font-display">Cryptographic Vault Options</h4>
              <p className="text-[8px] text-text-muted-light dark:text-text-muted-dark leading-none mt-0.5">Secure local key sync and backups.</p>
            </div>
          </div>

          {/* Secure Warning banner */}
          <div className="bg-secondary/5 dark:bg-bg-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark p-2 rounded-lg flex items-start gap-1.5 text-[8px] leading-normal">
            <Shield className="h-3.5 w-3.5 shrink-0 text-secondary mt-0.2" />
            <span>Passphrases never contact our database. Vault syncing uses locally derived salt and PBKDF2 keys. Keep your PIN safe.</span>
          </div>

          {/* Password box */}
          <div className="flex flex-col gap-1">
            <label className="text-[7px] font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">Secure Backup PIN</label>
            <div className="flex gap-1.5">
              <input type="password" value="••••••••" readOnly className="bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded px-2.5 py-1 text-[9px] text-text-light dark:text-text-dark flex-1 select-none" />
              <button className="bg-primary hover:bg-primary/95 text-white dark:bg-text-dark dark:text-zinc-950 font-semibold px-3 py-1 rounded transition-colors text-[8px] shadow-sm">
                Upload Vault
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
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      if (index >= 0 && index < mockScreens.length) {
        setActiveIndex(index);
      }
    }
  };

  return (
    <section id="screenshots" className="py-20 md:py-16 md:min-h-screen md:flex md:flex-col md:justify-center bg-bg-light dark:bg-bg-dark border-b border-border-light dark:border-border-dark transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="text-left max-w-2xl">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-text-light dark:text-text-dark mb-4">
              Integrated Seamlessly Inside GitHub
            </h2>
            <p className="font-sans text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              Explore how the HitMeUp browser extension operates natively inside the GitHub interface, injecting direct communication tools without disrupting your coding workspace.
            </p>
          </div>
          
          {/* Scroll Buttons */}
          <div className="hidden md:flex gap-3 mt-6 md:mt-0">
            <button
              id="btn-carousel-left"
              onClick={() => scroll('left')}
              className="p-2 rounded bg-white dark:bg-card-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-bg-light dark:hover:bg-bg-dark transition-colors shadow-sm cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4.5 w-4.5" />
            </button>
            <button
              id="btn-carousel-right"
              onClick={() => scroll('right')}
              className="p-2 rounded bg-white dark:bg-card-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-bg-light dark:hover:bg-bg-dark transition-colors shadow-sm cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
        >
          {mockScreens.map((screen, idx) => {
            return (
              <div
                key={idx}
                className="w-full md:w-[36.25rem] shrink-0 snap-start bg-white dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6"
              >
                {/* Header */}
                <div className="text-left border-b border-border-light dark:border-border-dark pb-5">
                  <h3 className="font-display font-semibold text-lg text-text-light dark:text-text-dark mt-1">{screen.title}</h3>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed mt-2 font-sans">
                    {screen.description}
                  </p>
                </div>

                {/* Simulated Browser Frame (GitHub page) */}
                <div className="border border-border-light dark:border-border-dark rounded-xl overflow-hidden bg-white dark:bg-card-dark flex flex-col shadow-sm">
                  {/* Top bar */}
                  <div className="bg-[#FAF9F6] dark:bg-bg-dark px-4 py-2 border-b border-border-light dark:border-border-dark flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-800 block"></span>
                      <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-800 block"></span>
                      <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-800 block"></span>
                    </div>
                    <div className="text-[9px] font-mono text-text-muted-light dark:text-text-muted-dark bg-white dark:bg-card-dark px-2 py-0.5 border border-border-light dark:border-border-dark rounded">
                      {screen.url}
                    </div>
                    <div className="w-8"></div>
                  </div>
                  
                  {/* Simulated Content */}
                  <div className="h-64 flex flex-col bg-bg-light dark:bg-bg-dark">
                    {screen.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {mockScreens.map((_, idx) => (
            <button
              id={`btn-carousel-dot-${idx}`}
              key={idx}
              onClick={() => {
                if (scrollRef.current) {
                  const clientWidth = scrollRef.current.clientWidth;
                  scrollRef.current.scrollTo({ left: idx * (clientWidth + 32), behavior: 'smooth' });
                  setActiveIndex(idx);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx ? 'w-6 bg-primary dark:bg-text-dark' : 'bg-zinc-300 dark:bg-zinc-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
