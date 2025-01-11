import React, {ReactNode} from 'react'

interface ContainerProps {
	children: ReactNode
	classes?: string
}

export const Container: React.FC<ContainerProps> = ({children, classes}) => {
	return (
		<main className={`max-w-[1440px] px-6 w-full mx-auto overscroll-none ${classes ? `!${classes}` : ''}`}>
			{children}
		</main>
	)
}
