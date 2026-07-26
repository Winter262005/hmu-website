import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is HitMeUp free?',
    answer: 'Yes! The basic messaging features, standard group chats, media sharing, and basic profile capabilities are 100% free forever.',
  },
  {
    question: 'Is communication encrypted?',
    answer: 'Absolutely. HitMeUp utilizes end-to-end encryption. All DMs and private room messages are encrypted locally on your machine using standard Web Crypto APIs (AES-256-GCM and ECDH P-256) before they reach our databases. No one—not even our team—can read your chats.',
  },
  {
    question: 'Does it work with GitHub?',
    answer: 'Yes. HitMeUp is designed as a browser extension that directly integrates with GitHub.com. It injects chat buttons and inbox badges into the page, allowing you to message other developers without leaving your workflow.',
  },
  {
    question: 'How do I install it?',
    answer: 'You can install it directly from the Chrome Web Store. Once added to your browser, simply visit GitHub.com, sign in with your GitHub account, and start chatting.',
  },
  {
    question: 'Is Pro required?',
    answer: 'No, Pro is entirely optional. It unlocks additional features like AI-powered code analysis, interactive collaboration cards, themes, and status customizations, but all core messaging functions remain completely free.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 sm:py-36 bg-[#FAFAF8] dark:bg-bg-dark border-b border-border-light dark:border-border-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-16">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-text-light dark:text-text-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            Got questions? We have got answers. If you need anything else, feel free to reach out.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden shadow-sm transition-colors"
              >
                <button
                  id={`btn-faq-item-${idx}`}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 font-display font-medium text-text-light dark:text-text-dark text-sm sm:text-base hover:text-primary dark:hover:text-primary transition-colors text-left"
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-text-muted-light dark:text-text-muted-dark shrink-0"
                  >
                    <ChevronDown className="h-4.5 w-4.5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed font-sans border-t border-border-light dark:border-border-dark pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
