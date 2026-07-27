import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Lock, User, Send } from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
  isMe: boolean;
}

const scenario = [
  {
    action: 'message',
    data: { id: 1, sender: 'shubhampc', text: "Hey! Ready to review the new compiler features?", time: "11:24 AM", isMe: true }
  },
  {
    action: 'typing',
    sender: 'octocat',
    delay: 1500
  },
  {
    action: 'message',
    data: { id: 2, sender: 'octocat', text: "Hey! Absolutely. HitMeUp makes it so easy to discuss right here on my profile.", time: "11:25 AM", isMe: false }
  },
  {
    action: 'typing',
    sender: 'shubhampc',
    delay: 1500
  },
  {
    action: 'message',
    data: { id: 3, sender: 'shubhampc', text: "Exactly. The Diffie-Hellman keys are generated on-device, so it's 100% E2EE.", time: "11:25 AM", isMe: true }
  },
  {
    action: 'typing',
    sender: 'octocat',
    delay: 2000
  },
  {
    action: 'message',
    data: { id: 4, sender: 'octocat', text: "Amazing! Let's pull up the PR and look at the logs together.", time: "11:26 AM", isMe: false }
  }
];

export default function Hero() {
  // Chat typing simulation states
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSender, setTypingSender] = useState('');
  const [step, setStep] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    const runStep = () => {
      if (step >= scenario.length) {
        // Reset after a delay at the end of the simulation loop
        timer = setTimeout(() => {
          setMessages([]);
          setIsTyping(false);
          setStep(0);
        }, 4000);
        return;
      }

      const current = scenario[step];

      if (current.action === 'message') {
        setIsTyping(false);
        setMessages(prev => [...prev, current.data as Message]);
        setStep(prev => prev + 1);
      } else if (current.action === 'typing') {
        setIsTyping(true);
        setTypingSender(current.sender || '');
        timer = setTimeout(() => {
          setStep(prev => prev + 1);
        }, current.delay || 1500);
      }
    };

    timer = setTimeout(runStep, step === 0 ? 1000 : 1500);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:min-h-screen md:flex md:flex-col md:justify-center bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      
      {/* NO background gradients, simple, clean layout */}

      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display font-medium text-4xl sm:text-5xl tracking-tight text-text-light dark:text-text-dark leading-[1.15] mb-6"
            >
              The collaboration layer for GitHub.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-sans text-sm sm:text-base text-text-muted-light dark:text-text-muted-dark max-w-md mb-8 leading-relaxed"
            >
              Communicate, share code, and sync in real time with developers directly inside their profile and repository pages.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                id="lnk-install-chrome-hero"
                href="https://chromewebstore.google.com/detail/hitmeup-for-github/kceaihfcmciaaaodlanhkfkahjggncpo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold rounded-lg bg-primary hover:bg-primary/95 text-white dark:bg-text-dark dark:hover:bg-text-dark/95 dark:text-zinc-950 transition-colors shadow-sm gap-2"
              >
                Install Extension
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                id="lnk-how-to-use-hero"
                href="/welcome/index.html"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold rounded-lg bg-white dark:bg-card-dark text-text-light dark:text-text-dark border border-border-light dark:border-border-dark hover:bg-bg-light dark:hover:bg-bg-dark transition-all shadow-sm"
              >
                How to Use
              </a>
            </motion.div>
          </div>

          {/* Right Column: Actual Injected Product Mockup */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative mx-auto max-w-[38rem] w-full"
            >
              
              {/* Simulated Browser Frame (GitHub page) */}
              <div className="relative bg-white dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl shadow-lg overflow-hidden font-sans flex flex-col transition-colors duration-300">
                
                {/* Browser Top Window Bar */}
                <div className="bg-[#F6F8FA] dark:bg-bg-dark px-4 py-2.5 flex items-center border-b border-border-light dark:border-border-dark gap-2">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800 block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800 block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800 block"></span>
                  </div>
                  <div className="text-[10px] font-mono text-text-muted-light dark:text-text-muted-dark bg-white dark:bg-card-dark border border-border-light dark:border-border-dark px-3 py-0.5 rounded flex-1 max-w-[15rem] text-center mx-auto truncate select-none">
                    github.com/octocat
                  </div>
                  <div className="w-14"></div>
                </div>

                {/* Simulated Content Area: GitHub Profile Page with HitMeUp injected sidebar */}
                <div className="flex flex-col md:flex-row text-left h-[20rem] bg-white dark:bg-card-dark relative overflow-hidden transition-colors duration-300">
                  
                  {/* GitHub Layout Content Panel */}
                  <div className="flex-1 p-4 flex flex-col justify-between overflow-y-auto select-none bg-white dark:bg-card-dark pr-[14.5rem]">
                    
                    {/* Simulated GitHub Profile Info */}
                    <div>
                      {/* GitHub Top header strip mockup */}
                      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-border-light dark:border-border-dark">
                        <div className="w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                          <User className="h-3 w-3 text-zinc-500" />
                        </div>
                        <div className="h-2 w-20 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                        <div className="h-2 w-10 bg-zinc-200 dark:bg-zinc-800 rounded ml-auto"></div>
                      </div>

                      {/* Profile details */}
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 shrink-0 border border-border-light dark:border-border-dark flex items-center justify-center shadow-sm">
                          <User className="h-6 w-6 text-zinc-500" />
                        </div>
                        <div className="flex-1">
                          <h2 className="font-semibold text-xs text-text-light dark:text-text-dark font-display leading-tight">The Octocat</h2>
                          <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark leading-none mt-0.5">octocat</p>
                          <p className="text-[9px] text-text-muted-light dark:text-text-muted-dark mt-2 leading-tight">GitHub's mascot and open-source enthusiast.</p>
                        </div>
                      </div>

                      {/* Injected Action Buttons (HitMeUp Custom Extension elements) */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        <button className="px-2.5 py-1 rounded bg-[#F6F8FA] dark:bg-bg-dark border border-border-light dark:border-border-dark text-[9px] font-medium text-text-light dark:text-text-dark select-none cursor-default">
                          Follow
                        </button>
                        <button className="px-2.5 py-1 rounded bg-[#F6F8FA] dark:bg-bg-dark border border-border-light dark:border-border-dark text-[9px] font-medium text-text-light dark:text-text-dark select-none cursor-default">
                          Sponsor
                        </button>
                        {/* Injected Secure HitMeUp Button */}
                        <div className="relative group/btn cursor-default">
                          <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-secondary/15 text-secondary border border-secondary/20 dark:bg-secondary/20 dark:text-zinc-200 text-[9px] font-semibold shadow-sm">
                            <Lock className="h-2.5 w-2.5" />
                            Message (Secure)
                          </span>
                        </div>
                      </div>

                      {/* Repos tabs list mockup */}
                      <div className="mt-5 border-b border-border-light dark:border-border-dark flex gap-3 text-[9px] font-semibold text-text-muted-light dark:text-text-muted-dark pb-1.5">
                        <span className="text-text-light dark:text-text-dark border-b-2 border-[#FD8C73] pb-1.5">Overview</span>
                        <span>Repositories (12)</span>
                        <span>Projects</span>
                      </div>

                      {/* Repository card pins mock */}
                      <div className="grid grid-cols-1 gap-2 mt-3">
                        <div className="p-2 border border-border-light dark:border-border-dark rounded bg-bg-light/50 dark:bg-bg-dark/20 text-left">
                          <span className="text-[9px] font-semibold text-accent hover:underline">hello-world</span>
                          <p className="text-[8px] text-text-muted-light dark:text-text-muted-dark mt-1 leading-normal font-sans">My very first repository on GitHub!</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Injected E2EE Sidebar Chat Drawer (The Extension UI) */}
                  <div className="absolute right-0 top-0 bottom-0 w-[14.5rem] bg-[#FAFAF8] dark:bg-bg-dark border-l border-border-light dark:border-border-dark flex flex-col z-20 shadow-xl transition-colors duration-300">
                    
                    {/* Sidebar Header */}
                    <div className="px-3.5 py-2.5 bg-white dark:bg-card-dark border-b border-border-light dark:border-border-dark flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-secondary flex items-center justify-center text-[5px] font-bold text-white shadow-sm">
                          ✓
                        </div>
                        <span className="font-semibold text-[10px] text-text-light dark:text-text-dark block">
                          octocat (E2EE)
                        </span>
                      </div>
                    </div>

                    {/* Messages Window */}
                    <div className="flex-1 p-3.5 flex flex-col gap-3 overflow-y-auto max-h-[14rem] no-scrollbar">
                      
                      <div className="text-[8px] text-center text-text-muted-light dark:text-text-muted-dark bg-zinc-200/50 dark:bg-zinc-800/60 py-1 px-2 rounded border border-border-light/40 dark:border-border-dark/40 max-w-[85%] mx-auto font-mono flex items-center justify-center gap-1 shadow-sm select-none">
                        <Lock className="h-2 w-2" />
                        ECDH P-256 Tunnel Established
                      </div>

                      <AnimatePresence>
                        {messages.map((msg) => (
                          <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 4, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className={`flex flex-col max-w-[85%] ${msg.isMe ? 'self-end items-end' : 'self-start items-start'}`}
                          >
                            <span className="text-[7px] text-text-muted-light dark:text-text-muted-dark mb-0.5 px-0.5">
                              {msg.sender} • {msg.time}
                            </span>
                            <div
                              className={`p-2 rounded-xl text-[9px] leading-relaxed shadow-sm ${
                                msg.isMe
                                  ? 'bg-primary text-white dark:bg-text-dark dark:text-zinc-950 rounded-tr-none'
                                  : 'bg-white dark:bg-zinc-800 text-text-light dark:text-text-dark border border-border-light dark:border-border-dark rounded-tl-none'
                              }`}
                            >
                              {msg.text}
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      {/* Typing indicator bubble */}
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 2 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="self-start flex flex-col items-start max-w-[85%]"
                        >
                          <span className="text-[7px] text-text-muted-light dark:text-text-muted-dark mb-0.5 px-0.5">
                            {typingSender} is typing
                          </span>
                          <div className="bg-white dark:bg-zinc-800 border border-border-light dark:border-border-dark px-2.5 py-1.5 rounded-xl rounded-tl-none flex gap-1 items-center shadow-sm select-none">
                            <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce shrink-0" style={{ animationDelay: '0ms' }} />
                            <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce shrink-0" style={{ animationDelay: '150ms' }} />
                            <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce shrink-0" style={{ animationDelay: '300ms' }} />
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Sidebar Input Form */}
                    <div className="p-2.5 bg-white dark:bg-card-dark border-t border-border-light dark:border-border-dark shrink-0">
                      <div className="bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded p-1.5 flex gap-1.5 items-center">
                        <input
                          id="mock-chat-input"
                          type="text"
                          placeholder="Secure chat message..."
                          readOnly
                          value=""
                          className="flex-1 bg-transparent text-[9px] text-text-light dark:text-text-dark focus:outline-none select-none cursor-default"
                        />
                        <button
                          id="btn-mock-chat-send"
                          className="bg-primary hover:bg-primary/95 text-white dark:bg-text-dark dark:text-zinc-950 p-1 rounded shadow-sm flex items-center justify-center"
                          aria-label="Send mock message"
                        >
                          <Send className="h-2.5 w-2.5" />
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
