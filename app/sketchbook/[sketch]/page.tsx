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
			<div className="aspect-square">
				<DynamicSketch name={sketch}/>
			</div>
			<div className="prose mx-auto">
				<Article />
			</div>
		</main>
	)
}
