// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
	stagger,
} from "../animations/animations";
import {FC, Fragment} from "react";
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
	bulletPointsSection,
}) => {
	return (
		<>
			<div className={styles.aboutContentImage}>
				<div className="flex flex-col-reverse xl:flex-row items-center justify-center">
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className="flex flex-row w-full h-full xl:w-1/2 gap-2 my-2"
					>
						<div className="grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-col gap-2 w-full h-full xl:w-2/3">
							<div className="hidden xl:block w-full">
								<div
									className="w-full h-[800px] max-h-[300px] xl:max-h-[400px] bg-cover bg-center bg-no-repeat"
									style={{
										backgroundImage: `url("${image?.sourceUrl})`,
										clipPath: `polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)`,
									}}
								/>
								<div
									className="hidden xl:block w-full h-[800px] max-h-[300px] xl:max-h-[400px] bg-cover bg-center bg-no-repeat"
									style={{
										backgroundImage: `url("${imageTwo?.sourceUrl})`,
										clipPath: `polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)`,
									}}
								/>
							</div>
							<div className="block xl:hidden w-full flex flex-col sm:flex-row xl:flex-col">
								<div
									className="w-full h-[800px] max-h-[300px] xl:max-h-[400px] bg-cover bg-center bg-no-repeat"
									style={{
										backgroundImage: `url("${image?.sourceUrl})`,
									}}
								/>
								<div
									className="w-full h-[800px] max-h-[300px] xl:max-h-[400px] bg-cover bg-center bg-no-repeat"
									style={{
										backgroundImage: `url("${imageTwo?.sourceUrl})`,
									}}
								/>
							</div>
							<div className="hidden xl:block w-full h-full xl:w-1/3" />
						</div>
					</motion.div>
					<div className="bg-white container px-4 xl:pr-28 mx-auto flex flex-col w-full xl:w-1/2">
						<div className="max-w-2xl mx-auto xl:mx-0 py-20">
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-center xl:text-left uppercase font-bold text-paragraph text-aqua-default"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="my-2 max-w-2xl mx-auto mb-6 uppercase text-black text-center xl:text-left font-extrabold leading-[2.75rem] text-4xl lg:text-5xl"
							>
								{title}
							</motion.h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="text-center xl:text-left text-darkGrey text-paragraph"
							/>
							<div className="flex flex-col">
								{bulletPointsSection?.length > 0 ? (
									bulletPointsSection?.map((item: any, keys: any) => (
										<Fragment key={keys}>
											<div>hello</div>
										</Fragment>
									))
								) : (
									<></>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutContentImage;
