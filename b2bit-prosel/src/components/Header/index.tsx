import { useNavigate } from "react-router";
import { removeToken } from "@/utils/token";
import { Button } from "../ui/button";

export function Header() {
	const navigate = useNavigate();
	function handleClick() {
		removeToken("token");
		navigate("/");
	}
	return (
		<header className="flex justify-end  px-4 py-4 bg-white">
			<Button
				className="w-20 h-10 font-semibold sm:w-40 md:w-60 cursor-pointer"
				onClick={handleClick}
			>
				Logout
			</Button>
		</header>
	);
}
