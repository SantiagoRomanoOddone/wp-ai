import React, { useState } from "react";
import Container from "./Container";

const brandGradient = "bg-gradient-to-r from-sky-600 to-sky-500";

const navItems = [
  { id: "home", label: { en: "Home", es: "Inicio" } },
  { id: "services", label: { en: "Services", es: "Servicios" } },
  { id: "team", label: { en: "Team", es: "Equipo" } },
];

export default function Nav({ current, onNavigate, language, onLanguageChange }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-sky-100/80 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`h-8 w-8 rounded-xl ${brandGradient}`} />
          <div className="text-lg font-semibold tracking-tight text-slate-900">SimpleCode</div>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => onNavigate(n.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition hover:bg-sky-50 hover:text-sky-700 ${
                current === n.id ? "text-sky-700" : "text-slate-700"
              }`}
            >
              {n.label[language]}
            </button>
          ))}

          <button
            onClick={() => onNavigate("contact")}
            className="ml-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
          >
            {language === "en" ? "Get Started" : "Comenzar"}
          </button>

          {/* LANGUAGE SWITCH */}
          <button
            onClick={() => onLanguageChange(language === "en" ? "es" : "en")}
            className="relative inline-flex h-6 w-16 items-center rounded-full bg-sky-600 p-1"
          >
            <span className="absolute left-1 text-xs font-semibold text-slate-100">EN</span>
            <span className="absolute right-1 text-xs font-semibold text-slate-100">ES</span>
            <span
              className={`inline-block h-5 w-7 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                language === "en" ? "translate-x-0" : "translate-x-8"
              }`}
            />
          </button>

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Open menu">
          <div className="i-bars-3 h-6 w-6 text-slate-800">
            <span className="block h-0.5 w-6 bg-slate-800"></span>
            <span className="mt-1 block h-0.5 w-6 bg-slate-800"></span>
            <span className="mt-1 block h-0.5 w-6 bg-slate-800"></span>
          </div>
        </button>
      </Container>

      {open && (
        <div className="md:hidden">
          <Container className="pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => {
                    onNavigate(n.id);
                    setOpen(false);
                  }}
                  className={`rounded-xl px-3 py-2 text-left text-sm transition hover:bg-sky-50 ${
                    current === n.id ? "bg-sky-50 text-sky-700" : "text-slate-700"
                  }`}
                >
                  {n.label[language]}
                </button>
              ))}

              <button
                onClick={() => {
                  onNavigate("contact");
                  setOpen(false);
                }}
                className="rounded-xl px-3 py-2 text-left text-sm text-sky-700 transition hover:bg-sky-50"
              >
                {language === "en" ? "Get Started" : "Comenzar"}
              </button>

              {/* LANGUAGE SWITCH MOBILE */}
              
              <button
                onClick={() => {
                  onLanguageChange(language === "en" ? "es" : "en");
                  setOpen(false);
                }}
                className="relative inline-flex h-6 w-16 items-center rounded-full bg-gray-300 dark:bg-gray-600 p-1 mt-2"
              >
                <span className="absolute left-1 text-xs font-semibold text-slate-700">EN</span>
                <span className="absolute right-1 text-xs font-semibold text-slate-700">ES</span>
                <span
                  className={`inline-block h-5 w-7 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                    language === "en" ? "translate-x-0" : "translate-x-8"
                  }`}
                />
              </button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
