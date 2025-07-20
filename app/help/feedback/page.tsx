"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { 
  MessageSquare, 
  Lightbulb, 
  Bug, 
  Star, 
  Send,
  CheckCircle,
  ThumbsUp,
  AlertCircle
} from "lucide-react"
import Link from "next/link"

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    type: "suggestion",
    title: "",
    description: "",
    category: "",
    priority: "medium",
    allowContact: false,
    email: ""
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitted(true)
    setLoading(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const feedbackTypes = [
    {
      id: "suggestion",
      title: "Feature Suggestion",
      description: "Suggest a new feature or improvement",
      icon: Lightbulb,
      color: "text-blue-500"
    },
    {
      id: "bug",
      title: "Bug Report",
      description: "Report a problem or issue",
      icon: Bug,
      color: "text-red-500"
    },
    {
      id: "praise",
      title: "Praise & Feedback",
      description: "Share positive feedback",
      icon: Star,
      color: "text-yellow-500"
    }
  ]

  const categories = [
    "User Interface",
    "Curriculum Content",
    "Lesson Planning",
    "Assessment Tools",
    "Parent Features",
    "Admin Features",
    "Performance",
    "Mobile Experience",
    "Other"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Send Feedback
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help us improve the OECS Learning Hub by sharing your thoughts, suggestions, and experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <Card>
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">
                  Your feedback has been submitted successfully. We appreciate your input and will review it carefully.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button onClick={() => setSubmitted(false)}>
                    Send More Feedback
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/help">
                      Back to Help
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Feedback Types */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Feedback Types</CardTitle>
                    <CardDescription>
                      Choose the type of feedback you'd like to send
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {feedbackTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                          formData.type === type.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => handleInputChange("type", type.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <type.icon className={`h-6 w-6 ${type.color}`} />
                          <div>
                            <h3 className="font-semibold">{type.title}</h3>
                            <p className="text-sm text-gray-600">{type.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Tips */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Tips for Great Feedback</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <ThumbsUp className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Be specific about what you're suggesting or reporting</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <ThumbsUp className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Include steps to reproduce if reporting a bug</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <ThumbsUp className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Explain how your suggestion would benefit users</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <ThumbsUp className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Provide context about your use case</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Feedback Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Feedback</CardTitle>
                    <CardDescription>
                      Please provide detailed information to help us understand your feedback
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => handleInputChange("title", e.target.value)}
                          required
                          placeholder="Brief summary of your feedback"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="priority">Priority</Label>
                          <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="critical">Critical</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="description">Detailed Description *</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => handleInputChange("description", e.target.value)}
                          required
                          placeholder="Please provide a detailed description of your feedback, including any relevant context, steps to reproduce issues, or specific suggestions for improvements..."
                          rows={8}
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="allowContact"
                            checked={formData.allowContact}
                            onCheckedChange={(checked) => handleInputChange("allowContact", checked as boolean)}
                          />
                          <Label htmlFor="allowContact">
                            Allow us to contact you for follow-up questions
                          </Label>
                        </div>
                        
                        {formData.allowContact && (
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              placeholder="Enter your email address"
                            />
                          </div>
                        )}
                      </div>

                      <div className="flex items-center space-x-2 p-4 bg-blue-50 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-blue-500" />
                        <span className="text-sm text-blue-700">
                          Your feedback helps us improve the platform for all users. We review all submissions and respond to those that require follow-up.
                        </span>
                      </div>

                      <Button type="submit" disabled={loading} className="w-full">
                        {loading ? (
                          <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            <span>Submitting...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send className="h-4 w-4" />
                            <span>Submit Feedback</span>
                          </div>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 