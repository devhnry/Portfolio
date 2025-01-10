export const Navbar = () => {
	const navItems: string[] = ["services","works","about","experience","contact"]
	return (
		<header className={`font-roboto capitalize font-light text-md px-6 py-7 text-paragraph-1`}>
			<nav className={`flex justify-between items-start md:items-center`}>
				<div className={`md:flex gap-x-12`}>
					<p className={`font-bold text-black relative w-fit`}>By Henry
						<span className={`absolute -right-[14px] top-0`}>
						<img className={`size-3`} src={"./src/assets/copyright.svg"} alt={``} />
						</span>
					</p>
					<p className={`font-light text-paragraph-1 text-sm`}>( Software Engineer )</p>
				</div>
				<ul className={`sl:flex items-center gap-x-2 sl:text-sm`}>
					{navItems.map((item, i) => {
						console.log(i)
						return (
							<li className={``} key={i}>{navItems.length - 1 === i ? item : `${item},`}</li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}
