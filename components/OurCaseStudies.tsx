// Imports
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurCaseStudies} from "@/types/components/index";
import {fadeIn, initial, initialTwo, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/OurCaseStudies.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import OurCaseStudiesCard from "./Cards/OurCaseStudiesCard";

const OurCaseStudies: FC<IOurCaseStudies> = ({
	title,
	subtitle,
	paragraph,
	mainCaseStudy,
	caseStudiesGrid,
}) => {
	return (
		<>
			<div className={styles.ourCaseStudies + " py-12 lg:pt-20 px-4 bg-white"}>
				<div className="containers xl:px-4 py-0 flex flex-col-reverse xl:flex-row items-center justify-between gap-6 lg:gap-12 xl:gap-20">
					<Link
						href={`${mainCaseStudy?.link?.url}`}
						target={mainCaseStudy?.link?.target}
						className="flex flex-col items-center justify-end p-0 h-full min-h-[400px] xl:min-h-[750px] 2xl:min-h-[660px] w-full xl:w-[35%] bg-center bg-no-repeat bg-cover"
						style={{
							backgroundImage: `url("${mainCaseStudy?.image?.sourceUrl}")`,
						}}
					>
						<div className="bg-blue-darkerTwo/50 px-4 py-10 w-full">
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-center lg:text-left font-bold text-base lg:text-paragraph text-aqua-default"
							>
								{mainCaseStudy?.subtitle}
							</motion.h4>
							<motion.h3
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mt-2 text-white text-center lg:text-left font-extrabold leading-[2rem] text-paragraph lg:text-lg"
							>
								{mainCaseStudy?.title}
							</motion.h3>
						</div>
					</Link>
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-col gap-6 w-full h-full xl:w-[65%]"
					>
						<div className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:px-0 lg:py-0 gap-6 lg:gap-20 mb-0 lg:mb-20">
							<div className="flex flex-col w-full lg:w-1/2">
								<motion.h4
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="max-w-2xl mx-auto xl:mx-0  text-center lg:text-left uppercase font-bold text-paragraph text-aqua-default"
								>
									{subtitle}
								</motion.h4>
								<motion.h3
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="mt-2 uppercase text-black text-center lg:text-left font-extrabold leading-[2.75rem] text-4xl lg:text-5xl"
								>
									{title}
								</motion.h3>
							</div>
							<Paragraph
								content={paragraph}
								tailwindStyling="w-full lg:w-1/2 lg:max-w-3xl mx-auto lg:0 text-black leading-[1.75rem] text-paragraph text-center lg:text-left"
							/>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 px-0 gap-6 lg:gap-12 items-center justify-between">
							{caseStudiesGrid?.length > 0 ? (
								caseStudiesGrid.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<OurCaseStudiesCard
											link={item?.link}
											image={item?.image}
											title={item?.title}
											subtitle={item?.subtitle}
										/>
									</Fragment>
								))
							) : (
								<></>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default OurCaseStudies;
