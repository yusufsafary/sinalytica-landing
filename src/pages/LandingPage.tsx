import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { SiYoutube, SiTiktok, SiInstagram } from "react-icons/si";
import { CheckCircle2, ChevronRight, FileText, Globe, Smartphone, Zap } from "lucide-react";
import Nav from "@/components/Nav";
import HeroDemo from "@/components/HeroDemo";
import LiveDemo from "@/components/LiveDemo";
import Footer from "@/components/Footer";

const WORDS = ["smarter.", "faster.", "deeper.", "more."];

export default function LandingPage() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Nav />
      
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0d0d0d] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-[#0d0d0d] to-[#0d0d0d] opacity-50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Sinalytica v1.0 is live
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                    Read less.<br />
                    <span className="text-primary">Know smarter.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                    Paste any link. Get the knowledge. Sinalytica extracts structured insights from videos, articles, and papers in seconds.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <button className="h-12 px-6 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2" data-testid="btn-hero-try">
                      Try the Demo <ChevronRight className="w-4 h-4" />
                    </button>
                    <a href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk" className="h-12 px-6 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2" data-testid="btn-hero-apk">
                      Download APK for Android
                    </a>
                  </div>
                  
                  <div className="mt-10 flex items-center gap-6 text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 4 Platforms</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> &lt;5s / summary</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 10+ Languages</div>
                  </div>
                </motion.div>
              </div>
              
              <div className="relative lg:ml-auto w-full max-w-md">
                <HeroDemo />
              </div>
            </div>
          </div>
        </section>

        {/* PLATFORMS */}
        <section className="py-12 border-b bg-[#f7f6f3]">
          <div className="container mx-auto px-6">
            <p className="text-center text-sm font-semibold text-gray-500 mb-8 uppercase tracking-wider">Extract knowledge from</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
              <div className="flex items-center gap-2 text-lg font-medium text-[#0d0d0d]"><SiYoutube className="w-6 h-6 text-red-600" /> YouTube</div>
              <div className="flex items-center gap-2 text-lg font-medium text-[#0d0d0d]"><SiTiktok className="w-6 h-6 text-black" /> TikTok</div>
              <div className="flex items-center gap-2 text-lg font-medium text-[#0d0d0d]"><SiInstagram className="w-6 h-6 text-pink-600" /> Instagram</div>
              <div className="flex items-center gap-2 text-lg font-medium text-[#0d0d0d]"><FileText className="w-6 h-6" /> Articles & Papers</div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-[#0d0d0d] text-white relative" id="how-it-works">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Three steps to clarity.</h2>
              <p className="text-gray-400 text-lg">Stop wasting hours scrubbing through videos. Get to the point instantly.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Paste your link", desc: "Drop a URL from YouTube, TikTok, Instagram, or any text article.", icon: <Globe className="w-6 h-6" /> },
                { step: "02", title: "AI extracts", desc: "Our engine processes the content, cutting through noise to find core insights.", icon: <Zap className="w-6 h-6" /> },
                { step: "03", title: "Own the knowledge", desc: "Read a crisp, structured summary in seconds. Save it for later.", icon: <FileText className="w-6 h-6" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <div className="text-7xl font-bold text-white/5 absolute top-4 right-6 pointer-events-none">{item.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-24 bg-[#f7f6f3]" id="features">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0d0d0d] mb-4">Built for serious thinkers.</h2>
              <p className="text-gray-600 text-lg max-w-xl">Every feature is designed to reduce friction between you and the knowledge you need.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "YouTube Timestamps", desc: "Full video breakdowns with clickable timestamps to jump right to the key moments." },
                { title: "TikTok Decoded", desc: "Bypass the hook and get the actual value from educational TikToks." },
                { title: "Instagram Context", desc: "Combines caption intelligence with visual context for complete summaries." },
                { title: "Academic Precision", desc: "Extract structured lessons from dense educational blogs and academic papers." },
                { title: "Global Languages", desc: "Paste a video in Spanish, read the summary in English. Full multi-language support." },
                { title: "Offline Android APK", desc: "Take your summaries anywhere with our fully functional offline Android app." }
              ].map((feature, i) => (
                <div key={i} className="p-8 border border-[#0d0d0d]/10 bg-white rounded-2xl hover:border-primary/50 transition-colors group">
                  <div className="w-2 h-2 rounded-full bg-primary mb-6 group-hover:scale-150 transition-transform"></div>
                  <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIVE DEMO */}
        <section className="py-24 bg-[#0d0d0d] text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">See it in action.</h2>
              <p className="text-gray-400 text-lg">Experience the extraction engine firsthand.</p>
            </div>
            <LiveDemo />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-[#f7f6f3]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0d0d0d] text-center mb-16">What learners say.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: "Sinalytica completely changed how I research. I paste 2-hour lecture videos and get the exact formulas and definitions in seconds.", author: "A.R.", role: "Student, Jakarta" },
                { quote: "I read dozens of papers a week. This tool gives me the core thesis instantly, so I only read deeply when it matters.", author: "M.K.", role: "Researcher, Kuala Lumpur" },
                { quote: "The offline APK is a gamechanger. I sync my summaries before my flight and read through them without needing wifi.", author: "S.T.", role: "Founder, Tokyo" }
              ].map((t, i) => (
                <div key={i} className="p-8 bg-white border border-[#0d0d0d]/10 rounded-2xl">
                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                  </div>
                  <p className="text-lg text-[#0d0d0d] mb-8 font-medium leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center font-bold text-sm">
                      {t.author}
                    </div>
                    <div>
                      <p className="font-bold text-[#0d0d0d] text-sm">{t.author}</p>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APK CTA */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <Smartphone className="w-16 h-16 mx-auto mb-8 opacity-80" />
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Take your knowledge tool offline.</h2>
            <p className="text-primary-foreground/80 text-xl mb-10">
              Download the Android APK for a fully functional offline demo experience. No internet required to review your saved summaries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk" className="h-14 px-8 rounded-full bg-white text-primary font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2" data-testid="btn-download-apk-bottom">
                Download APK (v1.0 Demo)
              </a>
              <a href="https://github.com/yusufsafary/sinalytica-landing" className="h-14 px-8 rounded-full border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2" data-testid="btn-github-bottom">
                View Source on GitHub
              </a>
            </div>
            <p className="mt-8 text-sm text-primary-foreground/60">Offline demo — no internet required · Android 8.0+</p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 bg-[#0d0d0d] text-center border-b border-white/10">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">Start reading smarter.</h2>
            <div className="flex justify-center gap-4">
              <button className="h-14 px-8 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-colors" data-testid="btn-final-try">Try the Demo</button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
