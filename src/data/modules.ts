import type { Question } from './r1_questions';
import { r1Questions } from './r1_questions';
import { r2Questions } from './r2_questions';
import { r3Questions } from './r3_questions';
import { r4Questions } from './r4_questions';
import { r5Questions } from './r5_questions';
import { r6Questions } from './r6_questions';
import { r6Set2Questions } from './r6_set2_questions';

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
  },
  {
    id: 'R5',
    title: 'Business Law & Contracts',
    questions: r5Questions,
  },
  {
    id: 'R6',
    title: 'Business Structures & Bankruptcy',
    questions: r6Questions,
  },
  {
    id: 'R6-2',
    title: 'Business Structures & Bankruptcy (Set 2)',
    questions: r6Set2Questions,
  }
];
