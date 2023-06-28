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
			<div className="py-8">
				<div className="aspect-square mb-8 mx-auto max-w-prose lg:aspect-video lg:max-w-screen-xl">
					<DynamicSketch name={sketch}/>
				</div>
				<div className="prose mx-auto px-4">
					<Article />
				</div>
			</div>
		</main>
	)
}
