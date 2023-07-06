import Image from "next/image"
import Link from "next/link"

type ArticleMeta = {
	slug: string,
	meta: {
		title: string,
		date: string,
		description: string,
	},
}

type ShelfProps = {
	names: string[],
}

export default async function Shelf({ names }: ShelfProps) {
	const articleImports = names.map(name => (
		import(`app/sketchbook/sketches/${name}/article.mdx`)
		.then(mod => mod.meta)
	))
	const metas = await Promise.all(articleImports)
	const articles = metas.map((meta, index) => ({
		meta,
		slug: names[index],
	}))

	return (
		<div className="space-y-8 xl:space-y-32">
			{
				articles.map(art => (
					<article className="card xl:card-side">
						<figure className="w-full aspect-video relative xl:w-1/2">
							<Image
								src={`/${art.slug}.jpg`}
								alt={art.meta.title}
								fill
								className="object-cover"
								quality={100}
							/>
						</figure>

						<div className="card-body xl:w-1/2">
							<h1 className="card-title">{ art.meta.title }</h1>
							<p>{ art.meta.description }</p>
							<div className="card-actions justify-end mt-4">
								<Link
									href={`/sketchbook/${art.slug}`}
									className="btn normal-case"
								>
									View sketch
								</Link>
							</div>
						</div>
					</article>
				))
			}
		</div>
	)
}
