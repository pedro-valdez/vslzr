import { ArticleMeta } from "../sketchbook/utils/fs"
import ShelfItem from "./Item"
import Separator from "./Separator"

type ShelfProps = {
	articles: ArticleMeta[],
}

export default function Shelf({ articles }: ShelfProps) {
	return (
		<Separator>
			{ articles.map(article => ( <ShelfItem article={article}/> )) }
		</Separator>
	)
}
