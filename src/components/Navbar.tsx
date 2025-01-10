// import React from 'react'

export const Navbar = () => {
	const navItems: string[] = ["services","works","about","experience","contact"]
	return (
		<header className={`font-roboto capitalize font-light`}>
			<nav>
				<div></div>
				<ul>
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
