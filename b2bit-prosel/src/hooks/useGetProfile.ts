import { getProfile } from "@/api/profile/api/profile";
import { loadingTime } from "@/utils/minLoading";
import { useState } from "react";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import type { ProfileResponse } from "@/api/profile/domain/types";

export function useGetProfile() {
	const [loadingProfile, setLoadingProfile] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [profile, setProfile] = useState<ProfileResponse | null>(null);
	const navigate = useNavigate();

	async function handleGetProfile() {
		setLoadingProfile(true);
		setError(null);
		const minLoading = loadingTime;

		try {
			const data = await getProfile();
			console.log(data);

			setProfile(data);
			await minLoading;
		} catch (err) {
			await minLoading;
			if (err instanceof AxiosError) {
				setError(
					err.response?.data?.message || err.message || "Erro desconhecido",
				);
			} else {
				setError("Erro desconhecido");
			}
		} finally {
			setLoadingProfile(false);
		}
	}

	return {
		handleGetProfile,
		loadingProfile,
		setLoadingProfile,
		error,
		profile,
	};
}
