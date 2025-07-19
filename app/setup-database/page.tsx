"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { setupUsersTable } from "@/app/actions/setup-database"

export default function SetupDatabasePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleSetup = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const setupResult = await setupUsersTable()
      setResult(setupResult)
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : "Setup failed",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Database Setup</CardTitle>
          <CardDescription>Set up the users table and create test accounts for the OECS Learning Hub</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={handleSetup} disabled={isLoading} className="w-full">
            {isLoading ? "Setting up database..." : "Setup Users Table"}
          </Button>

          {result && (
            <div
              className={`p-4 rounded-lg ${result.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
            >
              {result.success ? (
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">✅ Setup Successful!</h3>
                  <p className="text-green-700 mb-2">{result.message}</p>
                  <p className="text-green-700 mb-2">Users created: {result.userCount}</p>

                  <div className="mt-4">
                    <h4 className="font-medium text-green-800 mb-2">Test Accounts:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-2 rounded border">
                        <strong>Administrator:</strong> admin@oecs.edu / admin123
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong>Teacher:</strong> teacher@oecs.edu / teacher123
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong>Curriculum Specialist:</strong> specialist@oecs.edu / specialist123
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong>Principal:</strong> principal@oecs.edu / principal123
                      </div>
                    </div>
                  </div>

                  {result.users && (
                    <div className="mt-4">
                      <h4 className="font-medium text-green-800 mb-2">Created Users:</h4>
                      <div className="bg-white p-2 rounded border text-sm">
                        <pre>{JSON.stringify(result.users, null, 2)}</pre>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">❌ Setup Failed</h3>
                  <p className="text-red-700">{result.error}</p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
