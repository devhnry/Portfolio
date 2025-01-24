import {SectionMobile} from "./components/HeroSection.tsx";
import backgroundImage from "./assets/hero-image.webp";


const App = () => {

		return (
				<main style={{ backgroundImage: `url(${backgroundImage})`}} className={`bg-no-repeat bg-cover bg-center h-dvh`}>
						<SectionMobile />
				</main>
		)
}
export default App
