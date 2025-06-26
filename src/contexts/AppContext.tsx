import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Quiz, QuizAttempt, RevisionMaterial, User } from '@/types';

interface AppContextType {
  quizzes: Quiz[];
  attempts: QuizAttempt[];
  materials: RevisionMaterial[];
  students: User[];
  addQuiz: (quiz: Omit<Quiz, 'id' | 'createdAt'>) => void;
  submitQuizAttempt: (attempt: Omit<QuizAttempt, 'id' | 'completedAt'>) => void;
  addMaterial: (material: Omit<RevisionMaterial, 'id' | 'uploadedAt'>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Mock data
const mockQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Mathematics Quiz 1',
    description: 'Basic algebra and geometry',
    difficulty: 'medium',
    timeLimit: 30,
    createdAt: new Date('2024-01-15'),
    questions: [
      {
        id: '1',
        type: 'multiple-choice',
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 1,
        explanation: '2 + 2 equals 4'
      }
    ]
  }
];

const mockAttempts: QuizAttempt[] = [
  {
    id: '1',
    quizId: '1',
    studentId: '2',
    answers: { '1': 1 },
    score: 100,
    feedback: 'Excellent work!',
    completedAt: new Date()
  }
];

const mockMaterials: RevisionMaterial[] = [
  {
    id: '1',
    title: 'Algebra Fundamentals',
    type: 'pdf',
    url: '#',
    description: 'Basic algebra concepts',
    tags: ['math', 'algebra'],
    uploadedAt: new Date()
  }
];

const mockStudents: User[] = [
  { id: '2', email: 'student1@school.com', name: 'John Doe', role: 'student' },
  { id: '3', email: 'student2@school.com', name: 'Jane Smith', role: 'student' }
];

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quizzes, setQuizzes] = useState<Quiz[]>(mockQuizzes);
  const [attempts, setAttempts] = useState<QuizAttempt[]>(mockAttempts);
  const [materials, setMaterials] = useState<RevisionMaterial[]>(mockMaterials);
  const [students] = useState<User[]>(mockStudents);

  const addQuiz = (quiz: Omit<Quiz, 'id' | 'createdAt'>) => {
    const newQuiz: Quiz = {
      ...quiz,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    setQuizzes(prev => [...prev, newQuiz]);
  };

  const submitQuizAttempt = (attempt: Omit<QuizAttempt, 'id' | 'completedAt'>) => {
    const newAttempt: QuizAttempt = {
      ...attempt,
      id: Date.now().toString(),
      completedAt: new Date()
    };
    setAttempts(prev => [...prev, newAttempt]);
  };

  const addMaterial = (material: Omit<RevisionMaterial, 'id' | 'uploadedAt'>) => {
    const newMaterial: RevisionMaterial = {
      ...material,
      id: Date.now().toString(),
      uploadedAt: new Date()
    };
    setMaterials(prev => [...prev, newMaterial]);
  };

  return (
    <AppContext.Provider value={{
      quizzes,
      attempts,
      materials,
      students,
      addQuiz,
      submitQuizAttempt,
      addMaterial
    }}>
      {children}
    </AppContext.Provider>
  );
};