import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiYoutube, SiTiktok, SiInstagram } from "react-icons/si";
import {
  CheckCircle2, ChevronRight, FileText, Smartphone,
  ArrowDown, Download, ShieldCheck, Wifi, Play, ArrowRight
} from "lucide-react";
import Nav from "@/components/Nav";
import HeroDemo from "@/components/HeroDemo";
import LiveDemo from "@/components/LiveDemo";
import PhoneMockup from "@/components/PhoneMockup";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

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
  { icon: FileText, color: "text-blue-400", label: "Articles and Papers" },
];

const APK_FEATURES = [
  { icon: <Wifi className="w-4 h-4" />, label: "100% Offline" },
  { icon: <ShieldCheck className="w-4 h-4" />, label: "No Signup" },
  { icon: <Download className="w-4 h-4" />, label: "Free Download" },
  { icon: <Smartphone className="w-4 h-4" />, label: "Android 8.0+" },
];

export default function LandingPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-primary/30">
      <Nav />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden min-h-[95vh] flex items-center">

          {/* Real video background */}
          <div className="absolute inset-0 overflow-hidden bg-[#0a0a14]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.45 }}
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E"
            >
              {/* Person using phone/scrolling content - highly relevant to app */}
              <source
                src="https://videos.pexels.com/video-files/7310067/7310067-hd_1920_1080_30fps.mp4"
                type="video/mp4"
              />
              {/* Fallback: person on laptop reading */}
              <source
                src="https://videos.pexels.com/video-files/4065403/4065403-hd_1920_1080_30fps.mp4"
                type="video/mp4"
              />
              {/* Second fallback: tech/data */}
              <source
                src="https://videos.pexels.com/video-files/3256576/3256576-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
            </video>

            {/* Gradient overlay: top + bottom fade, left glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/85 via-[#0d0d0d]/50 to-[#0d0d0d]/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/70 via-transparent to-[#0d0d0d]/80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.12)_0%,_transparent_55%)]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white mb-7">
                  <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 shadow-[0_0_6px_2px_rgba(74,222,128,0.5)]" />
                  Sinalytic v1.0 · Live now
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
                  Read less.<br />
                  <span className="text-primary">Know smarter.</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                  Paste any YouTube, TikTok, Instagram, or article link. Sinalytic AI extracts every key insight in seconds. No fluff, no filler.
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-10">
                  <button
                    onClick={() => setDemoOpen(true)}
                    className="h-12 px-7 rounded-full bg-primary text-white font-bold hover:bg-primary/90 active:scale-95 transition-all inline-flex items-center gap-2 text-sm shadow-lg shadow-primary/25"
                  >
                    <Play className="w-4 h-4 fill-white" /> Watch Demo in Browser
                  </button>
                  <a
                    href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk"
                    className="h-12 px-7 rounded-full border border-white/20 bg-white/8 text-white font-semibold hover:bg-white/15 active:scale-95 transition-all inline-flex items-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4" /> Try Demo with APK
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">
                  {["4 Platforms", "Under 5s per summary", "10+ Languages", "Free forever"].map((label) => (
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
              <button
                onClick={() => document.querySelector("#stats")?.scrollIntoView({ behavior: "smooth" })}
                className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors"
              >
                <span className="text-xs">Scroll to explore</span>
                <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </button>
            </motion.div>
          </div>
        </section>

        {/* STATS */}
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

        {/* PLATFORMS */}
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

        {/* HOW IT WORKS CTA */}
        <section className="py-20 bg-[#0d0d0d] relative" id="how-it-works">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.05)_0%,_transparent_70%)] pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">How it works</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Three steps to clarity.</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Stop wasting hours scrubbing through videos. Get to the point instantly.
              </p>
              <a
                href="/how-it-works"
                className="h-12 px-8 rounded-full border border-primary/40 bg-primary/10 text-primary font-semibold hover:bg-primary/20 active:scale-95 transition-all inline-flex items-center gap-2 text-sm"
              >
                See how it works <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* LIVE DEMO */}
        <section className="py-24 bg-[#0d0d0d]" id="demo">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Interactive Demo</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">See it in action.</h2>
              <p className="text-gray-400 text-lg">Pick a platform and hit Extract. Watch AI compress hours into seconds.</p>
            </div>
            <LiveDemo />
          </div>
        </section>

        {/* APK DOWNLOAD */}
        <section className="py-24 bg-[#0d0d0d] relative overflow-hidden" id="download">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(37,99,235,0.12)_0%,_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(37,99,235,0.08)_0%,_transparent_60%)]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Android App</p>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                  Take your knowledge<br />tool offline.
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Download the Sinalytic Android APK for a fully functional offline experience. Browse your saved summaries on the plane, in the subway, anywhere.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {APK_FEATURES.map((f) => (
                    <div key={f.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white font-medium">
                      <span className="text-primary">{f.icon}</span>
                      {f.label}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk"
                    className="h-14 px-8 rounded-full bg-primary text-white font-bold text-base hover:bg-primary/90 active:scale-95 transition-all inline-flex items-center gap-3 justify-center shadow-lg shadow-primary/25"
                  >
                    <Download className="w-5 h-5" />
                    Download APK v1.0 Demo
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

              <div className="flex justify-center">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </section>

        {/* WAITLIST */}
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

        {/* FINAL CTA */}
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
              <button
                onClick={() => setDemoOpen(true)}
                className="h-14 px-10 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 active:scale-95 transition-all inline-flex items-center gap-2 shadow-lg shadow-primary/30"
              >
                <Play className="w-5 h-5 fill-white" /> Watch Demo in Browser
              </button>
              <a
                href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk"
                className="h-14 px-10 rounded-full border border-white/15 bg-white/5 text-white font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" /> Try Demo with APK
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
