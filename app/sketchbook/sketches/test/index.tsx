"use client"

import Sketch from "react-p5";

export default function TestSketch() {
	let ref: Element

	return (
		<Sketch
			setup={(p5, canvasParentRef) => {
				ref = canvasParentRef
				p5.createCanvas(300, 300).parent(ref)
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
		/>
	)
}
