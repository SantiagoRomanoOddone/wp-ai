// src/pages/HomePage.js
import React from "react";

// Copiar estos componentes necesarios para HomePage
import Container from "../components/Container";
import Pill from "../components/Pill";
import Icon from "../components/Icon";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import WhyCard from "../components/WhyCard";
import CTA from "../components/CTA";

// StatCard usado dentro de Hero
function StatCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <Icon name={icon} className="h-6 w-6 text-sky-600" />
      <div className="mt-2 text-sm font-semibold text-slate-900">{title}</div>
      <div className="text-xs text-slate-600">{desc}</div>
    </div>
  );
}

function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className={`absolute inset-0 -z-10 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 opacity-10`} />
      <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-20 lg:py-24">
        <div className="flex flex-col justify-center">
          <Pill>AI & Machine Learning for Small Business</Pill>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Build practical AI that grows your business
          </h1>
          <p className="mt-4 max-w-prose text-base leading-7 text-slate-600">
            SimpleCode helps startups and small enterprises turn data into decisions. Forecast demand, automate workflows, and discover new opportunities with friendly, expert guidance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={onCTAClick}
              className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
            >
              Talk to an Expert
            </button>
            <a
              href="#services"
              className="rounded-full border border-sky-200 px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
              onClick={(e) => e.preventDefault()}
            >
              View Services
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2"><Icon name="shield" /><span>Privacy-first, transparent</span></div>
            <div className="flex items-center gap-2"><Icon name="time" /><span>Quick wins in weeks</span></div>
            <div className="flex items-center gap-2"><Icon name="chart" /><span>ROI-focused delivery</span></div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-sky-100 blur-2xl" />
          <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <StatCard icon="chart" title="Forecasting" desc="Predict sales & demand." />
              <StatCard icon="cluster" title="Segmentation" desc="Understand your customers." />
              <StatCard icon="spark" title="Prediction" desc="Score leads & churn." />
              <StatCard icon="rocket" title="Automation" desc="Save hours every week." />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onCTAClick={() => onNavigate("contact")} />

      <section className="py-16 md:py-20" id="services">
        <Container>
          <SectionTitle
            kicker="What we do"
            title="Clear, practical AI services"
            subtitle="We design solutions that match your size, budget, and goals—no unnecessary complexity."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon="chart"
              title="Forecasting"
              points={["Sales & demand", "Inventory planning", "Cash flow"]}
            />
            <ServiceCard
              icon="spark"
              title="Prediction"
              points={["Lead scoring", "Churn risk", "Conversion uplift"]}
            />
            <ServiceCard
              icon="cluster"
              title="Clustering"
              points={["Customer segments", "Product groups", "Anomaly detection"]}
            />
            <ServiceCard
              icon="rocket"
              title="AI Automation"
              points={["Reporting bots", "Data pipelines", "Ops assistance"]}
            />
          </div>
        </Container>
      </section>

      <section className="bg-sky-50/50 py-16 md:py-20">
        <Container>
          <SectionTitle
            kicker="Why SimpleCode"
            title="Built for small businesses"
            subtitle="Boutique attention, fast iterations, and measurable results."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <WhyCard title="Small‑biz first" desc="Solutions sized to your team, budget, and timeline—no heavy enterprise bloat." />
            <WhyCard title="ROI oriented" desc="We prioritize quick wins and compounding value you can measure." />
            <WhyCard title="Clear & friendly" desc="We speak business, not jargon. You’ll know what we’re building and why." />
          </div>
        </Container>
      </section>

      <CTA onNavigate={onNavigate} />
    </>
  );
}
