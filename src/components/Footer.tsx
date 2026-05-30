import React from "react";
import { SiGithub, SiX } from "react-icons/si";
import { Globe } from "lucide-react";

const LINKS = {
  Product: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Live Demo", href: "#demo" },
    { label: "Download APK", href: "#download" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Contact", href: "mailto:hello@sinalytic.life" },
  ],
  Developer: [
    { label: "GitHub Repo", href: "https://github.com/yusufsafary/sinalytica-landing" },
    { label: "API Docs", href: "#" },
    { label: "Releases", href: "https://github.com/yusufsafary/sinalytica-landing/releases" },
    { label: "Changelog", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-gray-500 border-t border-white/5">
      <div className="container mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold text-white tracking-tight mb-2">
              Sinalytica<span className="text-primary">.</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Knowledge from anything, anywhere.<br />Read less. Know smarter.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/yusufsafary/sinalytica-landing" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <SiGithub className="w-4 h-4 text-white" />
              </a>
              <a href="https://sinalytic.life" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Globe className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <SiX className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Sinalytica. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Live at{" "}
            <a href="https://sinalytic.life" className="text-primary hover:underline ml-1">
              sinalytic.life
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
