import { readdir } from "fs/promises"
import ArticlesDisplay from "../SketchesDisplay"

export default async function SketchbookAllPage() {
	const sketchesPath = "app/sketchbook/sketches"
	const sketchNames = await readdir(sketchesPath)
	/*
	 * NOTE:
	 * For some reason interpolating sketchesPath in the
	 * string template doesn't work.
	 * I think it has something to do with the path not being
	 * statically typed? But that doesn't quite make sense
	 * because I am interploating by name.
	*/
	const articleImports = sketchNames.map(name => (
		import(`app/sketchbook/sketches/${name}/article.mdx`)
		.then(mod => mod.meta)
	))
	const metas = await Promise.all(articleImports)
	const articles = metas.map((meta, index) => ({
		meta,
		slug: sketchNames[index],
	}))

	return (
		<main>
			<div className="sm:px-8 md:px-16 lg:max-w-prose lg:mx-auto xl:max-w-screen-xl">
				<header className="prose px-4 py-8 sm:px-0">
					<h1 className="mb-[0.4444444em]">All Sketches</h1>
					<p>Look at my works ye mighty and despair!</p>
				</header>

				<ArticlesDisplay articles={articles}/>
			</div>
		</main>
	)
}
