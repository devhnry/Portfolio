import React, {ReactNode} from 'react'

interface ContainerProps {
	children: ReactNode
	classes?: string
}

export const Container: React.FC<ContainerProps> = ({children, classes}) => {
	return (
		<main className={`max-w-[1690px] px-6 sm:px-8 lg:px-10 w-full mx-auto overscroll-none overflow-x-hidden ${classes ? `!${classes}` : ''}`}>
			{children}
		</main>
	)
}
