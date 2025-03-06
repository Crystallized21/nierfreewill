import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NierButton } from "../uiElements/button/NierButton.tsx";
import { useNavigate } from "react-router-dom";
import useSound from 'use-sound';
import GlitchText from "./GlitchText.tsx";

import startup from "../../assets/audio/startup.mp3";
import music from "../../assets/audio/music1.mp3";

const credits = [
  "Project Director: You",
  "Lead Developer: Also You",
  "Philosophy Consultant: Existential Dread",
  "Special Thanks: Free Will(?)",
  "And you, the user."
];

export default function CreditsScroll() {
  const [showCredits, setShowCredits] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const navigate = useNavigate();
  const [playMusic] = useSound(music);
  const [playStartup] = useSound(startup);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShowCredits(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStart = () => {
    setHasStarted(true);
    playStartup();
    playMusic();
  };

  if (!hasStarted) {
    return (
      <div className="h-screen bg-black text-white flex flex-col items-center justify-center" onClick={handleStart}>
        <motion.h1
          className="text-4xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Click to Continue
        </motion.h1>
      </div>
    );
  }

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
            transition={{ ease: "anticipate", duration: 3.5 }}
          >
            <GlitchText text="Nothing can exist forever." />
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
        <div
          className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 w-1/2">
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
