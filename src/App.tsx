import React, { useState } from 'react';
import { PageViewer } from './components/PageViewer';
import { SpeechControls } from './components/SpeechControls';
import { samplePages } from './data/samplePages';
import { useSpeechQueue } from './hooks/useSpeechQueue';
import { extractTextFromElements } from './utils/textExtractor';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      const allTexts = samplePages.flatMap((page) =>
        extractTextFromElements(page.elements)
      );
      startSpeaking(allTexts);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Interactive Page Elements</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Open Speech Controls
          </button>
        </header>
      <div className="max-w-screen-xl mx-auto">
        {/* Topbar */}

        <main className="p-8">
          <PageViewer pages={samplePages} />
        </main>
      </div>

      {/* Modal for Speech Controls */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Speech Controls</h2>
            <SpeechControls
              onUpdateOptions={updateOptions}
              onPlayAll={handlePlayAll}
              onStop={stop}
              isSpeaking={isSpeaking}
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
