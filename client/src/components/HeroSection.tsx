import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import splash1 from "@/assets/splash-1.jpg";
import splash2 from "@/assets/splash-2.jpg";
import splash3 from "@/assets/splash-3.jpg";
import splash4 from "@/assets/splash-4.jpg";
import splash5 from "@/assets/splash-5.jpg";
import splash6 from "@/assets/splash-6.jpg";
import navmenuImg from "@/assets/navmenu.png";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState("FUTURE");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev === "FUTURE" ? "TODAY" : "FUTURE"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Partners", href: "#partners" },
    { name: "Initiative", href: "#initiatives" },
    { name: "Events", href: "#events" },
    { name: "Community", href: "#community" },
    { name: "Hackathon", href: "#hackathon" },
  ];

  return (
    <section className="relative bg-white pt-2 pb-0 w-full md:pt-4">
      <div className="mx-auto w-full px-2 md:px-4">
        
        {/* The true dual-arm structural S-curve container */}
        <div className="relative w-full overflow-visible min-h-[50vh] md:min-h-[500px] lg:min-h-[600px] flex flex-row items-stretch">
          
          {/* BACKGROUND LAYER */}
          <div className="absolute inset-0 flex flex-row items-stretch pointer-events-none z-0">
            {/* LEFT ARM */}
            <div className="relative w-[45%] bg-[#1a00a8] mt-[70px] md:mt-[90px] rounded-br-[40px] rounded-bl-[40px] z-10 transition-all duration-300">
              
              {/* TOP Inner Concave Flare */}
              <div className="absolute bottom-full right-0 w-[40px] h-[40px] bg-[#1a00a8]">
                 <div className="w-full h-full bg-white rounded-br-[40px]"></div>
              </div>

            </div>

            {/* RIGHT ARM */}
            <div className="relative w-[55%] bg-[#1a00a8] mb-[70px] md:mb-[90px] -ml-[1px] rounded-tl-[40px] rounded-tr-[40px] z-0 transition-all duration-300">
              
              {/* BOTTOM Inner Concave Flare */}
              <div className="absolute top-full left-[1px] w-[40px] h-[40px] bg-[#1a00a8]">
                 <div className="w-full h-full bg-white rounded-tl-[40px]"></div>
              </div>

            </div>
          </div>


          {/* FOREGROUND / CONTENT LAYER */}
          <div className="relative z-20 w-full h-full flex flex-col pointer-events-none pb-[70px] md:pb-[90px]">
            
            {/* Logo Area */}
            <div className="h-[70px] md:h-[90px] w-full flex items-center px-4 md:px-10 pointer-events-auto">
              <a href="/" className="flex items-center gap-1">
                <span className="font-heading text-xl md:text-3xl font-bold text-black flex items-center tracking-tight">
                  Reskill<span className="text-[#faba60] font-bold ml-1 translate-y-[2px]">_</span><span className="font-sans ml-[1px]">l</span>
                </span>
              </a>
            </div>

            {/* Content Container: Text on Left, Images on Right */}
            <div className="flex-1 flex flex-col xl:flex-row w-full px-6 md:px-16 mt-4 md:mt-8 pointer-events-auto">
              
              {/* Left Text */}
              <div className="xl:w-[60%] flex flex-col justify-center xl:pr-8">
                <motion.h1 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="font-mono text-[11vw] sm:text-6xl md:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem] font-bold text-white tracking-wide uppercase leading-tight md:leading-[1.05] break-words"
                >
                  DEFINING<br className="md:hidden" />{" "}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWord}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block"
                    >
                      {currentWord}*
                    </motion.span>
                  </AnimatePresence>
                </motion.h1>
              </div>

              {/* Right Images Animation (Carousel) */}
              <div className="hidden xl:flex xl:w-[40%] relative justify-center items-center mt-10 xl:mt-0 h-[450px] overflow-hidden">
                
                {/* Gradient Masks to blend into the blue section */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a00a8] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a00a8] to-transparent z-10 pointer-events-none"></div>

                {/* Infinite Scroll Container */}
                <motion.div 
                  className="flex flex-col gap-6 w-[85%] max-w-[420px] absolute"
                  animate={{ y: [0, "-50%"] }}
                  transition={{ 
                    duration: 30, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                >
                  {[splash1, splash2, splash4, splash5, splash6, splash1, splash2, splash4, splash5, splash6].map((img, idx) => (
                    <div 
                      key={idx} 
                      className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shrink-0"
                    >
                      <img src={img} alt={`Splash ${idx}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </motion.div>

              </div>

            </div>
            
          </div>

          {/* Hamburger Menu (in the blue area on the top right) */}
          <div className="absolute top-6 right-6 md:top-8 md:right-10 z-50 pointer-events-auto">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-white/80 transition-colors p-1"
              aria-label="Toggle menu"
            >
              <Menu className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
            </button>
          </div>

        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* White Background Layer while dragging */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-white"
            />

            {/* Blue Sliding Page */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 z-50 bg-[#162454] flex flex-col justify-center items-center px-6 overflow-visible origin-top"
            >
              {/* The illustrator character attached to the bottom border pulling it down */}
              <motion.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-20 pointer-events-none z-0"
              >
                <img 
                  src={navmenuImg} 
                  alt="Menu pulling illustrator" 
                  className="w-[200px] md:w-[350px] object-contain opacity-90 -mt-2"
                />
              </motion.div>

              {/* Close Button */}
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 md:top-8 md:right-10 text-white hover:text-[#faba60] transition-colors p-1 z-20"
              >
                <X className="w-10 h-10" strokeWidth={1} />
              </button>

              {/* Menu Links */}
              <nav className="relative z-10 flex flex-col items-center gap-6 md:gap-8 mb-10 w-full">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setIsMenuOpen(false)}
                    className="relative text-4xl md:text-6xl font-heading font-bold text-white hover:text-[#faba60] transition-colors hover:scale-105 transform group flex items-center justify-center"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#faba60] text-3xl md:text-5xl absolute -left-10 md:-left-14">✦</span>
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* Auth Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-2 border-[#faba60] bg-[#faba60] text-black hover:bg-[#faba60]/90 font-bold text-lg py-6"
                >
                  Sign in
                </Button>
                <Button 
                  variant="default" 
                  size="lg"
                  className="w-full bg-white text-black hover:bg-gray-200 font-bold text-lg py-6"
                >
                  Register Now
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
