import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const DEMOS = [
  {
    type: "YouTube",
    url: "https://youtube.com/watch?v=123",
    title: "Quantum Computing Explained in 10 Minutes",
    insights: [
      "Qubits can exist in multiple states simultaneously (superposition)",
      "Entanglement links qubits over any distance instantaneously",
      "Shor's algorithm threatens current RSA encryption standards"
    ],
    time: "10 min",
    color: "bg-red-500"
  },
  {
    type: "TikTok",
    url: "https://tiktok.com/@user/video/456",
    title: "3 Excel Tricks for Finance Bros",
    insights: [
      "Use XLOOKUP instead of VLOOKUP for dynamic arrays",
      "CTRL+E flashes fills patterns without formulas",
      "ALT+F1 instantly creates an embedded chart"
    ],
    time: "1 min",
    color: "bg-gray-800"
  },
  {
    type: "Article",
    url: "https://nature.com/articles/789",
    title: "CRISPR-Cas9 Gene Editing Advances",
    insights: [
      "New off-target effects reduced by 40% with latest enzyme variant",
      "Delivery mechanisms via lipid nanoparticles show promise in vivo",
      "Clinical trials targeting sickle cell disease enter Phase III"
    ],
    time: "45 min",
    color: "bg-blue-600"
  }
];

export default function HeroDemo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % DEMOS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = DEMOS[index];

  return (
    <div className="w-full bg-[#111110] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[400px]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#1a1a1a]">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      
      <div className="p-6 flex flex-col gap-6 flex-1">
        <div className="relative">
          <input 
            type="text" 
            disabled 
            value={current.url}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 font-mono focus:outline-none"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }} 
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-2 py-1 rounded text-xs font-bold text-white ${current.color}`}>
                  {current.type}
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                  Saved {current.time}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-4 leading-tight">{current.title}</h3>
              
              <div className="space-y-3">
                {current.insights.map((insight, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                    <p className="text-sm text-gray-400 leading-relaxed">{insight}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
