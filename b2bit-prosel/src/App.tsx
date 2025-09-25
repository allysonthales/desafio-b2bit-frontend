import "./App.css";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import logoImage from "./assets/B2Bit Logo.png";
import { LoginForm } from "./components/forms/LoginForm";
import { PageWrapper } from "./components/PageWrapper";

function App() {
	return (
		<PageWrapper>
			<Card className="max-w-lg flex-1 shadow-2xl py-14">
				<CardHeader>
					<CardTitle className="flex justify-center">
						<img src={logoImage} alt="b2bit" />
					</CardTitle>
				</CardHeader>

				<CardContent>
					<LoginForm />
				</CardContent>
			</Card>
		</PageWrapper>
	);
}

export default App;
