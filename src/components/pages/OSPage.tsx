import {useEffect, useState} from "react";
import {motion} from "framer-motion";

const OsPage = () => {
  const loadingLines = [
    "ACCESSING SYSTEM...",
    "Checking all operating parameters...",
    "Scanning for errors...",
    "No anomalies detected.",
    "Loading core modules...",
    "Loading environment settings...",
    "Confirming user permissions...",
    "All systems operational.",
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedLine, setTypedLine] = useState("");
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (showFinal) return;

    if (currentLineIndex < loadingLines.length) {
      const line = loadingLines[currentLineIndex];
      let charIndex = 0;
      setTypedLine("");

      const typeInterval = setInterval(() => {
        setTypedLine((prev) => prev + line[charIndex]);
        charIndex++;
        if (charIndex >= line.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1);
          }, 700);
        }
      }, 40);

      return () => clearInterval(typeInterval);
    } else {
      setTimeout(() => {
        setShowFinal(true);
      }, 1000);
    }
  }, [currentLineIndex, showFinal]);

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {!showFinal && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-32 h-32 rounded-full border-t-2 border-gray-400 absolute"
            animate={{rotate: 360}}
            transition={{repeat: Infinity, duration: 4, ease: "linear"}}
          ></motion.div>
          <motion.div
            className="w-20 h-20 rounded-full border-l-2 border-gray-400"
            animate={{rotate: -360}}
            transition={{repeat: Infinity, duration: 3, ease: "linear"}}
          ></motion.div>
        </div>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {!showFinal && (
          <>
            <p className="font-mono text-lg mb-2">{typedLine}</p>
          </>
        )}

        {showFinal && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="text-center"
          >
            <h1 className="text-3xl mb-4 font-bold">BOOT COMPLETE</h1>
            <p className="text-lg">All systems nominal. Welcome to the OS.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OsPage;