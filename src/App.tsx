// import {useEffect, useState} from "react";
import {SectionMobile} from "./components/HeroSection.tsx";
import image1 from "./assets/blur-image.webp";


const App = () => {
		// const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

		// useEffect(() => {
		// 		const handleResize = () => {
		// 				// setIsDesktop(window.innerWidth >= 768);
		// 		};
		// 		window.addEventListener("resize", handleResize);
		// 		return () => window.removeEventListener("resize", handleResize);
		// }, []);

		return (
				<main style={{ backgroundImage: `url(${image1})`}} className={`bg-no-repeat bg-cover bg-center h-dvh`}>
						<SectionMobile />
				</main>
				// <main className={`bg-background relative top-0`}>
				// 		<Container>
				// 				<m.section initial={{ height: 0 }}
				// 									 animate={{ height: "100dvh",
				// 											 transition: {
				// 											 ease: [0.43, 0.23, 0.23, 0.96],
				// 													 duration: 3,
				// 						}
				// 				}} className={`h-dvh flex flex-col justify-between py-7`}>
				// 						<Navbar/>
				// 						{isDesktop ? <HeroSectionDesktop/> : <HeroSectionMobile/>}
				// 				</m.section>
				// 		</Container>
				// 		<div className={`relative top-0 z-20 min-h-screen w-full overflow-x-clip`}>
				// 				<Services/>
				// 		</div>
				// 		<Works/>
				// 		<Experience/>
				// 		<AboutMe />
				// 		<Technologies />
				// </main>
		)
}
export default App
