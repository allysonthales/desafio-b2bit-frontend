import { Loader2 } from "lucide-react";
import { Dialog, DialogContent } from "../ui/dialog";

interface LoadingProps {
	open: boolean;
	label?: string;
}

export function Loading({ label, open }: LoadingProps) {
	return (
		<Dialog open={open}>
			<DialogContent
				className="flex items-center justify-center gap-2 w-80"
				aria-describedby={undefined}
			>
				<Loader2 className="h-8 w-8 animate-spin" />
				<span>{label}...</span>
			</DialogContent>
		</Dialog>
	);
}
