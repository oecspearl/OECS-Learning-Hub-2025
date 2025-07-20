"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Send,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "medium"
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Support
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Need help with the OECS Learning Hub? Our support team is here to assist you with any questions or issues you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Choose the best way to reach our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="text-sm text-gray-600">support@oecslearninghub.org</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Phone Support</h3>
                    <p className="text-sm text-gray-600">+1 (758) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-6 w-6 text-purple-500" />
                  <div>
                    <h3 className="font-semibold">Live Chat</h3>
                    <p className="text-sm text-gray-600">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-orange-500" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-red-500" />
                  <div>
                    <h3 className="font-semibold">Office Location</h3>
                    <p className="text-sm text-gray-600">OECS Secretariat</p>
                    <p className="text-sm text-gray-600">Saint Lucia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Help</CardTitle>
                <CardDescription>
                  Common questions and resources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/help" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Help Center</span>
                    <Badge variant="secondary">Comprehensive Guide</Badge>
                  </div>
                </Link>
                
                <Link href="/help#getting-started" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Getting Started</span>
                    <Badge variant="outline">New Users</Badge>
                  </div>
                </Link>
                
                <Link href="/help#troubleshooting" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Troubleshooting</span>
                    <Badge variant="outline">Common Issues</Badge>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          required
                          placeholder="Brief description of your issue"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="priority">Priority</Label>
                        <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - General Question</SelectItem>
                            <SelectItem value="medium">Medium - Feature Request</SelectItem>
                            <SelectItem value="high">High - Technical Issue</SelectItem>
                            <SelectItem value="urgent">Urgent - System Problem</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        placeholder="Please describe your question or issue in detail..."
                        rows={6}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-gray-600">
                        For urgent technical issues, please call our support line directly.
                      </span>
                    </div>

                    <Button type="submit" disabled={loading} className="w-full">
                      {loading ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="h-4 w-4" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 