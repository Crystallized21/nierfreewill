import useSound from 'use-sound';
import hoverSfx from "../assets/audio/cursor.mp3";
import confirmSfx from "../assets/audio/confirm.mp3";
import errorSfx from '../assets/audio/error.mp3';
import exitSfx from '../assets/audio/exit.ogg';
import closeSfx from '../assets/audio/close.ogg';

export const useSoundEffects = (clickSound?: string, errorSound?: string) => {
  const [playHover] = useSound(hoverSfx);
  const [playConfirm] = useSound(clickSound || confirmSfx);
  const [playError] = useSound(errorSound || errorSfx);
  const [playExit] = useSound(exitSfx);
  const [playClose] = useSound(closeSfx);

  return {playHover, playConfirm, playError, playExit, playClose};
};