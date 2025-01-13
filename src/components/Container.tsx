import React, {ReactNode} from 'react'

interface ContainerProps {
		children: ReactNode
		classes?: string
}

export const Container: React.FC<ContainerProps> = ({children, classes = ""}) => {
		return (
				<section
						className={`max-w-[1690px] px-4 xs:px-6 sm:px-8 lg:px-10 w-full mx-auto overflow-x-hidden overflow-y-clip relative ${classes}`}>
						{children}
				</section>
		)
}
