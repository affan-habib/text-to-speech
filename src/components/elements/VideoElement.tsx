import React from 'react';
import { VideoElement as VideoElementType } from '../../types/elements';
import { Volume2 } from 'lucide-react';

interface VideoElementProps {
  element: VideoElementType;
  onSpeak: (text: string) => void;
}

export function VideoElement({ element, onSpeak }: VideoElementProps) {
  const handleSpeak = () => {
    const text = `Video: ${element.title}${element.description ? `. ${element.description}` : ''}`;
    onSpeak(text);
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: `${element.position.x}px`,
        top: `${element.position.y}px`,
        width: `${element.position.width}px`,
        height: `${element.position.height}px`,
      }}
      className="bg-white rounded-lg shadow-sm p-4"
    >
      <div className="relative">
        <button
          onClick={handleSpeak}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 bg-white shadow-md z-10"
          aria-label="Describe video"
        >
          <Volume2 className="w-4 h-4" />
        </button>
        <video
          controls
          className="w-full rounded"
          src={element.url}
          title={element.title}
        />
        {element.description && (
          <p className="text-sm text-gray-600 mt-2">{element.description}</p>
        )}
      </div>
    </div>
  );
}