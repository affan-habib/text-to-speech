import React from 'react';
import { ImageElement as ImageElementType } from '../../types/elements';
import { Volume2 } from 'lucide-react';

interface ImageElementProps {
  element: ImageElementType;
  onSpeak: (text: string) => void;
}

export function ImageElement({ element, onSpeak }: ImageElementProps) {
  const handleSpeak = () => {
    const text = `Image: ${element.alt}${element.caption ? `. ${element.caption}` : ''}`;
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
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 bg-white shadow-md"
          aria-label="Describe image"
        >
          <Volume2 className="w-4 h-4" />
        </button>
        <img
          src={element.url}
          alt={element.alt}
          className="w-full h-full object-contain rounded"
        />
        {element.caption && (
          <p className="text-sm text-gray-600 mt-2 text-center">{element.caption}</p>
        )}
      </div>
    </div>
  );
}