import {SectionMobile} from "./components/HeroSection.tsx";
import backgroundImage from "./assets/hero-image.webp";
import {Navbar} from "./components/Navbar.tsx";


const App = () => {

		return (
				<main style={{ backgroundImage: `url(${backgroundImage})`}} className={`bg-no-repeat relative bg-cover bg-center h-dvh`}>
						<Navbar />
						<SectionMobile />
				</main>
		)
}
export default App
