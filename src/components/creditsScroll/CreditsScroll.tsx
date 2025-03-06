import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {NierButton} from "../uiElements/button/NierButton";
import {useNavigate} from "react-router-dom";
import useSound from 'use-sound';
import GlitchText from "./GlitchText";
import ErrorPopup from "../uiElements/error/ErrorPopup";

import startup from "../../assets/audio/startup.mp3";
import music from "../../assets/audio/music1.mp3";

const credits = [
  "Project Director: You",
  "Lead Developer: Also You",
  "Philosophy Consultant: Existential Dread",
  "Special Thanks: Free Will(?)",
  "And you, the user.",
  "Music Composer: Silence",
  "Graphics Designer: Imagination",
  "QA Tester: Murphy's Law",
  "Inspirational Quote: 'To be or not to be.'",
  "End of Credits: Thank you for watching."
];

export default function CreditsScroll() {
  const [showCredits, setShowCredits] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
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

  useEffect(() => {
    if (showErrorPopup) {
      const updateMousePosition = (event: MouseEvent) => {
        setMousePosition({x: event.clientX, y: event.clientY});
      };
      window.addEventListener("mousemove", updateMousePosition);
      return () => window.removeEventListener("mousemove", updateMousePosition);
    }
  }, [showErrorPopup]);

  const handleStart = () => {
    setHasStarted(true);
    playStartup();
    playMusic();
  };

  return (
    <div className="h-[150vh] bg-black text-white overflow-hidden relative">
      {!hasStarted ? (
        <div className="h-screen bg-black text-white flex flex-col items-center justify-center" onClick={handleStart}>
          <motion.h1
            className="text-4xl text-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2}}
          >
            Click to Continue
          </motion.h1>
        </div>
      ) : (
        <>
          <AnimatePresence>
            {!showCredits && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0, transition: {duration: 1}}}
                transition={{ease: "anticipate", duration: 4.5}}
              >
                <GlitchText text="Nothing can exist forever."/>
              </motion.div>
            )}
          </AnimatePresence>

          {showCredits && (
            <motion.div
              initial={{y: "-100%"}}
              animate={{y: "1000%"}}
              transition={{duration: 45, ease: "linear"}}
              className="absolute top-0 left-0 w-full text-center"
            >
              {credits.map((line, index) => (
                <p key={index} className="text-xl mb-4">{line}</p>
              ))}
            </motion.div>
          )}

          {showCredits && (
            <div
              className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 w-1/2">
              <GlitchText text="What is your decision?"/>
              <div className="flex flex-col gap-6 w-full px-6">
                <NierButton onClick={() => navigate("/loados")} text="Enter OS"/>
                <NierButton onClick={() => setShowErrorPopup(true)} text="Quit Life."/>
              </div>
            </div>
          )}
        </>
      )}
      {showErrorPopup && <ErrorPopup text="You do not have the autority to operate that command." x={mousePosition.x} y={mousePosition.y}/>}
    </div>
  );
}