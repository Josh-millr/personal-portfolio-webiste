import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export function SectionTitle(props) {
	const { children, ...others } = props;

	return (
		<div {...others} className="h-16 relative w-screen">
			<div className="w-full h-full absolute flex items-center">
				<Separator orientation="horizontal" className="w-full" />
			</div>
			<div className="w-full h-full absolute flex items-center justify-center lg:justify-start">
				<Badge
					variant="outline"
					className="font-h text-3xl uppercase px-6 py-3 bg-background"
				>
					{children}
				</Badge>
			</div>
		</div>
	);
}
