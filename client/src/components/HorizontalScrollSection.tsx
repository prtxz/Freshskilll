import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import hackathonGif from "@/assets/hackathon GIF.gif";
import bootcampGif from "../../../src/assets/bootcamp.gif";
import startupsGif from "../../../src/assets/startups.gif";
import jobsGif from "../../../src/assets/jobs.gif";
import littleMindsGif from "../../../src/assets/little-minds.gif";

const slides = [
  { id: 0, title: "EXPLORE OUR ECOSYSTEM", isIntro: true },
  { id: 1, title: "HACKATHON", subtitle: "Participate in various hackathons and showcase your skills.", image: hackathonGif },
  { id: 2, title: "BOOTCAMP", subtitle: "Participate in various bootcamps and upskill yourself.", image: bootcampGif },
  { id: 3, title: "STARTUPS", subtitle: "Participate in various startup challenges, interact with mentors and investors.", image: startupsGif },
  { id: 4, title: "JOBS / INTERNSHIPS", subtitle: "Get your business problem solved by the Innovators and Startups.", image: jobsGif },
  { id: 5, title: "LITTLE MINDS", subtitle: "Participate in various customised challenges to get your first brush with the technology.", image: littleMindsGif },
];

const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = latest * 6;
    const current = Math.min(Math.max(Math.floor(progress), 0), 5);
    setActiveSlide(current);
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-500vw"]);

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-[#000000]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-black text-white">

        {/* Header UI (Static across all scroll) */}
        <div className="absolute top-0 left-0 w-full p-10 md:p-14 flex justify-center items-start z-[100] pointer-events-none">

          {/* Pagination */}
          <div className="flex gap-4 md:gap-6 font-mono text-xs md:text-sm tracking-widest text-white/30 font-bold">
            {slides.map((s) => (
              <span key={s.id} className={`transition-opacity duration-300 ${activeSlide === s.id ? "text-white opacity-100 scale-125" : "opacity-40"}`}>
                {s.id === 0 ? "EXPLORE" : `0${s.id}`}
              </span>
            ))}
          </div>
        </div>

        {/* --- HORIZONTAL TRACK --- */}
        <motion.div style={{ x }} className="relative flex w-[600vw] h-full items-center">
          
          {/* CONTINUOUS BACKGROUND STRIP - PLAIN BLACK BOX */}
          <div className="absolute top-[38%] left-[-5vw] w-[650vw] h-[80vh] -translate-y-1/2 perspective-[2000px] flex items-center z-0 pointer-events-none">

            {/* The structural 3D base, now a sleek black box with orange border */}
            <div
              className="relative w-full h-[55vh] md:h-[65vh] bg-white border-[6px] md:border-[10px] border-[#ff6b35]"
              style={{
                transform: "rotateX(50deg) rotateZ(-1deg)",
                transformStyle: "preserve-3d",
                transformOrigin: "center"
              }}
            >

              {/* No keys inside, pure plane box as requested */}
            </div>
          </div>

          {/* SLIDES */}
          {slides.map((slide) => (
            <div key={slide.id} className="relative w-screen h-full flex flex-col justify-center items-center shrink-0 z-10 perspective-1000 overflow-hidden">
              
              {slide.isIntro ? (
                /* Intro Slide - Centered High-Contrast Style */
                <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden font-mono">
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none" 
                       style={{ 
                         backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", 
                         backgroundSize: "40px 40px" 
                       }} 
                  />
                  
                  {/* EXPLORE Text Centered */}
                  <div className="flex flex-col items-center justify-center h-full w-full z-10 pointer-events-none"
                       style={{ 
                         perspective: "2000px",
                         transformStyle: "preserve-3d"
                       }}
                  >
                    <motion.div 
                      initial={{ y: 50, opacity: 0, rotateX: 25 }}
                      whileInView={{ y: 0, opacity: 1, rotateX: 25 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="flex flex-col items-center justify-center"
                      style={{ transformOrigin: "center center" }}
                    >
                      <h2 className="text-[12vw] font-black leading-[0.7] tracking-tighter text-white uppercase whitespace-nowrap">
                        EXPLORE
                      </h2>
                      <h2 className="text-[10vw] font-black leading-[0.7] tracking-tighter text-white/50 uppercase whitespace-nowrap">
                        OUR
                      </h2>
                      <h2 className="text-[14vw] font-black leading-[0.7] tracking-tighter text-[#ff6b35] uppercase whitespace-nowrap">
                        ECOSYSTEM
                      </h2>
                    </motion.div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Graphic Object */}
                  <div className={`relative mb-8 md:mb-12 flex justify-center items-center ${(slide.id >= 1 && slide.id <= 5) ? '' : 'drop-shadow-2xl'}`}>
                    <div className={`transform flex flex-col items-center justify-center overflow-hidden ${(slide.id >= 1 && slide.id <= 5) ? 'w-[85vw] md:w-[60vw] max-w-[800px] h-auto aspect-[16/9] p-0 bg-transparent' : 'bg-white w-64 h-64 md:w-80 md:h-80 p-6 rounded-3xl rotate-3 border-[6px] border-[#1c1c1c] shadow-[inset_0_0_40px_rgba(0,0,0,0.05),_0_20px_50px_rgba(0,0,0,0.2)]'}`}
                      style={
                        slide.id === 5 ? { transform: "rotateX(50deg) rotateZ(-1deg) translateY(-25vh)" } :
                        slide.id === 4 ? { transform: "rotateX(50deg) rotateZ(-1deg) translateY(-18vh)" } :
                        slide.id === 3 ? { transform: "rotateX(50deg) rotateZ(-1deg) translateY(-15vh)" } :
                        slide.id === 2 ? { transform: "rotateX(50deg) rotateZ(-1deg) translateY(-12vh)" } :
                        slide.id === 1 ? { transform: "rotateX(50deg) rotateZ(-1deg) translateY(-20px)" } : {}
                      }>
                      {/* Placeholder for the user's images */}
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className={`w-full h-full ${(slide.id >= 1 && slide.id <= 5) ? 'object-contain mix-blend-multiply drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)]' : 'object-contain'}`}
                        onError={(e) => {
                          // Fallback in case images aren't placed yet
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${slide.id}&background=fcf9f2&color=ff6b35&size=512&font-size=0.5`;
                        }}
                      />
                      {(slide.id < 1 || slide.id > 5) && (
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#ff6b35] rounded-full border-4 border-[#1c1c1c] text-white flex items-center justify-center font-bold font-mono z-10">
                          {slide.id}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Slide UI at the bottom */}
                  <div className="absolute bottom-4 md:bottom-6 flex flex-col items-center w-full px-4 text-white text-center">
                    
                    <h2 className="font-mono text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                      {slide.title}
                    </h2>
                    
                    <p className="font-mono text-white/60 text-lg md:text-xl font-medium mb-10 max-w-2xl px-4 drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                      {slide.subtitle}
                    </p>

                    {/* Call to Action Button */}
                    <button className="flex items-center justify-center px-12 py-4 border-4 border-[#ff6b35] bg-transparent text-white font-bold transition-all duration-300 hover:bg-[#ff6b35] hover:scale-105 group font-mono uppercase tracking-widest text-sm">
                      Learn More
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;
