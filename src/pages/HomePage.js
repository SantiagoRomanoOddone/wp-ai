import React from "react";
import Container from "../components/Container";
import Pill from "../components/Pill";
import Icon from "../components/Icon";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import WhyCard from "../components/WhyCard";
import CTA from "../components/CTA";
import homepageData from "../i18n/homepage.json";

function StatCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <Icon name={icon} className="h-6 w-6 text-sky-600" />
      <div className="mt-2 text-sm font-semibold text-slate-900">{title}</div>
      <div className="text-xs text-slate-600">{desc}</div>
    </div>
  );
}

function Hero({ t, onNavigate }) {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-20 lg:py-24">
        <div className="flex flex-col justify-center">
          <Pill>{t.hero.tagline}</Pill>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {t.hero.headline}
          </h1>
          <p className="mt-4 max-w-prose text-base leading-7 text-slate-600">
            {t.hero.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate("contact")}
              className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
            >
              {t.hero.ctaPrimary}
            </button>
            <button
              onClick={() => onNavigate("services")}
              className="rounded-full border border-sky-200 px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              {t.hero.stats.map((s, i) => (
                <StatCard key={i} icon={s.icon} title={s.title} desc={s.desc} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function HomePage({ onNavigate, language }) {
  const t = homepageData[language];

  return (
    <>
      <Hero t={t} onNavigate={onNavigate} />
      <section className="py-16 md:py-20" id="services">
        <Container>
          <SectionTitle
            kicker={t.services.kicker}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} points={s.points} />
            ))}
          </div>
        </Container>
      </section>

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

      <CTA onNavigate={onNavigate} t={t} />
    </>
  );
}
