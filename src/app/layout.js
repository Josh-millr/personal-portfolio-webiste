import "@/styles/globals.css";

import { ScrollArea } from "@/components/ui/scroll-area";
import { GlobalProvider } from "@/provider/GlobalProvider";
import { FireTrailCursor } from "@/components/FireTrailCursor";

import metadata from "./metadata";
import { power, circular } from "./font";

export { metadata };

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${power.variable} ${circular.variable}`}>
				<main>
					<GlobalProvider>
						<FireTrailCursor />
						{children}
					</GlobalProvider>
				</main>
			</body>
		</html>
	);
}

{
	/* <ScrollArea className="w-screen h-screen"></ScrollArea>; */
}
