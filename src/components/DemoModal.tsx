import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import LiveDemo from "@/components/LiveDemo";

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DemoModal({ open, onClose }: DemoModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#0d0d0d]/90 backdrop-blur-md" />

          {/* Modal panel — bottom sheet on mobile, centered on sm+ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full sm:max-w-3xl bg-[#111] border border-white/10 sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col"
            style={{ maxHeight: "92dvh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag handle (mobile) */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-10 h-1 bg-white/20 rounded-full" />
            </div>

            {/* Sticky header with close button */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 border-b border-white/8 bg-[#111] rounded-t-2xl">
              <div>
                <p className="text-white font-bold text-base">Live Demo</p>
                <p className="text-gray-500 text-xs mt-0.5 hidden sm:block">Paste a link and watch Sinalytic extract the key insights</p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 flex items-center justify-center text-gray-300 hover:text-white transition-colors flex-shrink-0 ml-4"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable demo content */}
            <div className="overflow-y-auto flex-1 overscroll-contain">
              <div className="p-4 sm:p-6">
                <LiveDemo />
              </div>

              {/* Footer hint */}
              <div className="px-5 pb-6 text-center">
                <p className="text-gray-600 text-xs">
                  Want the full experience?{" "}
                  <a
                    href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk"
                    className="text-primary hover:underline"
                    onClick={onClose}
                  >
                    Download the Android APK
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
