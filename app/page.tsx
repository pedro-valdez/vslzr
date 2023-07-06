import Shelf from "./sketchbook/Shelf";
import { getLatestSlugs } from "./sketchbook/utils/fs";

export default async function Home() {
	const latest = await getLatestSlugs()

  return (
    <main>
			<div>
				<div>
					<header className="prose">
						<h2>Featured</h2>
						<p>My favorite sketches</p>
					</header>
					<Shelf slugs={["truchet-tiles", "warping-dots", "conways-game-of-life"]}/>
				</div>

				<div>
					<header className="prose">
						<h2>Latest</h2>
						<p>Fresh sketches out the oven</p>
					</header>
					<Shelf slugs={latest}/>
				</div>
			</div>
    </main>
  )
}
