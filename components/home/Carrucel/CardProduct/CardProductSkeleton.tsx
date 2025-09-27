import { Skeleton } from "@/components/ui/skeleton";

export function CardProductSkeleton() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-1">
      {/* 3 skeletons visibles en mobile */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="flex flex-col space-y-3 h-[340px] border-gray"
        >
          <Skeleton className="h-[45px] md:h-[20px] rounded-xl" />
          <Skeleton className="py-[24px] h-[150px]" />
          <Skeleton className="h-[20px]" />
        </div>
      ))}

      {/* 4to solo visible en md+ */}
      <div className="hidden md:flex flex-col space-y-3 h-[340px] border-gray">
        <Skeleton className="h-[45px] md:h-[20px] rounded-xl" />
        <Skeleton className="py-[24px] h-[150px]" />
        <Skeleton className="h-[20px]" />
      </div>

      {/* 5to solo visible en lg+ */}
      <div className="hidden lg:flex flex-col space-y-3 h-[340px] border-gray">
        <Skeleton className="h-[45px] md:h-[20px] rounded-xl" />
        <Skeleton className="py-[24px] h-[150px]" />
        <Skeleton className="h-[20px]" />
      </div>
    </div>
  );
}
