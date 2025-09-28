import { Outlet } from "react-router";
import { Header } from "../Header";
import { PageWrapper } from "../PageWrapper";

export function ProfileLayout() {
	return (
		<div className="bg-background min-h-screen flex flex-col">
			<Header />
			<div className="flex flex-1 flex-col justify-center container mx-auto">
				<PageWrapper className="flex-1 flex items-center justify-center px-4">
					<Outlet />
				</PageWrapper>
			</div>
		</div>
	);
}
