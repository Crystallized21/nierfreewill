import "./NierButton.css";
import * as React from "react";

interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const NierButton = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};