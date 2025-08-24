import React, { useMemo, useState } from "react";

import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";
import Icon from "../components/Icon";

export default function ServicesPage() {
  const services = useMemo(
    () => [
      {
        icon: "chart",
        title: "Forecasting",
        desc: "Predict sales, demand, and cash flow to plan inventory and staffing with confidence.",
        bullets: ["Time‑series models (ARIMA, Deep Learning)", "Seasonality & promotion effects", "Scenario planning"],
      },
      {
        icon: "spark",
        title: "Prediction & Scoring",
        desc: "Prioritize leads, flag churn risk, and estimate conversion uplift to focus efforts where it matters.",
        bullets: ["Classification & uplift modeling", "Explainable predictions", "A/B guidance"],
      },
      {
        icon: "cluster",
        title: "Clustering & Segmentation",
        desc: "Understand your customers and products with data‑driven groups for targeting and personalization.",
        bullets: ["Customer personas", "Product grouping", "Anomaly detection"],
      },
      {
        icon: "rocket",
        title: "AI Automation",
        desc: "Automate manual reporting, data cleanup, and repetitive workflows to save hours each week.",
        bullets: ["Pipelines & dashboards", "Data quality checks", "Ops assistants & bots"],
      },
    ],
    []
  );

  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionTitle
          kicker="Services"
          title="From idea to impact"
          subtitle="Pick a starting point or combine services. We’ll tailor scope to your goals and budget."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-sky-100 p-2 text-sky-600"><Icon name={s.icon} /></div>
                <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}