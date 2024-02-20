import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutMe } from "@/components/AboutMe";
import { WorkDone } from "@/components/WorkDone";
import { SocialBar } from "@/components/SocialBar";
import { NavBar } from "@/components/NavBar";

export default function Home() {
	return (
		<>
			<NavBar />
			<Header />
			<SocialBar />
			<WorkDone />
			{/* <AboutMe /> */}
			{/* <Footer /> */}
		</>
	);
}
