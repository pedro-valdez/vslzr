import { readdir } from "fs/promises"
import Image from "next/image"
import Link from "next/link"

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
			<div className="sm:px-8 md:px-16 lg:max-w-prose lg:mx-auto xl:max-w-screen-lg">
				<header className="prose px-4 py-8 sm:px-0">
					<h1 className="mb-[0.4444444em]">All Sketches</h1>
					<p>Look at my works ye mighty and despair!</p>
				</header>
				<div className="space-y-8 xl:space-y-32">
					{
						articles.map(art => (
							<article className="card xl:card-side">
								<figure className="w-full aspect-video relative xl:w-1/2">
									<Image
										src={`/${art.slug}.jpg`}
										alt={art.meta.title}
										fill
										className="object-cover"
										quality={100}
									/>
								</figure>

								<div className="card-body xl:w-1/2">
									<h1 className="card-title">{ art.meta.title }</h1>
									<p>{ art.meta.description }</p>
									<div className="card-actions justify-end">
										<Link
											href={`/sketchbook/conways-game-of-life`}
										/>
									</div>
								</div>
							</article>
						))
					}
				</div>
			</div>
		</main>
	)
}
