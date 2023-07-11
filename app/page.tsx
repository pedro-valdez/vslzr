import { getArticleMetas, getLatestArticleMetas } from "./sketchbook/utils/fs";
import FeaturedShelf from "./Shelf/Featured";
import Shelf from "./Shelf";

export default async function Home() {
	const featuredArticles = await getArticleMetas(["truchet-tiles", "warping-dots", "conways-game-of-life"])
	const latestArticles = await getLatestArticleMetas()

  return (
		<main>
			<h1 className="sr-only">VSLZR</h1>

			<div className="px-4 mx-auto max-w-2xl">
				<div className="space-y-24">
					<section>
						<h2 className="sr-only">Featured</h2>

						<FeaturedShelf features={featuredArticles} />
					</section>

					<section>
						<header className="prose ml-4">
							<h2 className="mb-0">The Latest</h2>
							<p className="mb-4">Freshly baked sketches</p>
						</header>
						<Shelf articles={latestArticles}/>
					</section>
				</div>
			</div>
		</main>
  )
}
