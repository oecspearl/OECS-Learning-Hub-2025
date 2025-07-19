import { Skeleton } from "@/components/ui/skeleton"

export default function ToolsLoading() {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <div className="text-center mb-12">
        <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-6 w-2/3 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex flex-col h-full border rounded-lg p-6">
              <div className="pb-4">
                <Skeleton className="w-12 h-12 rounded-lg mb-4" />
                <Skeleton className="h-8 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </div>
              <div className="flex-grow">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />

                <Skeleton className="h-4 w-5/6 mb-2" />
                <Skeleton className="h-4 w-5/6 mb-2" />
                <Skeleton className="h-4 w-5/6 mb-2" />
              </div>
              <div className="pt-4">
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
