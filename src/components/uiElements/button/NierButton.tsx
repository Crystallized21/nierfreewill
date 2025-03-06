import "./NierButton.css";
import useSound from 'use-sound';
import * as React from "react";

import hoverSfx from "../../../assets/audio/cursor.mp3";

interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const NierButton = ({ text, onClick }: ButtonProps) => {
  const [play] = useSound(hoverSfx);

  return (
    <button className="button" onClick={onClick} onMouseEnter={() => play()}>
      {text}
    </button>
  );
};