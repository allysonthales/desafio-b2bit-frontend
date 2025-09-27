import api from "../../api";

export async function getProfile() {
	const response = await api.get("/auth/profile/");
	return response.data;
}
