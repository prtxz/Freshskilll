import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "I have been associated with both the Vistara and Dish-TV hackathons conducted by Reskilll. They were the most professionally conducted hacks. They seem to know the magic sauce to make people feel right at place.",
    author: "Chidroop Iyyhapan",
    role: "Software Developer at Meta",
    initials: "CI",
    color: "#ff6b35",
  },
  {
    id: 2,
    quote: "Reskilll has been instrumental in connecting talented individuals with global opportunities. Their hackathons are world-class and their community is incredibly supportive and energising.",
    author: "Sarah Johnson",
    role: "Engineering Lead at Google",
    initials: "SJ",
    color: "#1a00a8",
  },
  {
    id: 3,
    quote: "The level of professionalism and organisation at Reskilll events is unmatched. They truly understand how to create an environment where innovation thrives beyond expectations.",
    author: "Michael Chen",
    role: "CTO at TechStartup",
    initials: "MC",
    color: "#16a34a",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const next = () => {
    const next = (currentIndex + 1) % testimonials.length;
    setDirection(1);
    setCurrentIndex(next);
  };

  const prev = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setDirection(-1);
    setCurrentIndex(prev);
  };

  const t = testimonials[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: -dir * 60 }),
  };

  return (
    <section className="py-28 bg-white relative overflow-hidden" id="testimonials">
      {/* Faint dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #1a00a8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-xs font-black tracking-[0.4em] uppercase text-[#1a00a8]/50 mb-4">
            Testimonials
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-[#1c1c1c] tracking-tighter leading-none">
            WHAT THEY <span className="text-[#ff6b35]">SAY</span>
          </h2>
          <div className="w-14 h-[3px] bg-[#ff6b35] mx-auto mt-7" />
        </motion.div>

        {/* Main card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0 border border-black/10 rounded-[2rem] overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.07)]"
            >
              {/* Left – quote block */}
              <div className="bg-white p-10 md:p-16 flex flex-col justify-between min-h-[400px]">
                {/* Opening quote mark */}
                <div
                  className="text-[9rem] leading-none font-black select-none -mt-6 -ml-2"
                  style={{ color: t.color, opacity: 0.18, fontFamily: "Georgia, serif" }}
                >
                  "
                </div>

                {/* Quote text */}
                <blockquote className="text-[#1c1c1c] text-xl md:text-2xl lg:text-3xl font-bold leading-snug tracking-tight -mt-10 flex-1">
                  {t.quote}
                </blockquote>

                {/* Author row */}
                <div className="mt-10 flex items-center gap-5 border-t border-black/8 pt-8">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-black text-[#1c1c1c] text-lg tracking-tight">{t.author}</div>
                    <div className="text-[#1c1c1c]/45 text-sm font-semibold tracking-wide">{t.role}</div>
                  </div>

                  {/* Navigation arrows pushed to right */}
                  <div className="ml-auto flex items-center gap-3">
                    <button
                      onClick={prev}
                      className="w-11 h-11 rounded-full border-2 border-black/10 flex items-center justify-center hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-200"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={next}
                      className="w-11 h-11 rounded-full border-2 border-black/10 flex items-center justify-center hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-200"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right – person image panel */}
              <div
                className="w-full md:w-72 lg:w-80 relative hidden md:block"
                style={{ background: `linear-gradient(135deg, ${t.color}18, ${t.color}38)` }}
              >
                {/* Large monogram / avatar placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-40 h-40 rounded-full flex items-center justify-center text-white font-black text-5xl shadow-2xl"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 opacity-20"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${t.color}, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === currentIndex ? "2rem" : "0.5rem",
                  background: i === currentIndex ? "#ff6b35" : "#1c1c1c22",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
