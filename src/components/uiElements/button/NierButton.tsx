import "./NierButton.css";
import * as React from "react";
import {useSoundEffects} from "../../useSoundEffects.ts";

interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent) => void;
  clickSound?: string;
}

export const NierButton = ({text, onClick, clickSound}: ButtonProps) => {
  const {playHover, playConfirm} = useSoundEffects(clickSound);

  return (
    <button
      className="button"
      onClick={(e) => {
        if (onClick) onClick(e);
        playConfirm();
      }}
      onMouseEnter={() => playHover()}
    >
      {text}
    </button>
  );
};