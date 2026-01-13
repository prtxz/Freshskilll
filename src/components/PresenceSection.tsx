import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const countries = [
  "India", "Australia", "Canada", "Sri Lanka", "Bangladesh", "Indonesia", 
  "Vietnam", "Philippines", "Singapore", "USA", "Kenya", "Zambia", 
  "Zimbabwe", "Nigeria", "Portugal", "Ukraine", "Mexico"
];

const PresenceSection = () => {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Animated background globe */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Globe className="w-[600px] h-[600px]" strokeWidth={0.5} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-4">
            Global Reach
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="text-primary">Presence</span>
          </h2>
          <p className="text-xl text-white/80 mb-2">
            We are in <span className="text-primary font-bold">17 countries</span>, and expanding!
          </p>
        </motion.div>

        {/* Countries */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {countries.map((country, index) => (
            <motion.span
              key={country}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, backgroundColor: "hsl(350 85% 55%)" }}
              className="px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium cursor-default transition-colors duration-300"
            >
              {country}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PresenceSection;
