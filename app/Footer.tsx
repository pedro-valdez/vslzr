import Link from "next/link";

export default function Footer() {
	return (
		<footer className="p-4 mt-4">
			<div className="flex flex-col justify-center items-center opacity-50">
				<div className="space-x-4">
					<Link href="/about">
						About
					</Link>
					<Link href="/">
						VSLZR
					</Link>
					<Link href="/sketchbook/all">
						Sketches
					</Link>
				</div>
				<p className="mt-4">© 2023 Pedro Valdez</p>
			</div>
		</footer>
	)
}
