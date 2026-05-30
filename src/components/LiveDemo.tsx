import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiYoutube, SiTiktok, SiInstagram } from "react-icons/si";
import { FileText, Loader2, Zap, Clock, BookOpen, Copy, Check } from "lucide-react";

const TABS = [
  { id: "youtube", label: "YouTube", icon: SiYoutube, color: "text-red-500", badge: "bg-red-600" },
  { id: "tiktok", label: "TikTok", icon: SiTiktok, color: "text-white", badge: "bg-gray-700" },
  { id: "instagram", label: "Instagram", icon: SiInstagram, color: "text-pink-500", badge: "bg-gradient-to-r from-purple-600 to-pink-600" },
  { id: "article", label: "Article", icon: FileText, color: "text-blue-400", badge: "bg-blue-700" },
];

const CONTENT = {
  youtube: {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "How to Build a Startup in 2025: Full Playbook",
    time: "1h 42m",
    saved: "97 min saved",
    insights: [
      { point: "Distribution beats product in crowded markets. Find your unfair channel first.", tag: "Strategy" },
      { point: "Avoid 'tar pit' ideas that sound good but have structural flaws preventing monetisation.", tag: "Ideation" },
      { point: "Talk to 100 users before writing a single line of code. Validate the pain, not the solution.", tag: "Validation" },
      { point: "Charge from day one. Free users give noisy signal and burn your runway faster than paying ones.", tag: "Pricing" },
    ],
    keyTakeaway: "Distribution = Growth. Build your channel before you build your product.",
    extractTime: "3.2s",
  },
  tiktok: {
    url: "https://www.tiktok.com/@neuroscience_daily/video/7388192",
    title: "Why Your Brain Hates Deep Work (And How to Fix It)",
    time: "3 min",
    saved: "2 min saved",
    insights: [
      { point: "Dopamine spikes from notifications physically shrink the prefrontal cortex over time.", tag: "Neuroscience" },
      { point: "25-minute focus blocks (Pomodoro) align with natural ultradian rhythm cycles in the brain.", tag: "Focus" },
      { point: "Cold exposure for 2 minutes before work boosts norepinephrine by up to 300%.", tag: "Performance" },
      { point: "Peak cognitive window is 60 to 90 minutes after waking. Protect it ruthlessly.", tag: "Timing" },
    ],
    keyTakeaway: "Peak focus = first 90 min after waking. Guard it like your best asset.",
    extractTime: "1.8s",
  },
  instagram: {
    url: "https://www.instagram.com/p/minimalist_desk_setup_2025",
    title: "The Psychology of Colour in UI/UX Design",
    time: "8 min read",
    saved: "7 min saved",
    insights: [
      { point: "Blue increases trust perception by 34%, used by 33% of Fortune 100 brands for this reason.", tag: "Colour" },
      { point: "High contrast ratios (4.5:1) are not just accessibility; they directly improve conversion rates.", tag: "Contrast" },
      { point: "Warm tones above the fold increase CTA click-through by up to 21% in A/B tests.", tag: "CTA" },
      { point: "Negative space signals premium positioning. Remove 30% of elements and watch trust rise.", tag: "Layout" },
    ],
    keyTakeaway: "Colour is not decoration. It is conversion infrastructure.",
    extractTime: "2.1s",
  },
  article: {
    url: "https://paulgraham.com/startupideas.html",
    title: "How to Get Startup Ideas by Paul Graham",
    time: "22 min",
    saved: "20 min saved",
    insights: [
      { point: "The best startup ideas come from noticing your own problems, not manufactured brainstorming sessions.", tag: "Ideas" },
      { point: "Schlep blindness hides the most valuable opportunities. Hard things look unappealing on purpose.", tag: "Psychology" },
      { point: "Organic ideas beat manufactured ones: live in the future, notice what is missing, then build it.", tag: "Method" },
      { point: "Ideas that seem niche or boring often have the strongest defensible moats once they work.", tag: "Moats" },
    ],
    keyTakeaway: "The best ideas feel obvious in hindsight. Notice problems in your own life first.",
    extractTime: "2.7s",
  },
};

