"use client"

import Sketch from "react-p5";

export default function TestSketch() {
	let ref: Element

	return (
		<Sketch
			setup={(p5, canvasParentRef) => {
				ref = canvasParentRef
				ref.classList.add("w-full", "h-full")
				p5.createCanvas(ref.clientWidth, ref.clientHeight).parent(ref)
				p5.background(0)
				p5.stroke(255)
			}}

			draw={p5 => {
				p5.line(
					p5.pmouseX,
					p5.pmouseY,
					p5.mouseX,
					p5.mouseY,
				)
			}}

			windowResized={p5 => {
				p5.resizeCanvas(ref.clientWidth, ref.clientHeight)
				p5.background(0)
			}}
		/>
	)
}
