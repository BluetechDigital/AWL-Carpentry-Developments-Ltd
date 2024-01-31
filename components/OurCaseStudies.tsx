// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IOurCaseStudies} from "@/types/components/index";
import {fadeIn, initial, initialTwo, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/OurCaseStudies.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const OurCaseStudies: FC<IOurCaseStudies> = ({
	title,
	subtitle,
	paragraph,
	mainCaseStudy,
	caseStudiesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ourCaseStudies +
					" relative py-12 lg:py-40 sm:py-24 px-4 bg-white bg-cover bg-no-repeat bg-center"
				}
			>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="container relative m-auto flex flex-col items-center gap-6"
				>
					<div className="flex flex-col items-center">
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="max-w-2xl mx-auto xl:mx-0 text-center xl:text-left uppercase font-bold text-paragraph text-aqua-default"
						>
							{subtitle}
						</motion.h4>
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-2 mb-6 max-w-2xl mx-auto xl:mx-0 uppercase text-black text-center  font-extrabold leading-[2.75rem] text-4xl lg:text-5xl"
						>
							{title}
						</motion.h3>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto text-black leading-[1.75rem] text-paragraph text-center"
						/>
					</div>
					<div className="w-full relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-6 lg:py-12 px-0 sm:px-4 gap-6 items-start justify-center"></div>
				</motion.div>
			</div>
		</>
	);
};

export default OurCaseStudies;