import {useEffect, useState} from "react"

export function GrainOverlay() {
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	return (
			<div
					className={`pointer-events-none fixed inset-0 z-50 mix-blend-screen opacity-[0.07]
        [background-image:url('https://i.ibb.co/FhfBXMD/static.jpg')]
        after:content-[''] after:absolute after:inset-0 after:bg-repeat after:opacity-[0.02] after:mix-blend-screen
        before:content-[''] before:absolute before:inset-0 before:bg-[#000000] before:opacity-[0.02] before:mix-blend-screen
        ${isLoaded ? "opacity-100" : "opacity-0"}
        transition-opacity duration-1000 z-[99999]`}
					aria-hidden="true"
			/>
	)
}
