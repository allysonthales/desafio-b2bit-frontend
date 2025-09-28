import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonLogin() {
	return (
		<div className="space-y-2 mx-auto *:mx-auto">
			<Skeleton className="h-4 w-[250px]" />
			<Skeleton className="h-4 w-[200px]" />
		</div>
	);
}
