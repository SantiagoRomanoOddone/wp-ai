import React from "react";
import Container from "./Container";

export default function CTA({ onNavigate }) {
  return (
    <section className="relative py-16 md:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-600 to-sky-500 p-8 text-white shadow-sm md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold tracking-tight">Ready to explore AI for your business?</h3>
              <p className="mt-2 text-sm/6 opacity-90">Get a free, no‑obligation consultation. We’ll discuss goals, budget, and options that make sense for you.</p>
            </div>
            <div className="flex md:justify-end">
              <button onClick={() => onNavigate("contact")} className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}