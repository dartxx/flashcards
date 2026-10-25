export default function Sets() {
    const setSurfaceBase =
        "hover:cursor-pointer rounded shadow w-full p-4 font-medium flex flex-row gap-2 items-center";

    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-2xl">Мои наборы</h1>

            <div className="flex flex-col gap-3">
                <div className={setSurfaceBase}>Английский язык</div>
                <div className={setSurfaceBase}>Физика</div>
                <div className={setSurfaceBase}>Химия</div>
            </div>
        </div>
    );
}
