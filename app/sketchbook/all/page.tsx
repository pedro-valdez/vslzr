import Shelf from "@/app/Shelf"
import { getAllArticleMetas } from "../utils/fs"

export default async function SketchbookAllPage() {
	const allMetas = await getAllArticleMetas()

	return (
		<main>
			<div className="px-4 mx-auto max-w-2xl">
				<div>
					<Shelf articles={allMetas} showImages/>
				</div>
			</div>
		</main>
	)
}
