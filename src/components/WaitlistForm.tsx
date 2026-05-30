import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight, Sparkles } from "lucide-react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStatus("loading");

    // Simulate API call — store in localStorage
    await new Promise((r) => setTimeout(r, 1200));
    try {
      const existing = JSON.parse(localStorage.getItem("sinalytica_waitlist") || "[]");
      if (!existing.includes(email)) {
        localStorage.setItem("sinalytica_waitlist", JSON.stringify([...existing, email]));
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="flex flex-col items-center text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.1, stiffness: 200 }}
              className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4"
            >
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </motion.div>
            <h3 className="text-white text-xl font-bold mb-2">You're on the list!</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We'll notify you at <span className="text-white font-medium">{email}</span> the moment early access opens.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex items-center gap-2 text-xs text-gray-600"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Join <strong className="text-gray-400">1,240+</strong> people already waiting</span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                disabled={status === "loading"}
                className="flex-1 h-12 px-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading" || !email}
                className="h-12 px-6 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>Get Early Access <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs text-center"
              >
                {error}
              </motion.p>
            )}
            <p className="text-center text-xs text-gray-600">
              No spam. Unsubscribe anytime. Join <strong className="text-gray-500">1,240+</strong> on the waitlist.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
