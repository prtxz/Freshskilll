import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const TaglineSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative w-full bg-white pt-16 pb-32 md:pt-24 md:pb-48 overflow-hidden flex flex-col items-center">
      {/* Massive Background Header */}
      <div className="w-full text-center mb-0 md:mb-0 px-4 pointer-events-none select-none">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-heading text-[10vw] sm:text-[8vw] md:text-[9vw] font-black leading-tight tracking-tighter text-[#1c1c1c] uppercase"
        >
          Skill | Upskill | Reskill
        </motion.h2>
      </div>

      {/* The "Folder" Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-[92%] max-w-7xl bg-[#1c1c1c] rounded-t-[40px] md:rounded-t-[80px] p-8 md:p-16 lg:p-24 shadow-2xl overflow-hidden z-10"
      >
        {/* Punch Holes Decoration */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 w-4 h-4 md:w-6 md:h-6 bg-white rounded-full shadow-inner opacity-80" />
        <div className="absolute top-6 right-6 md:top-10 md:right-10 w-4 h-4 md:w-6 md:h-6 bg-white rounded-full shadow-inner opacity-80" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 mb-16 md:mb-24">
          {/* Left Column */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-[#eae3d1] leading-[0.9] tracking-tighter uppercase mb-6 md:mb-10">
              Enhance<br />
              <span className="opacity-80">your skills</span>
            </h3>
            <div className="w-full h-1 bg-[#eae3d1]/10 mb-8 md:mb-12" />
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants} className="flex flex-col lg:items-end lg:text-right">
             <h3 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-[#eae3d1] leading-[0.9] tracking-tighter uppercase mb-6 md:mb-10 lg:ml-auto">
              With<br />
              <span className="text-[#faba60]">Reskilll</span>
            </h3>
            <div className="w-full h-1 bg-[#eae3d1]/10 mb-8 md:mb-12" />
          </motion.div>
        </div>

        {/* Description and CTA Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-t border-[#eae3d1]/10 pt-12 md:pt-16">
          <motion.p 
            variants={itemVariants}
            className="font-mono text-xl md:text-2xl lg:text-3xl text-[#eae3d1]/80 leading-relaxed max-w-4xl text-left"
          >
            An Experiential learning platform helping Students, Developers, Professionals & Startups to Skill, Upskill and Reskill themselves.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button 
              size="lg"
              className="bg-[#faba60] text-[#1c1c1c] hover:bg-[#eae3d1] hover:text-[#1c1c1c] font-bold text-xl md:text-2xl px-10 py-8 md:px-16 md:py-10 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl group flex items-center gap-4 border-none"
            >
              Get Started
              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>
        </div>

        {/* Decorative Lines in bottom corners Like a punched card */}
        <div className="absolute bottom-[-10px] left-[-10px] w-20 h-20 border-[10px] border-white/5 rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10px] right-[-10px] w-20 h-20 border-[10px] border-white/5 rounded-full pointer-events-none" />
      </motion.div>
    </section>
  );
};

export default TaglineSection;
