import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-40 px-4 py-4 md:px-8"
    >
      <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-6 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1">
          <span className="font-heading text-2xl font-bold text-foreground">
            Reskil<span className="gradient-text">ll</span>
          </span>
        </a>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#partners" className="btn-ghost-nav text-sm">
            Partners
          </a>
          <a href="#initiatives" className="btn-ghost-nav text-sm">
            Initiative
          </a>
          <a href="#events" className="btn-ghost-nav text-sm">
            Events
          </a>
          <a href="#community" className="btn-ghost-nav text-sm">
            Community
          </a>
          <a href="#hackathon" className="btn-ghost-nav text-sm">
            Hackathon
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="btn-ghost-nav hidden sm:inline-flex">
            Sign in
          </Button>
          <Button variant="hero" size="default">
            Register Now
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
