import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ResourcesPageProps {
  resources: {
    title: string
    items: string[]
  }[]
}

export function ResourcesPage({ resources }: ResourcesPageProps) {
  return (
    <Card className="border-blue-100 shadow-md">
      <CardHeader className="bg-blue-50 border-b border-blue-100">
        <CardTitle className="text-blue-700">Resources</CardTitle>
      </CardHeader>
      <CardContent>
        {resources.map((resource, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold mb-2">{resource.title}:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {resource.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
