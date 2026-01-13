import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    quote: "I have been associated with both the Vistara and Dish-Tv hackathons which were conducted by Reskilll. They were the most professionally conducted hacks. They seem to know the magic sauce to make people feel at place.",
    author: "Chidroop Iyyhapan",
    role: "Software Developer at Meta",
    avatar: "CI",
  },
  {
    id: 2,
    quote: "Reskilll has been instrumental in connecting talented individuals with global opportunities. Their hackathons are world-class and their community is incredibly supportive.",
    author: "Sarah Johnson",
    role: "Engineering Lead at Google",
    avatar: "SJ",
  },
  {
    id: 3,
    quote: "The level of professionalism and organization at Reskilll events is unmatched. They truly understand how to create an environment where innovation thrives.",
    author: "Michael Chen",
    role: "CTO at TechStartup",
    avatar: "MC",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            What Our <span className="gradient-text">Partners Say?</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl mb-4">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <h4 className="text-xl font-heading font-bold text-foreground">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
