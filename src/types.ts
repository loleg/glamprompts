
export interface Prompt {
  id: string;
  category: string;
  question: string;
  prompt: string;
  contributor?: string;
  date: string;
}

export const CATEGORIES = [
  'Accessibility & Inclusion',
  'Digital Preservation & Sustainability',
  'Community Engagement & Participation',
  'Education & Learning',
  'Creativity & Reuse',
] as const;

export type Category = typeof CATEGORIES[number];
