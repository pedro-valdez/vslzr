import dayjs from "dayjs"
import { readdir } from "fs/promises"

export type Slug = string
type ArticleFileMeta = {
	title: string,
	date: string,
	description: string,
}
export type ArticleMeta = {
	slug: Slug,
	meta: ArticleFileMeta,
}

const sketchesPath = "app/sketchbook/sketches"

export function getSketchSlugs(): Promise<Slug[]> {
	const slugs: Promise<Slug[]> = readdir(sketchesPath)
	return slugs
}

export async function getArticleMetas(slugs: Slug[]): Promise<ArticleMeta[]> {
	const articleImports = slugs.map(slug => (
		import(`app/sketchbook/sketches/${slug}/article.mdx`)
		.then(mod => mod.meta)
	))
	const metas: ArticleFileMeta[] = await Promise.all(articleImports)
	const articles: ArticleMeta[] = metas.map((meta, index) => ({
		meta,
		slug: slugs[index],
	}))

	return articles
}

export function sortByDate(a: string, b: string) {
	const dateA = dayjs(a)
	const dateB = dayjs(b)

	if (dateA.isSame(dateB)) { return 0 }
	return dateA.isAfter(dateB) ? -1 : 1
}

export async function getLatestSlugs(): Promise<Slug[]> {
	const slugs = await getSketchSlugs()
	const metas = await getArticleMetas(slugs)
	metas.sort((a, b) => sortByDate(a.meta.date, b.meta.date))
	const latestSlugs = metas
		.map(meta => meta.slug)
		.slice(0, 5)

	return latestSlugs
}

export async function getLatestArticleMetas(): Promise<ArticleMeta[]> {
	const latestSlugs = await getLatestSlugs()
	const latestMetas = await getArticleMetas(latestSlugs)

	return latestMetas
}

export async function getAllArticleMetas(): Promise<ArticleMeta[]> {
	const allSlugs = await getSketchSlugs()
	const allMetas = await getArticleMetas(allSlugs)
	allMetas.sort((a, b) => sortByDate(a.meta.date, b.meta.date))

	return allMetas
}
