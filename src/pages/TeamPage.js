import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import Container from "../components/Container";
import { useState } from "react";
import teamPageData from "../i18n/teampage.json"; // tu JSON de traducción

export default function TeamPage({ language }) {
  // Por si querés controlar un cambio de idioma local
  const [lang, setLang] = useState(language || "en");

  const t = teamPageData.teamPage;

  return (
    <section className="py-12 md:py-16">
      <Container>
        {/* Botón de ejemplo para cambiar idioma localmente */}
        <div className="mb-6">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="rounded-full border border-sky-200 px-3 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-50"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>

        <SectionTitle
          kicker={t.sectionTitle.kicker[lang]}
          title={t.sectionTitle.title[lang]}
          subtitle={t.sectionTitle.subtitle[lang]}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.teamCards.map((member, i) => (
            <TeamCard
              key={i}
              name={member.name[lang]}
              role={member.role[lang]}
              blurb={member.blurb[lang]}
              links={member.links}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
