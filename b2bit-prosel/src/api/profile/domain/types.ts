export interface ProfileAvatar {
	id: number;
	image_high_url: string;
	image_medium_url: string;
	image_low_url: string;
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
