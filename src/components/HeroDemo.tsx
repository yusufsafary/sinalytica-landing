import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Clock, BookOpen } from "lucide-react";
import { SiYoutube, SiTiktok, SiInstagram } from "react-icons/si";

const DEMOS = [
  {
    type: "YouTube",
    icon: SiYoutube,
    iconColor: "text-red-500",
    badge: "bg-red-600",
    url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
    title: "How to Build a $1M Startup in 12 Months",
    saved: "1h 42m",
    insights: [
      "Distribution beats product in saturated markets. Find your unfair channel first.",
      "Build for 100 users who love you, not 1000 who like you.",
      "Charge from day one. Free users give bad signal and burn runway.",
    ],
    keyPoint: "Growth = Retention x Acquisition",
  },
  {
    type: "TikTok",
    icon: SiTiktok,
    iconColor: "text-white",
    badge: "bg-gray-800",
    url: "https://tiktok.com/@neuroscience/video/7388",
    title: "Why Your Brain Hates Deep Work (Fix It)",
    saved: "3 min",
    insights: [
      "Dopamine spikes from notifications physically shrink your prefrontal cortex over time.",
      "25-minute focus blocks (Pomodoro) match natural ultradian rhythm cycles.",
      "Cold exposure for 2 min before work boosts norepinephrine by 300%.",
    ],
    keyPoint: "Peak focus window: 60-90 min after waking",
  },
  {
    type: "Instagram",
    icon: SiInstagram,
    iconColor: "text-pink-500",
    badge: "bg-gradient-to-r from-purple-600 to-pink-600",
    url: "https://instagram.com/p/design_mastery_post",
    title: "The Psychology of Colour in UI Design",
    saved: "8 min",
    insights: [
      "Blue increases trust by 34%, used by 33% of top brands globally.",
      "High contrast (4.5:1 ratio) is not just accessibility, it is conversion.",
      "Warm tones above the fold increase CTA click-through by up to 21%.",
    ],
    keyPoint: "Colour = emotion + conversion",
  },
  {
    type: "Article",
    icon: BookOpen,
    iconColor: "text-blue-400",
    badge: "bg-blue-700",
    url: "https://paulgraham.com/startupideas.html",
    title: "How to Get Startup Ideas by Paul Graham",
    saved: "22 min",
    insights: [
      "The best ideas come from noticing your own problems, not brainstorming.",
      "Schlep blindness hides the most valuable opportunities from view.",
      "Organic ideas beat manufactured ones: live in the future, notice what is missing.",
    ],
    keyPoint: "Ideas = Problems you personally face",
  },
];

const DOT_COLORS = ["bg-red-500/80", "bg-yellow-500/80", "bg-green-500/80"];

export default function HeroDemo() {
  const [index, setIndex] = useState(0);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProcessing(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % DEMOS.length);
        setProcessing(false);
      }, 600);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = DEMOS[index];
  const Icon = current.icon;

  return (
    <div className="w-full bg-[#111110] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col select-none">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#1a1a1a]">
        {DOT_COLORS.map((c, i) => <div key={i} className={`w-3 h-3 rounded-full ${c}`} />)}
        <span className="ml-2 text-xs text-gray-600 font-mono flex-1 truncate">sinalytic.app</span>
      </div>

      <div className="p-5 flex flex-col gap-4">
        {/* URL bar */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.input
              key={current.url}
              type="text"
              disabled
              value={current.url}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-20 text-sm text-gray-400 font-mono focus:outline-none"
            />
          </AnimatePresence>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {processing ? (
              <motion.div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }}>
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
            )}
            <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Result card */}
        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col"
            >
              {/* Header badges */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold text-white ${current.badge}`}>
                  <Icon className={`w-3 h-3`} />
                  {current.type}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                  <Clock className="w-3 h-3" /> Saved {current.saved}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white mb-3 leading-snug">{current.title}</h3>

              {/* Insights */}
              <div className="space-y-2 flex-1">
                {current.insights.map((insight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex gap-2.5 items-start"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <p className="text-xs text-gray-400 leading-relaxed">{insight}</p>
                  </motion.div>
                ))}
              </div>

              {/* Key point pill */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-3 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20"
              >
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Key takeaway · </span>
                <span className="text-[11px] text-gray-300">{current.keyPoint}</span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-1.5 pb-1">
          {DEMOS.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${i === index ? "w-5 bg-primary" : "w-1.5 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
