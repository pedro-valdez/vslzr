import Image from "next/image"
import Link from "next/link"
import { ArticleMeta } from "../sketchbook/utils/fs"
import { HiChevronDoubleRight } from "react-icons/hi2"
import { makeHumanDate } from "../sketchbook/utils/time"

type ShelfItemProps = {
	article: ArticleMeta,
	isImage?: boolean,
	isFeatured?: boolean,
}

export default function ShelfItem({ article, isImage, isFeatured }: ShelfItemProps) {
	return (
		<div>
			<Link href={`/sketchbook/${article.slug}`}>
				<div className="card hover:bg-base-300 group">
					{
						isImage ? (
							<figure>
								<Image
									src={`/${article.slug}.jpg`}
									alt=""
									width={1600}
									height={900}
								/>
							</figure>
						) : <></>
					}

					<div className="card-body">
						<time
							dateTime={article.meta.date}
							className="text-sm opacity-50 font-semibold"
						>
							{makeHumanDate(article.meta.date)}
						</time>
						<h3 className="card-title text-primary group-hover:text-primary-focus block">
							<span className="align-middle">{article.meta.title}</span>
							{ " " }
							{
								isFeatured ? (
									<span className="badge badge-secondary">Featured</span>
								) : <></>
							}
						</h3>
						<p>{article.meta.description}</p>

						<div className="card-actions mt-4">
							<span
								className="link font-bold text-secondary group-hover:text-secondary-focus"
							>
								View sketch
								<HiChevronDoubleRight className="inline ml-[0.5em]"/>
							</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

ShelfItem.defaultProps = {
	isImage: false,
	isFeatured: false,
}
