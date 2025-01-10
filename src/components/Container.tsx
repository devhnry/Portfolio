import React, {ReactNode} from 'react'

interface ContainerProps {
	children: ReactNode
}

export const Container: React.FC<ContainerProps> = ({children}) => {
	return (
		<main className={`max-w-[1440px] px-6 w-full mx-auto`}>
			{children}
		</main>
	)
}
