export interface ProfileAvatar {
	id: number;
	high: string;
	medium: string;
	low: string;
}

export interface ProfileRole {
	value: number;
	label: string;
}

export interface ProfileStaffRole {
	value: number;
	label: string;
}

export interface ProfileResponse {
	id: string;
	avatar: ProfileAvatar;
	name: string;
	last_name: string;
	email: string;
	role: ProfileRole;
	last_login: string;
	staff_role: ProfileStaffRole;
}
