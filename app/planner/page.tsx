"use client"

import { PlannerForm } from "@/components/planner-form"
import { PlannerOutput } from "@/components/planners/planner-output"
import { PlannerChat } from "@/components/planner-chat"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, MessageSquare, FileText, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PlannerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl shadow-md mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600">
                  AI Lesson Planner
                </h1>
                <p className="text-gray-600 text-lg">
                  Create customized lesson plans with AI assistance
                </p>
              </div>
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="hover:bg-white/80 transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Tabs defaultValue="form" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-gradient-to-r from-orange-50 to-yellow-50 p-1 rounded-xl shadow-sm">
                <TabsTrigger 
                  value="form" 
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm rounded-lg transition-all duration-200 hover:bg-white/50"
                >
                  <Sparkles className="h-4 w-4" />
                  AI Generator
                </TabsTrigger>
                <TabsTrigger 
                  value="chat" 
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm rounded-lg transition-all duration-200 hover:bg-white/50"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat with Pearl
                </TabsTrigger>
              </TabsList>

              <TabsContent value="form" className="mt-0">
                <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-orange-100">
                  <PlannerForm />
                </Card>
              </TabsContent>

              <TabsContent value="chat" className="mt-0">
                <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-orange-100">
                  <PlannerChat />
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-t-4 border-t-orange-500 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <FileText className="h-5 w-5" />
                  Generated Lesson Plan
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Your AI-generated lesson plan will appear here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PlannerOutput />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
