"use client"
import Sketch from "react-p5";
import { basicSetup, basicWindowResize } from "../../utils";
import makeTiles, { Truchet } from "./tiles";
import p5Types from "p5"

export default function TruchetTilesSketch() {
	let canvasParent: Element
	let tiles: Truchet
	let scale = 40
	let cols: number
	let rows: number
	let tiling: p5Types.Graphics[]
	let col = 0
	let row = 0

	return (
		<Sketch
			setup={(p5, ref) => {
				canvasParent = ref
				basicSetup(p5, canvasParent)

				tiles = makeTiles(p5)
				tiling = tiles.quarterCircles

				cols = p5.ceil(p5.width / scale)
				rows = p5.ceil(p5.height / scale)
			}}

			draw={p5 => {
				if (row >= rows) { row = 0 }
				p5.image(p5.random(tiling), col * scale, row * scale, scale, scale)

				col += 1
				if (col >= cols) { row += 1; col = 0 }
			}}

			windowResized={p5 => {
				basicWindowResize(p5, canvasParent)
				cols = p5.ceil(p5.width / scale)
				rows = p5.ceil(p5.height / scale)
				col = 0
				row = 0
			}}
		/>
	)
}
