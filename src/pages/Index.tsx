import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Check if this is a revisit within the session
  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    if (hasSeenSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      <main className={showSplash ? "invisible" : "visible"}>
        <Navbar />
        <HeroSection />
        <PartnersSection />
      </main>
    </>
  );
};

export default Index;
