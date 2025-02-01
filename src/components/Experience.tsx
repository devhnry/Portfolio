import SectionHeader from "./SectionHeader.tsx";
import {motion as m} from "framer-motion";
import SelectedExperience from "./SelectedExperience.tsx";

type ExperienceTabs = {
		date: string;
		jobTitle: string;
		jobType: string;
		company: string;
		details: string[];
		techStacks: string[];
}

export const Experience = () => {

		const selectedExperiences: ExperienceTabs[] = [
				{
				date: 'Mar 2024 - Aug 2024',
				jobTitle: 'Java Software Engineer',
				jobType: 'Internship',
				company: 'Remita',
				details: ['Developed an appraisal system prototype integrating GitLab data to track user work rates' +
				' successfully delivering a functional first version.', 'Tested and resolved bugs in a Captcha Service to' +
				' enhance reliability.', 'Built a banking simulation API to model mobile app and ATM functionalities,' +
				' including withdrawal operations.', 'Explored micro-services architecture and implemented rigorous testing' +
				' protocols to ensure system robustness.'],
				techStacks: ['java', 'spring-boot', 'sql']
				},
				{
				date: 'Sep 2024',
				jobTitle: 'Java Software Engineer',
				jobType: 'Hackathon',
				company: 'KoraPay',
				details: ['Developed the backend for PayCraft, a payroll system prototype enabling SMEs to onboard,\n' +
				'manage employees, and process payroll efficiently.', 'Integrated USSD code functionality to streamline' +
				' employee payments and wallet funding via a single dial, addressing accessibility challenges in emerging markets.', 'Designed secure APIs to support wallet funding, salary disbursements, and transaction\n' +
				'management, ensuring seamless operations for SME users.', 'Implemented user authentication and robust data' +
				' handling to safeguard payroll records and transactions.'],
				techStacks: ['java', 'spring-boot', 'sql', 'kora api']
				}
		]

		return (
				<m.section className={`bg-black py-4 max-w-[1690px] px-4 xs:px-6 sm:px-8 lg:px-10 w-full mx-auto relative z-50 pb-[120px]`}>
						<SectionHeader title={`Professional Journey/`} subtitle={`experience`} description={`A timeline of meaningful roles and contributions. Each step reflects a commitment to growth, collaboration, and delivering impactful results across various industries and domains.`} />
						<div className={`grid gap-10`}>
								{selectedExperiences.map((experience, i) => (
										<SelectedExperience key={i} date={experience.date} jobType={experience.jobType} techStacks={experience.techStacks} details={experience.details} company={experience.company} jobTitle={experience.jobTitle} />
								))}
						</div>

				</m.section>
		)
}
