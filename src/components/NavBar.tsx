import { NavLink } from "react-router-dom";

export default function NavBar() {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `rounded p-3 pr-16 py-2 transition flex flex-row items-center gap-3 ${
            isActive
                ? "bg-primary-light text-primary "
                : "text-gray-700 hover:bg-gray-200"
        }`;

    return (
        <nav className="font-semibold flex flex-col gap-1 p-3 min-w-fit bg-secondary border-2 border-border">
            <NavLink to="/" className={linkClass} end>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                    >
                        <path d="M21 19v-6.733a4 4 0 0 0-1.245-2.9L13.378 3.31a2 2 0 0 0-2.755 0L4.245 9.367A4 4 0 0 0 3 12.267V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2" />
                        <path d="M9 15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6H9z" />
                    </g>
                </svg>
                Главная
            </NavLink>

            <NavLink to="/sets" className={linkClass}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                        fill="currentColor"
                        d="M11.628 13.134q-.18-.053-.367-.14L3.39 8.914q-.218-.131-.32-.318q-.103-.186-.103-.404t.102-.403q.103-.187.32-.318l7.874-4.08q.186-.087.366-.14T12 3.198t.372.053t.367.14l7.892 4.08q.217.131.32.318q.103.186.103.403t-.103.404t-.32.318l-7.892 4.08q-.187.087-.367.14t-.372.053t-.372-.053m.372-.89l7.921-4.052L12 4.141L4.098 8.192zm0 3.808l8.158-4.198q.069-.045.34-.01q.175.039.27.163t.096.299q0 .14-.058.25t-.198.182l-7.87 4.064q-.186.087-.366.14q-.18.052-.372.052t-.372-.053q-.18-.052-.366-.139l-7.85-4.063q-.14-.073-.208-.183t-.067-.25q0-.175.104-.3q.105-.123.28-.162q.087-.038.17-.04q.084 0 .17.05zm0 3.808l8.158-4.198q.069-.045.34-.01q.175.039.27.163t.096.299q0 .14-.058.25t-.198.182l-7.87 4.064q-.186.086-.366.139t-.372.053t-.372-.053t-.366-.14l-7.85-4.063q-.14-.073-.208-.182q-.067-.11-.067-.25q0-.175.104-.3q.105-.123.28-.162q.087-.038.17-.04q.084 0 .17.05z"
                    />
                </svg>
                Наборы
            </NavLink>
        </nav>
    );
}
