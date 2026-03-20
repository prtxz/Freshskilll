import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
// @ts-ignore — extensionless asset, Vite resolves correctly
import celebrationImg from "@/assets/celebration?url";

// ─── Data ────────────────────────────────────────────────────────────────────────
const stats = [
  { value: 100000, display: "100K+", label: "Community Members", suffix: "K+" },
  { value: 50000,  display: "50K+",  label: "Active Discussions",  suffix: "K+" },
  { value: 25000,  display: "25K+",  label: "Success Stories",     suffix: "K+" },
  { value: 500,    display: "500+",  label: "Active Events",       suffix: "+" },
];

// ─── Count-up number ────────────────────────────────────────────────────────────
function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const isK = suffix === "K+";
    const target = isK ? to / 1000 : to;
    const controls = animate(0, target, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        node.textContent = isK
          ? Math.floor(value) + "K+"
          : Math.floor(value) + "+";
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0</span>;
}

// ─── Confetti burst on hover ────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  angle: (i / 18) * 360,
  color: ["#ff6b35", "#1a00a8", "#22c55e", "#facc15", "#f472b6"][i % 5],
}));

function ConfettiParticle({ angle, color }: { angle: number; color: string }) {
  const rad = (angle * Math.PI) / 180;
  const dx = Math.cos(rad) * (60 + Math.random() * 60);
  const dy = Math.sin(rad) * (60 + Math.random() * 60);

  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
      animate={{ x: dx, y: dy, scale: [0, 1, 0.5], opacity: [1, 1, 0] }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="absolute w-2 h-2 rounded-full pointer-events-none"
      style={{ backgroundColor: color, top: "50%", left: "50%" }}
    />
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────────
const CommunitySection = () => {
  const [hovered, setHovered] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);

  const handleMouseEnter = () => {
    setHovered(true);
    setConfettiKey((k) => k + 1); // re-trigger confetti every hover
  };
  const handleMouseLeave = () => setHovered(false);

  return (
    <section className="bg-white py-36 relative overflow-hidden" id="community">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #1a00a8 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="text-xs font-black tracking-[0.4em] uppercase text-[#1a00a8]/50 mb-5">
            Join the Movement
          </div>
          <h2 className="text-6xl md:text-9xl font-black text-[#1c1c1c] tracking-tighter leading-none mb-6">
            OUR<br />
            <span className="text-[#ff6b35]">COMMUNITY</span>
          </h2>
          <p className="text-[#1c1c1c]/50 text-lg md:text-xl max-w-xl mx-auto font-medium leading-relaxed">
            Connect with like-minded innovators, share ideas, and grow together
            in our thriving global community.
          </p>
          <div className="w-16 h-[3px] bg-[#ff6b35] mx-auto mt-8" />
        </motion.div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-28">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-[#f5f5f5] border border-black/5 rounded-3xl p-8 md:p-10 text-center cursor-default hover:border-[#ff6b35]/40 transition-colors duration-300"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1c1c1c] tracking-tight leading-none mb-3">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-black tracking-[0.3em] uppercase text-[#1c1c1c]/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Join CTA Block ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#1c1c1c] border border-black/10 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Subtle gradient blob */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#ff6b35]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#1a00a8]/60 blur-3xl pointer-events-none" />

          {/* Floating avatars */}
          <div className="flex justify-center mb-10">
            <div className="flex -space-x-4">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-sm border-4 border-[#1c1c1c]"
                  style={{
                    background: `hsl(${i * 55},70%,50%)`,
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="w-14 h-14 rounded-full bg-[#ff6b35] flex items-center justify-center text-white font-black text-xs border-4 border-[#1c1c1c]"
              >
                +99K
              </motion.div>
            </div>
          </div>

          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Become Part of Something <span className="text-[#ff6b35]">Bigger</span>
          </h3>
          <p className="text-white/40 mb-10 max-w-lg mx-auto text-lg">
            Join our community of innovators, developers, and entrepreneurs. Network, learn, and grow together.
          </p>

          {/* 🖤 Full-screen white overlay — covers entire screen on hover */}
          <motion.div
            initial={false}
            animate={hovered ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-40"
            style={{ pointerEvents: hovered ? "auto" : "none" }}
            onMouseEnter={handleMouseLeave}
          />

          {/* Button + Celebration — sits above the overlay */}
          <div className="relative z-50 inline-flex flex-col items-center">
            {/* Celebration illustration — centered & large */}
            <motion.div
              initial={false}
              animate={hovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.75 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="fixed left-1/2 -translate-x-1/2 w-[420px] md:w-[520px] pointer-events-none"
              style={{ bottom: "calc(50% - 100px)", zIndex: 51 }}
            >
              <img
                src="/assets/community/celebration.png"
                alt="Celebration"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Confetti */}
            <div className="absolute inset-0 pointer-events-none overflow-visible">
              {hovered && PARTICLES.map((p) => (
                <ConfettiParticle key={`${confettiKey}-${p.id}`} angle={p.angle} color={p.color} />
              ))}
            </div>

            {/* Button */}
            <motion.button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              animate={hovered
                ? { backgroundColor: "#1c1c1c", scale: 1.08, boxShadow: "0 0 60px rgba(28,28,28,0.4)" }
                : { backgroundColor: "#ff6b35", scale: 1, boxShadow: "0 0 40px rgba(255,107,53,0.4)" }
              }
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 px-14 py-5 rounded-full text-white font-black text-lg uppercase tracking-[0.2em]"
            >
              Join Community
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
