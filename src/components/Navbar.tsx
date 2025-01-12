export const Navbar = () => {
	const navItems: string[] = ["services","works","about","experience","contact"]
	return (
			<header className={`font-inter capitalize text-md text-paragraph-1`}>
				<nav className={`flex justify-between items-start md:items-center`}>
					<div className={`md:flex gap-x-12`}>
						<p className={`font-bold text-black relative w-fit`}>By Henry
							<span className={`absolute -right-[10px] top-0`}>
						<img className={`size-[10px]`} src={"./src/assets/copyright.svg"} alt={``}/>
						</span>
						</p>
						<p className={`font-light text-paragraph-1 text-sm xsl:text-[1.05rem] md:text-md`}>(Software Engineer)</p>
					</div>
					<ul className={`flex flex-col gap-y-[0.3px] md:flex-row items-start md:items-center gap-x-2 sm:text-[17px] font-light leading-[1.35] md:text-md`}>
						{navItems.map((item, i) => {
							return (
								<li className={``} key={i}>{navItems.length - 1 === i ? item : `${item},`}</li>
							)
						})}
					</ul>
				</nav>
			</header>
	)
}
