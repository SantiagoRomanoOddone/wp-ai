import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import Container from "../components/Container";

export default function TeamPage() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionTitle
          kicker="Our team"
          title="Know the people behind SimpleCode"
          subtitle="Experienced data scientists and engineers who care about your success."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Example profile – duplicate or map from data */}
          <TeamCard
            name="Santiago Romano"
            role="Founder • Data & AI Engineer"
            blurb="Developed ML systems for banking, HR, and retail. Passionate about practical AI that delivers measurable value."
            links={{ linkedin: "https://www.linkedin.com/in/santiagoromanooddone/", website: "https://www.santiagoro.com" }}
          />
          <TeamCard
            name="Your Next Consultant"
            role="ML Engineer"
            blurb="Add short bio about expertise, industries, and approach."
          />
          <TeamCard
            name="Your Data Analyst"
            role="Data Analyst"
            blurb="Add short bio about analytics, dashboards, and insights."
          />
        </div>
      </Container>
    </section>
  );
}