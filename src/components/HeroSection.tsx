import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import splash1 from "@/assets/splash-1.jpg";
import splash2 from "@/assets/splash-2.jpg";
import splash3 from "@/assets/splash-3.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-32">
      {/* Background gradient orbs */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="stagger-children"
          >
            {/* Tagline */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <span className="font-heading text-sm font-medium text-primary">Skill</span>
              <span className="text-muted-foreground">|</span>
              <span className="font-heading text-sm font-medium text-primary">Upskill</span>
              <span className="text-muted-foreground">|</span>
              <span className="font-heading text-sm font-medium text-primary">Reskilll</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Enhance your skills with{" "}
              <span className="gradient-text">Reskilll</span>
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              An Experiential learning platform helping Students, Developers,
              Professionals & Startups to Skill, Upskill and Reskill themselves.
            </p>

            {/* CTA Button */}
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative grid grid-cols-2 gap-4">
              {/* Decorative element */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                className="absolute -right-8 -top-8 h-16 w-16"
              >
                <svg viewBox="0 0 100 100" className="h-full w-full text-primary">
                  <path
                    d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z"
                    fill="currentColor"
                    opacity="0.3"
                  />
                </svg>
              </motion.div>

              {/* Image 1 - Large */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="col-span-1 row-span-2"
              >
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={splash1}
                    alt="Hackathon event"
                    className="h-full w-full object-cover"
                    style={{ aspectRatio: "3/4" }}
                  />
                </div>
              </motion.div>

              {/* Image 2 */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={splash2}
                    alt="Bootcamp session"
                    className="h-full w-full object-cover"
                    style={{ aspectRatio: "4/3" }}
                  />
                </div>
              </motion.div>

              {/* Image 3 */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={splash3}
                    alt="Startup pitch"
                    className="h-full w-full object-cover"
                    style={{ aspectRatio: "4/3" }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
