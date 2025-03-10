import styles from "./NierButton.module.css";
import * as React from "react";
import {useSoundEffects} from "../../../hooks/useSoundEffects.ts";

interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent) => void;
  clickSound?: string;
}

export const NierButton = ({text, onClick, clickSound}: ButtonProps) => {
  const {playHover, playConfirm} = useSoundEffects(clickSound);

  return (
    <button
      className={styles.nierButton}
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