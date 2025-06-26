import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, BookOpen, BarChart3, Plus, Brain } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [newQuiz, setNewQuiz] = useState({ title: '', description: '', difficulty: 'medium' });
  const [aiPrompt, setAiPrompt] = useState('');

  const students = [
    { id: '2', name: 'John Doe', email: 'student1@school.com', avgScore: 85, quizzesTaken: 12 },
    { id: '3', name: 'Jane Smith', email: 'student2@school.com', avgScore: 92, quizzesTaken: 15 },
    { id: '4', name: 'Mike Johnson', email: 'student3@school.com', avgScore: 78, quizzesTaken: 8 },
  ];

  const recentQuizzes = [
    { id: '1', title: 'Mathematics Quiz 1', students: 8, avgScore: 85, created: '2024-01-15' },
    { id: '2', title: 'Science Test', students: 10, avgScore: 88, created: '2024-01-12' },
    { id: '3', title: 'History Quiz', students: 6, avgScore: 82, created: '2024-01-10' },
  ];

  const handleCreateQuiz = () => {
    if (!newQuiz.title.trim()) {
      toast({ title: 'Error', description: 'Please enter a quiz title', variant: 'destructive' });
      return;
    }
    toast({ title: 'Success', description: `Quiz "${newQuiz.title}" created successfully!` });
    setNewQuiz({ title: '', description: '', difficulty: 'medium' });
  };

  const handleAiGenerate = () => {
    if (!aiPrompt.trim()) {
      toast({ title: 'Error', description: 'Please enter a prompt for AI generation', variant: 'destructive' });
      return;
    }
    toast({ title: 'AI Generated', description: 'Quiz questions generated! Review and edit as needed.' });
    setAiPrompt('');
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-indigo-50/50 to-cyan-50/50 min-h-screen">
      <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Administrator Dashboard 🎓</h1>
        <p className="opacity-90">Manage students, create content, and track progress</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-indigo-600">{students.length}</div>
            <p className="text-xs text-muted-foreground">Active learners</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quizzes Created</CardTitle>
            <BookOpen className="h-4 w-4 text-cyan-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-600">{recentQuizzes.length}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Class Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">85%</div>
            <p className="text-xs text-muted-foreground">+3% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Insights</CardTitle>
            <Brain className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">12</div>
            <p className="text-xs text-muted-foreground">Generated this week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="students" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
          <TabsTrigger value="create">Create Content</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="students">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-indigo-600" />
                Student Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {students.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50/50">
                    <div className="flex-1">
                      <h4 className="font-medium">{student.name}</h4>
                      <p className="text-sm text-muted-foreground">{student.email}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-green-600">{student.avgScore}%</div>
                        <div className="text-xs text-muted-foreground">Avg Score</div>
                      </div>
                      <Button variant="outline" size="sm">View Profile</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-cyan-600" />
                Create New Quiz
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quiz-title">Quiz Title</Label>
                <Input
                  id="quiz-title"
                  placeholder="Enter quiz title"
                  value={newQuiz.title}
                  onChange={(e) => setNewQuiz(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label>Difficulty Level</Label>
                <Select value={newQuiz.difficulty} onValueChange={(value) => setNewQuiz(prev => ({ ...prev, difficulty: value }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleCreateQuiz} className="w-full">
                Create Quiz
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quizzes">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Quiz Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentQuizzes.map((quiz) => (
                  <div key={quiz.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50/50">
                    <div className="flex-1">
                      <h4 className="font-medium">{quiz.title}</h4>
                      <p className="text-sm text-muted-foreground">Created: {quiz.created}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">{quiz.students} students</Badge>
                      <Badge variant="secondary">{quiz.avgScore}% avg</Badge>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-green-600" />
                AI-Powered Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">📊 Performance Insights</h4>
                  <p className="text-blue-700">Your class shows strong performance in Science (92% avg) but may need additional support in Mathematics (78% avg).</p>
                </div>
                <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">⚠️ Students Needing Support</h4>
                  <p className="text-amber-700">Mike Johnson has completed fewer quizzes than average. Consider reaching out to provide additional support.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;