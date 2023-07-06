import Shelf from "../Shelf"
import { getSketchSlugs } from "../utils/fs"

export default async function SketchbookAllPage() {
	const sketchNames = await getSketchSlugs()

	return (
		<main>
			<div className="sm:px-8 md:px-16 lg:max-w-prose lg:mx-auto xl:max-w-screen-xl">
				<header className="prose px-4 py-8 sm:px-0">
					<h1 className="mb-[0.4444444em]">All Sketches</h1>
					<p>Look at my works ye mighty and despair!</p>
				</header>

				<Shelf slugs={sketchNames}/>
			</div>
		</main>
	)
}
