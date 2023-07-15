import DynamicSketch from "./DynamicSketch"

type SketchPageProps = {
	params: {
		sketch: string,
	},
}

export default async function SketchPage({ params: { sketch } }: SketchPageProps) {
	const Article = await import(`../sketches/${sketch}/article.mdx`).then(mod => mod.default)

	return (
		<main>
			<div>
				<div className="aspect-square mx-auto max-w-prose lg:aspect-video lg:max-w-screen-xl">
					<DynamicSketch name={sketch}/>
				</div>

				<div className="prose mx-auto px-4">
					<div
						className="pt-4 pb-8"
						id="sketch-controls"
					>
					</div>

					<Article />
				</div>
			</div>
		</main>
	)
}
