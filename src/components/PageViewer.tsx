import React, { useState, useEffect } from 'react';
import { Page as PageType } from '../types/elements';
import { Page } from './Page';
import { PageNavigation } from './PageNavigation';
import { useSpeechQueue } from '../hooks/useSpeechQueue';
import { extractTextFromElements } from '../utils/textExtractor';

interface PageViewerProps {
  pages: PageType[];
}

export function PageViewer({ pages }: PageViewerProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const { startSpeaking, isSpeaking, stop } = useSpeechQueue();

  const handlePageChange = (newIndex: number) => {
    setCurrentPageIndex(newIndex);
    if (isSpeaking) {
      const texts = extractTextFromElements(pages[newIndex].elements);
      startSpeaking(texts);
    }
  };

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return (
    <div className="flex flex-col gap-4">
      <Page page={pages[currentPageIndex]} />
      <PageNavigation
        currentPage={currentPageIndex}
        totalPages={pages.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
}