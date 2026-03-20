import { motion } from "framer-motion";
import { Trophy, Users, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const hackathons = [
  {
    id: 1,
    name: "MSHACK",
    partner: "Microsoft",
    participants: "5000+",
    prize: "$50,000",
    status: "Live",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Vistara Hackathon",
    partner: "Vistara Airlines",
    participants: "3000+",
    prize: "$30,000",
    status: "Upcoming",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "India Innovation Series",
    partner: "ASSOCHAM",
    participants: "10000+",
    prize: "$100,000",
    status: "Live",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    name: "Green Charcoal Hackathon",
    partner: "Environmental Initiative",
    participants: "2000+",
    prize: "$25,000",
    status: "Completed",
    color: "from-emerald-500 to-teal-500",
  },
];

const HackathonsSection = () => {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-4">
            Compete & Win
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Current <span className="text-primary">Hackathons</span>
          </h2>
        </motion.div>

        {/* Hackathons Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${hackathon.color} rounded-t-2xl`} />
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-1 group-hover:text-primary transition-colors">
                    {hackathon.name}
                  </h3>
                  <p className="text-white/60 text-sm">by {hackathon.partner}</p>
                </div>
                
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  hackathon.status === "Live" 
                    ? "bg-emerald-500/20 text-emerald-400 animate-pulse" 
                    : hackathon.status === "Upcoming" 
                    ? "bg-amber-500/20 text-amber-400" 
                    : "bg-white/10 text-white/60"
                }`}>
                  {hackathon.status}
                </span>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-white/40" />
                  <span className="text-sm text-white/80">{hackathon.participants}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-bold text-amber-400">{hackathon.prize}</span>
                </div>
              </div>

              {/* CTA */}
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-white/20 text-white hover:bg-white hover:text-secondary transition-all duration-300"
              >
                View Details
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
