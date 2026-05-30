import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X, Download } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

// ─── Types ───────────────────────────────────────────────────────────────────
interface NavLink {
  href: string;
  label: string;
  isPage: boolean;
  sectionId?: string; // section to highlight when active
}

// ─── Nav links ───────────────────────────────────────────────────────────────
const NAV_LINKS: NavLink[] = [
  { href: "/how-it-works", label: "How it works", isPage: true,  sectionId: "how-it-works" },
  { href: "#how-it-works", label: "Features",     isPage: false, sectionId: "how-it-works" },
  { href: "#demo",         label: "Demo",          isPage: false, sectionId: "demo" },
  { href: "#download",     label: "APK",           isPage: false, sectionId: "download" },
  { href: "#waitlist",     label: "Join Waitlist", isPage: false, sectionId: "waitlist" },
];

// Which section IDs to observe (in DOM order)
const SECTION_IDS = ["how-it-works", "demo", "download", "waitlist"];

// ─── Logo ─────────────────────────────────────────────────────────────────────
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

// ─── Language toggle ──────────────────────────────────────────────────────────
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

// ─── Scroll progress bar ──────────────────────────────────────────────────────
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-primary origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
}

// ─── Main Nav ─────────────────────────────────────────────────────────────────
export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [location, navigate]      = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scrolled state for nav background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver — track which section is in view
  useEffect(() => {
    if (location !== "/") {
      setActiveSection(null);
      return;
    }

    observerRef.current?.disconnect();

    const entries: Map<string, number> = new Map();

    observerRef.current = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          entries.set(entry.target.id, entry.intersectionRatio);
        });
        // Pick the section with the highest intersection ratio
        let best: string | null = null;
        let bestRatio = 0;
        entries.forEach((ratio, id) => {
          if (ratio > bestRatio) { bestRatio = ratio; best = id; }
        });
        if (best) setActiveSection(best);
      },
      { threshold: [0, 0.15, 0.3, 0.5, 0.75, 1.0], rootMargin: "-10% 0px -30% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [location]);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isLinkActive = (link: NavLink) => {
    if (link.isPage) return location === link.href;
    return activeSection === link.sectionId;
  };

  const handleNavClick = (link: NavLink) => {
    setMenuOpen(false);
    if (link.isPage) {
      navigate(link.href);
    } else {
      if (location !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(link.sectionId ?? "")?.scrollIntoView({ behavior: "smooth" });
        }, 120);
      } else {
        document.getElementById(link.sectionId ?? "")?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <ScrollProgressBar />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0d0d0d]/92 backdrop-blur-xl border-b border-white/8 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="transition-transform duration-200 group-hover:scale-105">
              <SinalyticLogo />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Sinalytic<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
                  className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 group"
                >
                  {/* Pill background when active */}
                  <AnimatePresence>
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/8 border border-white/12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                  </AnimatePresence>
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      active ? "text-white" : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Active dot */}
                  {active && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <LangToggle />
            <a
              href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk"
              className="h-9 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 text-sm font-medium text-white hover:bg-white/10 transition-all hover:border-white/30"
            >
              <Download className="w-3.5 h-3.5" /> APK
            </a>
            <button
              onClick={() => handleNavClick(NAV_LINKS[2])}
              className="h-9 inline-flex items-center rounded-full bg-primary px-5 text-sm font-semibold text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/35 active:scale-95"
            >
              Try Demo
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/8 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-[#0d0d0d]/60 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 top-[57px] z-40 bg-[#0d0d0d]/97 backdrop-blur-xl border-b border-white/10 px-5 py-5 flex flex-col gap-1 md:hidden shadow-2xl"
            >
              {NAV_LINKS.map((link, i) => {
                const active = isLinkActive(link);
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => handleNavClick(link)}
                    className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      active
                        ? "bg-white/8 text-white border border-white/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </motion.button>
                );
              })}

              <div className="pt-3 mt-1 flex flex-col gap-2.5 border-t border-white/8">
                <LangToggle />
                <a
                  href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk"
                  className="h-11 flex items-center justify-center gap-2 rounded-xl border border-white/20 text-sm font-medium text-white hover:bg-white/8 transition-colors"
                >
                  <Download className="w-4 h-4" /> Download APK (Android)
                </a>
                <button
                  onClick={() => handleNavClick(NAV_LINKS[2])}
                  className="h-11 flex items-center justify-center rounded-xl bg-primary text-sm font-semibold text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  Try Demo
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
