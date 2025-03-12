import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import GlitchText from "../creditsScroll/GlitchText.tsx";

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

const EndofYorha = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowThankYou(true), 12000);
  }, []);

  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden relative">
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: showThankYou ? 0 : 1}}
        transition={{duration: 2}}
        className="absolute inset-0 flex items-center justify-center"
      >
        <h1 className="text-4xl">END OF YORHA</h1>
      </motion.div>

      <motion.div
        initial={{y: "150%"}}
        animate={{y: "-250%"}}
        transition={{duration: 15, ease: "linear"}}
        className="absolute bottom-0 left-0 w-full text-center"
      >
        {credits.map((line, index) => (
          <p key={index} className="text-xl mb-4 opacity-90">{line}</p>
        ))}
      </motion.div>

      {showThankYou && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 3}}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <GlitchText text={`Thank you for joining this experience.`}/>
          <GlitchText text={`Goodbye.`}/>
        </motion.div>
      )}
    </div>
  );
};

export default EndofYorha;