import {useState, useEffect} from "react";

interface ErrorPopupProps {
  text: string;
  x: number;
  y: number;
}

export default function ErrorPopup({text, x, y}: ErrorPopupProps) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      setSeconds(Number(((Date.now() - startTime) / 1000).toFixed(2)));
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute bg-red-400 text-white font-sans text shadow-lg border border-red-600"
      style={{
        top: `${y}px`,
        left: `${x}px`,
        transform: "translate(-50%, -50%)", // Centers it on the mouse
        color: "#dcd8c0",
        width: "auto",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-3 bg-red-500 shadow-lg">
        <span className="tracking-wider">ERROR</span>
        <span className="text-sm">{seconds}</span>
      </div>

      {/* Body with dotted background */}
      <div
        className="p-2 text-center relative"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
          textShadow: "0px 0px 2px rgba(0, 0, 0, 0.7)",
          color: "#dcd8c0",
        }}
      >
        <span className="font-medium tracking-wide text-shadow-black">
          {text}
        </span>
      </div>
    </div>
  );
}
