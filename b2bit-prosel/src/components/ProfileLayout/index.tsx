import { Outlet } from "react-router";
import { Header } from "../Header";
import { PageWrapper } from "../PageWrapper";

export function ProfileLayout() {
	return (
		// 1. Este é o container flex principal
		<div className="bg-[#F1F5F9]">
			<Header />
			<div className="flex min-h-svh flex-col container mx-auto">
				{/* 2. O PageWrapper agora envolve o <Outlet /> */}
				<PageWrapper className="bg-[#F1F5F9]">
					{/* O Outlet renderiza o componente da rota filha (ex: <Profile />) */}
					<Outlet />
				</PageWrapper>
			</div>
		</div>
	);
}
