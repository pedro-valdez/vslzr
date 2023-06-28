type SketchPageProps = {
	params: {
		sketch: string,
	},
}

export default function SketchPage({ params: { sketch } }: SketchPageProps) {
	return (
		<main>
			{ sketch }
		</main>
	)
}
