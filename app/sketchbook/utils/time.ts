import dayjs from "dayjs"

const humanFormat = "MMMM DD, YYYY"

export function makeHumanDate(date: string) {
	return dayjs(date).format(humanFormat)
}
