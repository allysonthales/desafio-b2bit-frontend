import { LoginForm } from "@/components/Forms/LoginForm";
import { PageWrapper } from "@/components/PageWrapper";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import logoImage from "../../assets/B2Bit Logo.png";
import { useNavigate } from "react-router";
import { login, setToken } from "@/api/auth";
import { useLoading } from "@/hooks/useLoading";
import { Loading } from "@/components/Loading/Loading";

export default function Login() {
	const navigate = useNavigate();
	const { loading, initLoading } = useLoading();

	async function handleClick() {
		await initLoading();
		console.log("Terminou o loading artificial");
	}

	async function handleLogin(email: string, password: string) {
		try {
			const data = await login(email, password);
			setToken(data.tokens.access);
			navigate("/profile");
		} catch (err: any) {
			console.error("erro no login: ", err.response?.data || err.message);
		}
	}
	return (
		<PageWrapper>
			<Card className="max-w-lg flex-1 shadow-2xl py-14">
				<CardHeader>
					<CardTitle className="flex justify-center">
						<img src={logoImage} alt="b2bit" />
					</CardTitle>
				</CardHeader>

				<CardContent>
					<LoginForm onSubmit={handleLogin} onClick={handleClick} />
				</CardContent>
			</Card>
			{loading && <Loading open={loading} label="Entrando no sistema" />}
		</PageWrapper>
	);
}
