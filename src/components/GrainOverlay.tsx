import { useEffect, useState } from "react"

export function GrainOverlay() {
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	return (
		<div
			className={`pointer-events-none fixed inset-0 z-50 mix-blend-multiply
        [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC45IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMzc1Ii8+PC9zdmc+')]
        after:content-[''] after:absolute after:inset-0 after:bg-repeat after:opacity-20 after:mix-blend-overlay
        before:content-[''] before:absolute before:inset-0 before:bg-[#0f0f0f] before:opacity-[0.15] before:mix-blend-darken
        ${isLoaded ? "opacity-100" : "opacity-0"}
        transition-opacity duration-1000`}
			aria-hidden="true"
		/>
	)
}
