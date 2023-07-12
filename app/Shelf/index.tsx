import { ArticleMeta } from "../sketchbook/utils/fs"
import ShelfItem from "./Item"
import Separator from "./Separator"

type ShelfProps = {
	articles: ArticleMeta[],
	showImages?: boolean,
}

export default function Shelf({ articles, showImages }: ShelfProps) {
	return (
		<Separator>
			{ articles.map((article, index) => (
				<ShelfItem
					article={article}
					isImage={showImages}
					key={index}
				/>
			)) }
		</Separator>
	)
}

Shelf.defaultProps = {
	showImages: false,
}
