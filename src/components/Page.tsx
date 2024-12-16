import React from 'react';
import { Page as PageType } from '../types/elements';
import { TextElement } from './elements/TextElement';
import { MCQElement } from './elements/MCQElement';
import { ImageElement } from './elements/ImageElement';
import { VideoElement } from './elements/VideoElement';
import { useSpeechQueue } from '../hooks/useSpeechQueue';

interface PageProps {
  page: PageType;
}

export function Page({ page }: PageProps) {
  const { startSpeaking } = useSpeechQueue();

  const handleSpeak = (text: string) => {
    startSpeaking([text]);
  };

  return (
    <div 
      className="relative bg-gray-50 mx-auto rounded-lg shadow-lg"
      style={{
        width: `${page.width}px`,
        height: `${page.height}px`,
      }}
    >
      {page.elements.map((element) => {
        switch (element.type) {
          case 'text':
            return (
              <TextElement
                key={element.id}
                element={element}
                onSpeak={handleSpeak}
              />
            );
          case 'mcq':
            return (
              <MCQElement
                key={element.id}
                element={element}
                onSpeak={handleSpeak}
              />
            );
          case 'image':
            return (
              <ImageElement
                key={element.id}
                element={element}
                onSpeak={handleSpeak}
              />
            );
          case 'video':
            return (
              <VideoElement
                key={element.id}
                element={element}
                onSpeak={handleSpeak}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}