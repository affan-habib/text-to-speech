import React from 'react';
import { MCQElement as MCQElementType } from '../../types/elements';
import { Volume2 } from 'lucide-react';

interface MCQElementProps {
  element: MCQElementType;
  onSpeak: (text: string) => void;
}

export function MCQElement({ element, onSpeak }: MCQElementProps) {
  const handleSpeak = () => {
    const text = `Question: ${element.question}. Options: ${element.options
      .map((opt, index) => `${index + 1}: ${opt.text}`)
      .join('. ')}`;
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
          aria-label="Read question"
        >
          <Volume2 className="w-4 h-4" />
        </button>
        <div className="pr-8">
          <h3 className="text-lg font-medium mb-3">{element.question}</h3>
          <div className="space-y-2">
            {element.options.map((option) => (
              <label
                key={option.id}
                className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
              >
                <input
                  type="radio"
                  name={`mcq-${element.id}`}
                  value={option.id}
                  className="h-4 w-4 text-blue-600"
                />
                <span>{option.text}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}