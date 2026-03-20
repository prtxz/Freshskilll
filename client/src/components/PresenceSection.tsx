import { motion } from "framer-motion";

const PresenceSection = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden" id="presence">
      {/* ── Header ── */}
      <div className="container mx-auto px-4 max-w-6xl pt-24 pb-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-xs font-black tracking-[0.4em] uppercase text-white/30 mb-5">
            Global Reach
          </div>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-5">
            OUR{" "}
            <span className="text-[#ff6b35]">PRESENCE</span>
          </h2>
          <p className="text-white/90 text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight mt-6">
            We are in{" "}
            <span className="text-white font-black">17 countries</span>
            , and expanding!
          </p>
          <div className="w-14 h-[3px] bg-[#ff6b35] mx-auto mt-7" />
        </motion.div>
      </div>

      {/* ── Full-width map ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full pb-10"
      >
        <img
          src="/assets/presence.png"
          alt="Our global presence map"
          className="w-full h-auto object-contain block"
        />
      </motion.div>
    </section>
  );
};

export default PresenceSection;
