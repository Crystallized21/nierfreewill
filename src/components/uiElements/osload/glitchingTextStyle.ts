import { css, keyframes } from "styled-components";

const glitch = keyframes`
  0%, 100% {
    transform: none;
  }
  10%, 30%, 50%, 70% {
    transform: translate(-0.3px, 0.3px) skew(0.2deg);
  }
  20%, 40%, 60%, 80% {
    transform: translate(0.3px, -0.3px) skew(-0.2deg);
  }
`;

const glitchBefore = keyframes`
  0%, 100% {
    clip: rect(0, 900px, 0, 0);
  }
  10% {
    clip: rect(20px, 900px, 50px, 0);
    transform: skew(0.2deg);
  }
  20% {
    clip: rect(85px, 900px, 115px, 0);
    transform: skew(-0.2deg);
  }
  30% {
    clip: rect(10px, 900px, 40px, 0);
    transform: skew(0.2deg);
  }
  40% {
    clip: rect(60px, 900px, 90px, 0);
    transform: skew(-0.2deg);
  }
  50% {
    clip: rect(25px, 900px, 55px, 0);
    transform: skew(0.2deg);
  }
  60% {
    clip: rect(90px, 900px, 120px, 0);
    transform: skew(-0.2deg);
  }
  70% {
    clip: rect(15px, 900px, 45px, 0);
    transform: skew(0.2deg);
  }
  80% {
    clip: rect(70px, 900px, 100px, 0);
    transform: skew(-0.2deg);
  }
  90% {
    clip: rect(40px, 900px, 70px, 0);
    transform: skew(0.2deg);
  }
`;

const glitchAfter = keyframes`
  0%, 100% {
    clip: rect(0, 900px, 0, 0);
  }
  10% {
    clip: rect(80px, 900px, 110px, 0);
    transform: skew(-0.2deg);
  }
  20% {
    clip: rect(15px, 900px, 45px, 0);
    transform: skew(0.2deg);
  }
  30% {
    clip: rect(70px, 900px, 100px, 0);
    transform: skew(-0.2deg);
  }
  40% {
    clip: rect(35px, 900px, 65px, 0);
    transform: skew(0.2deg);
  }
  50% {
    clip: rect(100px, 900px, 130px, 0);
    transform: skew(-0.2deg);
  }
  60% {
    clip: rect(20px, 900px, 50px, 0);
    transform: skew(0.2deg);
  }
  70% {
    clip: rect(85px, 900px, 115px, 0);
    transform: skew(-0.2deg);
  }
  80% {
    clip: rect(30px, 900px, 60px, 0);
    transform: skew(0.2deg);
  }
  90% {
    clip: rect(55px, 900px, 85px, 0);
    transform: skew(-0.2deg);
  }
`;

export const StyledGlitchText = css`
  position: relative;
  display: inline-block;
  animation: ${glitch} 1.5s infinite;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #1e1e1a;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
  }

  &::before {
    left: 1px;
    text-shadow: -1px 0 red;
    animation: ${glitchBefore} 1.5s infinite linear alternate-reverse;
  }

  &::after {
    left: -1px;
    text-shadow: -1px 0 blue;
    animation: ${glitchAfter} 1.5s infinite linear alternate-reverse;
  }
`;