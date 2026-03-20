import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const initiatives = [
  {
    id: "01",
    tag: "XR Fellowship",
    title: "XR Open Source Fellowship Program",
    subtitle: "XROS Fellowship Program",
    description:
      "A uniquely curated initiative aimed at supporting Indian developers working on XR technologies by providing fellowships which include a stipend and mentoring by industry experts. Supports developers to make contributions to open source projects related to XR technology.",
    stat: "Open Source · XR Tech",
    bg: "#1c1c1c",
    accentBg: "#ff6b35",
    textColor: "text-white",
    descColor: "text-white/55",
    tagColor: "#ff6b35",
    statText: "text-[#ff6b35]",
    statBorder: "border-[#ff6b35]/30",
  },
  {
    id: "02",
    tag: "Platform Initiative",
    title: "Spark AR Initiative",
    subtitle: "World's Largest Mobile AR Platform",
    description:
      "Spark AR is the largest platform for mobile augmented reality. Over 600,000 creators from 190 countries use Spark AR Studio to ideate, design and build AR experiences, and Spark AR Hub to publish and track performance across the Facebook Family of Apps.",
    stat: "600K+ Creators · 190 Countries",
    bg: "#ff6b35",
    accentBg: "#1c1c1c",
    textColor: "text-white",
    descColor: "text-white/65",
    tagColor: "#1c1c1c",
    statText: "text-[#1c1c1c]",
    statBorder: "border-[#1c1c1c]/20",
  },
  {
    id: "03",
    tag: "Internship Program",
    title: "GitHub Externship",
    subtitle: "Next-Gen Developer Initiative",
    description:
      "Students hold a special place in the GitHub Externship Initiative — they are the next generation of developers who will drive software innovation forward. GitHub works with Reskilll to equip future developers with the skills and experience they need to succeed in the real world.",
    stat: "1M+ Engineers / Year · India",
    bg: "#1c1c1c",
    accentBg: "#ff6b35",
    textColor: "text-white",
    descColor: "text-white/55",
    tagColor: "#ff6b35",
    statText: "text-[#ff6b35]",
    statBorder: "border-[#ff6b35]/30",
  },
  {
    id: "04",
    tag: "Community Building",
    title: "AzDev Community Building",
    subtitle: "Azure Developer Community",
    description:
      "A unique upskilling platform helping developers learn, upskill, and network through regular community events. Members work selflessly to enhance the technology learning that developers of the future need to succeed. Already making ripples of expansion across the nation.",
    stat: "Nationwide Network · Azure",
    bg: "#ff6b35",
    accentBg: "#1c1c1c",
    textColor: "text-white",
    descColor: "text-white/65",
    tagColor: "#1c1c1c",
    statText: "text-[#1c1c1c]",
    statBorder: "border-[#1c1c1c]/20",
  },
];

const STICK_TOP = 72;
const STACK_OFFSET = 20;

function StackCard({
  initiative,
  index,
  scrollYProgress,
  total,
}: {
  initiative: (typeof initiatives)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
  total: number;
}) {
  // Card scales down as later cards stack on top of it
  const scaleEnd = 1 - (total - 1 - index) * 0.04;
  const scaleStart = 1;
  const progressStart = index / total;
  const progressEnd = (index + 1) / total;

  const scale = useTransform(scrollYProgress, [progressStart, progressEnd], [scaleStart, scaleEnd]);
  const opacity = useTransform(scrollYProgress, [progressEnd + 0.15, progressEnd + 0.3], [1, 0.6]);

  return (
    <div
      className="sticky"
      style={{ top: `${STICK_TOP + index * STACK_OFFSET}px`, zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, opacity }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.2)] will-change-transform"
        style={{
          backgroundColor: initiative.bg,
        }}
      >
        {/* Top accent bar */}
        <div
          className="w-full h-1.5"
          style={{ backgroundColor: initiative.accentBg }}
        />

        <div className="p-12 md:p-16 lg:p-20">
          {/* Top row: tag + number */}
          <div className="flex items-start justify-between mb-8">
            <div
              className="text-xs font-black tracking-[0.4em] uppercase px-4 py-2 rounded-full border"
              style={{
                color: initiative.tagColor,
                borderColor: `${initiative.tagColor}30`,
                backgroundColor: `${initiative.tagColor}10`,
              }}
            >
              {initiative.tag}
            </div>
            <div
              className="text-[6rem] md:text-[9rem] font-black leading-none select-none -mt-6"
              style={{ color: `${initiative.accentBg}18` }}
            >
              {initiative.id}
            </div>
          </div>

          {/* Title */}
          <h3 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-5 ${initiative.textColor}`}>
            {initiative.title}
          </h3>

          {/* Subtitle */}
          <div
            className="text-sm font-bold tracking-widest uppercase mb-8"
            style={{ color: initiative.tagColor, opacity: 0.85 }}
          >
            {initiative.subtitle}
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] mb-10" style={{ backgroundColor: `${initiative.accentBg}25` }} />

          {/* Description */}
          <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mb-10 ${initiative.descColor}`}>
            {initiative.description}
          </p>

          {/* Stat + Accent block */}
          <div className="flex items-center justify-between gap-6">
            <div
              className={`text-sm font-black tracking-widest uppercase border rounded-full px-6 py-2.5 ${initiative.statText} ${initiative.statBorder}`}
            >
              {initiative.stat}
            </div>
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-base flex-shrink-0"
              style={{ backgroundColor: initiative.accentBg }}
            >
              {initiative.id}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const InitiativesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-white" id="initiatives">
      {/* Padding top before pinning kicks in */}
      <div className="pt-24 pb-0 container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="text-xs font-black tracking-[0.4em] uppercase text-[#ff6b35] mb-5">
            Making a Difference
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-[#1c1c1c] tracking-tighter leading-none">
            Our Initiatives
          </h2>
          <div className="w-16 h-[3px] bg-[#ff6b35] mx-auto mt-6" />
        </motion.div>
      </div>

      {/* Scroll pinning container – extra height to allow stack */}
      <div
        ref={containerRef}
        className="relative"
        style={{ paddingBottom: "30vh" }}
      >
        <div className="container mx-auto px-4 max-w-5xl flex flex-col gap-6">
          {initiatives.map((initiative, index) => (
            <StackCard
              key={initiative.id}
              initiative={initiative}
              index={index}
              total={initiatives.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      <div className="pb-24" />
    </section>
  );
};

export default InitiativesSection;
