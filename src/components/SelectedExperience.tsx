import React from 'react'

interface Props {
		date: string;
		jobTitle: string;
		jobType: string;
		company: string;
		details: string[];
		techStacks: string[];
}

const SelectedExperience: React.FC<Props> = ({date, jobTitle, company, details, techStacks, jobType}) => {

		return (
				<div className={`text-paragraph-3`}>
						<p className={`text-paragraph-1 pb-0.5`}>{date} &middot; {jobType}</p>
						<div className={`grid gap-4`}>
								<h4 className={`font-bold`}><span>{jobTitle}</span> &middot; <span>{company}</span></h4>
								<ul className={`list-disc *:ml-6 grid gap-3 text-paragraph-2`}>
										{details.map((detail, i) => (
												<li key={i} >{detail}</li>
										))}
								</ul>
								<div className={`buttons uppercase text-[12px] *:border-paragraph-3/70 font-inter *:border-[0.5px] *:w-fit *:rounded-full *:px-2 *:py-0.5 flex gap-x-1 ml-auto w-fit`}>
										{techStacks.map((stack, i) => (
												<p key={i}>{stack}</p>
										))}
								</div>
						</div>
				</div>
		)
}
export default SelectedExperience
