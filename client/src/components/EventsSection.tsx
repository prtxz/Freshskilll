import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Event {
  id: number;
  block: string;
  subtitle: string;
  description: string[];
  date: string;
  type: string;
  tags: string[];
  image: string;
  theme: "dark" | "blue";
}

const events: Event[] = [
  {
    id: 1,
    block: "EVENT 01",
    subtitle: "AI/ML Innovation Summit",
    description: [
      "Join industry experts to explore cutting-edge AI",
      "Machine Learning technologies shaping the future"
    ],
    date: "Feb 15, 2024",
    type: "ONGOING",
    tags: ["AI/ML", "Innovation", "Tech"],
    image: "/assets/events/ai_ml_minimal.png",
    theme: "dark"
  },
  {
    id: 2,
    block: "EVENT 02",
    subtitle: "Blockchain Developer Workshop",
    description: [
      "Hands-on workshop covering smart contracts",
      "DeFi, and Web3 development fundamentals"
    ],
    date: "Feb 22, 2024",
    type: "OPEN",
    tags: ["Web3", "Blockchain", "Dev"],
    image: "/assets/events/blockchain_minimal.png",
    theme: "blue"
  },
  {
    id: 3,
    block: "EVENT 03",
    subtitle: "Cloud Computing Masterclass",
    description: [
      "Learn cloud architecture, DevOps practices",
      "Scalable infrastructure design and management"
    ],
    date: "Mar 05, 2024",
    type: "CLOSED",
    tags: ["Cloud", "DevOps", "AWS"],
    image: "/assets/events/cloud_minimal.png",
    theme: "dark"
  }
];

const EventsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#1a00a8] relative overflow-hidden font-mono" id="events">
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#2a13b5_0%,_transparent_70%)] opacity-40 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-5xl md:text-8xl text-white font-black tracking-tighter mb-2">
            EXPLORE EVENTS*
          </h2>
          <div className="w-24 h-[1px] bg-[#ff6b35] mx-auto mt-8 shadow-[0_0_10px_#ff6b35]" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="group bg-[#f5f5f5] rounded-[2rem] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl"
            >
              {/* Poster Image - Grayscale to Color */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-zinc-200">
                <img
                  src={event.image}
                  alt={event.subtitle}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                />
                
                {/* Type Badge - Color coded for visibility */}
                <div className={`absolute top-6 left-6 px-5 py-1.5 rounded-full text-white text-[10px] font-black tracking-widest uppercase shadow-lg z-20 ${
                  event.type === "CLOSED" ? "bg-red-600 shadow-red-900/40" : "bg-[#22c55e] shadow-green-900/40"
                }`}>
                  {event.type}
                </div>
              </div>

              {/* Content - Centered Alignment */}
              <div className="p-8 md:p-10 text-center flex flex-col items-center">
                {/* Date & Type Info - Updated to Orange for visibility */}
                <div className="flex items-center gap-2 text-[10px] text-[#ff6b35] font-black mb-4 tracking-tighter uppercase leading-none">
                  <span>{event.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#ff6b35]" />
                  <span>{event.type}</span>
                </div>

                <h3 className="text-2xl md:text-3xl text-[#1c1c1c] font-black tracking-tight leading-none mb-4">
                  {event.subtitle}
                </h3>

                <p className="text-sm leading-relaxed text-[#1c1c1c]/60 max-w-[280px] mb-6">
                   {event.description.join(" ")}
                </p>

                {/* Tags - Darkened for readability */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {event.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full bg-black/10 text-black/60 text-[9px] font-black tracking-widest uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-3 rounded-full border-2 border-black/10 text-black/60 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore All - Enlarged for Visibility */}
        <div className="mt-24 md:mt-32 text-center">
          <motion.a
            href="#events"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-12 py-5 rounded-full border-2 border-white/20 text-white font-black text-xl md:text-2xl uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-[#1a00a8] hover:border-white shadow-2xl"
          >
            VIEW ALL EVENTS
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
