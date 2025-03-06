interface ErrorPopupProps {
  text: string;
  x: number;
  y: number;
  seconds: number;
}

export default function ErrorPopup({text, x, y, seconds}: ErrorPopupProps) {
  return (
    <div
      className="absolute bg-red-400 text-white font-sans text shadow-lg border border-red-600"
      style={{
        top: `${y}px`,
        left: `${x}px`,
        transform: "translate(0%, 635%)", // Moves the popup so bottom-center is at the cursor
        color: "#dcd8c0",
        width: "auto",
        maxWidth: "calc(100vw - 20px)", // Ensure the popup doesn't exceed the viewport width
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