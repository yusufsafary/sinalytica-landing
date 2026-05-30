import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { SiYoutube, SiTiktok, SiInstagram } from "react-icons/si";
import {
  CheckCircle2, ChevronRight, FileText, Globe, Smartphone, Zap,
  ArrowDown, Clock, Languages, Star, Download, ShieldCheck, Wifi,
  BookOpen, TrendingUp, Brain
} from "lucide-react";
import Nav from "@/components/Nav";
import HeroDemo from "@/components/HeroDemo";
import LiveDemo from "@/components/LiveDemo";
import PhoneMockup from "@/components/PhoneMockup";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

// Animated counter
function Counter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const PLATFORMS = [
  { icon: SiYoutube, color: "text-red-500", label: "YouTube" },
  { icon: SiTiktok, color: "text-white", label: "TikTok" },
  { icon: SiInstagram, color: "text-pink-500", label: "Instagram" },
  { icon: FileText, color: "text-blue-400", label: "Articles & Papers" },
];

const STEPS = [
  { step: "01", title: "Paste your link", desc: "Drop any URL from YouTube, TikTok, Instagram, or an article. Any language, any length.", icon: <Globe className="w-5 h-5" /> },
  { step: "02", title: "AI extracts", desc: "Our engine cuts through hours of content to find every key insight, fact, and takeaway.", icon: <Zap className="w-5 h-5" /> },
  { step: "03", title: "Own the knowledge", desc: "Get a crisp structured summary in seconds. Save offline, copy, or share with one tap.", icon: <BookOpen className="w-5 h-5" /> },
];

