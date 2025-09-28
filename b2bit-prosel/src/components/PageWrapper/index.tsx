import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PageWrapperProps {
	children: ReactNode;
	className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
	return (
		<main
			className={cn(
				"max-w-7xl flex flex-col items-center justify-center min-h-svh",
				className,
			)}
		>
			{children}
		</main>
	);
}
