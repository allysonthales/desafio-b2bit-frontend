import { useState } from "react";
import { login } from "@/api/auth/api/auth";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import { setToken } from "@/utils/token";
import { loadingTime } from "@/utils/minLoading";

export function useAuth() {
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();
	const [loadingAuth, setLoadingAuth] = useState(false);

	async function handleLogin(email: string, password: string) {
		setError(null);
		setLoadingAuth(true);

		const minLoading = loadingTime;

		try {
			const data = await login(email, password);
			await minLoading;
			setToken("token", data.tokens.access);
			setLoadingAuth(false);
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
			setLoadingAuth(false);
		}
	}

	return { handleLogin, error, loadingAuth, setLoadingAuth };
}
