import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Rocket, Briefcase, GraduationCap, Sparkles } from "lucide-react";

interface MenuItem {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Hackathons & Bootcamps",
    description: "Compete, learn, and build with the best",
    icon: Rocket,
    color: "from-rose-500 to-orange-500",
  },
  {
    title: "Startups",
    description: "Launch your entrepreneurial journey",
    icon: Sparkles,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Jobs & Internships",
    description: "Connect with top global companies",
    icon: Briefcase,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Little Minds",
    description: "Nurturing young innovators",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
  },
];

const FlowingMenu = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-center text-white"
        >
          Explore Our <span className="gradient-text">Ecosystem</span>
        </motion.h2>
      </div>
      
      <div 
        ref={containerRef}
        className="relative min-h-[400px] flex items-center"
      >
        {/* Flowing cursor indicator */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="pointer-events-none absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: cursorX, top: cursorY }}
            >
              <div className={`w-full h-full rounded-full bg-gradient-to-br ${menuItems[activeIndex].color} opacity-30 blur-2xl`} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu items */}
        <div className="w-full">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="group relative border-b border-white/10 cursor-pointer overflow-hidden"
            >
              {/* Background gradient on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              <div className="container mx-auto px-4">
                <div className="py-8 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <motion.div 
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <div>
                      <motion.h3 
                        className="text-xl md:text-2xl font-heading font-bold text-white group-hover:translate-x-2 transition-transform duration-300"
                      >
                        {item.title}
                      </motion.h3>
                      <p className="text-white/60 text-sm md:text-base mt-1 group-hover:text-white/80 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg 
                      className="w-5 h-5 text-white group-hover:text-secondary transition-colors" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowingMenu;
