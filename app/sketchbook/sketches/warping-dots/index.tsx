"use client"

import Sketch from "react-p5"

export default function TerrainSketch() {
	let ref: Element
	const resonance = 0.02
	const rows = 45
	const cols = 80
	let sx: number
	let sy: number

	return (
		<Sketch
			setup={(p5, canvasParent) => {
				ref = canvasParent
				ref.classList.add("w-full", "h-full")
				p5.createCanvas(ref.clientWidth, ref.clientHeight).parent(ref)
				p5.background(0)
				p5.stroke(255)
				p5.strokeWeight(4)

				sx = p5.width / (cols + 1)
				sy = p5.height / (rows + 1)
			}}

			draw={p5 => {
				p5.background(0)
				for (let row = 0; row < rows; row++) {
					for (let col = 0; col < cols; col++) {
						const noise = p5.map(p5.noise(
							row * resonance,
							col * resonance,
							p5.frameCount / 20 * resonance,
						), 0, 1, -1, 1)
						const x = sx * (col + noise * sx)
						const y = sy * (row + noise * sy)
						p5.point(x, y)
					}
				}
			}}

			windowResized={p5 => {
				p5.resizeCanvas(ref.clientWidth, ref.clientHeight)
				p5.background(0)
			}}
		/>
	)
}
