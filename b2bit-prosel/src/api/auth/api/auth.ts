import type { LoginResponse } from "@/api/auth/domain/types";
import api from "../../api";

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
