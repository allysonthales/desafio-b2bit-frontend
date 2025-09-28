import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "@/api/auth/api/auth";
import { loadingTime } from "@/utils/minLoading";
import { setToken } from "@/utils/token";

export function useAuth() {
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();
	const [loadingAuth, setLoadingAuth] = useState(false);

	async function handleLogin(email: string, password: string) {
		setError(null);
		setLoadingAuth(true);

		try {
			const [loginResult] = await Promise.allSettled([
				login(email, password),
				loadingTime(),
			]);

			if (loginResult.status === "fulfilled") {
				const data = loginResult.value;
				setToken("token", data.tokens.access);
				navigate("/profile");
			} else {
				const err = loginResult.reason;
				if (err instanceof AxiosError && err.response?.status === 401) {
					setError("Usuário ou senha inválidos.");
				} else if (err instanceof AxiosError) {
					setError(
						err.response?.data?.message || err.message || "Erro desconhecido",
					);
				} else {
					setError("Erro desconhecido");
				}
			}
		} catch (err: unknown) {
			console.error("Um erro inesperado ocorreu:", err);
			setError("Ocorreu um erro inesperado. Tente novamente.");
		} finally {
			setLoadingAuth(false);
		}
	}

	return { handleLogin, error, loadingAuth, setLoadingAuth };
}
