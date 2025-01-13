import React from "react";

interface ServiceTabsProps {
		index: number;
		title: string;
    text: string;
		services: string[]
}

export const ServiceTabs: React.FC<ServiceTabsProps> = ({index, title, text, services}) => {
		return (
				<div style={{top: `calc(15vh + ${(index - 1) * 5.3}em)`,}}
						 className={`grid pt-8 border-t-[0.5px] border-paragraph-3/50 sticky top-0 items-start text-paragraph-2 z-[${30 * (index - 1)}] bg-black ${
								 index === 1 ? 'mb-[17.25em]'
										 : index === 2 ? 'mb-[11.4em]'
												 : 'mb-[5.4em]'
						 }`}>
						<h3 className={`text-background font-inter text-[1.9rem] capitalize leading-tight font-medium *:inline-block flex gap-x-2 pb-7`}>
								<span>(0{index})</span> <span>{title}</span>
						</h3>
						<div className={`grid gap-y-4 items-start mt-4`}>
								<p className={``}>{text}</p>
								<div>
										{services.map((word: string, i: number) => (
												<p key={i}
													 className={`*:inline-block flex items-center font-mono gap-x-4 border-b-[0.8px] border-b-heading-2/50 py-2.5`}>
														<span className={`text-[1rem]`}>0{i + 1}&nbsp;</span>
														<span className={`capitalize text-heading-2 text-[1.3rem] font-inter`}>{word}</span>
												</p>
										))}
								</div>
						</div>
				</div>
		);
};
