import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const container = document.getElementById("root");

if (container) {
	createRoot(container).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
} else {
	console.error("Root element não encontrado");
}
