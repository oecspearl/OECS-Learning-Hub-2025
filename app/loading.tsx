import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section Skeleton */}
      <section className="py-12 md:py-20 text-center">
        <Skeleton className="h-16 w-3/4 max-w-2xl mx-auto mb-6" />
        <Skeleton className="h-8 w-full max-w-xl mx-auto mb-4" />
        <Skeleton className="h-8 w-full max-w-xl mx-auto mb-8" />
        <div className="flex flex-wrap justify-center gap-4">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-12 w-40" />
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="py-12">
        <Skeleton className="h-10 w-64 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-xl" />
            ))}
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <Skeleton className="h-64 w-full rounded-xl my-12" />

      {/* About OECS Section Skeleton */}
      <section className="py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Skeleton className="h-10 w-3/4 mb-4" />
            <Skeleton className="h-24 w-full mb-4" />
            <Skeleton className="h-10 w-40" />
          </div>
          <Skeleton className="h-80 w-full rounded-xl" />
        </div>
      </section>
    </div>
  )
}
