import React from "react";
import { motion } from "framer-motion";
import { SiX } from "react-icons/si";
import { Zap, Globe, Brain, Heart } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const VALUES = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Speed over everything",
    desc: "Your time is your most valuable asset. We obsess over making every extraction as fast as possible.",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Signal, not noise",
    desc: "We extract what matters. The insight, not the padding. The conclusion, not the filler.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Knowledge for everyone",
    desc: "Language should never be a barrier. Sinalytic works across 10+ languages so anyone can access any content.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Built with care",
    desc: "Every feature is hand-crafted and tested. We ship things we are proud of, or we do not ship them at all.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Nav />
      <main className="pt-28">
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.1)_0%,_transparent_60%)]" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">About</p>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                We make knowledge<br />
                <span className="text-primary">instantly accessible.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                Sinalytic is an AI-powered knowledge extraction tool that turns hours of video and long-form content into crisp, actionable insights in under 5 seconds. Paste a link. Own the knowledge.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white/[0.02] border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {VALUES.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl border border-white/8 bg-white/[0.02]"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0d0d0d]">
          <div className="container mx-auto px-6">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-10">Team</p>
            <div className="flex flex-col md:flex-row gap-8 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-1 p-8 rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-black text-primary mb-5">O</div>
                <h3 className="text-xl font-bold text-white mb-1">@Sinagithub</h3>
                <p className="text-primary text-sm font-semibold mb-3">Founder</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Builder and creator of Sinalytic. Obsessed with reducing the time it takes to extract value from content. Shipping in public.
                </p>
                <a
                  href="https://x.com/Sinagithub"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <SiX className="w-3.5 h-3.5" /> Follow on X
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex-1 p-8 rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-black text-primary mb-5">S</div>
                <h3 className="text-xl font-bold text-white mb-1">@Sinagithub</h3>
                <p className="text-primary text-sm font-semibold mb-3">Official Account</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Product updates, launch news, and behind-the-scenes building. Follow for early access announcements and changelog updates.
                </p>
                <a
                  href="https://x.com/Sinagithub"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <SiX className="w-3.5 h-3.5" /> Follow on X
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f7f6f3]">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Contact</p>
              <h2 className="text-3xl font-black text-[#0d0d0d] mb-4">Get in touch.</h2>
              <p className="text-gray-500 mb-6">
                Questions, feedback, partnership inquiries, or just want to say hi? We read every message.
              </p>
              <a
                href="mailto:hello@sinalytic.life"
                className="inline-flex h-12 px-7 items-center gap-2 rounded-full bg-[#0d0d0d] text-white font-semibold text-sm hover:bg-primary transition-colors"
              >
                hello@sinalytic.life
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
