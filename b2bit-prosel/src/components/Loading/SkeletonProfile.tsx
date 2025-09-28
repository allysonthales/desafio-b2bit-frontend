import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonProfile() {
	return (
		<Card className="max-w-2xl shadow-2xl py-10 w-full">
			<CardContent>
				<figure className="space-y-2 flex flex-col items-center justify-center mb-4">
					<figcaption className="text-xs">Profile picture</figcaption>
					<Skeleton className="rounded-md w-16 h-16" />
				</figure>
				<div className="flex flex-col items-start gap-4">
					<div className="w-full">
						<p className="text-xs text-muted-foreground mb-1 text-start">
							Your Name
						</p>
						<Skeleton className="h-10 w-full rounded-md" />
					</div>
					<div className="w-full">
						<p className="text-xs text-muted-foreground mb-1 text-start">
							Your E-mail
						</p>
						<Skeleton className="h-10 w-full rounded-md" />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
