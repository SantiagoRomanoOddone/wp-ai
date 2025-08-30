import React, { useMemo } from "react";
import Container from "../components/Container";
import Pill from "../components/Pill";
import SectionTitle from "../components/SectionTitle";
import WhyCard from "../components/WhyCard";
import CTA from "../components/CTA";
import HowSection from "../components/HowSection";
import homepageData from "../i18n/homepage.json";
import { motion } from "framer-motion";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";

// 🔹 Neural Network Web Component
function NeuralNetworkWeb({ nodes = 80, radius = 1.5 }) {
  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < nodes; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * (0.8 + Math.random() * 0.2); // small jitter
      arr.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ]);
    }
    return arr;
  }, [nodes, radius]);

  return (
    <group>
      {/* Nodes */}
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial emissive="#38bdf8" emissiveIntensity={2} />
        </mesh>
      ))}

      {/* Connections (sparse) */}
      {positions.map((a, i) =>
        positions.map((b, j) =>
          i < j && Math.random() < 0.04 ? (
            <Line
              key={`${i}-${j}`}
              points={[a, b]}
              color="#38bdf8"
              opacity={0.25}
              transparent
              lineWidth={1}
            />
          ) : null
        )
      )}
    </group>
  );
}

// 🔹 Hero 3D Model wrapper
function Hero3DModel() {
  return (
    <Canvas
      style={{ width: 400, height: 400 }}
      gl={{ alpha: true }} // transparent background
    >
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Neural Network */}
      <NeuralNetworkWeb nodes={90} radius={1.5} />

      {/* Controls */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
    </Canvas>
  );
}

// 🔹 Hero Section
function Hero({ t, onNavigate }) {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900 text-white">
      {/* Floating animated orbs */}
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-sky-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -40, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl"
      />

      <Container className="relative grid gap-10 py-24 md:grid-cols-2 md:py-32 items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center space-y-6">
          <Pill>{t.hero.tagline}</Pill>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            {t.hero.headline}
          </h1>
          <p className="text-lg text-slate-200 max-w-xl">{t.hero.body}</p>

          <div className="flex space-x-4 mt-6">
            <button
              onClick={() => onNavigate("contact")}
              className="rounded-2xl bg-sky-600 hover:bg-sky-700 text-white text-lg px-6 py-3"
            >
              {t.hero.ctaPrimary}
            </button>
            <button
              onClick={() => onNavigate("services")}
              className="rounded-2xl border border-sky-300 text-sky-100 hover:bg-white/10 text-lg px-6 py-3"
            >
              {t.hero.ctaSecondary} →
            </button>
          </div>

          {/* <div className="mt-6 text-xs text-slate-300">
            Trusted by innovative teams worldwide
          </div> */}
        </div>

        {/* RIGHT SIDE - Neural Network */}
        <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
          <Hero3DModel />
        </div>
      </Container>
    </section>
  );
}

// 🔹 Main HomePage
export default function HomePage({ onNavigate, language }) {
  const t = homepageData[language];

  return (
    <>
      {/* HERO */}
      <Hero t={t} onNavigate={onNavigate} />

      {/* WHY SECTION */}
      <section className="bg-sky-50/50 py-16 md:py-20">
        <Container>
          <SectionTitle
            kicker={t.why.kicker}
            title={t.why.title}
            subtitle={t.why.subtitle}
            kickerClassName="text-lg md:text-xl font-semibold text-sky-600"
            titleClassName="text-3xl md:text-4xl lg:text-5xl font-extrabold"
            subtitleClassName="text-sm md:text-base text-slate-600"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.why.items.map((w, i) => (
              <WhyCard key={i} title={w.title} desc={w.desc} />
            ))}
          </div>
        </Container>
      </section>

      {/* IMPACT / SHOWCASE SECTION */}
      <section className="py-12 md:py-16 bg-sky-50/50">
        <Container>
          <SectionTitle
            kicker={t.impact.kicker}
            title={t.impact.title}
            subtitle={t.impact.subtitle}
            kickerClassName="text-lg md:text-xl font-semibold text-sky-600"
            titleClassName="text-3xl md:text-4xl lg:text-5xl font-extrabold"
            subtitleClassName="text-sm md:text-base text-slate-600"
          />
          <div className="mt-6 md:mt-10 grid gap-6 md:grid-cols-3 text-center">
            {t.impact.items.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-sky-100 bg-white p-6 md:p-8 shadow-sm"
              >
                <div className="font-semibold text-lg">{item.title}</div>
                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* HOW WE HELP SECTION */}
      <HowSection data={t} />

      {/* CTA BUTTON TO SERVICES */}
      <section className="py-12 bg-sky-50/50">
        <Container>
          <div className="flex justify-center">
            <button
              onClick={() => onNavigate("services")}
              className="rounded-2xl bg-sky-600 hover:bg-sky-700 text-white text-lg px-6 py-3"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <CTA onNavigate={onNavigate} t={t} />
    </>
  );
}
