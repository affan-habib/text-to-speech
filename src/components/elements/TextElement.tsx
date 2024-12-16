import React from 'react';
import { TextElement as TextElementType } from '../../types/elements';
import { Volume2 } from 'lucide-react';
import { extractTextFromHtml } from '../../utils/textExtractor';

interface TextElementProps {
  element: TextElementType;
  onSpeak: (text: string) => void;
}

export function TextElement({ element, onSpeak }: TextElementProps) {
  const handleSpeak = () => {
    const text = extractTextFromHtml(element.htmlContent);
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
          className="absolute top-0 right-0 p-1 rounded-full hover:bg-gray-100"
          aria-label="Read text"
        >
          <Volume2 className="w-4 h-4" />
        </button>
        <div
          className="prose prose-sm max-w-none pr-8"
          dangerouslySetInnerHTML={{ __html: element.htmlContent }}
        />
      </div>
    </div>
  );
}