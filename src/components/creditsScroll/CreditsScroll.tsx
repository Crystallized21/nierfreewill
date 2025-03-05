import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const credits = [
  "Project Director: You",
  "Lead Developer: Also You",
  "Philosophy Consultant: Existential Dread",
  "Special Thanks: Free Will(?)",
  "And you, the player."
];

export default function CreditsScroll() {
  const [showCredits, setShowCredits] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShowCredits(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[200vh] bg-black text-white overflow-hidden">
      {/* Intro Text */}
      <AnimatePresence>
        {!showCredits && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-4xl">Nothing can exist forever.</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrolling Credits */}
      {showCredits && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 15, ease: "linear" }}
          className="absolute bottom-0 left-0 w-full text-center"
        >
          {credits.map((line, index) => (
            <p key={index} className="text-xl mb-4">{line}</p>
          ))}
        </motion.div>
      )}
    </div>
  );
}
