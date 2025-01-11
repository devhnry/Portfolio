import {Navbar} from "./components/Navbar.tsx";
import {Container} from "./components/Container.tsx";
import { HeroSectionMobile } from "./components/heroSection/HeroSection.tsx";

const App = () => {
	return (
		<Container classes={'bg-background'}>
			<section className={`h-screen flex flex-col justify-between py-7`}>
				<Navbar />
				<HeroSectionMobile />
			</section>
		</Container>
	)
}
export default App
