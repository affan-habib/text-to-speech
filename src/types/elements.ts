export interface BaseElement {
  id: string;
  type: 'text' | 'mcq' | 'image' | 'video';
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface TextElement extends BaseElement {
  type: 'text';
  htmlContent: string;
}

export interface MCQElement extends BaseElement {
  type: 'mcq';
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
}

export interface ImageElement extends BaseElement {
  type: 'image';
  url: string;
  alt: string;
  caption?: string;
}

export interface VideoElement extends BaseElement {
  type: 'video';
  url: string;
  title: string;
  description?: string;
}

export type PageElement = TextElement | MCQElement | ImageElement | VideoElement;

export interface Page {
  id: string;
  elements: PageElement[];
  width: number;
  height: number;
  title: string;
}