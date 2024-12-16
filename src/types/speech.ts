export interface SpeechOptions {
  pitch: number;
  rate: number;
  voice: SpeechSynthesisVoice | null;
}

export interface Section {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  htmlContent?: string;
}