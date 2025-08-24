import React, { useMemo, useState } from "react";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Icon from "./components/Icon";
import SectionTitle from "./components/SectionTitle";


import HomePage from "./pages/HomePage";


const brandGradient = "bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400";


function ServicesPage() {
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

function TeamPage() {
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

function TeamCard({ name, role, blurb, links = {} }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 p-6">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 shrink-0 rounded-xl bg-sky-100" />
        <div>
          <div className="text-base font-semibold text-slate-900">{name}</div>
          <div className="text-sm text-slate-600">{role}</div>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-600">{blurb}</p>
      <div className="mt-4 flex gap-3">
        {links.linkedin && (
          <a className="text-sm font-medium text-sky-700 hover:underline" href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        )}
        {links.website && (
          <a className="text-sm font-medium text-sky-700 hover:underline" href={links.website} target="_blank" rel="noreferrer">
            Website ↗
          </a>
        )}
      </div>
    </div>
  );
}

function ContactPage() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const subject = encodeURIComponent(`Inquiry from ${data.name || "Website"}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nMessage: ${data.message}`);
    window.location.href = `mailto:contact@simplecode.ai?subject=${subject}&body=${body}`;
  }

  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionTitle
          kicker="Contact"
          title="Let’s talk about your project"
          subtitle="Tell us what you’re trying to achieve. We’ll reply within 1 business day."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-sky-100 p-2 text-sky-600"><Icon name="mail" /></div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Email</div>
                <a href="mailto:contact@simplecode.ai" className="text-sm text-sky-700 hover:underline">contact@simplecode.ai</a>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="rounded-xl bg-sky-100 p-2 text-sky-600"><Icon name="phone" /></div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Phone</div>
                <span className="text-sm text-slate-600">+54 (11) 0000‑0000</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="rounded-xl bg-sky-100 p-2 text-sky-600"><Icon name="map" /></div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Based in</div>
                <span className="text-sm text-slate-600">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring" />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring" />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring" />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700">Budget (optional)</label>
                <select name="budget" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring">
                  <option value="">Select…</option>
                  <option>Under $2,000</option>
                  <option>$2,000 – $5,000</option>
                  <option>$5,000 – $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-slate-700">Message</label>
                <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring" placeholder="Tell us about your goals and timeline…" />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-slate-500">By submitting, you agree to our processing of your information for the purpose of responding.</p>
              <button type="submit" className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500">
                Send message
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-slate-200 py-10">
      <Container className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className={`h-8 w-8 rounded-xl ${brandGradient}`} />
            <div className="text-lg font-semibold text-slate-900">SimpleCode</div>
          </div>
          <p className="mt-3 text-sm text-slate-600">Practical AI for small businesses. Forecast, automate, and grow—without the complexity.</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><button onClick={() => onNavigate("home")} className="hover:text-sky-700">Home</button></li>
            <li><button onClick={() => onNavigate("services")} className="hover:text-sky-700">Services</button></li>
            <li><button onClick={() => onNavigate("team")} className="hover:text-sky-700">Team</button></li>
            <li><button onClick={() => onNavigate("contact")} className="hover:text-sky-700">Contact</button></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Email: <a className="text-sky-700 hover:underline" href="mailto:contact@simplecode.ai">contact@simplecode.ai</a></li>
            <li>Buenos Aires, Argentina</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">Follow</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a className="hover:text-sky-700" href="https://www.linkedin.com/in/santiagoromanooddone/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="hover:text-sky-700" href="https://www.santiagoro.com" target="_blank" rel="noreferrer">Website</a></li>
          </ul>
        </div>
      </Container>
      <Container className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} SimpleCode. All rights reserved.
      </Container>
    </footer>
  );
}

export default function App() {
  const [route, setRoute] = useState("home");
  const onNavigate = (r) => setRoute(r);

  return (
    <div className="min-h-screen bg-white">
      <Nav current={route} onNavigate={onNavigate} />
      {route === "home" && <HomePage onNavigate={onNavigate} />}
      {route === "services" && <ServicesPage />}
      {route === "team" && <TeamPage />}
      {route === "contact" && <ContactPage />}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}



