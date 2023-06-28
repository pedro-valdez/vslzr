import p5Types from "p5"

// Class for settings regarding how to draw the GoL.
export default class World {
	scale: number
	isCycling: boolean
	colors
	/*
	 * I believe that the type p5Types.Camera is not defined correctly,
	 * because it doesn't let you access certail fields like eyeX.
	 */
	camera: any
	zoomOriginal: number
	zoom: number
	projectedScale: number
	constructor(p5: p5Types) {
		this.scale = 100
		this.isCycling = false
		/*
		 * Colors had to be hardcoded since daisyui calculates some colors on the fly,
		 * and the CSS variables used are in HSL percentages, which doesn't play
		 * nice with p5.
		 */
		this.colors = {
			dead: "#003111",
			schrodingers: "#189343",
			alive: "#1eb854",
		}
		this.camera = p5.createCamera()
		this.zoomOriginal = (p5.height / 2) / p5.tan(p5.PI / 6)
		this.zoom = this.zoomOriginal
		this.projectedScale = (this.zoomOriginal / this.zoom) * this.scale
	}

	offsetZoom(zoomOffset: number) {
		this.zoom += zoomOffset
		this.camera.move(0, 0, zoomOffset)
		this.updateProjectedScale(this.zoom)
	}

	updateProjectedScale(zoom: number) {
		this.projectedScale = (this.zoomOriginal / zoom) * this.scale
	}
}
