import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="relative bg-[#f6f6f6] w-full min-h-screen flex flex-col items-center pt-10 pb-32">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d1d5db" strokeWidth="0.5" strokeDasharray="4 2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      {/* Decorative SVG Line and Nodes - Relative to document flow but layered behind */}
      <div className="absolute top-10 md:top-20 w-full h-[250px] pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 250" preserveAspectRatio="none">
          <motion.path 
            d="M-50,150 L100,50 L250,200 L400,100 L1200,100 L1300,200 L1500,50" 
            fill="none" 
            stroke="#1a1a1a" 
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.circle cx="400" cy="100" r="5" fill="#ff5a00" stroke="#1a1a1a" strokeWidth="1.5" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1 }} viewport={{ once: true }} />
          <motion.circle cx="1200" cy="100" r="5" fill="#ff5a00" stroke="#1a1a1a" strokeWidth="1.5" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }} viewport={{ once: true }} />
        </svg>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 relative mt-[220px] md:mt-[240px] w-full flex flex-col items-center">
        
        {/* Title */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="w-full text-center"
        >
          <h2 className="text-[12vw] md:text-[9vw] lg:text-[8vw] font-sans font-medium text-[#1a1a1a] tracking-tight leading-none">
            CØNTACT US
          </h2>
        </motion.div>

        {/* Contact Form Section */}
        <div className="w-full max-w-5xl mt-16 md:mt-24 flex flex-col md:flex-row gap-12 text-[#1a1a1a]">
          
          {/* Left Side: Message */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex flex-col pt-6 relative"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-medium leading-normal tracking-tight">
              We are keen to<br />hear from you :)
            </h3>

            {/* Asterisk Element relative to the text block */}
            <motion.div 
              className="absolute top-[200px] left-4 text-3xl font-bold text-black opacity-80"
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              *
            </motion.div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-2/3 flex flex-col gap-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-200 py-2 px-1 outline-none focus:border-[#ff5a00] transition-colors" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Phone Number</label>
                <input type="tel" className="w-full bg-transparent border-b border-gray-200 py-2 px-1 outline-none focus:border-[#ff5a00] transition-colors" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-gray-200 py-2 px-1 outline-none focus:border-[#ff5a00] transition-colors" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Subject</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-200 py-2 px-1 outline-none focus:border-[#ff5a00] transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Your message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-gray-200 py-2 px-1 outline-none focus:border-[#ff5a00] transition-colors resize-none"></textarea>
            </div>

            <div className="mt-8">
              <button className="bg-[#1a1a1a] text-white px-8 py-4 rounded-xl flex items-center justify-center hover:bg-black transition-all duration-300 font-medium text-sm w-full sm:w-auto">
                Send Message
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
