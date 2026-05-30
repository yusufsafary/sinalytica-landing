import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiYoutube, SiTiktok, SiInstagram } from "react-icons/si";
import { FileText, Loader2, Play } from "lucide-react";

const TABS = [
  { id: "youtube", label: "YouTube", icon: SiYoutube, color: "text-red-500" },
  { id: "tiktok", label: "TikTok", icon: SiTiktok, color: "text-white" },
  { id: "instagram", label: "Instagram", icon: SiInstagram, color: "text-pink-500" },
  { id: "article", label: "Article", icon: FileText, color: "text-blue-500" },
];

const CONTENT = {
  youtube: {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "How to Build a Startup in 2025",
    insights: [
      "Distribution is more important than product in crowded markets",
      "Avoid 'tar pit' ideas that sound good but have structural flaws",
      "Talk to users before writing a single line of code"
    ]
  },
  tiktok: {
    url: "https://www.tiktok.com/@fitness/video/123",
    title: "The only 3 stretches you need for posture",
    insights: [
      "Doorway pectoral stretch: hold 30s for rounded shoulders",
      "Couch stretch: targets hip flexors from sitting all day",
      "Thoracic extension on foam roller: improves upper back mobility"
    ]
  },
  instagram: {
    url: "https://www.instagram.com/p/C1234567890",
    title: "Minimalist Desk Setup Guide",
    insights: [
      "Hide cables using under-desk raceways and zip ties",
      "Use monitor light bars to reduce eye strain without glare",
      "Add one plant (real or fake) to break up the tech aesthetic"
    ]
  },
  article: {
    url: "https://paulgraham.com/ds.html",
    title: "Do Things That Don't Scale",
    insights: [
      "Recruit users manually at the beginning (e.g. Stripe at cafes)",
      "Provide insanely good customer service to early adopters",
      "Build custom solutions for a single client to find product-market fit"
    ]
  }
};

export default function LiveDemo() {
  const [activeTab, setActiveTab] = useState("youtube");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>("youtube");

  const handleExtract = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setLoading(false);
      setResult(activeTab);
    }, 1200);
  };

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setResult(id); // auto-show result for demo purposes
  };

  const activeContent = CONTENT[activeTab as keyof typeof CONTENT];
  const resultData = result ? CONTENT[result as keyof typeof CONTENT] : null;

  return (
    <div className="max-w-4xl mx-auto border border-white/10 rounded-2xl bg-[#111110] overflow-hidden shadow-2xl">
      {/* Tabs */}
      <div className="flex border-b border-white/10 bg-[#0d0d0d]">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors ${
              activeTab === tab.id ? "bg-[#111110] text-white border-b-2 border-primary" : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? tab.color : ""}`} />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="p-6 md:p-8">
        <div className="flex gap-4 mb-8">
          <input 
            type="text" 
            value={activeContent.url}
            readOnly
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 font-mono focus:outline-none"
          />
          <button 
            onClick={handleExtract}
            disabled={loading}
            className="px-6 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
            <span className="hidden sm:inline">Extract</span>
          </button>
        </div>

        <div className="min-h-[200px] bg-white/5 rounded-xl border border-white/5 p-6 relative">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-primary">
              <Loader2 className="w-8 h-8 animate-spin mb-4" />
              <p className="font-mono text-sm">Processing content...</p>
            </div>
          )}

          {!loading && resultData && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">{resultData.title}</h3>
              <div className="space-y-4">
                {resultData.insights.map((insight, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{insight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
