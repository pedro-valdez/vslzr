import p5Types from "p5"
import { game } from "."
import { squareArrayApply } from "./gol"
import World from "./world"
import { mousePressed, mouseWheel } from "./events"

export let world: World

export const movement = (p5: p5Types) => {
	const W_KEY = 87
	const A_KEY = 65
	const S_KEY = 83
	const D_KEY = 68
	if (p5.keyIsDown(W_KEY)) { world.camera.move(0, -world.scale / 5, 0) }
	if (p5.keyIsDown(A_KEY)) { world.camera.move(-world.scale / 5, 0, 0) }
	if (p5.keyIsDown(S_KEY)) { world.camera.move(0, world.scale / 5, 0) }
	if (p5.keyIsDown(D_KEY)) { world.camera.move(world.scale / 5, 0, 0) }
}

export let parentRef: Element

export const setup = (p5: p5Types, canvasParent: Element) => {
	parentRef = canvasParent
	parentRef.id = "gol-container"
	parentRef.classList.add("w-full", "h-full", "relative")
	const canvas = p5.createCanvas(parentRef.clientWidth, parentRef.clientHeight, p5.WEBGL).parent(parentRef)
	canvas.attribute("oncontextmenu", "return false;")
	/*
	 * NOTE: Why attach functions to canvas instead of passing as props in GolSketch (./index.tsx)?
	 * When you pass the functions as props they get attached to the window.
	 * If you attach the functions to the canvas they can only be triggered by the canvas.
	 */
	canvas.mousePressed(() => mousePressed(p5))
	canvas.mouseWheel((event) => mouseWheel(p5, event))

	world = new World(p5)
	const centerOfLife = world.scale * game.life.length / 2
	world.camera.move(centerOfLife, centerOfLife, 0)

	p5.stroke(world.colors.schrodingers)
	p5.background(world.colors.dead)
	p5.strokeWeight(world.scale / 10)

	// Element creation
	const buttonContainer = p5.createDiv()
	buttonContainer.parent(parentRef)
	buttonContainer.addClass("absolute right-4 bottom-4 flex gap-x-4 text-white")

	const resetButton = p5.createButton('Reset')
	resetButton.mousePressed(() => game.reset())
	resetButton.parent(buttonContainer)

	const loopButton = p5.createButton('Loop')
	loopButton.mousePressed(() => world.isCycling = !world.isCycling)
	loopButton.parent(buttonContainer)

	const cycleButton = p5.createButton('Next')
	cycleButton.mousePressed(() => game.cycle())
	cycleButton.parent(buttonContainer)
}

export const draw = (p5: p5Types) => {
	p5.background(world.colors.dead)
	movement(p5)
	squareArrayApply(0, game.size, (row, col) => {
		const fillColor = game.life[row][col] === 1 ? world.colors.alive : world.colors.dead
		p5.fill(fillColor)

		const x = col * world.scale
		const y = row * world.scale
		p5.square(x, y, world.scale)
	})

	if (world.isCycling) { game.cycle() }
}
