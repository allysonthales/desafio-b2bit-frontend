import {
	cloneElement,
	isValidElement,
	type ReactElement,
	useEffect,
} from "react";
import { Navigate } from "react-router";
import { useGetProfile } from "@/hooks/useGetProfile";
import type { ProfileProps } from "@/pages/Profile/Profile";
import { getToken } from "@/utils/token";
import { SkeletonLogin } from "../Loading/SkeletonLogin";

export default function ProtectedRoute({
	children,
}: {
	children: ReactElement<ProfileProps>;
}) {
	const token = getToken("token");
	const { profile, error, handleGetProfile, loadingProfile } = useGetProfile();

	useEffect(() => {
		if (token) {
			handleGetProfile();
		}
	}, [token, handleGetProfile]);

	if (!token) {
		return <Navigate to="/" />;
	}

	if (loadingProfile) {
		return <SkeletonLogin />;
	}

	if (error) {
		return <Navigate to="/" />;
	}

	if (profile) {
		if (isValidElement(children)) {
			return cloneElement(children, { profile: profile });
		}
	}

	return null;
}
