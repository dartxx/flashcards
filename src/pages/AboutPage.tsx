import { useState } from "react";
import Button from "../components/Button";

export default function AboutPage() {
	const [likes, setLikes] = useState(0);

	return (
		<div className="flex flex-col items-center gap-4">
			<h1 className="text-2xl font-bold text-gray-800">О нас</h1>
			<p className="text-gray-600 max-w-md text-center">
				Это вторая страница. Здесь тоже есть состояние — лайки.
			</p>
			<p className="text-3xl font-bold text-pink-600">❤ {likes}</p>
			<Button onClick={() => setLikes((l) => l + 1)}>
				Поставить лайк
			</Button>
		</div>
	);
}
