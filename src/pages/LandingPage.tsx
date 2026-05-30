import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiYoutube, SiTiktok, SiInstagram, SiX } from "react-icons/si";
import {
  CheckCircle2, FileText, Smartphone,
  ArrowDown, Download, ShieldCheck, Wifi, Play, ArrowRight
} from "lucide-react";
import Nav from "@/components/Nav";
import HeroDemo from "@/components/HeroDemo";
import LiveDemo from "@/components/LiveDemo";
import PhoneMockup from "@/components/PhoneMockup";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { useLang } from "@/context/LanguageContext";

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
  { icon: SiYoutube, color: "text-red-500", bg: "bg-red-500/10 border-red-500/20", label: "YouTube" },
  { icon: SiTiktok, color: "text-sky-400", bg: "bg-sky-400/10 border-sky-400/20", label: "TikTok" },
  { icon: SiInstagram, color: "text-pink-400", bg: "bg-pink-400/10 border-pink-400/20", label: "Instagram" },
  { icon: FileText, color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20", label: "Articles & Papers" },
];

const APK_FEATURES = [
  { icon: <Wifi className="w-4 h-4" />, label: "100% Offline" },
  { icon: <ShieldCheck className="w-4 h-4" />, label: "No Signup" },
  { icon: <Download className="w-4 h-4" />, label: "Free Download" },
  { icon: <Smartphone className="w-4 h-4" />, label: "Android 8.0+" },
];

function SocialStrip() {
  const { t } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-wrap items-center gap-2 pt-2"
    >
      <span className="text-xs text-gray-500 font-medium mr-1">{t.followUs}</span>
      <a
        href="https://x.com/Sinalyticalife"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all text-xs text-gray-400 hover:text-white"
      >
        <SiX className="w-3 h-3" />
        @Sinalyticalife
      </a>
      <div className="flex items-center gap-1.5">
        <a
          href="https://x.com/oroimho"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all text-xs text-gray-400 hover:text-white"
        >
          <SiX className="w-3 h-3" />
          @oroimho
        </a>
        <span className="text-[10px] text-gray-600 font-medium">{t.founderLabel}</span>
      </div>
    </motion.div>
  );
}

export default function LandingPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-primary/30">
      <Nav />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />

      <main>
        {/* ─── HERO ─── */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden min-h-[95vh] flex items-center">
          <div className="absolute inset-0 overflow-hidden bg-[#080c18]">
            <video
              autoPlay
              muted
              loop
              playsInline
              crossOrigin="anonymous"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.45 }}
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-laptop-while-sitting-4691-large.mp4" type="video/mp4" />
              <source src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-reading-messages-in-a-phone-40011-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/95 via-[#0d0d0d]/60 to-[#0d0d0d]/25" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/60 via-transparent to-[#0d0d0d]/85" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.18)_0%,_transparent_55%)]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white mb-7 backdrop-blur-sm"
                >
                  <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 shadow-[0_0_6px_2px_rgba(74,222,128,0.5)]" />
                  {t.badge}
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
                  {t.h1Line1}<br />
                  <span className="text-primary">{t.h1Line2}</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                  {t.desc}
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <button
                    onClick={() => setDemoOpen(true)}
                    className="h-12 px-7 rounded-full bg-primary text-white font-bold hover:bg-primary/90 active:scale-95 transition-all inline-flex items-center gap-2 text-sm shadow-lg shadow-primary/30"
                  >
                    <Play className="w-4 h-4 fill-white" /> {t.cta1}
                  </button>
                  <a
                    href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk"
                    className="h-12 px-7 rounded-full border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 active:scale-95 transition-all inline-flex items-center gap-2 text-sm backdrop-blur-sm"
                  >
                    <Download className="w-4 h-4" /> {t.cta2}
                  </a>
                </div>

                <SocialStrip />

                <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 mt-8">
                  {t.features.map((label) => (
                    <div key={label} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {label}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="lg:ml-auto w-full max-w-md"
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
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
                className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors group"
              >
                <span className="text-xs">{t.scrollExplore}</span>
                <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </button>
            </motion.div>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <section id="stats" className="py-16 border-y border-white/5 bg-white/[0.02]">
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
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
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
        <section className="py-14 bg-[#0d0d0d]">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-xs font-bold text-gray-600 mb-10 uppercase tracking-widest"
            >
              Extract knowledge from
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {PLATFORMS.map(({ icon: Icon, color, bg, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-full border ${bg} text-white font-semibold text-sm`}
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                  {label}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS CTA ─── */}
        <section className="py-20 bg-[#0d0d0d] relative" id="how-it-works">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.06)_0%,_transparent_70%)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">How it works</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Three steps to clarity.</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
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

        {/* ─── LIVE DEMO ─── */}
        <section className="py-24 bg-[#0d0d0d]" id="demo">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Interactive Demo</p>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">See it in action.</h2>
                <p className="text-gray-400 text-lg">Pick a platform and hit Extract. Watch AI compress hours into seconds.</p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <LiveDemo />
            </motion.div>
          </div>
        </section>

        {/* ─── APK DOWNLOAD ─── */}
        <section className="py-24 bg-[#0d0d0d] relative overflow-hidden" id="download">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(37,99,235,0.10)_0%,_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(37,99,235,0.07)_0%,_transparent_60%)]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Android App</p>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                  Take your knowledge<br />tool offline.
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Download the Sinalytic Android APK for a fully functional offline experience. Browse your saved summaries on the plane, in the subway, anywhere.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {APK_FEATURES.map((f) => (
                    <div key={f.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white font-medium hover:bg-white/8 transition-colors">
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
                </div>
                <p className="mt-4 text-xs text-gray-600">Free download · Android 8.0+ · No Google Play required</p>
              </motion.div>

              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <PhoneMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── WAITLIST ─── */}
        <section className="py-24 bg-[#080808] relative" id="waitlist">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.07)_0%,_transparent_65%)] pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Early Access</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
                Be first when we launch.
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Join 1,240+ people on the waitlist. Get early access, lifetime discount, and direct input into what we build next.
              </p>
              <WaitlistForm />
            </motion.div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="py-32 bg-[#0d0d0d] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.12)_0%,_transparent_70%)] pointer-events-none" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight"
            >
              Start reading smarter.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-400 text-xl mb-10"
            >
              No account. No credit card. Just paste a link.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex justify-center items-center gap-4 flex-wrap"
            >
              <span className="text-gray-600 text-sm">Follow us on X</span>
              <a href="https://x.com/Sinalyticalife" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors">
                <SiX className="w-3.5 h-3.5" /> @Sinalyticalife
              </a>
              <span className="text-gray-700 text-xs">·</span>
              <a href="https://x.com/oroimho" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors">
                <SiX className="w-3.5 h-3.5" /> @oroimho
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
