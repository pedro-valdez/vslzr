import DynamicSketch from "./DynamicSketch"

type SketchPageProps = {
	params: {
		sketch: string,
	},
}

export default function SketchPage({ params: { sketch } }: SketchPageProps) {
	return (
		<main>
			<DynamicSketch name={sketch}/>
			{ sketch }
		</main>
	)
}
