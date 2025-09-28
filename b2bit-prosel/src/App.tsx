import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { ProfileLayout } from "./components/ProfileLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route element={<ProfileLayout />}>
					<Route
						path="/profile"
						element={
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
