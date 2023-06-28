import p5Types from "p5"
import { game } from "."
import { world } from "./structure"

const isMouseInCanvas = (p5: p5Types) => {
	const isMouseXInCanvas = p5.mouseX >= 0 && p5.mouseX < p5.width
	const isMouseYInCanvas = p5.mouseY >= 0 && p5.mouseY < p5.height
	const isMouseInCanvas = isMouseXInCanvas && isMouseYInCanvas

	return isMouseInCanvas
}

export const keyPressed = (p5: p5Types) => {
	const N_KEY = 78
	const isNKey = p5.keyCode === N_KEY
	if (isNKey) { game.cycle() }

	const SPACEBAR = 32
	const isSpace = p5.keyCode === SPACEBAR
	if (isSpace) { world.isCycling = !world.isCycling }

	const R_KEY = 82
	const isRKey = p5.keyCode === R_KEY
	if (isRKey) { game.reset() }
}


export const mousePressed = (p5: p5Types) => {
	const centeredMouseY = p5.mouseY - (p5.height / 2)
	const centeredMouseX = p5.mouseX - (p5.width / 2)
	const mouseRow = centeredMouseY / world.projectedScale
	const mouseCol = centeredMouseX / world.projectedScale
	const cameraRow = world.camera.eyeY / world.scale
	const cameraCol = world.camera.eyeX / world.scale
	const row = Math.floor(cameraRow + mouseRow)
	const col = Math.floor(cameraCol + mouseCol)

	const isLeftMouse = p5.mouseButton === p5.LEFT
	const isRightMouse = p5.mouseButton === p5.RIGHT
	if (isMouseInCanvas(p5)) {
		if (isLeftMouse) { game.life[row][col] = 1 }
		else if (isRightMouse) { game.life[row][col] = 0 }
	}
}

/*
 * p5Types claims the type of event is (UIEvent | undefined),
 * however, UIEvent does not have the property deltaY,
 * which appears in the p5 reference.
 *
 * For now careful use of the type any will do.
 */
export const mouseWheel = (p5: p5Types, event: any) => {
	event.preventDefault()
	if (isMouseInCanvas(p5)) {
		const zoomOffset = event.deltaY > 0 ? world.scale / 2 : -(world.scale / 2)
		world.offsetZoom(zoomOffset)
	}
}
