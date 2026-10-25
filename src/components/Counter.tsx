import { useState } from "react";
import Button from "./Button";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-700">Счётчик</h2>
            <p className="text-4xl font-bold text-blue-600">{count}</p>

            <div className="flex gap-2">
                <Button
                    variant="secondary"
                    onClick={() => setCount((c) => c - 1)}
                >
                    −1
                </Button>
                <Button variant="secondary" onClick={() => setCount(0)}>
                    Сброс
                </Button>
                <Button onClick={() => setCount((c) => c + 1)}>+1</Button>
            </div>

            {count >= 5 && (
                <p className="text-green-600 text-sm">Отлично, уже {count}!</p>
            )}
        </div>
    );
}
