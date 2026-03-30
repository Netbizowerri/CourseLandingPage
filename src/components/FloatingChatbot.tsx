import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/ba0530a9ca0/for-form-embed-handler.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-[370px] sm:w-[400px] rounded-2xl overflow-hidden shadow-2xl border border-[#0F2A4A]/20 bg-white"
          >
            <div className="bg-[#0F2A4A] text-white px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#C9922A] rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-[#0F2A4A]" />
                </div>
                <div>
                  <p className="text-sm font-bold">Avery: Course Advisor</p>
                  <p className="text-[10px] text-white/60">Online now</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-[500px]">
              <iframe
                id="JotFormIFrame-019d34a714e97f609a4e86ad29584cdb4ef7"
                title="Avery: Course Advisor"
                allowTransparency
                allow="geolocation; microphone; camera; fullscreen"
                src="https://agent.jotform.com/019d34a714e97f609a4e86ad29584cdb4ef7?embedMode=iframe&autofocus=0&background=1&shadow=1"
                frameBorder="0"
                scrolling="no"
                className="w-full h-full border-none"
                onLoad={() => {
                  // @ts-ignore
                  if (window.jotformEmbedHandler) {
                    // @ts-ignore
                    window.jotformEmbedHandler(
                      "iframe[id='JotFormIFrame-019d34a714e97f609a4e86ad29584cdb4ef7']",
                      "https://www.jotform.com"
                    );
                  }
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#C9922A] text-[#0F2A4A] rounded-full shadow-2xl shadow-[#C9922A]/40 flex items-center justify-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