export default function LiveDemo() {
  const [activeTab, setActiveTab] = useState("youtube");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>("youtube");
  const [copied, setCopied] = useState(false);

  const handleExtract = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setLoading(false);
      setResult(activeTab);
    }, 1400);
  };

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setResult(id);
  };

  const handleCopy = () => {
    const data = CONTENT[result as keyof typeof CONTENT];
    if (!data) return;
    const text = `${data.title}\n\n${data.insights.map((ins, i) => `${i + 1}. ${ins.point}`).join("\n")}\n\nKey Takeaway: ${data.keyTakeaway}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const activeContent = CONTENT[activeTab as keyof typeof CONTENT];
  const resultData = result ? CONTENT[result as keyof typeof CONTENT] : null;
  const ActiveTabIcon = TABS.find(t => t.id === activeTab)?.icon || FileText;

  return (
    <div className="max-w-3xl mx-auto border border-white/10 rounded-2xl bg-[#111110] overflow-hidden shadow-2xl">
      {/* Platform tabs */}
      <div className="flex border-b border-white/10 bg-[#0d0d0d]">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-[#111110] text-white border-b-2 border-primary"
                  : "text-gray-500 hover:text-gray-300 hover:bg-white/2"
              }`}
            >
              <Icon className={`w-4 h-4 ${activeTab === tab.id ? tab.color : ""}`} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="p-5 md:p-7">
        {/* URL input + extract */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              value={activeContent.url}
              readOnly
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-10 text-sm text-gray-400 font-mono focus:outline-none"
            />
            <ActiveTabIcon className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 ${TABS.find(t => t.id === activeTab)?.color}`} />
          </div>
          <button
            onClick={handleExtract}
            disabled={loading}
            className="px-5 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-60 text-sm whitespace-nowrap"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
            <span className="hidden sm:inline">Extract</span>
          </button>
        </div>

        {/* Result area */}
        <div className="min-h-[260px] bg-white/3 rounded-xl border border-white/5 p-5 relative overflow-hidden">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111110] gap-4">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary"
                />
                <Zap className="w-4 h-4 text-primary absolute inset-0 m-auto" />
              </div>
              <div className="text-center">
                <p className="text-white font-medium text-sm">AI extracting knowledge...</p>
                <motion.p
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-gray-500 text-xs mt-1 font-mono"
                >
                  Processing content
                </motion.p>
              </div>
            </div>
          )}

          {!loading && !resultData && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 gap-2">
              <Zap className="w-8 h-8 opacity-30" />
              <p className="text-sm">Hit Extract to see the magic</p>
            </div>
          )}

          {!loading && resultData && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold text-white ${TABS.find(t => t.id === result)?.badge}`}>
                      {React.createElement(TABS.find(t => t.id === result)?.icon || FileText, { className: "w-3 h-3" })}
                      {TABS.find(t => t.id === result)?.label}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                      <Zap className="w-3 h-3" /> {resultData.extractTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" /> {resultData.saved}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base leading-snug">{resultData.title}</h3>
                </div>
                <button
                  onClick={handleCopy}
                  className="shrink-0 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center"
                  title="Copy summary"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              </div>

              <div className="space-y-3 mb-4">
                {resultData.insights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 + 0.1 }}
                    className="flex gap-3 items-start group"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 text-sm leading-relaxed">{item.point}</p>
                    </div>
                    <span className="text-[10px] text-gray-600 bg-white/5 px-2 py-0.5 rounded shrink-0 hidden sm:inline">
                      {item.tag}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex gap-3 items-start"
              >
                <BookOpen className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Key Takeaway · </span>
                  <span className="text-sm text-gray-300">{resultData.keyTakeaway}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
