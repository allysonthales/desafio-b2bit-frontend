export interface Avatar {
	id: number;
	high: string;
	medium: string;
	low: string;
}

export interface User {
	id: number;
	name: string;
	email: string;
	is_active: boolean;
	avatar: Avatar;
	type: string;
	created: string;
	modified: string;
	role: string;
}
export interface Tokens {
	refresh: string;
	access: string;
}

export interface LoginResponse {
	user: User;
	tokens: Tokens;
}
