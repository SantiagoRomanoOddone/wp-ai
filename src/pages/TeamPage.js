import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import Container from "../components/Container";
import teamPageData from "../i18n/teampage.json"; // tu JSON de traducción

export default function TeamPage({ language }) {
  const t = teamPageData.teamPage;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionTitle
          kicker={t.sectionTitle.kicker[language]}
          title={t.sectionTitle.title[language]}
          subtitle={t.sectionTitle.subtitle[language]}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {t.teamCards.slice(0, 2).map((member, i) => (
              <TeamCard
                key={i}
                name={member.name[language]}
                role={member.role[language]}
                blurb={member.blurb[language]}
                links={member.links}
              />
            ))}
          </div>
          {/* <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}
          {/* {t.teamCards.map((member, i) => (
            <TeamCard
              key={i}
              name={member.name[language]}
              role={member.role[language]}
              blurb={member.blurb[language]}
              links={member.links}
            />
          ))} */}
        {/* </div> */}
      </Container>
    </section>
  );
}
