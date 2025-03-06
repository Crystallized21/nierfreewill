import {JSX, useEffect, useState} from "react";
import styled from "styled-components";
import { StyledGlitchText } from "./glitchingTextStyle.ts";

/**
 * Props for the Typer component.
 */
interface TyperProps {
  /**
   * The text to be typed out.
   */
  receivedText: string;

  /**
   * The callback function to be called once typing is complete.
   */
  callBack: () => unknown;

  /**
   * The speed at which the text is typed, in milliseconds. Default is 10.
   */
  speed?: number;
}

/**
 * Keyframes for the glitch animation with reduced movement.
 */

const GlitchingP = styled.p`
  ${StyledGlitchText}
  opacity: 0.8;
  margin: 0;
`;

/**
 * Typer component types out the received text character by character at a given speed.
 *
 * @param {TyperProps} props - The props for the component.
 * @returns {JSX.Element} - The JSX element that represents the Typer component.
 */
export const Typer = ({
  receivedText,
  callBack,
  speed = 25,
}: TyperProps): JSX.Element => {
  const [typingText, setTypingText] = useState<string[]>([""]);

  function startTyping() {
    if (typingText.join("").length < receivedText.length) {
      setTimeout(() => {
        const nextChar = receivedText.charAt(typingText.join("").length);
        setTypingText((prev) => {
          const newText = [...prev];
          if (nextChar === "\n") {
            newText.push("");
          } else {
            newText[newText.length - 1] += nextChar;
          }
          return newText;
        });
      }, speed);
    } else {
      callBack();
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(startTyping, [receivedText, typingText]);

  if (!receivedText) return <></>;

  return (
    <div>
      {typingText.map((line, index) => (
        <GlitchingP key={index} data-text={line}>
          {line}
        </GlitchingP>
      ))}
    </div>
  );
};