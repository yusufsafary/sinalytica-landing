import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiYoutube, SiTiktok, SiInstagram } from "react-icons/si";
import { BookOpen, Search, Bell, Settings, ChevronRight, Star, Zap, Clock } from "lucide-react";

const SCREENS = [
  {
    id: "home",
    label: "Home Feed",
    content: (
      <div className="flex flex-col h-full bg-[#0a0a0a]">
        {/* App header */}
        <div className="px-4 pt-4 pb-3 flex items-center justify-between">
          <span className="text-white font-bold text-base">Sinalytica</span>
          <div className="flex gap-3">
            <Bell className="w-4 h-4 text-gray-400" />
            <Settings className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        {/* Search bar */}
        <div className="mx-4 mb-3 bg-white/8 rounded-xl px-3 py-2 flex items-center gap-2">
          <Search className="w-3.5 h-3.5 text-gray-500" />
          <span className="text-gray-500 text-xs">Paste any link…</span>
        </div>
        {/* Cards */}
        <div className="flex-1 overflow-hidden px-4 space-y-2.5">
          {[
            { icon: SiYoutube, color: "bg-red-600", type: "YouTube", title: "Why Sleep Matters More Than Diet", time: "2h saved", stars: "4.9" },
            { icon: SiTiktok, color: "bg-gray-700", type: "TikTok", title: "The $0 Marketing Strategy", time: "18m saved", stars: "4.7" },
            { icon: SiInstagram, color: "bg-pink-700", type: "Instagram", title: "Minimal Desk Setup 2025", time: "5m saved", stars: "4.8" },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 + 0.3 }}
                className="bg-white/5 rounded-xl p-3 border border-white/5"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`${card.color} rounded px-1.5 py-0.5 flex items-center gap-1`}>
                    <Icon className="w-2.5 h-2.5 text-white" />
                    <span className="text-[9px] text-white font-bold">{card.type}</span>
                  </span>
                  <span className="text-[9px] text-gray-500 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />{card.time}
                  </span>
                  <span className="ml-auto text-[9px] text-yellow-400 flex items-center gap-0.5">
                    <Star className="w-2.5 h-2.5 fill-yellow-400" />{card.stars}
                  </span>
                </div>
                <p className="text-white text-[11px] font-semibold leading-snug">{card.title}</p>
              </motion.div>
            );
          })}
        </div>
        {/* Bottom nav */}
        <div className="flex items-center justify-around py-3 border-t border-white/5 mt-2">
          {[
            { icon: "🏠", label: "Home", active: true },
            { icon: "🔍", label: "Explore", active: false },
            { icon: "📚", label: "Library", active: false },
            { icon: "👤", label: "Profile", active: false },
          ].map((tab) => (
            <div key={tab.label} className="flex flex-col items-center gap-0.5">
              <span className="text-base">{tab.icon}</span>
              <span className={`text-[8px] ${tab.active ? "text-primary" : "text-gray-600"}`}>{tab.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "summary",
    label: "AI Summary",
    content: (
      <div className="flex flex-col h-full bg-[#0a0a0a]">
        <div className="px-4 pt-4 pb-2 flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-gray-400 rotate-180" />
          <span className="text-gray-400 text-xs">Back</span>
        </div>
        <div className="px-4 flex-1 overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-red-600 rounded px-2 py-0.5 flex items-center gap-1">
              <SiYoutube className="w-3 h-3 text-white" />
              <span className="text-[9px] text-white font-bold">YouTube</span>
            </span>
            <span className="text-[9px] text-gray-500 flex items-center gap-1">
              <Zap className="w-2.5 h-2.5 text-primary" /> Extracted in 3.2s
            </span>
          </div>
          <h3 className="text-white text-sm font-bold mb-1 leading-snug">How to Build a $1M Startup in 12 Months</h3>
          <p className="text-gray-500 text-[9px] mb-4">1h 42m → 4 key insights</p>
          <div className="space-y-2.5">
            {[
              "Distribution beats product in crowded markets",
              "Charge from day one — free users give bad signal",
              "Build for 100 users who love you, not 1000 who like you",
              "Your unfair advantage is your actual moat",
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12 + 0.2 }}
                className="flex gap-2 items-start"
              >
                <div className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-[8px] font-bold mt-0.5">
                  {i + 1}
                </div>
                <p className="text-gray-300 text-[10px] leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <p className="text-[9px] text-primary font-bold uppercase tracking-wider mb-0.5">Key Takeaway</p>
            <p className="text-[10px] text-gray-300">Distribution = Growth. Build your channel first.</p>
          </div>
        </div>
        <div className="px-4 pb-4 pt-2 flex gap-2">
          <button className="flex-1 h-8 rounded-full bg-primary text-white text-[10px] font-bold">Save Offline</button>
          <button className="flex-1 h-8 rounded-full border border-white/20 text-white text-[10px] font-medium">Share</button>
        </div>
      </div>
    ),
  },
  {
    id: "offline",
    label: "Offline Library",
    content: (
      <div className="flex flex-col h-full bg-[#0a0a0a]">
        <div className="px-4 pt-4 pb-3">
          <h2 className="text-white font-bold text-sm">My Library</h2>
          <p className="text-gray-500 text-[10px] mt-0.5">12 summaries · Available offline</p>
        </div>
        <div className="flex gap-2 px-4 mb-3">
          {["All", "YouTube", "TikTok", "Articles"].map((f, i) => (
            <span key={f} className={`text-[9px] px-2.5 py-1 rounded-full font-medium ${i === 0 ? "bg-primary text-white" : "bg-white/5 text-gray-400"}`}>
              {f}
            </span>
          ))}
        </div>
        <div className="flex-1 overflow-hidden px-4 space-y-2">
          {[
            { icon: SiYoutube, color: "bg-red-600", title: "Quantum Computing Explained", date: "Today", offline: true },
            { icon: SiTiktok, color: "bg-gray-700", title: "3 Excel Tricks for Finance", date: "Yesterday", offline: true },
            { icon: BookOpen, color: "bg-blue-700", title: "Do Things That Don't Scale", date: "2 days ago", offline: true },
            { icon: SiInstagram, color: "bg-pink-700", title: "Minimalist Home Office Guide", date: "3 days ago", offline: false },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5"
              >
                <div className={`${item.color} w-8 h-8 rounded-lg flex items-center justify-center shrink-0`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[10px] font-semibold truncate">{item.title}</p>
                  <p className="text-gray-600 text-[8px] mt-0.5">{item.date}</p>
                </div>
                {item.offline && (
                  <span className="text-[8px] bg-green-500/15 text-green-400 px-1.5 py-0.5 rounded-full border border-green-500/20 shrink-0">
                    Offline
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
        <div className="flex items-center justify-around py-3 border-t border-white/5 mt-2">
          {["🏠", "🔍", "📚", "👤"].map((icon, i) => (
            <span key={i} className={`text-base ${i === 2 ? "opacity-100" : "opacity-30"}`}>{icon}</span>
          ))}
        </div>
      </div>
    ),
  },
];

export default function PhoneMockup() {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveScreen((s) => (s + 1) % SCREENS.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Screen selector */}
      <div className="flex gap-2">
        {SCREENS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiveScreen(i)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
              activeScreen === i ? "bg-primary text-white" : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Phone frame */}
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 blur-3xl bg-primary/20 scale-75 rounded-full" />
        
        {/* Phone body */}
        <div className="relative w-[220px] h-[440px] bg-[#1a1a1a] rounded-[40px] border-2 border-white/10 shadow-2xl overflow-hidden">
          {/* Status bar */}
          <div className="absolute top-0 inset-x-0 h-8 bg-[#0a0a0a] flex items-center justify-between px-5 z-10">
            <span className="text-[9px] text-white font-medium">9:41</span>
            <div className="w-16 h-4 bg-[#1a1a1a] rounded-full absolute left-1/2 -translate-x-1/2 top-1" />
            <div className="flex items-center gap-1">
              <div className="w-3 h-1.5 border border-white/40 rounded-sm relative">
                <div className="absolute inset-y-0.5 left-0.5 right-1 bg-green-400 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Screen content */}
          <div className="absolute inset-0 pt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {SCREENS[activeScreen].content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full" />
        </div>

        {/* Side buttons */}
        <div className="absolute -right-1 top-24 w-1 h-8 bg-white/10 rounded-full" />
        <div className="absolute -left-1 top-20 w-1 h-6 bg-white/10 rounded-full" />
        <div className="absolute -left-1 top-28 w-1 h-6 bg-white/10 rounded-full" />
      </div>
    </div>
  );
}
