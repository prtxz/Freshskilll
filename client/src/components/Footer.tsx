import { motion } from "framer-motion";
import { Twitter, Linkedin, Facebook, Youtube } from "lucide-react";

const quickLinks = ["Events/Hackathons", "Community", "Initiatives"];
const hackathons = [
  "MSHACK",
  "Vistara Hackathon",
  "Ideathon",
  "Microsoft Code for Future",
  "Assocham Launchpad",
  "Green Charcoal Hackathon",
  "India Innovation Series",
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-[#1a00a8] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-2xl font-heading font-bold">
                re<span className="text-primary">skill</span>l
              </span>
            </motion.div>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              For any queries or requests, feel free to reach out to us using the mentioned email or the connect us button.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-white/60 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hackathons */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Hackathons</h4>
            <ul className="space-y-3">
              {hackathons.map((hackathon) => (
                <li key={hackathon}>
                  <a 
                    href="#" 
                    className="text-white/60 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {hackathon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">India Office</h4>
            <div className="space-y-3 text-sm text-white/60">
              <p>4th Floor, E4, Sector 3,</p>
              <p>Noida, Uttar Pradesh - 201301</p>
              <p className="text-white/80">punit@reskilll.com</p>
              <p className="text-white/80">+91 9858777788</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2021 Copyright: <span className="text-white/60">Reskilll</span>
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
