import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SetsPage from "./pages/SetsPage";

export default function App() {
    return (
        <div className="min-h-screen bg-background flex flex-row">
            <NavBar />
            <main className="flex justify-center p-8 w-full">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sets" element={<SetsPage />} />
                </Routes>
            </main>
        </div>
    );
}
