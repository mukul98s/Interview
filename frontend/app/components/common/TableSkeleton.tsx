import { Skeleton } from "@/components/ui/skeleton";

export function TableSkeleton() {
  return (
    <div className="space-y-4 max-w-screen-xl mx-auto overflow-hidden">
      <Skeleton className="w-full h-6" />
      <Skeleton className="w-full max-w-7xl h-6 ml-auto" />
      <Skeleton className="w-full max-w-6xl h-6 ml-auto" />
      <Skeleton className="w-full max-w-5xl h-6 ml-auto" />
      <Skeleton className="w-full h-6" />
      <Skeleton className="w-full max-w-7xl h-6 ml-auto" />
      <Skeleton className="w-full max-w-6xl h-6 ml-auto" />
      <Skeleton className="w-full max-w-5xl h-6 ml-auto" />
      <Skeleton className="w-full h-6" />
    </div>
  );
}
