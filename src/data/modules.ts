import type { Question } from './r1_questions';
import { r1Questions } from './r1_questions';
import { r2Questions } from './r2_questions';
import { r3Questions } from './r3_questions';
import { r4Questions } from './r4_questions';

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
  },
  {
    id: 'R3',
    title: 'Entity Taxation',
    questions: r3Questions,
  },
  {
    id: 'R4',
    title: 'Professional Responsibilities & Tax Procedures',
    questions: r4Questions,
  }
];
