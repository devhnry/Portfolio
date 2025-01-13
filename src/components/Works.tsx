import {AnimateLetters, AnimateWord} from "./AnimateText.tsx";
import {motion as m} from "framer-motion";
import SelectedWorks from "./SelectedWorks.tsx";

type works = {
		field: string;
		name: string;
		keywords: string[];
}

export const Works = () => {
		const selectedWorks: works[] = [
				{ field:'architecture and engineering' , name: 'arch studio' , keywords: ['design', 'development', '2024'],}
		]

		return (
				<section className={`bg-black py-4 max-w-[1690px] px-4 xs:px-6 sm:px-8 lg:px-10 w-full mx-auto`}>
						<div className={`grid gap-10 relative`}>
								<h3 className={`text-heading-2 uppercase font-inter heading-two font-medium tracking-tighter flex flex-wrap overflow-hidden`}>
										<AnimateLetters text={`selected  works/`}/>
								</h3>
								<div className={`text-paragraph-2 flex flex-col items-start gap-y-4`}>
										<m.p initial={{y: 10, opacity: 0}} viewport={{once: true}} whileInView={{
												y: 0,
												opacity: 1,
												transition: {duration: 0.2, ease: "easeInOut", delay: 0.4}
										}}
												 className={`uppercase font-mono text-md tracking-wider font-medium overflow-hidden`}>(projects)
										</m.p>
										<m.p className={`flex flex-wrap pb-8`}>
												<AnimateWord
														text={'Featured projects that have been meticulously crafted with passion to drive result' +
																' and impact.'}
														duration={0.3} delay={0.03} yLevel={15} viewport={true}/>
										</m.p>
								</div>
						</div>

						<div>
								{selectedWorks.map((works, i) => (
										<SelectedWorks key={i} field={works.field} name={works.name} keywords={works.keywords} />
								))}
						</div>
				</section>
		)
}
