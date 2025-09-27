import { getToken } from "@/utils/token";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Profile() {
	const navigate = useNavigate();
	useEffect(() => {
		const token = getToken('token');
		if (!token) {
			navigate("/");
		}
	});
	return <h1>Hello profile carai</h1>;
}
