import "./NierButton.css";
import useSound from 'use-sound';
import * as React from "react";

import hoverSfx from "../../../assets/audio/cursor.mp3";
import confirmSfx from "../../../assets/audio/confirm.mp3";

interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const NierButton = ({ text, onClick }: ButtonProps) => {
  const [playHover] = useSound(hoverSfx);
  const [playConfirm] = useSound(confirmSfx);

  return (
    <button className="button" onClick={(e) => { if (onClick) onClick(e); playConfirm(); }} onMouseEnter={() => playHover()}>
      {text}
    </button>
  );
};