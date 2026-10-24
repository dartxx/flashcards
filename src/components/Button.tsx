type ButtonProps = {
	onClick: () => void;
	children: React.ReactNode;
	variant?: "primary" | "secondary";
};

export default function Button({
	onClick,
	children,
	variant = "primary",
}: ButtonProps) {
	const base = "px-4 py-2 rounded font-medium transition";
	const styles =
		variant === "primary"
			? "bg-blue-600 text-white hover:bg-blue-700"
			: "bg-gray-200 text-gray-800 hover:bg-gray-300";

	return (
		<button onClick={onClick} className={`${base} ${styles}`}>
			{children}
		</button>
	);
}
