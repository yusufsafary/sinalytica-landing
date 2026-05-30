import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
  { href: "#download", label: "Android APK" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white tracking-tight flex items-center gap-1">
            Sinalytica<span className="text-primary">.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="hover:text-white transition-colors">
                {l.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk"
              className="h-9 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> APK
            </a>
            <button
              onClick={() => scrollTo("#demo")}
              className="h-9 inline-flex items-center rounded-full bg-primary px-5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              Try Demo
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[57px] z-40 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/10 px-6 py-6 flex flex-col gap-4 md:hidden"
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left text-base font-medium text-gray-300 hover:text-white transition-colors py-1"
              >
                {l.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-3 border-t border-white/10">
              <a
                href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk"
                className="h-11 flex items-center justify-center gap-2 rounded-full border border-white/20 text-sm font-medium text-white"
              >
                <Download className="w-4 h-4" /> Download APK (Android)
              </a>
              <button
                onClick={() => scrollTo("#demo")}
                className="h-11 flex items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
              >
                Try Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
