import { useEffect } from "react";
import { useNavigate } from "react-router";
import { LoginForm } from "@/components/Forms/LoginForm";
import { Loading } from "@/components/Loading/Loading";
import { SkeletonLogin } from "@/components/Loading/SkeletonLogin";
import { PageWrapper } from "@/components/PageWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useGetProfile } from "@/hooks/useGetProfile";
import { getToken } from "@/utils/token";
import logoImage from "../../assets/B2Bit Logo.png";

export default function Login() {
	const { handleLogin, error, loadingAuth } = useAuth();
	const { handleGetProfile, loadingProfile, profile } = useGetProfile();
	const navigate = useNavigate();

	useEffect(() => {
		const token = getToken("token");
		if (token) {
			handleGetProfile();
		}
	}, [handleGetProfile]);
	useEffect(() => {
		if (profile) {
			navigate("/profile");
		}
	}, [profile, navigate]);

	if (loadingProfile) {
		return <SkeletonLogin />;
	}

	return (
		<div className="container flex items-center justify-center min-h-screen mx-auto">
			<PageWrapper className="px-4">
				<Card className="max-w-2xl shadow-2xl py-10 w-full">
					<CardHeader>
						<CardTitle className="flex justify-center">
							<img
								src={logoImage}
								alt="b2bit"
								height={120}
								width={120}
								className="w-60 sm:w-80"
							/>
						</CardTitle>
					</CardHeader>

					<CardContent>
						<LoginForm onSubmit={handleLogin} />
						{error && (
							<div className="text-destructive text-center mt-4">{error}</div>
						)}
					</CardContent>
				</Card>
				{loadingAuth && (
					<Loading open={loadingAuth} label="Entrando no sistema" />
				)}
			</PageWrapper>
		</div>
	);
}
