"use client"

import Sketch from "react-p5"

export default function DensitySketch() {
	let ref: Element
	const bins = Array(1000).fill(0)
	let count = 0
	let width: number
	let scale: number

	return (
		<Sketch
			setup={(p5, canvasParent) => {
				ref = canvasParent
				ref.classList.add("w-full", "h-full")
				p5.createCanvas(ref.clientWidth, ref.clientHeight).parent(ref)

				width = p5.width / bins.length
				scale = 1 / 0.0025

				p5.stroke(255)
			}}

			draw={p5 => {
				p5.background(0)
				for (let i = 0; i < 100; i++) {
					const x = p5.random()
					const y = p5.random()
					const r = p5.sqrt(p5.pow(x, 2) + p5.pow(y, 2))
					count += 1
					const binIndex = Math.floor(p5.map(r, 0, p5.sqrt(2), 0, bins.length))
					bins[binIndex] += 1
				}
				bins.forEach((val, ind) => {
					p5.rect(ind * width, p5.height, width, (-val/count) * p5.height * scale)
				})
			}}

			windowResized={p5 => {
				p5.resizeCanvas(ref.clientWidth, ref.clientHeight)
			}}
		/>
	)
}
