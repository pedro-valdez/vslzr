"use client"
import p5Types from "p5"
import { applyDefaults } from "../../utils"

export type Truchet = {
	triangles: p5Types.Graphics[],
	quarterCircles: p5Types.Graphics[],
	tenPrint: p5Types.Graphics[],
}

export default function makeTiles(p5: p5Types): Truchet {
	const res = 540

	const triangles = []
	const quarterCircles = []
	const tenPrint = []

	triangles.push(p5.createGraphics(res, res))
	applyDefaults(triangles[0])
	triangles[0].fill(255)
	triangles[0].triangle(
		0, 0,
		triangles[0].width, 0,
		0, triangles[0].height,
	)
	triangles.push(p5.createGraphics(res, res))
	applyDefaults(triangles[1])
	triangles[1].fill(255)
	triangles[1].triangle(
		0, 0,
		triangles[1].width, 0,
		triangles[1].width, triangles[1].height,
	)
	triangles.push(p5.createGraphics(res, res))
	applyDefaults(triangles[2])
	triangles[2].fill(255)
	triangles[2].triangle(
		triangles[2].width, 0,
		triangles[2].width, triangles[2].height,
		0, triangles[2].height,
	)
	triangles.push(p5.createGraphics(res, res))
	applyDefaults(triangles[3])
	triangles[3].fill(255)
	triangles[3].triangle(
		0, 0,
		0, triangles[3].height,
		triangles[3].width, triangles[3].height,
	)

	quarterCircles.push(p5.createGraphics(res, res))
	applyDefaults(quarterCircles[0])
	quarterCircles[0].strokeWeight(8)
	quarterCircles[0].circle(0, 0, quarterCircles[0].width)
	quarterCircles[0].circle(quarterCircles[0].width, quarterCircles[0].height, quarterCircles[0].width)
	quarterCircles.push(p5.createGraphics(res, res))
	applyDefaults(quarterCircles[1])
	quarterCircles[1].strokeWeight(8)
	quarterCircles[1].circle(quarterCircles[1].width, 0, quarterCircles[1].width)
	quarterCircles[1].circle(0, quarterCircles[1].height, quarterCircles[1].width)

	tenPrint.push(p5.createGraphics(res, res))
	applyDefaults(tenPrint[0])
	tenPrint[0].line(
		0, 0,
		tenPrint[0].width, tenPrint[0].height,
	)
	tenPrint.push(p5.createGraphics(res, res))
	applyDefaults(tenPrint[1])
	tenPrint[1].line(
		0, tenPrint[1].height,
		tenPrint[1].width, 0,
	)

	const tiles = {
		triangles,
		quarterCircles,
		tenPrint,
	}

	return tiles
}