const FEATURES = [
  { icon: <Clock className="w-5 h-5" />, title: "YouTube Timestamps", desc: "Full video breakdowns with clickable timestamps so you jump straight to the moments that matter." },
  { icon: <SiTiktok className="w-5 h-5" />, title: "TikTok Decoded", desc: "Skip the hook, skip the filler. Extract the actual value from educational TikToks in one tap." },
  { icon: <SiInstagram className="w-5 h-5" />, title: "Instagram Context", desc: "Combines caption intelligence with visual context for complete, actionable summaries." },
  { icon: <Brain className="w-5 h-5" />, title: "Academic Precision", desc: "Extract the core thesis, methodology, and findings from dense papers and long-form blogs." },
  { icon: <Languages className="w-5 h-5" />, title: "10+ Languages", desc: "Paste a video in Spanish, Arabic, or Japanese — read the summary in English. Fully multilingual." },
  { icon: <Wifi className="w-5 h-5" />, title: "Works Offline", desc: "Save summaries to your Android device and read them anywhere — no internet required." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Key Takeaways", desc: "Every summary ends with a single sharp insight — the one thing you need to remember." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "No Account Needed", desc: "Paste and extract. No signup, no friction, no tracking. Knowledge with zero overhead." },
];

const TESTIMONIALS = [
  {
    quote: "Sinalytica completely changed how I research. I paste 2-hour lecture videos and get the exact formulas and definitions in under 5 seconds.",
    author: "A.R.", role: "Engineering Student, Jakarta", initials: "AR", rating: 5
  },
  {
    quote: "I read dozens of papers a week. This tool gives me the core thesis instantly so I only deep-read the ones that actually matter.",
    author: "M.K.", role: "Researcher, Kuala Lumpur", initials: "MK", rating: 5
  },
  {
    quote: "The offline APK is a gamechanger. I sync summaries before every flight and get through a week's worth of learning without wifi.",
    author: "S.T.", role: "Founder, Tokyo", initials: "ST", rating: 5
  },
];

const APK_FEATURES = [
  { icon: <Wifi className="w-4 h-4" />, label: "100% Offline" },
  { icon: <ShieldCheck className="w-4 h-4" />, label: "No Signup" },
  { icon: <Download className="w-4 h-4" />, label: "Free Download" },
  { icon: <Smartphone className="w-4 h-4" />, label: "Android 8.0+" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-primary/30">
      <Nav />

      <main>
        {/* ─── HERO ─── */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white mb-7">
                  <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 shadow-[0_0_6px_2px_rgba(74,222,128,0.5)]" />
                  Sinalytica v1.0 — Live now
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
                  Read less.<br />
                  <span className="text-primary">Know smarter.</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                  Paste any YouTube, TikTok, Instagram, or article link. Sinalytica's AI extracts every key insight in seconds — no fluff, no filler.
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-10">
                  <a
                    href="#demo"
                    onClick={(e) => { e.preventDefault(); document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="h-12 px-7 rounded-full bg-primary text-white font-bold hover:bg-primary/90 active:scale-95 transition-all inline-flex items-center gap-2 text-sm"
                  >
                    Try the Demo <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk"
                    className="h-12 px-7 rounded-full border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 active:scale-95 transition-all inline-flex items-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4" /> Download APK
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
                  {["4 Platforms", "<5s / summary", "10+ Languages", "Free forever"].map((label) => (
                    <div key={label} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {label}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="lg:ml-auto w-full max-w-md"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <HeroDemo />
              </motion.div>
            </div>

            <motion.div
              className="flex justify-center mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a href="#stats" onClick={(e) => { e.preventDefault(); document.querySelector("#stats")?.scrollIntoView({ behavior: "smooth" }); }}
                className="flex flex-col items-center gap-1 text-gray-600 hover:text-gray-400 transition-colors">
                <span className="text-xs">Scroll to explore</span>
                <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <section id="stats" className="py-14 border-y border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 4, suffix: "", label: "Platforms supported" },
                { value: 5, suffix: "s", label: "Avg. extraction time" },
                { value: 1240, suffix: "+", label: "People on the waitlist" },
                { value: 10, suffix: "+", label: "Languages supported" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-4xl md:text-5xl font-black text-white mb-1">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PLATFORMS ─── */}
        <section className="py-12 bg-[#f7f6f3]">
          <div className="container mx-auto px-6">
            <p className="text-center text-xs font-bold text-gray-400 mb-8 uppercase tracking-widest">
              Extract knowledge from
            </p>
            <div className="flex flex-wrap justify-center gap-10 md:gap-16">
              {PLATFORMS.map(({ icon: Icon, color, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-base font-semibold text-[#1a1a1a]">
                  <Icon className={`w-6 h-6 ${color}`} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="py-24 bg-[#0d0d0d] relative" id="how-it-works">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.05)_0%,_transparent_70%)] pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">How it works</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Three steps to clarity.</h2>
              <p className="text-gray-400 text-lg">Stop wasting hours scrubbing through videos. Get to the point instantly.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative">
              {/* Connector lines */}
              <div className="hidden md:block absolute top-1/4 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              {STEPS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative p-8 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm hover:border-primary/30 transition-colors group"
                >
                  <div className="text-8xl font-black text-white/4 absolute top-3 right-5 pointer-events-none select-none leading-none">
                    {item.step}
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURES ─── */}
        <section className="py-24 bg-[#f7f6f3]" id="features">
          <div className="container mx-auto px-6">
            <div className="mb-16 max-w-xl">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Features</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#0d0d0d] mb-4">Built for serious thinkers.</h2>
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

        {/* ─── LIVE DEMO ─── */}
        <section className="py-24 bg-[#0d0d0d]" id="demo">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Interactive Demo</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">See it in action.</h2>
              <p className="text-gray-400 text-lg">Pick a platform and hit Extract — watch AI compress hours into seconds.</p>
            </div>
            <LiveDemo />
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="py-24 bg-[#f7f6f3]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Social proof</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#0d0d0d]">What learners say.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="p-8 bg-white border border-[#0d0d0d]/8 rounded-2xl flex flex-col hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-[#0d0d0d] leading-relaxed mb-6 flex-1 text-sm">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-[#0d0d0d] text-sm">{t.author}</p>
                      <p className="text-gray-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── APK DOWNLOAD ─── */}
        <section className="py-24 bg-[#0d0d0d] relative overflow-hidden" id="download">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(37,99,235,0.12)_0%,_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(37,99,235,0.08)_0%,_transparent_60%)]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: copy */}
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Android App</p>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                  Take your knowledge<br />tool offline.
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Download the Sinalytica Android APK for a fully functional offline experience. Browse your saved summaries on the plane, in the subway, anywhere.
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {APK_FEATURES.map((f) => (
                    <div key={f.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white font-medium">
                      <span className="text-primary">{f.icon}</span>
                      {f.label}
                    </div>
                  ))}
                </div>

                {/* Download button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk"
                    className="h-14 px-8 rounded-full bg-primary text-white font-bold text-base hover:bg-primary/90 active:scale-95 transition-all inline-flex items-center gap-3 justify-center shadow-lg shadow-primary/25"
                  >
                    <Download className="w-5 h-5" />
                    Download APK — v1.0 Demo
                  </a>
                  <a
                    href="https://github.com/yusufsafary/sinalytica-landing"
                    target="_blank"
                    rel="noreferrer"
                    className="h-14 px-7 rounded-full border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2 justify-center text-sm"
                  >
                    View Source on GitHub
                  </a>
                </div>
                <p className="mt-4 text-xs text-gray-600">Free download · Android 8.0+ · No Google Play required</p>
              </div>

              {/* Right: phone mockup */}
              <div className="flex justify-center">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ─── WAITLIST ─── */}
        <section className="py-24 bg-[#f7f6f3]">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Early Access</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#0d0d0d] mb-4">
                Be first when we launch.
              </h2>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                Join 1,240+ people on the waitlist. Get early access, lifetime discount, and direct input into what we build next.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="py-32 bg-[#0d0d0d] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.12)_0%,_transparent_70%)] pointer-events-none" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight"
            >
              Start reading smarter.
            </motion.h2>
            <p className="text-gray-400 text-xl mb-10">No account. No credit card. Just paste a link.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#demo"
                onClick={(e) => { e.preventDefault(); document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" }); }}
                className="h-14 px-10 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 active:scale-95 transition-all inline-flex items-center gap-2 shadow-lg shadow-primary/30"
              >
                Try the Demo <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk"
                className="h-14 px-10 rounded-full border border-white/15 bg-white/5 text-white font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" /> Download APK
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
