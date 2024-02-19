import { Header } from "@/components/Header";
import { AboutMe } from "@/components/AboutMe";
import { WorkDone } from "@/components/WorkDone";
import { SocialBar } from "@/components/SocialBar";
import { Footer } from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<SocialBar />
			<WorkDone />
			<AboutMe />
			<Footer />
		</>
	);
}
