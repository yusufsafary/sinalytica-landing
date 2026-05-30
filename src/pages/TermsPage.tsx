import React from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using Sinalytic ("the Service"), including the website, browser demo, and Android application, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Service.`,
  },
  {
    title: "Description of Service",
    body: `Sinalytic is an AI-powered knowledge extraction tool that processes content from publicly accessible URLs (YouTube videos, TikTok videos, Instagram posts, and web articles) and returns structured summaries. The Service is currently provided as a demo product (v1.0) and is subject to change.`,
  },
  {
    title: "Acceptable Use",
    body: `You agree to use the Service only for lawful purposes. You may not use the Service to process content that infringes intellectual property rights, contains illegal material, or that you do not have permission to access. You may not attempt to reverse-engineer, overload, or disrupt the Service.`,
  },
  {
    title: "Intellectual Property",
    body: `The Sinalytic name, logo, website design, and application code are the intellectual property of Sinalytic and its creators. The AI-generated summaries produced by the Service are provided for your personal, non-commercial use. You may copy or share summaries for personal or educational purposes with attribution.`,
  },
  {
    title: "Demo Product Limitations",
    body: `Sinalytic v1.0 is a demo product. It may contain bugs, have limited availability, and is subject to rate limits. We reserve the right to restrict, modify, or shut down access to the demo at any time without notice.`,
  },
  {
    title: "Disclaimer of Warranties",
    body: `The Service is provided "as is" without warranty of any kind, express or implied. We do not guarantee that the Service will be available, error-free, or that AI-generated summaries will be accurate, complete, or free from omissions.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the maximum extent permitted by law, Sinalytic and its creators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.`,
  },
  {
    title: "Changes to Terms",
    body: `We may update these Terms of Use at any time. Continued use of the Service after changes are posted constitutes acceptance of the revised terms. We will make reasonable efforts to notify waitlist members of significant changes.`,
  },
  {
    title: "Contact",
    body: `If you have any questions about these Terms of Use, please contact us at hello@sinalytic.life.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Nav />
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">Terms of Use</h1>
            <p className="text-gray-500 text-sm mb-12">Last updated: May 2025</p>

            <div className="space-y-10">
              {SECTIONS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
                  <p className="text-gray-400 leading-relaxed">{s.body}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 text-sm text-gray-600">
              Questions? Email us at{" "}
              <a href="mailto:hello@sinalytic.life" className="text-primary hover:underline">
                hello@sinalytic.life
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
