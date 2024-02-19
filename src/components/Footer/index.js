import data from "@/data/portfolio.json";

export function Footer() {
	const { name } = data;

	return (
		<footer className="bg-muted py-6">
			<div className="container flex lg:block">
				<p className="font-p text-sm text-muted-foreground">
					Made With ❤ By {name}
				</p>
			</div>
		</footer>
	);
}
