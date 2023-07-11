import { ArticleMeta } from "../sketchbook/utils/fs";
import Separator from "./Separator";
import ShelfItem from "./Item";

type FeaturedShelfProps = {
	features: ArticleMeta[],
}

export default function FeaturedShelf({ features } : FeaturedShelfProps) {
	return (
		<Separator>
			<ShelfItem
				article={features[0]}
				isImage
				isFeatured
			/>
			{
				features.slice(1, features.length).map(feature => (
					<ShelfItem article={feature} isFeatured/>
				))
			}
		</Separator>
	)
}
