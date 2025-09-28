import { Dialog, DialogContent } from "../ui/dialog";
import { B2BitLoadingAnimation } from "./B2bitLoading";

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
				<B2BitLoadingAnimation label={label} className="flex flex-col" />
			</DialogContent>
		</Dialog>
	);
}
