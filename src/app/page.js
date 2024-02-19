import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutMe } from "@/components/AboutMe";
import { WorkDone } from "@/components/WorkDone";
import { SocialBar } from "@/components/SocialBar";

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
