export function squareArrayApply(start: number, end: number, fn: (row: number, col: number) => void) {
	for (let row = start; row < end; row++) {
		for (let col = start; col < end; col++) {
			fn(row, col)
		}
	}
}

export default class Gol {
	size: number
	life: Array<Uint8Array>
	changes = Array<[number, number, number]>()

	constructor(size: number, noLife?: boolean) {
		this.size = size
		this.life = Gol.createLife(size)

		if (!noLife) { this.randomize() }
	}

	private static lifeOrDeath() {
		return Math.floor(Math.random() * 2)
	}

	private static createLife(size: number) {
		return Array.from({ length: size }, () => new Uint8Array(size))
	}

	private resetChanges() {
		this.changes = Array<[number, number, number]>()
	}

	reset() {
		squareArrayApply(0, this.size, (row, col) => {
			this.life[row][col] = 0
		})

		this.resetChanges()
	}

	randomize() {
		squareArrayApply(0, this.size, (row, col) => {
			this.life[row][col] = Gol.lifeOrDeath()
		})
	}

	cycle() {
		squareArrayApply(0, this.size, (row, col) => {
			let count = 0
			squareArrayApply(-1, 2, (y, x) => {
				const rowOff = row + y
				const colOff = col + x
				const isRowOffValid = (rowOff >= 0) && (rowOff < this.size)
				const isColOffValid = (colOff >= 0) && (colOff < this.size)
				const isCenter = x === 0 && y === 0

				if (isRowOffValid && isColOffValid && !isCenter) {
					count += this.life[rowOff][colOff]
				}
			})

			const isAlive = this.life[row][col] === 1
			const shouldRevive = !isAlive && count === 3
			const shouldDie = isAlive && (count < 2 || count > 3)

			if (shouldRevive) { this.changes.push([row, col, 1]) }
			else if (shouldDie) { this.changes.push([row, col, 0]) }
		})

		for (let cell of this.changes) {
			this.life[cell[0]][cell[1]] = cell[2]
		}

		this.resetChanges()
	}

	resize(size: number) {
		this.size = size
		this.life = Gol.createLife(size)
		this.resetChanges()
	}
}
