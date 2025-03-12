import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import {NierButton} from "../uiElements/button/NierButton";
import {useNavigate} from "react-router-dom";
import useSound from 'use-sound';
import GlitchText from "./GlitchText";
import ErrorPopup from "../uiElements/error/ErrorPopup";

import startup from "../../assets/audio/startup.mp3";
import music from "../../assets/audio/music1.mp3";
import error from "../../assets/audio/error.mp3";

export default function CreditsScroll() {
  const [showCredits, setShowCredits] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  const [errorPopupTime, setErrorPopupTime] = useState(0);
  const [errorPopupStartTime, setErrorPopupStartTime] = useState<number | null>(null);

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

  useEffect(() => {
    if (errorPopupStartTime !== null) {
      const timer = setInterval(() => {
        setErrorPopupTime(Number(((Date.now() - errorPopupStartTime) / 1000).toFixed(2)));
      }, 1);
      return () => clearInterval(timer);
    }
  }, [errorPopupStartTime]);

  useEffect(() => {
    if (showErrorPopup && errorPopupStartTime === null) {
      setErrorPopupStartTime(Date.now());
    }
    if (showErrorPopup) {
      const timeout = setTimeout(() => {
        setShowErrorPopup(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [showErrorPopup, errorPopupStartTime]);

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
            <div
              className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 w-1/2"
            >
              <GlitchText text="What is your decision?"/>
              <div className="flex flex-col gap-6 w-full px-6">
                <NierButton onClick={() => navigate("/loados")} text="Enter OS"/>
                <NierButton onClick={() => setShowErrorPopup(true)} text="Quit Life." clickSound={error}/>
              </div>
            </div>
          )}
        </>
      )}
      {showErrorPopup && (
        <ErrorPopup
          text="You do not have the authority to operate that command."
          x={mousePosition.x}
          y={mousePosition.y}
          seconds={errorPopupTime}
        />
      )}
    </div>
  );
}