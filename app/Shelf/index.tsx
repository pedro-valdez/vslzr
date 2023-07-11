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
			{ articles.map(article => ( <ShelfItem article={article} isImage={showImages}/> )) }
		</Separator>
	)
}

Shelf.defaultProps = {
	showImages: false,
}
