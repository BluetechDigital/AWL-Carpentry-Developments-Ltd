// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	slideInRightFinish,
	slideInLeftInitial,
	slideInRightInitial,
} from "../animations/animations";
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IAboutContentImage} from "@/types/components";

// Styling
import styles from "../styles/components/AboutContentImage.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const AboutContentImage: FC<IAboutContentImage> = ({
	title,
	image,
	imageTwo,
	subtitle,
	paragraph,
	checkatrade,
}) => {
	return (
		<>
			<div className={styles.aboutContentImage}>
				<div className="flex flex-col-reverse xl:flex-row items-center justify-center gap-0 xl:gap-20">
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-col items-center justify-center w-full h-full xl:w-[35%]">
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="hidden xl:flex flex-col gap-2 py-2"
						>
							<motion.div
								viewport={{once: true}}
								initial={slideInLeftInitial}
								whileInView={slideInRightFinish}
							>
								<Image
									alt={image?.altText}
									src={image?.sourceUrl}
									width={image?.mediaDetails.width}
									height={image?.mediaDetails.height}
									className={`${
										image?.sourceUrl
											? "hidden xl:block w-full h-full min-h-[350px] object-cover object-center"
											: "hidden"
									}`}
									style={{
										clipPath: `polygon(0% 0%, 80% 0, 90% 35%, 75% 100%, 0% 100%)`,
									}}
								/>
							</motion.div>
							<motion.div
								viewport={{once: true}}
								initial={slideInLeftInitial}
								whileInView={slideInRightFinish}
							>
								<Image
									alt={imageTwo?.altText}
									src={imageTwo?.sourceUrl}
									width={imageTwo?.mediaDetails.width}
									height={imageTwo?.mediaDetails.height}
									className={`${
										imageTwo?.sourceUrl
											? "hidden xl:block w-full h-full min-h-[350px] object-cover object-center"
											: "hidden"
									}`}
									style={{
										clipPath: `polygon(0% 0%, 75% 0, 90% 65%, 80% 100%, 0% 100%)`,
									}}
								/>
							</motion.div>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex xl:hidden flex-col sm:flex-row gap-2 p-2"
						>
							<motion.div
								viewport={{once: true}}
								initial={slideInLeftInitial}
								whileInView={slideInRightFinish}
							>
								<Image
									alt={image?.altText}
									src={image?.sourceUrl}
									width={image?.mediaDetails.width}
									height={image?.mediaDetails.height}
									className={`${
										image?.sourceUrl
											? "block xl:hidden w-full h-[400px] object-cover object-center"
											: "hidden"
									}`}
								/>
							</motion.div>
							<motion.div
								viewport={{once: true}}
								initial={slideInRightInitial}
								whileInView={slideInRightFinish}
							>
								<Image
									alt={imageTwo?.altText}
									src={imageTwo?.sourceUrl}
									width={imageTwo?.mediaDetails.width}
									height={imageTwo?.mediaDetails.height}
									className={`${
										imageTwo?.sourceUrl
											? "block xl:hidden w-full h-[400px] object-cover object-center"
											: "hidden"
									}`}
								/>
							</motion.div>
						</motion.div>
					</div>
					<div className="bg-white flex flex-col xl:flex-row items-center justify-start gap-20 w-full xl:w-[65%]">
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className=" pb-10sm:py-20 px-4 w-full"
						>
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
								className="my-2 mb-6 max-w-2xl mx-auto xl:mx-0 uppercase text-black text-center xl:text-left font-extrabold leading-[2.75rem] text-4xl lg:text-5xl"
							>
								{title}
							</motion.h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-2xl mx-auto xl:mx-0 text-center xl:text-left text-darkGrey text-paragraph"
							/>
							<Image
								alt={checkatrade?.altText}
								src={checkatrade?.sourceUrl}
								width={checkatrade?.mediaDetails.width}
								height={checkatrade?.mediaDetails.height}
								className={`${
									checkatrade?.sourceUrl
										? "mx-auto xl:mx-0 w-fit h-[200px] object-contain object-center"
										: "hidden"
								}`}
							/>
						</motion.div>
						<div className="hidden xl:flex flex-col items-end justify-end gap-4 w-full xl:w-[10%] h-full min-h-[845px] bg-blue-darker" />
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutContentImage;
