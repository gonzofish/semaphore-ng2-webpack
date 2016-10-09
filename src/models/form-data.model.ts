import { Question } from './question.model';

export interface FormData {
    id: number;
    questions: Array<Question>;
    title: string;
}