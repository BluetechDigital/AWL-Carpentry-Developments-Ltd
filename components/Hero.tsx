// Imports
import {
	fadeIn,
	stagger,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";
import {FC, Fragment} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import Title from "./Elements/Title";

const Hero: FC<IHero> = ({
	title,
	paragraph,
	servicesLinks,
	backgroundImage,
}) => {
	return (
		<>
			<div className={styles.heroTwo + " relative z-50 flex flex-col"}>
				<div className="lg:relative pt-[85px] lg:pt-[110px] lg:h-[50vh] flex flex-col lg:flex-row">
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
							className="container px-0 mx-auto max-w-xl flex flex-col justify-center h-full"
						>
							<motion.h1
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-center lg:text-left uppercase text-lg md:text-2xl lg:text-3xl text-white font-extrabold lg:leading-[2.5rem]"
							>
								{title}
							</motion.h1>
							<Paragraph
								content={paragraph}
								tailwindStyling="py-2 text-white leading-[1.75rem] text-base text-center lg:text-left"
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
				<div className="relative flex flex-row py-0 justify-start items-center lg:justify-between">
					<motion.div
						initial={initialTwo}
						whileInView={stagger}
						viewport={{once: true}}
						className="hidden md:grid grid-cols-4 w-full lg:w-[70%] xl:w-[60%] 2xl:w-[55%] absolute mb-[130px] lg:mb-[-30px] 2xl:mb-[0px] right-0 flex-row items-center justify-end"
					>
						{servicesLinks?.length > 0 ? (
							servicesLinks?.map((item: any, keys: any) => (
								<Fragment key={keys}>
									<Link
										key={keys}
										href={`${item?.buttonLink?.url}`}
										target={item?.buttonLink?.target}
									>
										<motion.div
											initial={initialTwo}
											whileInView={stagger}
											viewport={{once: true}}
											className={`p-2 pr-0 hover:bg-blue-two w-full sm:min-h-[14vh] lg:min-h-[14vh] transition-all ease-in-out duration-500 ${
												keys === 0
													? "bg-blue-default"
													: keys === 1
													? "bg-blue-three"
													: keys === 2
													? "bg-blue-dark"
													: keys === 3
													? "bg-blue-darker"
													: "bg-blue-default"
											}`}
										>
											<Image
												alt={item?.icon?.altText}
												src={item?.icon?.sourceUrl}
												width={item?.icon?.mediaDetails?.width}
												height={item?.icon?.mediaDetails?.height}
												className={
													item?.icon?.sourceUrl
														? `block object-contain object-center w-full h-[50px] lg:h-[60px] mb-6`
														: `hidden`
												}
											/>

											<span className="flex items-center justify-center pl-4">
												<Title
													content={item?.buttonLink?.title}
													tailwindStyling="text-white font-semibold text-base leading-[1.5rem] text-center tracking-[0.10rem]"
												/>
												<Image
													width={550}
													height={550}
													alt="Black Arrow Icon"
													src="/svg/navigation-menu-dropdown-arrow-white.svg"
													className="my-auto ml-2 mb-20 rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
												/>
											</span>
										</motion.div>
									</Link>
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Hero;
