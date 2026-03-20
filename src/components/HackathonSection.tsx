import { motion } from "framer-motion";
import { Trophy, Users } from "lucide-react";

const hackathons = [
  {
    id: 1,
    block: "HACK 01",
    name: "MSHACK",
    partner: "Microsoft",
    description: "Microsoft's flagship hackathon bringing together innovators to build next-generation solutions using Microsoft Azure and developer tools.",
    participants: "5000+",
    prize: "$50,000",
    status: "LIVE",
    tags: ["Azure", "Microsoft", "Cloud"],
    date: "Mar 10, 2024",
  },
  {
    id: 2,
    block: "HACK 02",
    name: "Vistara Hackathon",
    partner: "Vistara Airlines",
    description: "Reimagining the future of aviation and travel tech. Build innovations that transform the passenger experience end-to-end.",
    participants: "3000+",
    prize: "$30,000",
    status: "OPEN",
    tags: ["Aviation", "Travel", "UX"],
    date: "Mar 22, 2024",
  },
  {
    id: 3,
    block: "HACK 03",
    name: "India Innovation Series",
    partner: "ASSOCHAM",
    description: "India's largest innovation challenge, pushing boundaries across AI, sustainability, and deep-tech for a digital future.",
    participants: "10000+",
    prize: "$100,000",
    status: "LIVE",
    tags: ["AI", "Deep Tech", "Innovation"],
    date: "Apr 01, 2024",
  },
  {
    id: 4,
    block: "HACK 04",
    name: "Green Charcoal Hackathon",
    partner: "Environmental Initiative",
    description: "A sustainability-focused hackathon building solutions for climate change, clean energy, and environmental conservation.",
    participants: "2000+",
    prize: "$25,000",
    status: "CLOSED",
    tags: ["Green Tech", "Climate", "Sustainability"],
    date: "Feb 28, 2024",
  },
];

const HackathonsSection = () => {
  return (
    <section className="py-36 bg-[#1a00a8] relative overflow-hidden" id="hackathons">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-xs font-black tracking-[0.4em] uppercase text-white/40 mb-4">
            Compete & Win
          </div>
          <h2 className="text-5xl md:text-8xl text-white font-black tracking-tighter leading-none">
            HACKATHONS*
          </h2>
          <div className="w-24 h-[1px] bg-[#ff6b35] mx-auto mt-8 shadow-[0_0_10px_#ff6b35]" />
        </motion.div>

        {/* Cards Grid — 2 columns like Events */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {hackathons.map((hack, index) => (
            <motion.div
              key={hack.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0 32px 64px rgba(0,0,0,0.25)" }}
              whileTap={{ scale: 0.98 }}
              style={{ willChange: "transform" }}
              className="group bg-[#f5f5f5] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
            >
              {/* Prize Banner — replaces the image */}
              <div className="relative h-36 bg-[#1c1c1c] flex items-center justify-center overflow-hidden">
                {/* Subtle grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Prize amount */}
                <div className="relative z-10 text-center">
                  <Trophy className="w-6 h-6 text-[#ff6b35] mx-auto mb-2" />
                  <div className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    {hack.prize}
                  </div>
                  <div className="text-[9px] font-black tracking-[0.4em] uppercase text-white/40 mt-1">
                    Prize Pool
                  </div>
                </div>

                {/* Status Badge */}
                <div
                  className={`absolute top-5 left-5 px-5 py-1.5 rounded-full text-white text-[10px] font-black tracking-widest uppercase shadow-lg z-20 ${
                    hack.status === "CLOSED"
                      ? "bg-red-600"
                      : hack.status === "OPEN"
                      ? "bg-[#22c55e]"
                      : "bg-[#22c55e] animate-pulse"
                  }`}
                >
                  {hack.status === "LIVE" ? "🔴 LIVE" : hack.status}
                </div>
              </div>

              {/* Card Content — centered like Events */}
              <div className="p-8 md:p-10 text-center flex flex-col items-center">
                {/* Date + Partner */}
                <div className="flex items-center gap-2 text-[10px] text-[#ff6b35] font-black mb-4 tracking-tighter uppercase leading-none">
                  <span>{hack.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#ff6b35]" />
                  <span>by {hack.partner}</span>
                </div>

                {/* Name */}
                <h3 className="text-2xl md:text-3xl text-[#1c1c1c] font-black tracking-tight leading-none mb-4">
                  {hack.name}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#1c1c1c]/60 max-w-[300px] mb-6">
                  {hack.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {hack.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-black/10 text-black/60 text-[9px] font-black tracking-widest uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Participants */}
                <div className="flex items-center gap-1.5 text-[11px] font-black text-[#1c1c1c]/40 uppercase tracking-widest mb-8">
                  <Users className="w-3.5 h-3.5" />
                  <span>{hack.participants} Participants</span>
                </div>

                {/* CTA  */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-3 rounded-full border-2 border-black/10 text-black/60 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-24 md:mt-32 text-center">
          <motion.a
            href="#hackathons"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-12 py-5 rounded-full border-2 border-white/20 text-white font-black text-xl md:text-2xl uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-[#1a00a8] hover:border-white shadow-2xl"
          >
            VIEW ALL HACKATHONS
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
