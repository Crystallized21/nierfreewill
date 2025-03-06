import styled, { css, keyframes } from "styled-components";
import {JSX} from "react";

// Duration of the spinning animation in seconds
const spinDuration = 1;

// Keyframes for the rotating animation
const rotating = keyframes`
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
`;

// Default CSS for positioning the elements at the center of their parent
const defaultPositionCssValues = css`
  border-radius: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Default CSS for the spin and outter elements
const defaultCssValues = css`
  width: 80%;
  height: 80%;
  ${defaultPositionCssValues}
`;

/**
 * `SpinContainer` is a styled div that serves as the outermost container for the loading icon.
 * It has a fixed size and applies a rotating animation.
 */
const SpinContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  animation: ${rotating} ${spinDuration}s linear infinite;
`;

/**
 * `Inner` is a styled div that represents the innermost circle of the loading icon.
 * It is centered within the parent and has a white background.
 */
const Inner = styled.div`
  width: 35%;
  height: 35%;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

/**
 * `Spin` is a styled div that represents the spinning part of the loading icon.
 * It is a border with three sides transparent and one side black to create the spinning effect.
 */
const Spin = styled.div`
  ${defaultCssValues}
  border: 3px solid black;
  z-index: 1;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
`;

/**
 * `Outter` is a styled div that represents the outer circle of the loading icon.
 * It is a white border surrounding the spinning part.
 */
const Outter = styled.div`
  ${defaultCssValues}
  border: 6px solid white;
`;

/**
 * `Close` is a styled div that serves as an overlay for the loading icon,
 * creating an additional border around the outer part.
 */
const Close = styled.div`
  width: 100%;
  height: 100%;
  ${defaultPositionCssValues}
  border: 2px solid white;
`;

/**
 * `SpinLoadingIcon` is a React functional component that displays a spinning
 * loading icon with multiple layers. The icon is composed of several styled
 * components: `SpinContainer`, `Inner`, `Spin`, `Outter`, and `Close`.
 *
 * @component
 * @example
 * ```tsx
 * <SpinLoadingIcon />
 * ```
 * The component will render a loading icon with a spinning animation, useful
 * for indicating loading states in your application.
 *
 * @returns {JSX.Element} A JSX element containing the spinning loading icon.
 */
export const SpinLoadingIcon = (): JSX.Element => (
  <SpinContainer>
    <Inner />
    <Spin />
    <Outter />
    <Close />
  </SpinContainer>
);