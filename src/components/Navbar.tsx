import {AnimatePresence, motion as m} from "framer-motion"
import type {FC} from "react"

interface Props {
		navIsOpen: boolean
		setNavIsOpen: (navIsOpen: boolean) => void
}

export const Navbar: FC<Props> = ({ navIsOpen, setNavIsOpen }) => {
		return (
				<m.header
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeIn", delay: 5 } }}
						className={`sticky top-0 capitalize text-beige-light-200 mx-6 pt-4 z-100`}
				>
						<nav className={`flex justify-between items-center md:items-center`}>
								<div className={`md:flex gap-x-12`}>
										<p className={`font-semibold relative w-fit capitalize`}>
												by henry
												<span className={`absolute -right-[10px] top-0`}>
              <img className={`size-[10px]`} src={"./src/assets/copyright.svg"} alt={``} />
            </span>
										</p>
										<p className={`font-light text-paragraph-1 text-[12px]`}>(FullStack Engineer)</p>
								</div>
								<AnimatePresence>
												<div onClick={() => setNavIsOpen(true)} className={`w-fit flex flex-col gap-y-1 cursor-pointer absolute right-0`}>
														<m.div animate={{
																opacity: navIsOpen ? 0 : 1,
																x: navIsOpen ? -20 : 0,
																transition: {duration: 0.5, ease : [0.76, 0, 0.24, 1]}
														}}
																	 className="bg-beige-light-400 w-[30px] h-[3px] ml-auto">
														</m.div>
														<m.div
																animate={{
																		opacity: navIsOpen ? 0 : 1,
																		transition: {duration: 0.5, ease : [0.76, 0, 0.24, 1]}
																}}
																className="bg-beige-light-400 w-[50px] h-[3px]"></m.div>
														<m.div animate={{
																opacity: navIsOpen ? 0 : 1,
																x: navIsOpen ? 20 : 0,
																transition: {duration: 0.5, ease : [0.76, 0, 0.24, 1]}
														}} className="bg-beige-light-400 w-[30px] h-[3px]"></m.div>
												</div>
								</AnimatePresence>
						</nav>
				</m.header>
		)
}

