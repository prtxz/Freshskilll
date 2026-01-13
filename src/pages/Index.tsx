import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import FlowingMenu from "@/components/FlowingMenu";
import EventsSection from "@/components/EventsSection";
import InitiativesSection from "@/components/InitiativesSection";
import HackathonsSection from "@/components/HackathonsSection";
import CommunitySection from "@/components/CommunitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PresenceSection from "@/components/PresenceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
        <FlowingMenu />
        <EventsSection />
        <InitiativesSection />
        <HackathonsSection />
        <CommunitySection />
        <TestimonialsSection />
        <PresenceSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
