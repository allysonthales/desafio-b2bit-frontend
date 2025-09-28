import { AxiosError } from "axios";
import { useCallback, useState } from "react";
import { getProfile } from "@/api/profile/api/profile";
import type { ProfileResponse } from "@/api/profile/domain/types";
import { loadingTime } from "@/utils/minLoading";

export function useGetProfile() {
	const [loadingProfile, setLoadingProfile] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [profile, setProfile] = useState<ProfileResponse | null>(null);

	const handleGetProfile = useCallback(async () => {
		setLoadingProfile(true);
		setError(null);
		const minLoading = loadingTime;

		try {
			const data = await getProfile();

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
	}, []);

	return {
		handleGetProfile,
		loadingProfile,
		setLoadingProfile,
		error,
		profile,
	};
}
