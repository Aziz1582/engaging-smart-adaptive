export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'admin';
  avatar?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit?: number;
  createdAt: Date;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation?: string;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  studentId: string;
  answers: Record<string, any>;
  score: number;
  feedback: string;
  completedAt: Date;
}

export interface RevisionMaterial {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'link';
  url: string;
  description: string;
  tags: string[];
  uploadedAt: Date;
}