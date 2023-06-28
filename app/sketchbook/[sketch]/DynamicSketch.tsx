"use client"

import dynamic from "next/dynamic"

export default function DynamicSketch({ name }: { name: string }) {
	const SketchInstance = dynamic(() => import(`../sketches/${name}`).then(mod => mod.default), {
		ssr: false,
	})

	return (
		<SketchInstance />
	)
}
