// Imports
import {
	fadeIn,
	stagger,
	initial,
	initialTwo,
	slideInRightFinish,
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
	quality,
	subtitle,
	paragraph,
	contentBox,
	reliability,
	checkatrade,
}) => {
	return (
		<>
			<div
				className={
					styles.aboutContentImage +
					" relative py-0 px-4 bg-white bg-cover bg-center bg-no-repeat"
				}
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-lightgrey-white.svg")`,
				}}
			>
				<div className="container m-auto flex flex-col lg:flex-row py-12 pb-4 lg:pt-28 sm:pb-10 gap-16 lg:gap-x-24">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="w-full lg:w-[65%] flex flex-col items-center lg:items-baseline justify-center"
					>
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="max-w-sm mx-auto lg:mx-0 text-center xl:text-left text-base text-aqua-default"
						>
							{subtitle}
						</motion.h4>
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-3 max-w-3xl mx-auto lg:mx-0 uppercase text-black text-center lg:text-left font-extrabold text-lg md:text-xl"
						>
							{title}
						</motion.h3>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="flex flex-col lg:flex-row items lg:items-start justify-between mt-8 gap-12 lg:gap-8"
						>
							<div className="flex flex-col w-full lg:w-[65%]">
								<Paragraph
									content={paragraph}
									tailwindStyling="lg:max-w-lg text-black leading-[1.75rem] text-base text-center lg:text-left"
								/>
							</div>
							<div className="flex flex-col gap-6 w-full lg:w-[35%]">
								<div>
									<motion.h3
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="mb-1 uppercase text-center lg:text-left font-extrabold text-base text-blue-default"
									>
										{quality?.title}
									</motion.h3>
									<Paragraph
										content={quality?.paragraph}
										tailwindStyling="lg:max-w-xl text-black leading-[1.75rem] text-base text-center lg:text-left"
									/>
								</div>
								<div>
									<motion.h3
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="mb-1 uppercase text-center lg:text-left font-extrabold text-base text-blue-default"
									>
										{reliability?.title}
									</motion.h3>
									<Paragraph
										content={reliability?.paragraph}
										tailwindStyling="lg:max-w-xl text-black leading-[1.75rem] text-base text-center lg:text-left"
									/>
								</div>
								<Image
									alt={checkatrade?.altText}
									src={checkatrade?.sourceUrl}
									width={checkatrade?.mediaDetails.width}
									height={checkatrade?.mediaDetails.height}
									className={`${
										checkatrade?.sourceUrl
											? "mx-auto xl:mx-0 w-fit h-[125px] object-contain object-center"
											: "hidden"
									}`}
								/>
							</div>
						</motion.div>
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className="w-full lg:w-[35%] relative flex flex-col items-center lg:items-baseline justify-center"
					>
						<Image
							alt={image?.altText}
							src={image?.sourceUrl}
							width={image?.mediaDetails?.width}
							height={image?.mediaDetails?.height}
							className={
								image?.sourceUrl
									? `block object-cover object-center w-full h-[500px]`
									: `hidden`
							}
							style={{
								clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
							}}
						/>
						<div className="bg-blue-default absolute bottom-1/3 left-0 lg:left-[-50px] p-6 flex flex-col items-center justify-center">
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
							>
								<Image
									alt={contentBox?.icon?.altText}
									src={contentBox?.icon?.sourceUrl}
									width={contentBox?.icon?.mediaDetails?.width}
									height={contentBox?.icon?.mediaDetails?.height}
									className={
										contentBox?.icon?.sourceUrl
											? `block object-contain object-center w-full h-[50px] mb-4`
											: `hidden`
									}
								/>
							</motion.div>
							<motion.h3
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mb-1 uppercase text-center lg:text-center font-extrabold text-2xl tracking-[0.10rem] text-white"
							>
								{contentBox?.text}
							</motion.h3>
							<Paragraph
								content={contentBox?.subtext}
								tailwindStyling="max-w-xl text-white text-base sm:text-paragraph text-center lg:text-left"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default AboutContentImage;
