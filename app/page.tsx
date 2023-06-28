import Hello from "./hello.mdx"

export default function Home() {
  return (
    <main>
			<div className="min-h-screen flex justify-center items-center">
				<div className="prose">
					<Hello />
				</div>
			</div>
    </main>
  )
}
