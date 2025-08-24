import React, { useState } from "react";
import { LanguageProvider } from "./LanguageProvider"; // optional if you use a context later
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

import footerData from "./i18n/footer.json";

export default function App() {
  const [route, setRoute] = useState("home");
  const [language, setLanguage] = useState("en"); // <-- language state

  const onNavigate = (r) => setRoute(r);

  // function to change language globally
  const onLanguageChange = (lang) => setLanguage(lang);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Nav
          current={route}
          onNavigate={onNavigate}
          language={language}            // <-- pass current language
          onLanguageChange={onLanguageChange} // <-- pass function to Nav
        />

        {route === "home" && <HomePage language={language} />}
        {route === "services" && <ServicesPage language={language} />}
        {route === "team" && <TeamPage language={language} />}
        {route === "contact" && <ContactPage language={language} />}

        {/* <Footer onNavigate={onNavigate} /> */}
        <Footer onNavigate={onNavigate} t={footerData[language]} />
      </div>
    </LanguageProvider>
  );
}


