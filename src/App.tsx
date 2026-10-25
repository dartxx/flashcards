import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

export default function App() {
	return (
		<div className="min-h-screen bg-background flex flex-row">
			<NavBar />
			<main className="flex justify-center p-8">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/sets" element={<AboutPage />} />
				</Routes>
			</main>
		</div>
	);
}
