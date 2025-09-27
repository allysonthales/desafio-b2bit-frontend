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

		const minLoading = new Promise((resolve) => setTimeout(resolve, 2000));

		try {
			const data = await login(email, password);
			await minLoading;
			setToken(data.tokens.access);
			setLoading(false);
			navigate("/profile");
		} catch (err: unknown) {
			await minLoading;
			if (err instanceof AxiosError && err.response?.status === 401) {
				setError("Usuário ou senha inválidos.");
			} else if (err instanceof AxiosError) {
				setError(
					err.response?.data?.message || err.message || "Erro desconhecido",
				);
			} else {
				setError("Erro desconhecido");
			}
			setLoading(false);
		}
	}

	return { handleLogin, error, loading };
}
