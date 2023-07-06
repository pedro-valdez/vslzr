import dayjs from "dayjs"
import { readdir } from "fs/promises"

export type Slug = string

const sketchesPath = "app/sketchbook/sketches"

export function getSketchSlugs() {
	return readdir(sketchesPath)
}

export async function getArticleMetas(slugs: Slug[]) {
	const articleImports = slugs.map(slug => (
		import(`app/sketchbook/sketches/${slug}/article.mdx`)
		.then(mod => mod.meta)
	))
	const metas = await Promise.all(articleImports)
	const articles = metas.map((meta, index) => ({
		meta,
		slug: slugs[index],
	}))

	return articles
}

export async function getLatestSlugs() {
	const slugs = await getSketchSlugs()
	const metas = await getArticleMetas(slugs)
	metas.sort((a, b) => {
		const dateA = dayjs(a.meta.date)
		const dateB = dayjs(b.meta.date)

		if (dateA.isSame(dateB)) { return 0 }
		return dateA.isAfter(dateB) ? -1 : 1
	})
	const latestSlugs = metas
		.map(meta => meta.slug)
		.slice(0, 5)

	return latestSlugs
}
