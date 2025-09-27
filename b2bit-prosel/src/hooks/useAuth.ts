import { useState } from "react";
import { login, setToken } from "@/api/auth";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";

export function useAuth() {
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	async function handleLogin(email: string, password: string) {
		setError(null);
		setLoading(true);

		const minLoading = new Promise((resolve) => setTimeout(resolve, 3000));
		const apiRequest = login(email, password);

		try {
			const [data] = await Promise.all([apiRequest, minLoading]);
			setToken(data.tokens.access);
			navigate("/profile");
		} catch (err: unknown) {
			if (err instanceof AxiosError) {
				if (err.response?.status === 401) {
					setError("Usuário ou senha inválidos.");
				} else {
					setError(
						err.response?.data?.message || err.message || "Erro desconhecido",
					);
				}
			} else {
				setError("Erro desconhecido");
			}
		} finally {
			setLoading(false);
		}
	}

	return { handleLogin, error, loading, setLoading };
}
