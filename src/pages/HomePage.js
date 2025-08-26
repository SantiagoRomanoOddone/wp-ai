
import React from "react";
import Container from "../components/Container";
import Pill from "../components/Pill";
import SectionTitle from "../components/SectionTitle";
import WhyCard from "../components/WhyCard";
import CTA from "../components/CTA";
import homepageData from "../i18n/homepage.json";
import { motion } from "framer-motion";

function Hero({ t, onNavigate }) {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900 text-white">
      {/* Floating animated orbs */}
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-sky-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -40, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl"
      />

      <Container className="relative grid gap-10 py-24 md:grid-cols-2 md:py-32 items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center space-y-6">
          <Pill>{t.hero.tagline}</Pill>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            {t.hero.headline}
          </h1>
          <p className="text-lg text-slate-200 max-w-xl">{t.hero.body}</p>

          <div className="flex space-x-4 mt-6">
            <button
              onClick={() => onNavigate("contact")}
              className="rounded-2xl bg-sky-600 hover:bg-sky-700 text-white text-lg px-6 py-3"
            >
              {t.hero.ctaPrimary}
            </button>
            <button
              onClick={() => onNavigate("services")}
              className="rounded-2xl border border-sky-300 text-sky-100 hover:bg-white/10 text-lg px-6 py-3"
            >
              {t.hero.ctaSecondary} →
            </button>
          </div>

          <div className="mt-6 text-xs text-slate-300">
            Trusted by innovative teams worldwide
          </div>
        </div>

        {/* RIGHT SIDE → Brain image */}
        <div className="flex justify-center">
          <motion.img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/brain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--mind-science-thinking-psychology-pack-logos-icons-9651892.png"
            alt="AI Brain Illustration"
            className="w-[420px] h-auto drop-shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </Container>
    </section>
  );
}

export default function HomePage({ onNavigate, language }) {
  const t = homepageData[language];

  return (
    <>
      {/* HERO */}
      <Hero t={t} onNavigate={onNavigate} />

      {/* WHY SECTION */}
      <section className="bg-sky-50/50 py-16 md:py-20">
        <Container>
          <SectionTitle
            kicker={t.why.kicker}
            title={t.why.title}
            subtitle={t.why.subtitle}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.why.items.map((w, i) => (
              <WhyCard key={i} title={w.title} desc={w.desc} />
            ))}
          </div>
        </Container>
      </section>

      {/* SHOWCASE / HIGHLIGHT */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionTitle
            kicker="See the impact"
            title="How AI transforms business outcomes"
            subtitle="From inefficiency to insights in just weeks."
          />
          <div className="mt-10 flex flex-col items-center text-center">
            <div className="rounded-2xl border border-sky-100 bg-white p-8 shadow-sm max-w-2xl">
              <p className="text-lg text-slate-700">
                “Before: Hours spent on manual analysis. After: Instant insights
                and better decisions.”
              </p>
              <div className="mt-4 text-sm text-slate-500">
                – Example client story (replace with your real case)
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <CTA onNavigate={onNavigate} t={t} />
    </>
  );
}
