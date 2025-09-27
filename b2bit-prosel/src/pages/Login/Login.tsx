import { LoginForm } from "@/components/Forms/LoginForm";
import { PageWrapper } from "@/components/PageWrapper";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import logoImage from "../../assets/B2Bit Logo.png";
import { Loading } from "@/components/Loading/Loading";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
	const { handleLogin, error, loading } = useAuth();

	return (
		<PageWrapper>
			<Card className="max-w-lg flex-1 shadow-2xl py-14">
				<CardHeader>
					<CardTitle className="flex justify-center">
						<img src={logoImage} alt="b2bit" />
					</CardTitle>
				</CardHeader>

				<CardContent>
					<LoginForm onSubmit={handleLogin} />
					{error && (
						<div className="text-destructive text-center mt-4">{error}</div>
					)}
				</CardContent>
			</Card>
			{loading && <Loading open={loading} label="Entrando no sistema" />}
		</PageWrapper>
	);
}
