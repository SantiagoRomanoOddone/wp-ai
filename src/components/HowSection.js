import React from "react";
import { ArrowDown, Brain, Lightbulb, Map, Settings } from "lucide-react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

// Map of icons based on your JSON
const ICONS_MAP = {
  "discovery": Brain,
  "lightbulb-ai": Lightbulb,
  "map-plan": Map,
  "implementation": Settings,
  "support": Settings
};

export default function HowSection({ data }) {
  if (!data?.how) return null; // evita crash si no hay data

  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Section Title */}
        <SectionTitle
          kicker={data.how.kicker}
          title={data.how.title || ""}
          subtitle={data.how.subtitle || ""}
          kickerClassName="text-lg md:text-xl font-semibold text-sky-600"
          titleClassName="text-3xl md:text-4xl lg:text-5xl font-extrabold"
          subtitleClassName="text-sm md:text-base text-slate-600"
        />

        {/* Steps */}
        <div className="mt-12 flex flex-col space-y-12 items-center">
          {data.how.steps.map((step, idx) => {
            const StepIcon = ICONS_MAP[step.icon] || Brain;
            return (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-100">
                  <StepIcon className="w-10 h-10 text-sky-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.desc}</p>
                {step.arrow && (
                  <ArrowDown className="w-6 h-6 text-sky-500 mt-8" />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
