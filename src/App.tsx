import {Navbar} from "./components/Navbar.tsx";
import {Container} from "./components/Container.tsx";
import { HeroSectionDesktop, HeroSectionMobile } from "./components/heroSection/HeroSection.tsx";
import { useEffect, useState } from "react";

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
		<Container classes={'bg-background'}>
			<section className={`h-screen flex flex-col justify-between py-7`}>
				<Navbar />
				{isDesktop ? <HeroSectionDesktop /> :	<HeroSectionMobile />}
			</section>
		</Container>
	)
}
export default App
