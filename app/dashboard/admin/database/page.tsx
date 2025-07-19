"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Database, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DatabaseInfoPage() {
  const [dbInfo, setDbInfo] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchDatabaseInfo = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/db-info")

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const data = await response.json()
      setDbInfo(data)
    } catch (error) {
      console.error("Error fetching database info:", error)
      setError("Failed to fetch database information")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDatabaseInfo()
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Database Information</h1>
          <Button onClick={fetchDatabaseInfo} className="flex items-center gap-1" disabled={loading}>
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
        <p className="text-muted-foreground">View information about your database tables and structure.</p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center gap-2">
            <Database className="h-8 w-8 animate-pulse" />
            <p>Loading database information...</p>
          </div>
        </div>
      ) : (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Database Tables</CardTitle>
            </CardHeader>
            <CardContent>
              {dbInfo?.tables && dbInfo.tables.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Table Name</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dbInfo.tables.map((table: any, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{table.table_name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-muted-foreground">No tables found in the database.</p>
              )}
            </CardContent>
          </Card>

          {dbInfo?.userColumns && dbInfo.userColumns.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>User Table Columns</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Column Name</TableHead>
                      <TableHead>Data Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dbInfo.userColumns.map((column: any, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{column.column_name}</TableCell>
                        <TableCell>{column.data_type}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  )
}
