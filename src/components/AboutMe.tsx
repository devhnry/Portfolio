import {motion as m} from "framer-motion"
import SectionHeader from "./SectionHeader.tsx";

export const AboutMe = () => {
		return (
				<m.section id="about-me" className={`bg-black py-4 max-w-[1690px] px-4 xs:px-6 sm:px-8 lg:px-10 w-full mx-auto relative z-[50] text-paragraph-2 pb-[80px] rounded-b-2xl`}>
						<SectionHeader title={'DEVELOPER & CREATOR/'}  />
						<div className={`bg-gray-500 w-full h-[500px] mb-10`}></div>
						<p className={`text-paragraph-3 font-medium text-[1.125rem] mb-14`}>With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting positive impact on the digital landscape and your business.
						</p>
						<div className={`grid gap-4`}>
								<p>(ABOUT ME)</p>
								<p>Creating great web experiences is my primary focus. I ensure each project leaves users with a
									 feel-good sensation through meticulous attention to detail and user-centric design principles. </p>
								<p>When I'm not immersed in web development and design, you can find me sharing insights about my
									 freelance journey on YouTube, bouldering, playing music, or tending to my cherished houseplants.</p>
						</div>

				</m.section>
		)
}
