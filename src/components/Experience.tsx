import SectionHeader from "./SectionHeader.tsx";
import {motion as m} from "framer-motion";

export const Experience = () => {

		return (
				<m.section
						className={`bg-black py-4 max-w-[1690px] px-4 xs:px-6 sm:px-8 lg:px-10 w-full mx-auto relative z-[50] rounded-b-2xl mb-[200px]`}>
						<SectionHeader title={`Professional Journey/`} subtitle={`experience`} description={`A timeline of meaningful roles and contributions. Each step reflects a commitment to growth, collaboration, and delivering impactful results across various industries and domains.`} />

				</m.section>
		)
}
