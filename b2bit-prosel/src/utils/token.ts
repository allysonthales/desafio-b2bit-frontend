export function setToken(chave: string, token: string) {
	localStorage.setItem(chave, token);
}

export function getToken(token: string) {
	return localStorage.getItem(token);
}

export function removeToken(token: string) {
	localStorage.removeItem(token);
}
