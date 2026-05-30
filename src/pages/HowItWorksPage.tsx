import React from "react";
import { motion } from "framer-motion";
import {
  Globe, Zap, BookOpen, Clock, Brain, Languages, Wifi, TrendingUp, ShieldCheck,
  ChevronRight
} from "lucide-react";
import { SiTiktok, SiInstagram } from "react-icons/si";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const STEPS = [
  {
    step: "01",
    title: "Paste your link",
    desc: "Drop any URL from YouTube, TikTok, Instagram, or an article. Any language, any length.",
    icon: <Globe className="w-6 h-6" />,
    detail: "Supports 4 platforms and counting. Works with links of any length — from 30-second TikToks to 4-hour university lectures.",
  },
  {
    step: "02",
    title: "AI extracts",
    desc: "Our engine cuts through hours of content to find every key insight, fact, and takeaway.",
    icon: <Zap className="w-6 h-6" />,
    detail: "Our model is trained to distinguish signal from noise. It identifies definitions, conclusions, timestamps, and quotable moments — not just summaries.",
  },
  {
    step: "03",
    title: "Own the knowledge",
    desc: "Get a crisp structured summary in seconds. Save offline, copy, or share with one tap.",
    icon: <BookOpen className="w-6 h-6" />,
    detail: "Each extraction gives you a structured breakdown: key points, timestamps (for video), key takeaway, and language-translated output if needed.",
  },
];

const FEATURES = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: "YouTube Timestamps",
    desc: "Full video breakdowns with clickable timestamps so you jump straight to the moments that matter.",
  },
  {
    icon: <SiTiktok className="w-5 h-5" />,
    title: "TikTok Decoded",
    desc: "Skip the hook, skip the filler. Extract the actual value from educational TikToks in one tap.",
  },
  {
    icon: <SiInstagram className="w-5 h-5" />,
    title: "Instagram Context",
    desc: "Combines caption intelligence with visual context for complete, actionable summaries.",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Academic Precision",
    desc: "Extract the core thesis, methodology, and findings from dense papers and long-form blogs.",
  },
  {
    icon: <Languages className="w-5 h-5" />,
    title: "10+ Languages",
    desc: "Paste a video in Spanish, Arabic, or Japanese — read the summary in English. Fully multilingual.",
  },
  {
    icon: <Wifi className="w-5 h-5" />,
    title: "Works Offline",
    desc: "Save summaries to your Android device and read them anywhere — no internet required.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Key Takeaways",
    desc: "Every summary ends with a single sharp insight — the one thing you need to remember.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "No Account Needed",
    desc: "Paste and extract. No signup, no friction, no tracking. Knowledge with zero overhead.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Nav />

      <main className="pt-28">
        {/* Header */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">How it works</p>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5">
                Three steps to clarity.
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                Stop wasting hours scrubbing through videos. Get to the point instantly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Steps — detailed */}
        <section className="py-16 bg-[#0d0d0d]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
              {STEPS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative p-8 md:p-10 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm hover:border-primary/30 transition-colors group"
                >
                  <div className="text-[7rem] font-black text-white/4 absolute top-2 right-6 pointer-events-none select-none leading-none">
                    {item.step}
                  </div>
                  <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed mb-3 text-lg">{item.desc}</p>
                      <p className="text-gray-500 leading-relaxed text-sm">{item.detail}</p>
                    </div>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:flex justify-center mt-6">
                      <ChevronRight className="w-5 h-5 text-primary/40 rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/5 mx-6" />

        {/* Features */}
        <section className="py-24 bg-[#f7f6f3]" id="features">
          <div className="container mx-auto px-6">
            <div className="mb-16 max-w-xl">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Features</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#0d0d0d] mb-4">
                Built for serious thinkers.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Every feature is designed to reduce the friction between you and the knowledge you need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="p-6 bg-white border border-[#0d0d0d]/8 rounded-2xl hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                    {f.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#0d0d0d] mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#0d0d0d] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.1)_0%,_transparent_70%)] pointer-events-none" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tight mb-6"
            >
              Ready to try it?
            </motion.h2>
            <p className="text-gray-400 text-lg mb-10">No account. No credit card. Just paste a link.</p>
            <a
              href="/#demo"
              className="h-14 px-10 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 active:scale-95 transition-all inline-flex items-center gap-2 shadow-lg shadow-primary/30"
            >
              Try the Demo <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
