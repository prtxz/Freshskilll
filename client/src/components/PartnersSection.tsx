import { motion } from "framer-motion";

// Partner logos as SVG components for crisp rendering
const MicrosoftLogo = () => (
  <svg viewBox="0 0 23 23" className="h-7 w-7 md:h-9 md:w-9">
    <rect x="0" y="0" width="11" height="11" fill="#F25022" />
    <rect x="12" y="0" width="11" height="11" fill="#7FBA00" />
    <rect x="0" y="12" width="11" height="11" fill="#00A4EF" />
    <rect x="12" y="12" width="11" height="11" fill="#FFB900" />
  </svg>
);

const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#1c1c1c]">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const partners = [
  { name: "GitHub", logo: GitHubLogo },
  { name: "Spark AR" },
  { name: "Adobe" },
  { name: "Intuit" },
  { name: "Microsoft", logo: MicrosoftLogo },
  { name: "Uber" },
  { name: "Google" },
  { name: "Meta" },
];

const PartnersSection = () => {
  // Triple the partners for a truly seamless loop
  const marqueePartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="bg-white py-20 font-mono" id="partners">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Trusted by{" "}
            <span className="text-[#ff6b35]">132+ Global Corporations</span>
          </h2>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden py-4">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex items-center gap-16 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {marqueePartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center gap-3 min-w-[150px] justify-center opacity-60 hover:opacity-100 transition-opacity"
              >
                {partner.logo && <partner.logo />}
                <span className="text-lg font-bold text-[#1c1c1c]">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Our Partners Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#partners"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-8 py-3 text-sm font-medium text-primary transition-all hover:border-primary hover:bg-primary/5 shadow-sm"
          >
            Our Partners
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
