import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Brain, TrendingUp } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useApp } from '@/contexts/AppContext';
import { toast } from '@/components/ui/use-toast';

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const { quizzes, attempts, materials } = useApp();

  const userAttempts = attempts.filter(a => a.studentId === user?.id);
  const avgScore = userAttempts.length > 0 ? Math.round(userAttempts.reduce((sum, a) => sum + a.score, 0) / userAttempts.length) : 0;

  const takeQuiz = (quizId: string) => {
    toast({ title: 'Quiz Started', description: 'Good luck with your quiz!' });
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50 min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {user?.name}! 👋</h1>
        <p className="opacity-90">Ready to continue your learning journey?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quizzes Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{userAttempts.length}</div>
            <p className="text-xs text-muted-foreground">Keep learning!</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{avgScore}%</div>
            <p className="text-xs text-muted-foreground">Great progress!</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Materials Available</CardTitle>
            <Brain className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{materials.length}</div>
            <p className="text-xs text-muted-foreground">Study resources</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Available Quizzes
          </CardTitle>
          <CardDescription>Take quizzes to test your knowledge</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {quizzes.map((quiz) => {
              const attempt = userAttempts.find(a => a.quizId === quiz.id);
              return (
                <div key={quiz.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium">{quiz.title}</h4>
                    <p className="text-sm text-muted-foreground">{quiz.description}</p>
                    {attempt && (
                      <div className="flex items-center gap-2 mt-1">
                        <Progress value={attempt.score} className="w-32" />
                        <span className="text-sm text-muted-foreground">{attempt.score}%</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={quiz.difficulty === 'easy' ? 'default' : quiz.difficulty === 'medium' ? 'secondary' : 'destructive'}>
                      {quiz.difficulty}
                    </Badge>
                    <Button variant="outline" size="sm" onClick={() => takeQuiz(quiz.id)}>
                      {attempt ? 'Retake' : 'Take Quiz'}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Study Materials
          </CardTitle>
          <CardDescription>AI-recommended resources for your learning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((material) => (
              <div key={material.id} className="p-4 rounded-lg border bg-gradient-to-br from-white to-gray-50/50 hover:shadow-md transition-shadow">
                <h4 className="font-medium mb-2">{material.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{material.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {material.type}
                  </Badge>
                </div>
                <Button className="w-full" size="sm">
                  Study Now
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;