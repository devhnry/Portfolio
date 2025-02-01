import {SectionMobile} from "./components/HeroSection.tsx";
import backgroundImage from "./assets/hero-image.webp";
import {Navbar} from "./components/Navbar.tsx";
import {NavbarMenu} from "./components/NavbarMenu.tsx";
import {useState} from "react";


const App = () => {
		const [navIsOpen, setNavIsOpen] = useState<boolean>(false)

		return (
				<main style={{ backgroundImage: `url(${backgroundImage})`}} className={`bg-no-repeat relative bg-cover bg-center h-dvh`}>
						<NavbarMenu setNavIsOpen={setNavIsOpen} navIsOpen={navIsOpen} />
						<Navbar setNavIsOpen={setNavIsOpen} navIsOpen={navIsOpen} />
						<SectionMobile />
				</main>
		)
}
export default App
