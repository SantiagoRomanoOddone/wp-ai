
import React from "react";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";
import Icon from "../components/Icon";

// Import translations JSON
import translations from "../i18n/servicespage.json";

export default function ServicesPage({ language }) {
  const t = translations[language];

  return (
    <section className="py-12 md:py-16">
      <Container>
        {/* Section Title */}
        <SectionTitle kicker={t.kicker} title={t.title} subtitle={t.subtitle} />

        {/* Services Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {t.services.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-sky-100 p-2 text-sky-600">
                  <Icon name={s.icon} />
                </div>
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

        {/* Tailored Solutions Section */}
        <div className="mt-16 bg-sky-50 rounded-3xl p-10 text-center">
          <h3 className="text-lg font-semibold text-sky-700">{t.tailored.kicker}</h3>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">{t.tailored.title}</h2>
          <p className="mt-4 text-lg text-slate-700">{t.tailored.subtitle}</p>
          <p className="mt-6 max-w-xl mx-auto text-slate-600">{t.tailored.body}</p>
        </div>
      </Container>
    </section>
  );
}
