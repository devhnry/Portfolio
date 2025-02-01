import {AnimatePresence, motion as m} from "framer-motion"
import type {FC} from "react"

interface Props {
		navIsOpen: boolean
		setNavIsOpen: (navIsOpen: boolean) => void
}

export const NavbarMenu: FC<Props> = ({ navIsOpen, setNavIsOpen }) => {
		const navItems = ["home", "about", "works", "services", "contact"]
		const perspective = {
				initial: {
						opacity: 0,
						rotateX: 90,
						translateY: 80,
						translateX: -20,
				},
				enter: (i: number) => ({
						opacity: 1,
						rotateX: 0,
						translateY: 0,
						translateX: 0,
						transition: {
								duration: 0.65,
								delay: 1.4 + (i * 0.1),
								ease: [.215,.61,.355,1],
								opacity: { duration: 0.35}
						}
				}),
				exit: {
						opacity: 0,
						transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1]}
				}
		}

		return (
				<AnimatePresence>
						{navIsOpen && (
								<m.div
										initial="closed"
										animate="open"
										exit="closed"
										variants={{
												open: {
														transition: { staggerChildren: 0.1, delayChildren: 0.2 },
												},
												closed: {
														transition: { staggerChildren: 0.1, staggerDirection: -1 },
												},
										}}
										className="fixed inset-0 z-102 overflow-hidden flex flex-col pointer-events-auto"
								>
										{[...Array(10)].map((_, i) => (
												<m.div
														key={i}
														variants={{
																open: {
																		scaleX: 1,
																		transition: { duration: 0.5, ease: "easeInOut" },
																},
																closed: {
																		scaleX: 0,
																		transition: { duration: 0.5, ease: "easeInOut" },
																},
														}}
														style={{ originX: 1 }}
														className="flex-1 bg-black -mt-[5px]"
												/>
										))}

										{/* Navigation Menu Items */}
										<div className={`absolute top-[50%] -translate-y-[40%] inset-0 text-beige-light-400`}>
												{/* Toggle Button */}
												{navIsOpen &&
														<AnimatePresence>
																<m.div
																		initial={{ opacity: 0 }}
																		animate={{
																				y: navIsOpen ? -20 : 30,
																				opacity: navIsOpen ? 1 : 0,
																				transition: {
																						ease: "easeInOut",
																						duration: 0.5,
																						delay: 2
																				}
																}}
																onClick={() => setNavIsOpen(false)}
																		className={`w-fit cursor-pointer p-4 -translate-y-[25px] flex flex-col gap-y-1 mx-auto`}>
																		<div className="bg-beige-light-400 w-[30px] rotate-45 h-[1px]"></div>
																		<div className="bg-beige-light-400 w-[30px] -rotate-45 -translate-y-[5px] h-[1px]"></div>
																</m.div>
													</AnimatePresence>
												}

												<div
														className={`grid text-[50px] font-light place-content-center place-items-center items-center text-center uppercase font-bespoke gap-y-7`}>
														{navItems.map((item, i) => (
																<m.p style={{
																		perspective: "120px",
																		perspectiveOrigin: "bottom"}}
																 variants={perspective}
																 custom={i + 1}
																 initial="initial"
																 animate="enter"
																 exit="exit"
																className={`leading-[80%] flex gap-x-4 items-start ${i % 2 != 0 ? 'flex-row-reverse' : ''}`} key={i}>
																		<span className={`block font-cabinet font-light -mt-[10px] text-[16px] tracking-wider`}>{`(${i + 1})`}</span>
																		{item}
																</m.p>
														))}
												</div>
										</div>


								</m.div>
						)}
				</AnimatePresence>
		)
}

