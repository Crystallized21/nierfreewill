import React, {createContext, useContext, useEffect, useRef, useState} from 'react';
import music1 from '../assets/audio/music1.mp3';
import cityruins from '../assets/audio/cityruins.mp3';

interface AudioContextType {
  playInitialMusic: () => void;
  isPlaying: boolean;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFirstMusicPlaying, setIsFirstMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cityRuinsRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(music1);
    cityRuinsRef.current = new Audio(cityruins);

    if (cityRuinsRef.current) {
      cityRuinsRef.current.loop = true;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      if (cityRuinsRef.current) {
        cityRuinsRef.current.pause();
        cityRuinsRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current && isFirstMusicPlaying) {
      const handleMusicEnd = () => {
        setIsFirstMusicPlaying(false);
        // play city ruins and loop it
        if (cityRuinsRef.current) {
          cityRuinsRef.current.play()
            .catch(err => console.error("Error playing city ruins:", err));
        }
      };

      audioRef.current.addEventListener('ended', handleMusicEnd);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleMusicEnd);
        }
      };
    }
  }, [isFirstMusicPlaying]);

  const playInitialMusic = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsFirstMusicPlaying(true);
        })
        .catch(err => console.error("Error playing initial music:", err));
    }
  };

  return (
    <AudioContext.Provider value={{playInitialMusic, isPlaying}}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};