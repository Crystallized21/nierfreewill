import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {NierButton} from "../uiElements/button/NierButton.tsx";
import {useNavigate} from "react-router-dom";

const credits = [
  "Project Director: You",
  "Lead Developer: Also You",
  "Philosophy Consultant: Existential Dread",
  "Special Thanks: Free Will(?)",
  "And you, the user."
];

export default function CreditsScroll() {
  const [showCredits, setShowCredits] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShowCredits(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[150vh] bg-black text-white overflow-hidden relative">
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
            <motion.h1
              className="text-4xl text-center glitch"
              initial={{ textShadow: "0px 0px 0px white" }}
              animate={{
                textShadow: [
                  "6px 0px 0px red",
                  "-6px 0px 0px blue",
                  "6px 0px 0px red",
                  "-6px 0px 0px green",
                  "6px 0px 0px green"
                ]
              }}
              transition={{ repeat: Infinity, duration: 0.15 }}
            >
              Nothing can exist forever.
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrolling Credits */}
      {showCredits && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "1000%" }}
          transition={{ duration: 15, ease: "linear" }}
          className="absolute top-0 left-0 w-full text-center"
        >
          {credits.map((line, index) => (
            <p key={index} className="text-xl mb-4">{line}</p>
          ))}
        </motion.div>
      )}

      {/* Decision Section */}
      {showCredits && (
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 w-1/2">
          <h2 className="text-2xl mb-4">What is your decision?</h2>
          <div className="flex flex-col gap-6 w-full px-6">
            <NierButton onClick={() => navigate("/loados")} text="Enter OS"/>
            <NierButton text="Quit Life."/>
          </div>
        </div>
      )}
    </div>
  );
}
