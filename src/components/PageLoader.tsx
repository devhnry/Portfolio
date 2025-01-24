import {motion as m} from "framer-motion";

const PageLoader = () => {

		return (
				<main className={`absolute inset-0 grid items-center justify-items-center z-50`}>
						<m.div className="bg-black absolute inset-0" initial={{height: "100%"}} animate={{
								borderRadius: "0 0 50vh 50vh",
								height: "-80%",
								transition: {
										ease: [0.43, 0.23, 0.23, 0.96],
										duration: 10,
								},
						}}>
						</m.div>
				</main>)
};
export default PageLoader;
