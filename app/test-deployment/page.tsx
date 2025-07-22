"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'

export default function TestDeploymentPage() {
  const [testResults, setTestResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const runTests = async () => {
    setLoading(true)
    setTestResults(null)

    try {
      // Test 1: Environment variables
      const envTest = {
        hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY
      }

      // Test 2: Database connection
      const dbResponse = await fetch('/api/test-production')
      const dbTest = await dbResponse.json()

      // Test 3: Authentication
      const authResponse = await fetch('/api/check-env')
      const authTest = await authResponse.json()

      setTestResults({
        environment: envTest,
        database: dbTest,
        authentication: authTest,
        timestamp: new Date().toISOString()
      })
    } catch (error) {
      setTestResults({
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    runTests()
  }, [])

  const getStatusIcon = (success: boolean) => {
    return success ? (
      <CheckCircle className="h-5 w-5 text-green-500" />
    ) : (
      <XCircle className="h-5 w-5 text-red-500" />
    )
  }

  const getStatusText = (success: boolean) => {
    return success ? 'Working' : 'Failed'
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Deployment Test Results
          </h1>
          <p className="text-gray-600">
            Testing production deployment functionality
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <Button 
            onClick={runTests} 
            disabled={loading}
            className="flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Running Tests...
              </>
            ) : (
              'Run Tests Again'
            )}
          </Button>
        </div>

        {testResults && (
          <div className="grid gap-6">
            {/* Environment Variables Test */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getStatusIcon(testResults.environment?.hasUrl && testResults.environment?.hasAnonKey && testResults.environment?.hasServiceKey)}
                  Environment Variables
                </CardTitle>
                <CardDescription>
                  Checking if all required environment variables are set
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Supabase URL:</span>
                    <span className={testResults.environment?.hasUrl ? 'text-green-600' : 'text-red-600'}>
                      {getStatusText(testResults.environment?.hasUrl)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Anon Key:</span>
                    <span className={testResults.environment?.hasAnonKey ? 'text-green-600' : 'text-red-600'}>
                      {getStatusText(testResults.environment?.hasAnonKey)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Service Key:</span>
                    <span className={testResults.environment?.hasServiceKey ? 'text-green-600' : 'text-red-600'}>
                      {getStatusText(testResults.environment?.hasServiceKey)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Database Connection Test */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getStatusIcon(testResults.database?.success)}
                  Database Connection
                </CardTitle>
                <CardDescription>
                  Testing connection to Supabase database
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Status:</span>
                    <span className={testResults.database?.success ? 'text-green-600' : 'text-red-600'}>
                      {getStatusText(testResults.database?.success)}
                    </span>
                  </div>
                  {testResults.database?.details && (
                    <div className="text-sm text-gray-600">
                      <p>Message: {testResults.database.details.message}</p>
                      {testResults.database.details.lessonPlansCount !== undefined && (
                        <p>Lesson Plans: {testResults.database.details.lessonPlansCount}</p>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Authentication Test */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getStatusIcon(testResults.authentication?.success)}
                  Authentication System
                </CardTitle>
                <CardDescription>
                  Testing authentication functionality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Status:</span>
                    <span className={testResults.authentication?.success ? 'text-green-600' : 'text-red-600'}>
                      {getStatusText(testResults.authentication?.success)}
                    </span>
                  </div>
                  {testResults.authentication?.message && (
                    <div className="text-sm text-gray-600">
                      {testResults.authentication.message}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Error Display */}
            {testResults.error && (
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertDescription>
                  Test Error: {testResults.error}
                </AlertDescription>
              </Alert>
            )}

            {/* Timestamp */}
            <div className="text-center text-sm text-gray-500">
              Last tested: {new Date(testResults.timestamp).toLocaleString()}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 