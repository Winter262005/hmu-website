import { motion } from 'framer-motion';
import { ArrowRight, Inbox, Users, AtSign, Pin, Flame, HelpCircle, Settings, Paperclip } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-28 sm:pt-40 sm:pb-36 md:pt-48 md:pb-44 bg-bg-light dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display font-medium text-4xl sm:text-5xl tracking-tight text-text-light dark:text-text-dark leading-[1.12] mb-6"
            >
              Messaging built for GitHub developers.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-sans text-sm text-text-muted-light dark:text-text-muted-dark max-w-md mb-8 leading-relaxed"
            >
              Communicate, collaborate, and stay connected with developers right where you work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="https://chromewebstore.google.com/detail/hitmeup-for-github/kceaihfcmciaaaodlanhkfkahjggncpo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 text-xs font-semibold rounded-lg bg-primary hover:bg-primary/95 text-white dark:bg-text-dark dark:hover:bg-text-dark/95 dark:text-zinc-950 transition-colors shadow-sm"
              >
                Install Extension
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </a>
              <a
                href="#documentation"
                className="inline-flex items-center justify-center px-5 py-3 text-xs font-semibold rounded-lg bg-white dark:bg-zinc-900 text-text-light dark:text-text-dark border border-border-light dark:border-border-dark hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                View Documentation
              </a>
            </motion.div>
          </div>

          {/* Right Product Mockup Column */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative mx-auto max-w-[35rem] w-full"
            >
              {/* Main Simulated Browser Window */}
              <div className="relative bg-white dark:bg-zinc-900 border border-border-light dark:border-border-dark rounded-xl shadow-sm overflow-hidden font-sans flex flex-col">
                
                {/* Header Window Bar */}
                <div className="bg-[#FAF9F6] dark:bg-zinc-950 px-4 py-3 flex items-center border-b border-border-light dark:border-border-dark">
                  <div className="flex gap-1.5 mr-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800 block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800 block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800 block"></span>
                  </div>
                  <div className="text-[10px] font-mono text-text-muted-light dark:text-text-muted-dark bg-white dark:bg-zinc-900 border border-border-light dark:border-border-dark px-3 py-0.5 rounded flex-1 max-w-xs text-center mx-auto">
                    github.com
                  </div>
                  <div className="w-14"></div>
                </div>

                {/* Simulated Content Area (Chat Overlay Mockup) */}
                <div className="flex text-left h-76 bg-white dark:bg-zinc-900">
                  
                  {/* Left Sidebar Panel */}
                  <div className="w-44 border-r border-border-light dark:border-border-dark bg-[#FAF9F6] dark:bg-zinc-950 p-3.5 flex flex-col justify-between shrink-0">
                    <div>
                      {/* Brand name */}
                      <div className="flex items-center gap-1.5 mb-4">
                        <div className="w-5 h-5 bg-[#0F172A] dark:bg-zinc-800 rounded flex items-center justify-center text-white text-[6px] font-bold tracking-wider shrink-0 shadow-sm">
                          HMU
                        </div>
                        <span className="font-display font-semibold text-[10px] text-text-light dark:text-text-dark">
                          HitMeUp
                        </span>
                      </div>

                      {/* Nav Links */}
                      <ul className="space-y-1.5 text-[10px] text-text-muted-light dark:text-text-muted-dark font-medium">
                        <li>
                          <a href="#" className="flex items-center gap-2 py-1 px-1.5 rounded hover:bg-zinc-200/50 dark:hover:bg-zinc-900 transition-colors">
                            <Inbox className="h-3.5 w-3.5" />
                            Inbox
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center gap-2 py-1 px-1.5 rounded hover:bg-zinc-200/50 dark:hover:bg-zinc-900 transition-colors">
                            <Users className="h-3.5 w-3.5" />
                            Groups
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center gap-2 py-1 px-1.5 rounded hover:bg-zinc-200/50 dark:hover:bg-zinc-900 transition-colors">
                            <AtSign className="h-3.5 w-3.5" />
                            Mentions
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center gap-2 py-1 px-1.5 rounded hover:bg-zinc-200/50 dark:hover:bg-zinc-900 transition-colors">
                            <Pin className="h-3.5 w-3.5" />
                            Pinned
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center gap-2 py-1 px-1.5 rounded hover:bg-zinc-200/50 dark:hover:bg-zinc-900 transition-colors">
                            <Flame className="h-3.5 w-3.5" />
                            Burner
                          </a>
                        </li>
                      </ul>

                      {/* Recents List */}
                      <div className="mt-5">
                        <span className="text-[8px] font-bold text-text-muted-light/75 dark:text-text-muted-dark/75 tracking-wider uppercase block mb-1 px-1.5">
                          Recent
                        </span>
                        <ul className="space-y-1 text-[10px] text-text-muted-light dark:text-text-muted-dark">
                          <li>
                            <a href="#" className="block py-1 px-1.5 rounded hover:bg-zinc-200/50 dark:hover:bg-zinc-900 truncate">
                              shubham-chaudhary
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-1 px-1.5 rounded hover:bg-zinc-200/50 dark:hover:bg-zinc-900 truncate">
                              octo-coders
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-1.5 px-1.5 rounded bg-zinc-200/60 dark:bg-zinc-900 text-text-light dark:text-text-dark font-medium truncate">
                              ai-discussion
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex gap-2.5 text-text-muted-light dark:text-text-muted-dark pt-2.5 border-t border-border-light/60 dark:border-border-dark/60">
                      <Settings className="h-3.5 w-3.5 hover:text-text-light dark:hover:text-text-dark cursor-pointer" />
                      <HelpCircle className="h-3.5 w-3.5 hover:text-text-light dark:hover:text-text-dark cursor-pointer" />
                    </div>
                  </div>

                  {/* Right Chat Panel */}
                  <div className="flex-1 flex flex-col bg-white dark:bg-zinc-900">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-[#FAF9F6] dark:bg-zinc-950">
                      <div>
                        <span className="font-semibold text-xs text-text-light dark:text-text-dark block">
                          ai-discussion
                        </span>
                        <span className="text-[8px] text-text-muted-light dark:text-text-muted-dark block mt-0.5">
                          12 members
                        </span>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto text-[10px] leading-relaxed max-h-[13.75rem]">
                      
                      {/* Message 1 */}
                      <div className="flex gap-2.5 items-start">
                        <div className="w-6 h-6 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold text-[9px] shrink-0">
                          A
                        </div>
                        <div className="flex-1">
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-semibold text-text-light dark:text-text-dark">aaryun</span>
                            <span className="text-[8px] text-text-muted-light dark:text-text-muted-dark">11:20 AM</span>
                          </div>
                          <p className="text-text-muted-light dark:text-text-muted-dark mt-0.5">
                            Check out the new model training results. Looks promising 🚀
                          </p>

                          {/* File Attachment Card */}
                          <div className="mt-2.5 border border-border-light dark:border-border-dark rounded-lg p-2.5 bg-bg-light/40 dark:bg-zinc-950/40 flex items-center justify-between max-w-[13.75rem]">
                            <div className="flex items-center gap-2">
                              <Paperclip className="h-3.5 w-3.5 text-text-muted-light dark:text-text-muted-dark shrink-0" />
                              <div className="truncate">
                                <span className="font-medium text-text-light dark:text-text-dark block truncate">results.png</span>
                                <span className="text-[8px] text-text-muted-light dark:text-text-muted-dark block">1.2 MB</span>
                              </div>
                            </div>
                            <span className="text-[8px] font-bold text-accent hover:underline cursor-pointer">View</span>
                          </div>
                        </div>
                      </div>

                      {/* Message 2 */}
                      <div className="flex gap-2.5 items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[9px] shrink-0">
                          P
                        </div>
                        <div className="flex-1">
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-semibold text-text-light dark:text-text-dark">pranav</span>
                            <span className="text-[8px] text-text-muted-light dark:text-text-muted-dark">11:24 AM</span>
                          </div>
                          <p className="text-text-muted-light dark:text-text-muted-dark mt-0.5">
                            Amazing work! Let's review this in the meeting.
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* Input */}
                    <div className="p-3 border-t border-border-light dark:border-border-dark bg-[#FAF9F6] dark:bg-zinc-950">
                      <div className="bg-white dark:bg-zinc-900 border border-border-light dark:border-border-dark rounded px-2.5 py-1.5 flex gap-2 items-center">
                        <input
                          type="text"
                          placeholder="Reply in thread..."
                          readOnly
                          className="flex-1 bg-transparent text-[10px] text-text-light dark:text-text-dark focus:outline-none"
                        />
                        <button className="bg-primary hover:bg-primary/95 text-white dark:bg-text-dark dark:text-zinc-950 text-[9px] font-semibold px-2 py-0.5 rounded shadow-sm">
                          Send
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
