import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCarrucel() {
  return (
    <div className="p-[20px]">
        <div className="flex flex-col space-y-3">
      <Skeleton className="h-[400px] w-full rounded-xl" />
    </div>
    </div>
  )
}
