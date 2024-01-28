// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHeroTwo} from "@/types/components/index";
import {
	fadeIn,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const HeroTwo: FC<IHeroTwo> = ({title, paragraph, backgroundImage}) => {
	return (
		<>
			<div className={styles.heroTwo}>
				<div className="relative h-[40vh] flex flex-col lg:flex-row">
					<div
						className={
							styles.leftSideContent +
							" px-4 pt-20 pb-8 h-full bg-blue-darker w-full xl:w-1/2"
						}
					>
						<motion.div
							viewport={{once: true}}
							initial={slideInLeftInitial}
							whileInView={slideInRightFinish}
							className="container px-4 mx-auto"
						>
							<motion.h1
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="max-w-3xl flex flex-col sm:block text-3xl md:text-4xl text-white font-bold leading-[3rem] lg:leading-[4rem]"
							>
								{title}
							</motion.h1>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-2xl py-2 text-white leading-[1.75rem] text-base sm:text-paragraph text-center sm:text-left"
							/>
						</motion.div>
					</div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={
							styles.rightSideContent + " flex flex-col w-full xl:w-1/2"
						}
					>
						<Image
							alt={backgroundImage?.altText}
							src={backgroundImage?.sourceUrl}
							width={backgroundImage?.mediaDetails.width}
							height={backgroundImage?.mediaDetails.height}
							className={`${
								backgroundImage?.sourceUrl
									? "w-full h-full max-h-[300px] lg:max-h-[400px] object-cover object-center"
									: "hidden"
							}`}
						/>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default HeroTwo;
