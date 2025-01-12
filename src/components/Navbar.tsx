import { motion as m } from "motion/react"
import { useState } from "react";

export const Navbar = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const navItems: string[] = ["services","works","about","experience","contact"]

	return (
			<header className={`font-inter capitalize text-md text-paragraph-1 md:text-[1.0625rem]`}>
				<nav className={`flex justify-between items-start md:items-center`}>
					<div className={`md:flex gap-x-12`}>
						<p className={`font-bold text-black relative w-fit`}>By Henry
							<span className={`absolute -right-[10px] top-0`}>
						<img className={`size-[10px]`} src={"./src/assets/copyright.svg"} alt={``}/>
						</span>
						</p>
						<p className={`font-light text-paragraph-1 text-sm xsl:text-[1.05rem] md:text-[clamp(0.9375rem,2.1vw,1.125rem)]`}>(Software Engineer)</p>
					</div>
					<ul className={`flex flex-col gap-y-[0.3px] md:flex-row items-start md:items-center gap-x-2 sm:text-[17px] font-light leading-[1.35] md:text-[clamp(0.9375rem,2.1vw,1.065rem)] overflow-hidden`}>
						{navItems.map((item, i) => {
							return (
								<li key={item} className="relative overflow-hidden flex cursor-none">
									<p className="block h-[28px] overflow-hidden"
										onMouseEnter={() => setHoveredIndex(i)}
										onMouseLeave={() => setHoveredIndex(null)} >
										<m.div
											className="flex flex-col gap-y-2 items-center"
											animate={{ y: hoveredIndex === i ? '-56%' : '0%' }}
											transition={{
												duration: 0.3,
												ease: [0.4, 0, 0.2, 1],
										}}
										>
											<span>{item}</span>
											<m.span initial={{ y: '0%' }} animate={{ opacity: hoveredIndex === i ? 1 : 0.5 }}>{item}</m.span>
										</m.div>
									</p>
									<span>,</span>
								</li>
							)
						})}
					</ul>
				</nav>
			</header>
	)
}
