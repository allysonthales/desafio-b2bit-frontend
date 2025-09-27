import type { LoginResponse } from "@/types/auth";
import api from "./api";

export async function login(
	email: string,
	password: string,
): Promise<LoginResponse> {
	const response = await api.post<LoginResponse>("auth/login/", {
		email,
		password,
	});
	return response.data;
}

export function setToken(token: string) {
	localStorage.setItem("token", token);
}

export function removeToken(token: string) {
	localStorage.removeItem(token);
}
