import React, { useState } from "react";
import { motion as m } from "framer-motion";

interface ButtonProps {
	text: string;
}

export const Button: React.FC<ButtonProps> = ({text}) => {
	const [hoveredOn, setHoveredOn] = useState<boolean>(false)

	return (
		<button onMouseEnter={() => setHoveredOn(true)} onMouseLeave={() => setHoveredOn(false)} className={`bg-button text-button-text uppercase rounded-full px-8 pt-[18px] pb-5 w-fit font-oswald tracking-wider flex items-center justify-center gap-x-4 text-xl relative overflow-hidden`}>
			<div className={`block h-[28px] overflow-hidden relative z-20`}>
				<m.div className="flex flex-col gap-y-2 items-center"
							 animate={{ y: hoveredOn ? '-55.5%' : '0%' }}
							 transition={{
								 duration: 0.3,
								 ease: [0.4, 0, 0.2, 1],
							 }}>
					<span>{text}</span>
					<m.span initial={{ y: '0%' }} animate={{ opacity: hoveredOn ? 1 : 0.5 }}>{text}</m.span>
				</m.div>
			</div>
			<m.img animate={{scale: hoveredOn ? [1.1, 1.3, 1] : 1}} className={`size-4 relative z-20`} src={`src/assets/arrow-up.svg`} alt={``} />
			<span className="absolute inset-0 z-10 block overflow-hidden">
				<span className={`block h-full w-full rounded-full bg-button-hover transition-all duration-500 ease-expo ${hoveredOn ? 'translate-y-0 rounded-none' : 'translate-y-full'}`}></span>
			</span>
		</button>
	)
}
