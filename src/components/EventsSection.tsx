import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  type: "Virtual" | "Offline" | "Hybrid";
  tags: string[];
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "AI/ML Innovation Summit",
    description: "Join industry experts to explore cutting-edge AI and Machine Learning technologies shaping the future.",
    date: "Feb 15, 2024",
    type: "Virtual",
    tags: ["AI/ML", "Innovation", "Tech"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Blockchain Developer Workshop",
    description: "Hands-on workshop covering smart contracts, DeFi, and Web3 development fundamentals.",
    date: "Feb 22, 2024",
    type: "Offline",
    tags: ["Blockchain", "Web3", "DeFi"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Cloud Computing Masterclass",
    description: "Learn cloud architecture, DevOps practices, and scalable infrastructure design.",
    date: "Mar 05, 2024",
    type: "Hybrid",
    tags: ["Cloud", "DevOps", "AWS"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
  },
];

const EventsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Upcoming Events
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Current <span className="gradient-text">Events</span>
          </h2>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Type Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                  event.type === "Virtual" 
                    ? "bg-emerald-500 text-white" 
                    : event.type === "Offline" 
                    ? "bg-orange-500 text-white" 
                    : "bg-violet-500 text-white"
                }`}>
                  {event.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                  <span className="mx-2">•</span>
                  <MapPin className="w-4 h-4" />
                  <span>{event.type}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Explore All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="group font-heading font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
          >
            Explore All Events
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
