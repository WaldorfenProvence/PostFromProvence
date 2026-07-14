import { useState, useEffect } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ShopComingSoon from "./components/ShopComingSoon";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import StripeBorders from "./components/StripeBorders";
import StripeRibbon from "./components/StripeRibbon";

// Consulting ("Pick Our Brains") is deliberately left out for now — to add
// it back later, add "consulting" here and to the nav array in Header.tsx,
// then render a <ConsultingPage /> case below.
export type Tab = "home" | "shop" | "about";

const VALID_TABS: Tab[] = ["home", "shop", "about"];

function getTabFromHash(): Tab {
  const hash = window.location.hash.replace("#", "");
  if (VALID_TABS.includes(hash as Tab)) {
    return hash as Tab;
  }
  return "home";
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>(getTabFromHash);

  useEffect(() => {
    const handleHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const changeTab = (tab: Tab) => {
    window.location.hash = tab === "home" ? "" : tab;
    setActiveTab(tab);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <StripeBorders />
      <Header activeTab={activeTab} onNavigate={changeTab} />
      <main className="flex-1">
        {activeTab === "home" && <HomePage />}
        {activeTab === "shop" && <ShopComingSoon />}
        {activeTab === "about" && <AboutPage />}
      </main>
      <Footer />
      <StripeRibbon flip />
    </div>
  );
}
