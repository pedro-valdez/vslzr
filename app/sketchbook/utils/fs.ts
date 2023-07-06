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
