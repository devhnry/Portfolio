import React from 'react'
import {AnimateLetters, AnimateWord} from "./AnimateText.tsx";
import {motion as m} from "framer-motion";

interface SectionHeaderProps {
		title: string,
		subtitle: string,
		description: string,
		length?: number,
}

const SectionHeader: React.FC<SectionHeaderProps> = ({title, subtitle, description, length}) => {
		return (
				<div className={`grid gap-10 relative z-[50]`}>
						<h3 className={`text-heading-2 relative uppercase font-inter heading-two font-medium tracking-tighter flex flex-wrap overflow-hidden`}>
								<AnimateLetters text={title}/><span className={`relative text-paragraph-1 top-[-10px] text-[40px] ${length ? '' : 'hidden'} `}>({length})</span>
						</h3>
						<div className={`text-paragraph-2 flex flex-col items-start gap-y-4`}>
								<m.p initial={{y: 10, opacity: 0}} viewport={{once: true}} whileInView={{
										y: 0,
										opacity: 1,
										transition: {duration: 0.2, ease: "easeInOut", delay: 0.4}
								}}
										 className={`uppercase font-mono text-md tracking-wider font-medium overflow-hidden`}>({subtitle})
								</m.p>
								<m.p className={`flex flex-wrap pb-8`}>
										<AnimateWord
												text={description}
												duration={0.3} delay={0.03} yLevel={15} viewport={true}/>
								</m.p>
						</div>
				</div>
		)
}
export default SectionHeader
