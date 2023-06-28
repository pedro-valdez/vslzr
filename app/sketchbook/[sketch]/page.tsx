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
			<div className="prose mx-auto">
				<h1 className="capitalize">{ sketch }</h1>
				<DynamicSketch name={sketch}/>
				<Article />
			</div>
		</main>
	)
}
