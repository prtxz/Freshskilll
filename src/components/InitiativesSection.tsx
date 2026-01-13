import { motion } from "framer-motion";
import { Target, Users, Globe, Award } from "lucide-react";

const initiatives = [
  {
    icon: Target,
    title: "Skill Development",
    description: "Comprehensive programs designed to upskill individuals across various domains and technologies.",
    stats: "50K+ Trained",
  },
  {
    icon: Users,
    title: "Campus Connect",
    description: "Bridging the gap between academia and industry through hackathons and workshops.",
    stats: "500+ Colleges",
  },
  {
    icon: Globe,
    title: "Global Outreach",
    description: "Expanding opportunities across borders to create a worldwide network of innovators.",
    stats: "17 Countries",
  },
  {
    icon: Award,
    title: "Excellence Awards",
    description: "Recognizing and celebrating outstanding achievements in innovation and technology.",
    stats: "1000+ Winners",
  },
];

const InitiativesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Making a Difference
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Our <span className="gradient-text">Initiatives</span>
          </h2>
        </motion.div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl"
            >
              {/* Icon */}
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <initiative.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {initiative.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {initiative.description}
              </p>

              {/* Stats */}
              <div className="inline-block px-4 py-2 rounded-full bg-muted text-foreground font-heading font-bold text-sm">
                {initiative.stats}
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
