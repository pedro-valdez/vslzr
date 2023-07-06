import Link from "next/link";
import Shelf from "./sketchbook/Shelf";
import { getLatestSlugs } from "./sketchbook/utils/fs";

export default async function Home() {
	const latest = await getLatestSlugs()

  return (
    <main>
			<div className="sm:px-8 md:px-16 lg:max-w-prose lg:mx-auto xl:max-w-screen-xl">
				<div>
					<header className="prose px-4 py-8 sm:px-0">
						<h2>Featured</h2>
						<p>My favorite sketches</p>
					</header>
					<Shelf slugs={["truchet-tiles", "warping-dots", "conways-game-of-life"]}/>
				</div>

				<div className="mt-32">
					<header className="prose px-4 py-8 sm:px-0">
						<h2>Latest</h2>
						<p>Fresh sketches out the oven</p>
					</header>
					<Shelf slugs={latest}/>
					<div className="mt-32 flex justify-end px-8">
						<Link
							href="/sketchbook/all"
							className="btn link normal-case ml-auto"
						>View all</Link>
					</div>
				</div>
			</div>
    </main>
  )
}
