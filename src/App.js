import React, { useState } from "react";
import { LanguageProvider } from "./LanguageProvider";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [route, setRoute] = useState("home");
  const onNavigate = (r) => setRoute(r);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Nav current={route} onNavigate={onNavigate} />
        {route === "home" && <HomePage onNavigate={onNavigate} />}
        {route === "services" && <ServicesPage />}
        {route === "team" && <TeamPage />}
        {route === "contact" && <ContactPage />}
        <Footer onNavigate={onNavigate} />
      </div>
    </LanguageProvider>
  );
}

