import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white tracking-tight" data-testid="link-logo">
          Sinalytica<span className="text-primary">.</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#how-it-works" className="hover:text-white transition-colors" data-testid="link-how">How it works</a>
          <a href="#features" className="hover:text-white transition-colors" data-testid="link-features">Features</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/yusufsafary/sinalytica-landing/releases/download/v1.0/sinalytica-demo.apk" className="hidden sm:inline-flex h-10 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white hover:bg-white/10 transition-colors" data-testid="btn-nav-apk">
            Download APK
          </a>
          <button className="h-10 inline-flex items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-white hover:bg-primary/90 transition-colors" data-testid="btn-nav-try">
            Try Web App
          </button>
        </div>
      </div>
    </nav>
  );
}
