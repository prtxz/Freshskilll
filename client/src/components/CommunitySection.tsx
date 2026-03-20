import { motion } from "framer-motion";
import { Users, MessageCircle, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "100K+", label: "Community Members" },
  { icon: MessageCircle, value: "50K+", label: "Discussions" },
  { icon: Heart, value: "25K+", label: "Success Stories" },
  { icon: Zap, value: "500+", label: "Active Events" },
];

const CommunitySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Join the Movement
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Our <span className="gradient-text">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with like-minded innovators, share ideas, and grow together in our thriving global community.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <motion.div 
                className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <div className="text-3xl font-heading font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Community Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-card rounded-3xl p-8 md:p-12 border border-border/50 overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          
          <div className="relative z-10 text-center">
            {/* Floating avatars visualization */}
            <div className="flex justify-center mb-8">
              <div className="flex -space-x-4">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm border-4 border-card"
                  >
                    {String.fromCharCode(65 + i)}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm border-4 border-card"
                >
                  +99K
                </motion.div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Become Part of Something <span className="gradient-text">Bigger</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join our community of innovators, developers, and entrepreneurs. Network, learn, and grow together.
            </p>

            <Button 
              size="lg" 
              className="btn-hero text-white px-8"
            >
              Join Community
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
