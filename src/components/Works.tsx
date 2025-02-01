import SelectedWorks from "./SelectedWorks.tsx";
import SectionHeader from "./SectionHeader.tsx";

type works = {
		field: string;
		name: string;
		keywords: string[];
		number?: number;
}

export const Works = () => {
		const selectedWorks: works[] = [
				{ field:'architecture & engineering' , name: 'arch studio' , keywords: ['react', 'typescript', 'framer-motion', '2024']},
				{ field:'dating & relationship' , name: 'whossy web app' , keywords: ['react', 'typescript', 'firebase', '2024']},
				{ field:'banking & finance' , name: 'finatic' , keywords: ['nextJS', 'typescript' , 'java', 'spring-boot','framer-motion', '2025']},
				{ field:'banking & finance' , name: 'online banking API' , keywords: ['java', 'spring-boot', '2024']}
		]

		return (
				<section className={`bg-black py-4 max-w-[1690px] px-4 xs:px-6 sm:px-8 lg:px-10 w-full mx-auto z-50 relative pb-[120px]`}>
						<SectionHeader title={`selected  works/`} subtitle={`projects`} description={'Featured projects that' +
								' have been meticulously crafted with passion to drive result and impact.'} length={selectedWorks.length} />
						<div className={`grid gap-10`}>
								{selectedWorks.map((works, i) => (
										<SelectedWorks key={i} field={works.field} name={works.name} keywords={works.keywords} />
								))}
						</div>
				</section>
		)
}
