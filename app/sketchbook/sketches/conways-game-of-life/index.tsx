"use client"
import Sketch from "react-p5"
import Gol from "./gol"
import { setup, draw } from "./structure"
import { keyPressed } from "./events"
import { windowResized } from "./environment"


export const game = new Gol(32, true)

export default function GolSketch() {
	return (
		<Sketch
			setup={setup}
			draw={draw}
			keyPressed={keyPressed}
			windowResized={windowResized}
		/>
	)
}
