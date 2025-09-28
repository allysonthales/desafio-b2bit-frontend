import { useNavigate } from "react-router";
import { removeToken } from "@/utils/token";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

export function Header() {
	const navigate = useNavigate();
	function handleClick() {
		removeToken("token");
		navigate("/");
	}
	return (
		<header className="flex justify-end items-center gap-2 px-4 py-4 bg-card">
			<Button
				className="w-20 h-10 font-semibold sm:w-40 md:w-60 cursor-pointer"
				onClick={handleClick}
			>
				Logout
			</Button>
			<ModeToggle />
		</header>
	);
}
