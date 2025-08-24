import React, { useState } from "react";
import Container from "./Container"; 
const brandGradient = "bg-gradient-to-r from-sky-600 to-sky-500";


const nav = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];


export default function Nav({ current, onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-sky-100/80 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`h-8 w-8 rounded-xl ${brandGradient}`} />
          <div className="text-lg font-semibold tracking-tight text-slate-900">SimpleCode</div>
        </div>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => onNavigate(n.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition hover:bg-sky-50 hover:text-sky-700 ${
                current === n.id ? "text-sky-700" : "text-slate-700"
              }`}
            >
              {n.label}
            </button>
          ))}
          <button
            onClick={() => onNavigate("contact")}
            className="ml-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
          >
            Get Started
          </button>
        </nav>
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
              {nav.map((n) => (
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
                  {n.label}
                </button>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}



