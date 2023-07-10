import Link from "next/link"

export default function Navbar() {
	return (
		<nav className="backdrop-blur rounded-full sticky top-4 my-4 mx-auto max-w-sm px-8 flex justify-center z-50">
			<Link
				className="navbar-button"
				href="/about"
			>
				About
			</Link>

			<Link
				className="navbar-button"
				href="/"
			>
				VSLZR
			</Link>

			<Link
				className="navbar-button"
				href="/sketchbook/all"
			>
				Sketches
			</Link>
		</nav>
	)
}
