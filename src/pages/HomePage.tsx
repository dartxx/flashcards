import Counter from "../components/Counter";

export default function HomePage() {
	return (
		<div className="flex flex-col items-center gap-4">
			<h1 className="text-2xl font-bold text-gray-800">Главная</h1>
			<Counter />
		</div>
	);
}
