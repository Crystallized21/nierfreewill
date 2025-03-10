import useSound from 'use-sound';
import hoverSfx from "../assets/audio/cursor.mp3";
import confirmSfx from "../assets/audio/confirm.mp3";

export const useSoundEffects = (clickSound?: string) => {
  const [playHover] = useSound(hoverSfx);
  const [playConfirm] = useSound(clickSound || confirmSfx);

  return { playHover, playConfirm };
};