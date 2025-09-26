import axios from "axios";

const api = axios.create({
	baseURL: "https://api.homologation.cliqdrive.com.br/",
	headers: {
		Accept: "application/json;version=v1_web",
		"Content-Type": "application/json",
	},
});

export default api;
