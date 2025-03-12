import useSound from 'use-sound';
import hoverSfx from "../assets/audio/cursor.mp3";
import confirmSfx from "../assets/audio/confirm.mp3";
import errorSfx from '../assets/audio/error.mp3';


export const useSoundEffects = (clickSound?: string, errorSound?: string) => {
  const [playHover] = useSound(hoverSfx);
  const [playConfirm] = useSound(clickSound || confirmSfx);
  const [playError] = useSound(errorSound || errorSfx);

  return { playHover, playConfirm, playError};
};