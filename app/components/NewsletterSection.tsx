"use client";
import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section
      id="newsletter"
      className="py-24 bg-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-neutral-900/50 border border-white/5 rounded-[2rem] p-8 md:p-16 lg:p-24 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-triton-red/10 text-triton-red text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                Newsletter
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
                Join the
                <br />
                <span className="text-triton-red">Movement</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-md leading-relaxed">
                Be the first to receive event dates, expert training tips, and
                exclusive TRITON World Series offers.
              </p>
            </div>
            <div className="relative">
              {status === "success" ? (
                <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-3xl border border-green-500/20">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    Subscription Confirmed!
                  </h3>
                  <p className="text-gray-400">Welcome to TRITON family.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-sm font-bold uppercase tracking-widest text-triton-red"
                  >
                    Back
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your best e-mail"
                    className="w-full bg-black border-2 border-white/10 rounded-2xl px-8 py-6 text-lg focus:outline-none focus:border-triton-red transition-all"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-white text-black font-black uppercase py-6 rounded-2xl tracking-[0.2em] hover:bg-triton-red hover:text-white transition-all"
                  >
                    {status === "loading" ? "Sending..." : "Subscribe Now"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
