import p5Types from "p5"
import { parentRef } from "./structure"

export const windowResized = (p5: p5Types) => {
	p5.resizeCanvas(parentRef.clientWidth, parentRef.clientHeight)
}
