import {Navbar} from "./components/Navbar.tsx";
import {Container} from "./components/Container.tsx";
import { HeroSectionDesktop, HeroSectionMobile } from "./components/heroSection/HeroSection.tsx";
import { useEffect, useState } from "react";
import { Services } from "./components/Services.tsx";

const App = () => {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<main className={`bg-background`}>
			<Container>
				<section className={`h-dvh flex flex-col justify-between py-7`}>
					<Navbar />
					{isDesktop ? <HeroSectionDesktop /> :	<HeroSectionMobile />}
				</section>
			</Container>
			<Services />
		</main>
	)
}
export default App
