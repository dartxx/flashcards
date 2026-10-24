import { NavLink } from "react-router-dom";

export default function NavBar() {
	const linkClass = ({ isActive }: { isActive: boolean }) =>
		`px-3 py-1 rounded transition ${
			isActive
				? "bg-blue-600 text-white"
				: "text-gray-700 hover:bg-gray-200"
		}`;

	return (
		<nav className="flex gap-2 p-4 bg-white shadow">
			<NavLink to="/" className={linkClass} end>
				Главная
			</NavLink>
			<NavLink to="/about" className={linkClass}>
				О нас
			</NavLink>
		</nav>
	);
}
