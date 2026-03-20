import { motion } from "framer-motion";

const TaglineSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)", rotate: -2 },
    visible: {
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      rotate: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full bg-[#fdfbf7] py-32 md:py-56 overflow-hidden flex items-center justify-center">
      {/* Ambient Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#faba60]/20 rounded-full blur-[100px] -z-10 translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-[#1a00a8]/10 rounded-full blur-[120px] -z-10 -translate-x-1/4 translate-y-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#ff6b35]/15 rounded-full blur-[80px] -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Section Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center max-w-xs mb-10 md:mb-16 overflow-hidden"
          >
             <span className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-[#ff6b35] font-bold pb-2 text-center whitespace-nowrap">
               Elevating The Future
             </span>
             <span className="h-[2px] w-1/2 bg-gradient-to-r from-transparent via-[#ff6b35]/50 to-transparent"></span>
          </motion.div>

          {/* Staggered Typographic Composition */}
          <motion.h2 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center text-center text-[#1c1c1c] leading-[0.9] tracking-tighter"
          >
            {/* Enhance */}
            <motion.span 
              variants={childVariants} 
              className="block font-heading text-[12vw] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] font-bold uppercase"
            >
              ENHANCE
            </motion.span>

            {/* your skills */}
            <motion.span 
              variants={childVariants} 
              className="block font-serif text-[10vw] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] text-[#1c1c1c]/50 font-normal italic tracking-tight -mt-2 md:-mt-6 ml-[-10vw] md:ml-[-100px]"
            >
              your skills
            </motion.span>
            
            {/* with Reskilll Row */}
            <motion.span 
              variants={childVariants} 
              className="mt-6 md:mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:mr-[-80px] w-full"
            >
               {/* Pill Badge */}
               <span className="inline-flex items-center justify-center border-4 border-[#ff6b35] rounded-full px-8 py-3 md:px-12 md:py-4 -rotate-6 shadow-xl shadow-[#ff6b35]/20 bg-white/50 backdrop-blur-sm shrink-0">
                 <span className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-[#ff6b35]">
                   With
                 </span>
               </span>
               
               {/* Reskilll Solid */}
               <span className="relative inline-block mt-4 md:mt-0">
                 <span className="font-heading text-[14vw] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] font-black uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-[#1a00a8] to-[#2400C3]/90 drop-shadow-sm">
                   Reskilll
                 </span>
                 {/* Sparkle SVG decoration */}
                 <svg className="absolute -top-4 -right-12 md:-top-10 md:-right-20 w-16 h-16 md:w-32 md:h-32 text-[#faba60] animate-[pulse_3s_ease-in-out_infinite] opacity-80" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 C55 40 60 45 100 50 C60 55 55 60 50 100 C45 60 40 55 0 50 C40 45 45 40 50 0 Z" />
                 </svg>
               </span>
            </motion.span>
          </motion.h2>

        </div>
      </div>
    </section>
  );
};

export default TaglineSection;
