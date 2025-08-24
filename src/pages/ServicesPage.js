
import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";
import Icon from "../components/Icon";

// Import translations JSON
import translations from "../i18n/servicespage.json";

export default function ServicesPage() {
  const [language, setLanguage] = useState("en"); // 'en' or 'es'
  const t = translations[language];

  return (
    <section className="py-12 md:py-16">
      <Container>
        {/* Language toggle button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="rounded-full border px-3 py-1 text-sm text-sky-700 hover:bg-sky-50"
          >
            {language === "en" ? "ES" : "EN"}
          </button>
        </div>

        {/* Section Title */}
        <SectionTitle kicker={t.kicker} title={t.title} subtitle={t.subtitle} />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {t.services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6">
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
      </Container>
    </section>
  );
}

