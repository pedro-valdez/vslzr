"use client"

import Sketch from "react-p5";
import { basicSetup, basicWindowResize } from "../../utils";

export default function MonteCarlosPiApproximationSketch() {
	let ref: Element
	let count = 0
	let cirlceCount = 0
	let approximation = 0
	let side: number
	let halfSide: number
	const center = {
		x: 0,
		y: 0,
	}

	return (
		<Sketch
			setup={(p5, canvasParent) => {
				ref = canvasParent
				basicSetup(p5, canvasParent)
				p5.fill(0)
				p5.textAlign(p5.LEFT, p5.TOP)
				p5.textSize(16)

				side = p5.height * 0.8
				halfSide = side / 2

				center.x = p5.width / 2
				center.y = p5.height / 2

				p5.square(-halfSide + center.x, -halfSide + center.y, side)
				p5.circle(center.x, center.y, side)
			}}

			draw={p5 => {
				const x = p5.random(-halfSide, halfSide)
				const y = p5.random(-halfSide, halfSide)
				const r = p5.sqrt(p5.pow(x, 2) + p5.pow(y, 2))
				count += 1
				cirlceCount += r <= halfSide ? 1 : 0
				approximation = cirlceCount / count
				p5.point(x + center.x, y + center.y)
				const textCoords = {
					x: center.x - halfSide,
					y: center.y + halfSide + 16,
				}
				p5.rect(textCoords.x, textCoords.y, 256, 32)
				p5.text(`PI: ${approximation * 4}`, textCoords.x + 8, textCoords.y + 10, 256, 32)
			}}

			windowResized={p5 => {
				basicWindowResize(p5, ref)
				side = p5.height * 0.8
				halfSide = side / 2
				center.x = p5.width / 2
				center.y = p5.height / 2
				p5.square(-halfSide + center.x, -halfSide + center.y, side)
				p5.circle(center.x, center.y, side)
			}}
		/>
	)
}
