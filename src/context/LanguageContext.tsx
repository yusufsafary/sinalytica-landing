import React, { createContext, useContext, useState } from "react";

export type Lang = "en" | "ja";

export const translations = {
  en: {
    badge: "Demo and Waitlist",
    h1Line1: "Read less.",
    h1Line2: "Know smarter.",
    desc: "Paste any YouTube, TikTok, Instagram, or article link. Sinalytic AI extracts every key insight in seconds. No fluff, no filler.",
    cta1: "Watch Demo in Browser",
    cta2: "Try Demo with APK",
    features: ["4 Platforms", "Under 5s per summary", "10+ Languages", "Free forever"],
    followUs: "Follow us",
    founderLabel: "Founder",
    scrollExplore: "Scroll to explore",
  },
  ja: {
    badge: "デモ & 早期登録",
    h1Line1: "少ない読書。",
    h1Line2: "賢い知識。",
    desc: "YouTube、TikTok、Instagram、記事のURLを貼り付けるだけ。Sinalytic AIが数秒で全ての重要な洞察を抽出します。無駄なし、フィラーなし。",
    cta1: "ブラウザでデモを見る",
    cta2: "APKでデモを試す",
    features: ["4プラットフォーム", "5秒以内で要約", "10言語以上", "永久無料"],
    followUs: "フォローする",
    founderLabel: "ファウンダー",
    scrollExplore: "スクロールして探索",
  },
} as const;

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations["en"];
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
