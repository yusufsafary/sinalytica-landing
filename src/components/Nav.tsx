import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X, Download } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works", isPage: true },
  { href: "#features", label: "Features", isPage: false },
  { href: "#demo", label: "Demo", isPage: false },
  { href: "#download", label: "Android APK", isPage: false },
];

function SinalyticLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="7" fill="#2563eb"/>
      <rect x="6" y="8" width="10" height="2" rx="1" fill="white" opacity="0.9"/>
      <rect x="6" y="12" width="14" height="2" rx="1" fill="white" opacity="0.7"/>
      <rect x="6" y="16" width="8" height="2" rx="1" fill="white" opacity="0.5"/>
      <path d="M19 15 L22 12 L22 18 Z" fill="#93c5fd"/>
      <circle cx="22" cy="19" r="2" fill="#60a5fa"/>
      <path d="M20 19 L17 19" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "ja" : "en")}
      className="h-8 px-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1.5"
      title="Switch language"
    >
      <span className={lang === "en" ? "text-white" : "text-gray-500"}>EN</span>
      <span className="text-gray-600">/</span>
      <span className={lang === "ja" ? "text-white" : "text-gray-500"}>日本語</span>
    </button>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isPage: boolean) => {
    setMenuOpen(false);
    if (isPage) {
      navigate(href);
    } else {
      if (location !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <SinalyticLogo />
            <span className="text-xl font-bold text-white tracking-tight">
              Sinalytic<span className="text-primary">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href, l.isPage)}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LangToggle />
            <a
              href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk"
              className="h-9 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> APK
            </a>
            <button
              onClick={() => handleNavClick("#demo", false)}
              className="h-9 inline-flex items-center rounded-full bg-primary px-5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              Try Demo
            </button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

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
                onClick={() => handleNavClick(l.href, l.isPage)}
                className="text-left text-base font-medium text-gray-300 hover:text-white transition-colors py-1"
              >
                {l.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-3 border-t border-white/10">
              <LangToggle />
              <a
                href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk"
                className="h-11 flex items-center justify-center gap-2 rounded-full border border-white/20 text-sm font-medium text-white"
              >
                <Download className="w-4 h-4" /> Download APK (Android)
              </a>
              <button
                onClick={() => handleNavClick("#demo", false)}
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
