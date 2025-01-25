import {motion as m} from "framer-motion";

export const Navbar = () => {

		return (
				<m.header initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeIn", delay: 5 } }} className={`sticky top-0 capitalize text-beige-light-200 mx-6 pt-4`}>
						<nav className={`flex justify-between items-center md:items-center`}>
								<div className={`md:flex gap-x-12`}>
										<p className={`font-semibold  relative w-fit capitalize`}>byhenry
												<span className={`absolute -right-[10px] top-0`}>
														<img className={`size-[10px]`} src={"./src/assets/copyright.svg"} alt={``}/>
												</span>
										</p>
										<p className={`font-light text-paragraph-1 text-[12px]`}>
												(FullStack Engineer)
										</p>
								</div>
								<div className={`w-fit flex flex-col gap-y-1`}>
										<div className={`bg-beige-light-400 w-[30px] h-[3px] ml-auto`}></div>
										<div className={`bg-beige-light-400 w-[50px] h-[3px]`}></div>
										<div className={`bg-beige-light-400 w-[30px] h-[3px]`}></div>
								</div>
						</nav>
				</m.header>
		)
}
