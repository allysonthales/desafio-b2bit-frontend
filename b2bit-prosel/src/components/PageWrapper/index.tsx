import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageWrapperProps {
	children: ReactNode;
	className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
	return (
		<main
			className={cn(
				" flex flex-col items-center justify-center flex-1",
				className,
			)}
		>
			{children}
		</main>
	);
}
