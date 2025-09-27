import { useEffect } from "react";
import { useGetProfile } from "@/hooks/useGetProfile";
import { useNavigate } from "react-router";
import { getToken } from "@/utils/token";

export default function Profile() {
	const token = getToken("token");
	const { profile, error, handleGetProfile } = useGetProfile();
	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			handleGetProfile();
		} else {
			navigate("/");
		}
	}, [token, navigate, handleGetProfile]);
	return <h1>Hello profile carai</h1>;
}
