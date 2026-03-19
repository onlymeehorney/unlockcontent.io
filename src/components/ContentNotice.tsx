import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TriangleAlert } from 'lucide-react';

interface ContentNoticeProps {
  onAccept: () => void;
  onDecline: () => void;
}

const ContentNotice: React.FC<ContentNoticeProps> = ({ onAccept, onDecline }) => {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Blurred Background Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl"
        >
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/20">
              <TriangleAlert className="h-8 w-8 text-yellow-500" />
            </div>
          </div>

          {/* Title */}
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
            Content Notice
          </h2>

          {/* Message */}
          <p className="mb-8 text-sm leading-relaxed text-white/70">
            This link has restricted access. By continuing, you confirm you are of legal age in your jurisdiction.
          </p>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={onDecline}
              className="flex-1 rounded-full bg-green-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700 active:scale-95"
            >
              Go back
            </button>
            <button
              onClick={onAccept}
              className="flex-1 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white/90 active:scale-95"
            >
              Continue
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContentNotice;
