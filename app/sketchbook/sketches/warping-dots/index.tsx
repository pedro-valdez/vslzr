"use client"

import Sketch from "react-p5"
import { basicSetup, basicWindowResize } from "../../utils"

export default function TerrainSketch() {
	let ref: Element
	const resonance = 0.02
	const rows = 45
	const cols = 80
	const spacing = {
		x: 0,
		y: 0,
	}

	return (
		<Sketch
			setup={(p5, canvasParent) => {
				ref = canvasParent
				basicSetup(p5, canvasParent)
				p5.strokeWeight(4)

				spacing.x = p5.width / (cols + 1)
				spacing.y = p5.height / (rows + 1)
			}}

			draw={p5 => {
				p5.background(0)
				for (let row = 0; row < rows; row++) {
					for (let col = 0; col < cols; col++) {
						const noise = p5.noise(
							row * resonance,
							col * resonance,
							p5.frameCount / 20 * resonance,
						)
						const scale = p5.map(noise, 0, 1, -1, 1)
						const x = spacing.x * (col + scale * spacing.x)
						const y = spacing.y * (row + scale * spacing.y)
						p5.point(x, y)
					}
				}
			}}

			windowResized={p5 => {
				basicWindowResize(p5, ref)
				spacing.x = p5.width / (cols + 1)
				spacing.y = p5.height / (rows + 1)
			}}
		/>
	)
}
