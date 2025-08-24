

import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";
import Icon from "../components/Icon";
import { useState } from "react";
import contactPageData from "../i18n/contactpage.json";

export default function ContactPage({ language }) {
  const [lang, setLang] = useState(language || "en");
  const t = contactPageData.contactPage;

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const subject = encodeURIComponent(`Inquiry from ${data.name || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nMessage: ${data.message}`
    );
    window.location.href = `mailto:contact@simplecode.ai?subject=${subject}&body=${body}`;
  }

  return (
    <section className="py-12 md:py-16">
      <Container>
        {/* Botón para cambiar idioma */}
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

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-sky-100 p-2 text-sky-600">
                <Icon name="mail" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  {t.contactInfo.emailLabel[lang]}
                </div>
                <a
                  href={`mailto:${t.contactInfo.emailValue}`}
                  className="text-sm text-sky-700 hover:underline"
                >
                  {t.contactInfo.emailValue}
                </a>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="rounded-xl bg-sky-100 p-2 text-sky-600">
                <Icon name="phone" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  {t.contactInfo.phoneLabel[lang]}
                </div>
                <span className="text-sm text-slate-600">{t.contactInfo.phoneValue}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="rounded-xl bg-sky-100 p-2 text-sky-600">
                <Icon name="map" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  {t.contactInfo.basedInLabel[lang]}
                </div>
                <span className="text-sm text-slate-600">{t.contactInfo.locationValue[lang]}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-slate-700">
                  {t.form.name[lang]}
                </label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700">
                  {t.form.email[lang]}
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700">
                  {t.form.company[lang]}
                </label>
                <input
                  name="company"
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700">
                  {t.form.budget[lang]}
                </label>
                <select
                  name="budget"
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring"
                >
                  <option value="">{t.form.budgetOptions.select[lang]}</option>
                  <option>{t.form.budgetOptions.under2000[lang]}</option>
                  <option>{t.form.budgetOptions["2000to5000"][lang]}</option>
                  <option>{t.form.budgetOptions["5000to10000"][lang]}</option>
                  <option>{t.form.budgetOptions.over10000[lang]}</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-slate-700">
                  {t.form.message[lang]}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring"
                  placeholder={t.form.messagePlaceholder[lang]}
                />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-slate-500">{t.form.consent[lang]}</p>
              <button
                type="submit"
                className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
              >
                {t.form.submit[lang]}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
