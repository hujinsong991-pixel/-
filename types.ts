
export enum Option {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D'
}

export type Language = 'zh' | 'en' | 'ja';

export interface LocalizedString {
  zh: string;
  en: string;
  ja: string;
}

export interface Question {
  id: number;
  text: LocalizedString;
  options: {
    [key in Option]: LocalizedString;
  };
  scores: {
    [key in Option]: { x: number; y: number };
  };
}

export interface HistoricalContext {
  pros: LocalizedString[];
  cons: LocalizedString[];
}

export interface ResultProfile {
  name: LocalizedString;
  title: LocalizedString;
  philosopher: LocalizedString;
  philosopherImg: string;
  animal: 'lion' | 'serpent' | 'owl' | 'eagle';
  message: LocalizedString;
  description: LocalizedString;
  history: HistoricalContext;
  color: string;
}

export interface Quote {
  text: LocalizedString;
  author: string;
}
