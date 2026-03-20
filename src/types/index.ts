export type UserRole = "admin" | "student";
export type LessonStatus = "locked" | "in_progress" | "completed";
export type TierType = "starter" | "academy" | "one_to_one";
export type QuestionType = "mcq" | "true_false";

export interface QuizQuestionData {
  id: string;
  type: QuestionType;
  question: string;
  options: string[];
  order: number;
}

export interface QuizQuestionWithAnswer extends QuizQuestionData {
  correctAnswer: string;
  explanation?: string;
}

export interface QuizResult {
  score: number;
  passed: boolean;
  total: number;
  correct: number;
  questions: Array<{
    question: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    explanation?: string;
  }>;
}
