import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Section as SectionType } from '../types/speech';

interface SectionProps {
  section: SectionType;
  onSpeakSection: (sectionId: string) => void;
  isCurrentlyReading: boolean;
}

export function Section({ section, onSpeakSection, isCurrentlyReading }: SectionProps) {
  const handleClick = () => {
    onSpeakSection(section.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      {section.imageUrl && (
        <img
          src={section.imageUrl}
          alt={section.title}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
          <button
            onClick={handleClick}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isCurrentlyReading ? "Stop speaking" : "Start speaking"}
          >
            {isCurrentlyReading ? (
              <VolumeX className="w-6 h-6 text-red-500" />
            ) : (
              <Volume2 className="w-6 h-6 text-blue-500" />
            )}
          </button>
        </div>
        {section.htmlContent ? (
          <div 
            className="text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: section.htmlContent }}
          />
        ) : (
          <p className="text-gray-600 leading-relaxed">{section.content}</p>
        )}
      </div>
    </div>
  );
}