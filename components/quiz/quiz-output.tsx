"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/contexts/AuthContext"
import { CheckCircle, XCircle, Clock, Users, FileText } from "lucide-react"

interface QuizOutputProps {
  quiz: {
    id: string
    title: string
    description: string
    subject: string
    grade: string
    questions: Array<{
      id: string
      question: string
      options: string[]
      correctAnswer: string
    }>
    timeLimit: number
    passingScore: number
    created_at: string
  }
}

export function QuizOutput({ quiz }: QuizOutputProps) {
  const { user } = useAuth()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(quiz.timeLimit * 60)

  const currentQuestion = quiz.questions[currentQuestionIndex]
  const totalQuestions = quiz.questions.length
  const answeredQuestions = Object.keys(selectedAnswers).length

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const calculateScore = () => {
    let correct = 0
    quiz.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++
      }
    })
    return Math.round((correct / totalQuestions) * 100)
  }

  const score = calculateScore()
  const passed = score >= quiz.passingScore

  if (showResults) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Quiz Results</CardTitle>
          <CardDescription>Your performance summary</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className={`text-6xl mb-4 ${passed ? 'text-green-500' : 'text-red-500'}`}>
              {passed ? <CheckCircle /> : <XCircle />}
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {passed ? 'Congratulations!' : 'Keep Trying!'}
            </h2>
            <p className="text-gray-600 mb-4">
              You scored {score}% ({Math.round((score / 100) * totalQuestions)} out of {totalQuestions} questions)
            </p>
            <Badge variant={passed ? "default" : "destructive"} className="text-lg px-4 py-2">
              {passed ? 'PASSED' : 'FAILED'}
            </Badge>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Question Review</h3>
            {quiz.questions.map((question, index) => {
              const userAnswer = selectedAnswers[question.id]
              const isCorrect = userAnswer === question.correctAnswer
              
              return (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start space-x-2 mb-3">
                    <span className="font-medium">Q{index + 1}:</span>
                    <span>{question.question}</span>
                  </div>
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className={`p-2 rounded ${
                          option === question.correctAnswer
                            ? 'bg-green-100 border-green-300'
                            : option === userAnswer && !isCorrect
                            ? 'bg-red-100 border-red-300'
                            : 'bg-gray-50'
                        }`}
                      >
                        {option}
                        {option === question.correctAnswer && (
                          <CheckCircle className="inline ml-2 h-4 w-4 text-green-600" />
                        )}
                        {option === userAnswer && !isCorrect && (
                          <XCircle className="inline ml-2 h-4 w-4 text-red-600" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex justify-center space-x-4">
            <Button variant="outline" onClick={() => window.location.reload()}>
              Retake Quiz
            </Button>
            <Button asChild>
              <a href="/dashboard">Back to Dashboard</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">{quiz.title}</CardTitle>
            <CardDescription>{quiz.description}</CardDescription>
          </div>
          <div className="text-right">
            <Badge variant="outline" className="mb-2">
              {quiz.subject} - Grade {quiz.grade}
            </Badge>
            <div className="text-sm text-gray-600">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{answeredQuestions}/{totalQuestions} answered</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <FileText className="h-4 w-4" />
            <span>{quiz.passingScore}% to pass</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            Question {currentQuestionIndex + 1}
          </h3>
          <p className="text-gray-700">{currentQuestion.question}</p>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswers[currentQuestion.id] === option ? "default" : "outline"}
                className="w-full justify-start h-auto p-4 text-left"
                onClick={() => handleAnswerSelect(currentQuestion.id, option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>

          {currentQuestionIndex === totalQuestions - 1 ? (
            <Button onClick={handleSubmit} disabled={answeredQuestions < totalQuestions}>
              Submit Quiz
            </Button>
          ) : (
            <Button onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
