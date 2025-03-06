import {useState, useEffect} from "react";

interface GlitchTextProps {
  text: string;
}

export default function GlitchText({text}: GlitchTextProps) {
  const [glitchShadow, setGlitchShadow] = useState("0px 0px 10px rgba(255, 255, 255, 0.8), 0px 0px 40px rgba(255, 255, 255, 0.6), 0px 0px 60px rgba(255, 255, 255, 0.4)");
  const [clipPath, setClipPath] = useState("inset(0% 0% 0% 0%)");

  useEffect(() => {
    const interval = setInterval(() => {
      const offset = Math.floor(Math.random() * 360) - 120; // Large range for left/right movement
      setGlitchShadow(`
            ${offset}px 0px 0px red,
            ${-offset}px 0px 0px blue,
            ${offset * 0.8}px 0px 0px green,
            0px 0px 10px rgba(255, 255, 255, 0.8),
            0px 0px 20px rgba(255, 255, 255, 0.6),
            0px 0px 30px rgba(255, 255, 255, 0.4)
          `);

      // Randomly cut sections of the text
      const top = Math.floor(Math.random() * 45);
      const bottom = Math.floor(Math.random() * 45);
      setClipPath(`inset(${top}% 0% ${bottom}% 0%)`);
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className="text-4xl text-center relative"
      style={{textShadow: glitchShadow}}
    >
      <span style={{position: "absolute", clipPath}}>{text}</span>
      {text}
    </h1>
  );
}