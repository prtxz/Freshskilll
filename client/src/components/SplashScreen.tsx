import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import splash1 from "@/assets/splash-1.jpg";
import splash2 from "@/assets/splash-2.jpg";
import splash3 from "@/assets/splash-3.jpg";
import splash4 from "@/assets/splash-4.jpg";
import splash5 from "@/assets/splash-5.jpg";
import splash6 from "@/assets/splash-6.jpg";

const images = [
  { src: splash1, delay: 0, duration: 12, column: 0 },
  { src: splash2, delay: 1.5, duration: 14, column: 1 },
  { src: splash3, delay: 0.5, duration: 13, column: 2 },
  { src: splash4, delay: 2, duration: 11, column: 3 },
  { src: splash5, delay: 1, duration: 15, column: 0 },
  { src: splash6, delay: 2.5, duration: 12, column: 1 },
  { src: splash1, delay: 3, duration: 14, column: 2 },
  { src: splash2, delay: 3.5, duration: 13, column: 3 },
  { src: splash3, delay: 4, duration: 12, column: 0 },
  { src: splash4, delay: 4.5, duration: 15, column: 1 },
  { src: splash5, delay: 5, duration: 11, column: 2 },
  { src: splash6, delay: 5.5, duration: 14, column: 3 },
];

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleSkip = () => {
    if (!isExiting) {
      setIsExiting(true);
      setTimeout(() => onComplete(), 800);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    const exitTimer = setTimeout(() => {
      onComplete();
    }, 3300);

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  const columnWidth = 25;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 cursor-pointer overflow-hidden bg-secondary"
          onClick={handleSkip}
        >
          {/* Masonry floating images */}
          <div className="absolute inset-0">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: "-100vh", opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: image.duration,
                  delay: image.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute"
                style={{
                  left: `${image.column * columnWidth + Math.random() * 10}%`,
                  width: `${18 + Math.random() * 8}%`,
                }}
              >
                <div className="overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={image.src}
                    alt="Reskill event"
                    className="h-auto w-full object-cover"
                    style={{
                      aspectRatio: 0.7 + Math.random() * 0.6,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-secondary/30" />

          {/* Logo and loading indicator */}
          {/* Logo and loading indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ perspective: "1500px" }}
          >
            <h1 
              className="font-mono text-5xl font-bold text-primary-foreground md:text-7xl flex"
              style={{ transformStyle: "preserve-3d" }}
            >
              {"Reskilll".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className={index >= 6 ? "gradient-text" : ""}
                  initial={{ 
                    x: index % 2 === 0 ? -300 : 300, 
                    y: index % 2 === 0 ? -100 : 100,
                    z: 600,
                    scale: 2,
                    opacity: 0 
                  }}
                  animate={{ 
                    x: 0, 
                    y: 0,
                    z: 0,
                    scale: 1,
                    opacity: 1 
                  }}
                  transition={{ 
                    duration: 1.6, 
                    delay: 0.2 + index * 0.1, 
                    type: "spring",
                    bounce: 0.4
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ delay: 0.6, duration: 1.8, ease: "easeInOut" }}
              className="mt-8 h-1 rounded-full bg-primary"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.5 }}
              className="mt-6 text-sm text-primary-foreground/60"
            >
              Click anywhere to skip
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
