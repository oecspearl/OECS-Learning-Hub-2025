import { Skeleton } from "@/components/ui/skeleton"

export default function AboutLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-12 w-64 mb-8" />

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-48 w-full rounded-xl" />
          ))}
      </div>

      <Skeleton className="h-12 w-64 mb-6" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-16 w-full rounded-xl" />
          ))}
      </div>

      <Skeleton className="h-12 w-64 mb-6" />
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-64 w-full rounded-xl" />
          ))}
      </div>

      <Skeleton className="h-64 w-full rounded-xl mb-12" />
    </div>
  )
}
