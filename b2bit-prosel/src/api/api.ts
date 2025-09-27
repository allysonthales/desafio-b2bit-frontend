import axios from "axios";
import { getToken, removeToken, setToken } from "@/utils/token";

const api = axios.create({
	baseURL: "https://api.homologation.cliqdrive.com.br/",
	headers: {
		Accept: "application/json;version=v1_web",
		"Content-Type": "application/json",
	},
});

// Interceptor de requisição: adiciona o token se existir
api.interceptors.request.use(
	(config) => {
		const token = getToken("token");
		if (token && !config.url?.includes("/auth/login")) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error),
);

api.interceptors.response.use(
	(response) => {
		if (
			response.config.url?.includes("/auth/login") &&
			response.data?.tokens?.access
		) {
			setToken("token", response.data.tokens.access);
		}
		return response;
	},
	(error) => {
		if (error.response?.status === 401) {
			removeToken("token");
		}
		return Promise.reject(error);
	},
);

export default api;
