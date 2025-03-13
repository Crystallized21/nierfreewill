import {useEffect, useState} from "react";
import {motion} from "framer-motion";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

const getRandomChar = () => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

const generateShuffledText = (original: string, progressIndex: number) => {
  return original
    .split("")
    .map((char, index) =>
      char === " " || index < progressIndex ? char : getRandomChar()
    )
    .join("");
};

const ShuffleText = ({text}: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);

  // @ts-expect-error - variable is used indirectly in the effect
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [progressIndex, setProgressIndex] = useState(0);

  useEffect(() => {
    setDisplayText(generateShuffledText(text, 0));

    const startDelay = setTimeout(() => {
      setProgressIndex(1);
      setDisplayText(generateShuffledText(text, 1));

      const interval = setInterval(() => {
        setProgressIndex((prev) => {
          if (prev < text.length) {
            setDisplayText(generateShuffledText(text, prev));
            return prev + 1;
          }

          setDisplayText(text);
          clearInterval(interval);
          return prev;
        });
      }, 40);

      return () => clearInterval(interval);
    }, 400);

    return () => clearTimeout(startDelay);
  }, [text]);

  return (
    <motion.span
      className="text-lg"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.2, delay: 0.35}}
    >
      {displayText}
    </motion.span>
  );
};

export default ShuffleText;