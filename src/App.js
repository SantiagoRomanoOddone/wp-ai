import React, { useState } from "react";
import { LanguageProvider } from "./LanguageProvider"; 
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import footerData from "./i18n/footer.json";

export default function App() {
  const [route, setRoute] = useState("home");
  const [language, setLanguage] = useState("en"); 

  const onNavigate = (r) => setRoute(r); 

  const onLanguageChange = (lang) => setLanguage(lang);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Nav
          current={route}
          onNavigate={onNavigate} 
          language={language}            
          onLanguageChange={onLanguageChange} 
        />

        {route === "home" && <HomePage onNavigate={onNavigate} language={language} />}
        {route === "services" && <ServicesPage onNavigate={onNavigate} language={language} />}
        {route === "team" && <TeamPage onNavigate={onNavigate} language={language} />}
        {route === "contact" && <ContactPage onNavigate={onNavigate} language={language} />}

        <Footer onNavigate={onNavigate} t={footerData[language]} />
      </div>
    </LanguageProvider>
  );
}
