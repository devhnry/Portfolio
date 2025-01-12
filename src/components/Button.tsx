import React from "react";

interface ButtonProps {
	text: string;
}

export const Button: React.FC<ButtonProps> = ({text}) => {
	return (
		<button className={`bg-button text-button-text uppercase rounded-full px-8 py-5 w-fit font-oswald tracking-wider flex items-center justify-center gap-x-4 text-xl`}>
			{text}
			<img className={`size-4`} src={`src/assets/arrow-up.svg`} alt={``} />
		</button>
	)
}
