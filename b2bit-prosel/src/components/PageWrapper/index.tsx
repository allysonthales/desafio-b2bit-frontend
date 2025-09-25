import type { ReactNode } from "react";

interface PageWrapperProps {
	children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
	return (
		<main className="max-w-7xl mx-auto flex items-center justify-center min-h-screen">
			{children}
		</main>
	);
}
