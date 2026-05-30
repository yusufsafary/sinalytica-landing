import React from "react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-2xl font-bold text-white tracking-tight mb-2">
              Sinalytica<span className="text-primary">.</span>
            </div>
            <p className="text-sm">Knowledge from anything, anywhere.</p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="https://github.com/yusufsafary/sinalytica-landing" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-600">
          &copy; 2025 Sinalytica. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
