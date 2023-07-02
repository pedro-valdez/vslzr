"use client"

import p5Types from "p5"

export function basicSetup(p5: p5Types, ref: Element) {
	ref.classList.add("w-full", "h-full")
	p5.createCanvas(ref.clientWidth, ref.clientHeight).parent(ref)
	p5.background(0)
	p5.stroke(255)
	p5.strokeWeight(4)
	p5.fill(0)
	p5.textAlign(p5.LEFT, p5.TOP)
	p5.textSize(16)
}

export function basicWindowResize(p5: p5Types, ref: Element) {
	p5.resizeCanvas(ref.clientWidth, ref.clientHeight)
	p5.background(0)
}
