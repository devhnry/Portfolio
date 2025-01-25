import {AnimatePresence, motion as m} from "framer-motion"
import {useEffect, useState} from "react";

const letterVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: (i: number) => ({
				y: 0,
				opacity: 1,
				transition: {
						delay: i * 0.1,
						duration: 0.5,
				},
		}),
		exit: (i: number) => ({
				y: 50,
				opacity: 0,
				transition: {
						delay: i === 2 ? 1 : i * 0.1, // `H` (index 2) exits last
						duration: 0.5,
				},
		}),
};


export const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
		const [showIntro, setShowIntro] = useState(true)
		const text = "BYHENRY"

		useEffect(() => {
				const timer = setTimeout(() => {
						setShowIntro(false)
				}, 2500) // Adjust timing as needed

				return () => clearTimeout(timer)
		}, [])

		useEffect(() => {
				if (!showIntro) {
						const timer = setTimeout(() => {
								onComplete()
						}, 2500) // Time for the exit animation and black screen

						return () => clearTimeout(timer)
				}
		}, [showIntro, onComplete])

		return (
				<m.div
						className="fixed inset-0 bg-black flex items-center justify-center z-50 rounded-b-[40vw]"
						initial={{ height: "100%" }}
						animate={{ height: showIntro ? "100%" : "0%" }}
						transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
				>
						<m.div className="overflow-hidden">
								<AnimatePresence>
										{showIntro && (
												<m.div className="flex fixed bottom-0 left-0 right-0 mx-auto w-fit">
														{text.split("").map((letter, index) => (
																<m.span
																		key={index}
																		className="text-white text-center leading-[70%] tracking-tight font-chillax text-[75px] font-bold"
																		variants={letterVariants}
																		custom={index}
																		initial="hidden"
																		animate="visible"
																		exit="exit"
																>
																		{letter}
																</m.span>
														))}
												</m.div>
										)}
								</AnimatePresence>
						</m.div>
				</m.div>
		)
}