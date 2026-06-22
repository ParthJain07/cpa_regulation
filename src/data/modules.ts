import type { Question } from './r1_questions';
import { r1Questions } from './r1_questions';
import { r2Questions } from './r2_questions';

export interface Module {
  id: string;
  title: string;
  questions: Question[];
}

export const modules: Module[] = [
  {
    id: 'R1',
    title: 'Federal Taxation of Individuals',
    questions: r1Questions,
  },
  {
    id: 'R2',
    title: 'Property Taxation',
    questions: r2Questions,
  }
];
