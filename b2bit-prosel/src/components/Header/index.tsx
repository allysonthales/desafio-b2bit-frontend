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
			<Button className="w-60 h-10 font-semibold" onClick={handleClick}>
				Logout
			</Button>
		</header>
	);
}
