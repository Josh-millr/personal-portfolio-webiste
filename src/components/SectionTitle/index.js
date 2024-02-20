import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export function SectionTitle(props) {
	const { children, ...others } = props;

	return (
		<div
			{...others}
			className="h-10 relative w-screen bg-background text-foreground border-border"
		>
			<div className="w-full h-full absolute flex items-center">
				<Separator orientation="horizontal" className="w-full" />
			</div>

			<div className="absolute w-full h-full mx-auto">
				<div className="container w-full h-full flex items-center justify-center lg:justify-start">
					<Badge
						variant="outline"
						className="font-h text-3xl uppercase px-6 py-3 bg-background"
					>
						{children}
					</Badge>
				</div>
			</div>
		</div>
	);
}
