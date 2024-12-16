import { useState, useCallback, useRef } from 'react';
import { SpeechOptions } from '../types/speech';

export function useSpeechQueue() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);
  const queueRef = useRef<string[]>([]);
  const optionsRef = useRef<SpeechOptions>({
    pitch: 1,
    rate: 1,
    voice: null,
  });

  const updateOptions = useCallback((newOptions: Partial<SpeechOptions>) => {
    optionsRef.current = { ...optionsRef.current, ...newOptions };
    if (isSpeaking) {
      // Restart current speech with new options
      const currentText = queueRef.current[0];
      if (currentText) {
        window.speechSynthesis.cancel();
        speak(currentText);
      }
    }
  }, [isSpeaking]);

  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = optionsRef.current.pitch;
    utterance.rate = optionsRef.current.rate;
    if (optionsRef.current.voice) {
      utterance.voice = optionsRef.current.voice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      queueRef.current.shift();
      if (queueRef.current.length > 0) {
        speak(queueRef.current[0]);
      } else {
        setIsSpeaking(false);
        setCurrentSectionId(null);
      }
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      setCurrentSectionId(null);
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  const startSpeaking = useCallback((texts: string[], startIndex: number = 0, sectionId?: string) => {
    window.speechSynthesis.cancel();
    queueRef.current = texts.slice(startIndex);
    setCurrentSectionId(sectionId || null);
    if (queueRef.current.length > 0) {
      speak(queueRef.current[0]);
    }
  }, [speak]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    queueRef.current = [];
    setIsSpeaking(false);
    setCurrentSectionId(null);
  }, []);

  return {
    isSpeaking,
    currentSectionId,
    startSpeaking,
    stop,
    updateOptions,
    options: optionsRef.current,
  };
}