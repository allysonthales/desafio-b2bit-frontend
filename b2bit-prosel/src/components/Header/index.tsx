import { removeToken } from "@/utils/token";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

export function Header() {
	const navigate = useNavigate();
	function handleClick() {
		removeToken("token");
		navigate("/");
	}
	return (
		<header className="flex justify-end  px-4 py-4">
			<Button className="w-60 h-10 font-semibold" onClick={handleClick}>
				Logout
			</Button>
		</header>
	);
}
