// Imports
import {
	fadeIn,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHeroTwo} from "@/types/components/index";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const HeroTwo: FC<IHeroTwo> = ({title, paragraph, backgroundImage}) => {
	return (
		<>
			<div className={styles.heroTwo}>
				<div className="lg:relative z-50 pt-[85px] lg:pt-[110px] lg:h-[60vh] xl:h-[50vh] flex flex-col lg:flex-row">
					<div
						className={
							styles.leftSideContent +
							" px-4 xl:px-28 py-16 lg:py-8 bg-blue-darkerTwo w-full xl:w-1/2 bg-cover bg-center bg-no-repeat"
						}
						style={{
							backgroundImage: `url("/svg/background/layered-peaks-haikei-blue-bluedarker.svg")`,
						}}
					>
						<motion.div
							viewport={{once: true}}
							initial={slideInLeftInitial}
							whileInView={slideInRightFinish}
							className="container px-4 lg:px-10 xl:px-0 mx-auto max-w-xl flex flex-col justify-center h-full"
						>
							<motion.h1
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-center lg:text-left uppercase text-lg md:text-xl xl:text-3xl text-white font-extrabold xl:leading-[2.5rem]"
							>
								{title}
							</motion.h1>
							<Paragraph
								content={paragraph}
								tailwindStyling="py-2 lg:max-w-sm xl:max-w-xl mx-auto lg:mx-0 text-white leading-[1.75rem] text-base text-center lg:text-left"
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
									? "w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-cover object-center"
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
