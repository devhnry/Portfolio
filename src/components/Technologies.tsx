import {motion as m} from "framer-motion";
import SectionHeader from "./SectionHeader.tsx";
import {useEffect, useRef, useState} from "react";

export const Technologies = () => {
		const technologiesRef = useRef<HTMLDivElement>(null); // Ref for Technologies section
		const aboutMeRef = useRef<HTMLElement | null>(null); // Ref for AboutMe section

		const [progress, setProgress] = useState(0); // Progress state (0 to 1)

		useEffect(() => {
				// Set AboutMe ref dynamically
				aboutMeRef.current = document.getElementById("about-me");

				const handleIntersection = (entries: IntersectionObserverEntry[]) => {
						entries.forEach((entry) => {
								if (entry.target.id === "about-me") {
										// Update progress based on AboutMe's visibility
										if (entry.boundingClientRect.bottom < 0) {
												// AboutMe is out of view (above the viewport)
												setProgress((prev) => Math.min(prev + 0.1, 1));
										} else {
												// AboutMe is still visible
												setProgress(0);
										}
								}

								if (entry.target.id === "technologies") {
										// Update progress when Technologies comes into view
										if (entry.isIntersecting) {
												setProgress(1); // Full progress when visible
										}
								}
						});
				};

				// Set up Intersection Observer
				const observer = new IntersectionObserver(handleIntersection, {
						root: null, // Default: viewport
						rootMargin: "0px", // No margin
						threshold: [0, 0.5, 1], // Trigger at 0%, 50%, and 100% visibility
				});

				// Observe AboutMe and Technologies
				if (aboutMeRef.current) observer.observe(aboutMeRef.current);
				if (technologiesRef.current) observer.observe(technologiesRef.current);

				// Cleanup observer on component unmount
				return () => {
						observer.disconnect();
				};
		}, []);

		return (
				<m.section
						ref={technologiesRef}
						id="technologies"
						className="relative"
						style={{
								transform: `translateY(${(1 - progress) * -200}px)`, // Animate Y position
								opacity: progress, // Animate opacity
						}}
				>
						<m.div className="text-white">
								<SectionHeader title="Technologies/" />
						</m.div>
				</m.section>
		);
};
