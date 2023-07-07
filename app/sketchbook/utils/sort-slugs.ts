import { writeFile } from "fs/promises"
import { getArticleMetas, getSketchSlugs, sortByDate } from "./fs"

async function main() {
	const allSlugs = await getSketchSlugs()
	const allMetas = await getArticleMetas(allSlugs)
	allMetas.sort((a, b) => sortByDate(a.meta.date, b.meta.date))
	const sortedSlugs = allMetas.map(meta => meta.slug)
	const json = JSON.stringify(sortedSlugs)

	await writeFile("app/sketchbook/utils/sorted-slugs.json", json)
}

main()
