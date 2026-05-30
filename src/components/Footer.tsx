import React from "react";
import { SiX } from "react-icons/si";
import { Globe, Mail } from "lucide-react";

const LINKS = {
  Product: [
    { label: "How it works", href: "/how-it-works" },
    { label: "Features", href: "/how-it-works#features" },
    { label: "Live Demo", href: "/#demo" },
    { label: "Download APK", href: "/#download" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Contact", href: "mailto:hello@sinalytic.life" },
  ],
  Community: [
    { label: "@Sinalyticalife", href: "https://x.com/Sinalyticalife", ext: true },
    { label: "@oroimho (Founder)", href: "https://x.com/oroimho", ext: true },
    { label: "Join Waitlist", href: "/#waitlist", ext: false },
    { label: "APK Releases", href: "https://github.com/yusufsafary/sinalytica-landing/releases", ext: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-gray-500 border-t border-white/5">
      <div className="container mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold text-white tracking-tight mb-2">
              Sinalytic<span className="text-primary">.</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Knowledge from anything, anywhere.<br />Read less. Know smarter.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://x.com/Sinalyticalife"
                target="_blank"
                rel="noreferrer"
                title="@Sinalyticalife"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/15 transition-colors group"
              >
                <SiX className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://sinalytic.life"
                target="_blank"
                rel="noreferrer"
                title="sinalytic.life"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/15 transition-colors group"
              >
                <Globe className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:hello@sinalytic.life"
                title="Email us"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/15 transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>

            <div className="text-xs text-gray-600 space-y-1">
              <div className="flex items-center gap-2">
                <SiX className="w-3 h-3 shrink-0" />
                <a href="https://x.com/Sinalyticalife" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
                  @Sinalyticalife
                </a>
              </div>
              <div className="flex items-center gap-2">
                <SiX className="w-3 h-3 shrink-0" />
                <a href="https://x.com/oroimho" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
                  @oroimho <span className="text-gray-700">(Founder)</span>
                </a>
              </div>
            </div>
          </div>

          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={"ext" in l && l.ext ? "_blank" : undefined}
                      rel={"ext" in l && l.ext ? "noreferrer" : undefined}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Sinalytic. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://orynth.dev/projects/sinalytic"
              target="_blank"
              rel="noopener"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <img
                src="https://orynth.dev/api/badge/sinalytic?theme=light&style=default"
                alt="Featured on Orynth"
                width="130"
                height="40"
                className="h-8 w-auto"
              />
            </a>
            <p className="flex items-center gap-1">
              Live at{" "}
              <a href="https://sinalytic.life" className="text-primary hover:underline ml-1">
                sinalytic.life
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
