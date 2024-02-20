import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export function SectionTitle(props) {
	const { children, className, ...others } = props;

	return (
		<div {...others} className={`relative bg-background w-full py-10 ${className}`}>
			<div className="w-full h-full absolute top-0 left-0 flex items-center">
				<Separator orientation="horizontal" className="w-full" />
			</div>

			<div className="absolute w-full h-full mx-auto top-0 left-0">
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
