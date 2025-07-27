import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonDocs({className}) {
  return (
    <div className="p-6 pl-1 md:pl-20 mt-20 max-w-4xl px-4 space-y-3">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-6 w-[250px]" />
        <Skeleton className="h-8 w-[200px]" />
      </div>
      <Skeleton className="h-[600px] w-full rounded-xl" />
    </div>
  )
}
