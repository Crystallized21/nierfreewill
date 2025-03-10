import {JSX, useEffect, useState} from "react";

/**
 * `LoadingDots` is a React functional component that displays an animated
 * sequence of dots ("."), representing a loading state. The number of dots
 * cycles between 1 and 3, restarting from 1 after reaching 3.
 *
 * @component
 * @example
 * ```tsx
 * <LoadingDots />
 * ```
 * The component will render a span element that cycles through 1 to 3 dots
 * every 500 milliseconds.
 *
 * @returns {JSX.Element} A span element containing a string of dots that
 * increments over time.
 */
export const LoadingDots = (): JSX.Element => {
  const [dots, setDots] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDots((prev) => {
        if (prev.length === 3) return "";
        return prev + ".";
      });
    }, 500);

    // Cleanup timeout to avoid memory leaks
    return () => clearTimeout(timer);
  }, [dots]);

  return <span style={{opacity:0.8}}>{dots}</span>;
};