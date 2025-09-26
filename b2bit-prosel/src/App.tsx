import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
