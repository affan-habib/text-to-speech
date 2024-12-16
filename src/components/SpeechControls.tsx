import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, FastForward, Rewind } from 'lucide-react';
import { SpeechOptions } from '../types/speech';

interface SpeechControlsProps {
  onUpdateOptions: (options: Partial<SpeechOptions>) => void;
  onPlayAll: () => void;
  onStop: () => void;
  isSpeaking: boolean;
  className?: string;
}

export function SpeechControls({
  onUpdateOptions,
  onPlayAll,
  onStop,
  isSpeaking,
  className = '',
}: SpeechControlsProps) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handleVoiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const voice = voices.find(v => v.name === event.target.value) || null;
    setSelectedVoice(voice);
    onUpdateOptions({ voice });
  };

  const handlePitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPitch = parseFloat(event.target.value);
    setPitch(newPitch);
    onUpdateOptions({ pitch: newPitch });
  };

  const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRate = parseFloat(event.target.value);
    setRate(newRate);
    onUpdateOptions({ rate: newRate });
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Speech Controls</h3>
        <button
          onClick={isSpeaking ? onStop : onPlayAll}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isSpeaking ? (
            <>
              <VolumeX className="w-5 h-5" />
              Stop
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5" />
              Read All
            </>
          )}
        </button>
      </div>

      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Voice
          </label>
          <select
            className="w-full p-2 border rounded-md"
            onChange={handleVoiceChange}
            value={selectedVoice?.name || ''}
          >
            <option value="">Default Voice</option>
            {voices.map(voice => (
              <option key={voice.name} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Speed: {rate}x
          </label>
          <div className="flex items-center gap-2">
            <Rewind className="w-4 h-4" />
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={rate}
              onChange={handleRateChange}
              className="w-full"
            />
            <FastForward className="w-4 h-4" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pitch: {pitch}
          </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={pitch}
            onChange={handlePitchChange}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}