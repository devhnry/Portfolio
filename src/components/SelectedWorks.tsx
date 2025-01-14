import React from 'react'

interface Props {
		field: string,
		name: string,
		keywords: string[],
}

const SelectedWorks: React.FC<Props> = ({field, name, keywords}) => {
		return (
				<div className={`box text-paragraph-1 capitalize z-[50] relative`}>
						<div className={`placeholder-image size-[320px] bg-gray-500`}></div>
						<div className={`box details grid py-4`}>
								<p className={`project-background text-[1.2rem] font-quattrocento`}>{field}</p>
								<h4 className={`project font-bold uppercase title text-paragraph-3 text-[1.8rem] pb-1`}>{name}</h4>
								<div className={`buttons uppercase text-[10px] *:border-paragraph-3/70 font-inter *:border-[0.5px] *:w-fit *:rounded-full *:px-2 *:py-0.5 flex gap-x-1 gap-y-2 flex-wrap`}>
										{keywords.map((word: string, index: number) => (
												<p className={(index + 1 == keywords.length) ? 'bg-paragraph-2 text-black' : ''} key={word}>{word}</p>
										))}
								</div>
						</div>
				</div>
		)
}
export default SelectedWorks
