import React from 'react';
import { PageViewer } from './components/PageViewer';
import { SpeechControls } from './components/SpeechControls';
import { samplePages } from './data/samplePages';
import { useSpeechQueue } from './hooks/useSpeechQueue';
import { extractTextFromElements } from './utils/textExtractor';

export function App() {
  const {
    isSpeaking,
    startSpeaking,
    stop,
    updateOptions,
  } = useSpeechQueue();

  const handlePlayAll = () => {
    if (isSpeaking) {
      stop();
    } else {
      const allTexts = samplePages.flatMap(page => 
        extractTextFromElements(page.elements)
      );
      startSpeaking(allTexts);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-screen-xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Interactive Page Elements
          </h1>
          <SpeechControls
            onUpdateOptions={updateOptions}
            onPlayAll={handlePlayAll}
            onStop={stop}
            isSpeaking={isSpeaking}
          />
        </header>
        
        <main>
          <PageViewer pages={samplePages} />
        </main>
      </div>
    </div>
  );
}

export default App;