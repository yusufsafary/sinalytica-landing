import React from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `Sinalytic is designed to work with minimal data. When you use the browser demo, no personal information is stored on our servers. When you join the waitlist, we collect only your email address to send you launch updates and early access notifications. We do not sell, share, or rent your email address to any third party.`,
  },
  {
    title: "How the App Works",
    body: `The Sinalytic Android APK processes content extraction requests locally and via our AI backend. URLs you paste are sent to our servers solely for the purpose of extracting knowledge content. We do not log, store, or analyse the content of the URLs you submit beyond what is required to generate your summary. Summaries are returned to your device and not retained on our servers.`,
  },
  {
    title: "Cookies and Tracking",
    body: `The Sinalytic website uses no third-party tracking cookies. We use basic, privacy-respecting analytics to understand which pages are visited so we can improve the product. No personally identifiable information is attached to analytics events.`,
  },
  {
    title: "Data Security",
    body: `All data transmitted between your device and our servers is encrypted in transit using TLS. We store waitlist email addresses securely and restrict access to authorised team members only. We do not store any financial information.`,
  },
  {
    title: "Third-Party Services",
    body: `Sinalytic uses the following third-party services: Vercel (hosting), and an AI provider for knowledge extraction. These services have their own privacy policies, which we encourage you to review.`,
  },
  {
    title: "Your Rights",
    body: `You may request deletion of your waitlist email address at any time by emailing hello@sinalytic.life with the subject "Delete my data". We will process your request within 5 business days.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. We will notify waitlist members of any significant changes via email. Continued use of Sinalytic after changes are posted constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact",
    body: `If you have any questions about this Privacy Policy or how we handle your data, please contact us at hello@sinalytic.life.`,
  },
];

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">Privacy Policy</h1>
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
