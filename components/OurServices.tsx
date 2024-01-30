// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurServices} from "@/types/components/index";
import fadeInUp, {
	fadeIn,
	initial,
	initialTwo,
	stagger,
} from "../animations/animations";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const OurServices: FC<IOurServices> = ({
	title,
	subtitle,
	paragraph,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ourServices +
					" relative py-12 lg:py-40 sm:py-24 px-4 bg-white bg-cover bg-no-repeat bg-center"
				}
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-white-lightgrey.svg")`,
				}}
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
					<div className="w-full relative grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 py-6 lg:py-12 px-0 sm:px-4 gap-6 items-start justify-center">
						{servicesGrid?.length > 0 ? (
							servicesGrid.map((item: any, keys: any) => (
								<Fragment key={keys}>
									<>
										<Link
											href={`${item?.card?.link?.url}`}
											target={item?.card?.link?.target}
											className={styles.card + " group overflow-hidden"}
											style={{
												boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
											}}
										>
											<motion.div
												initial={initial}
												whileInView={fadeInUp}
												viewport={{once: true}}
												className="group-hover:bg-orange-darker group-hover:bg-none opacity-95 group-hover:opacity-100 px-4 lg:px-10 py-6 lg:py-12 relative overflow-hidden h-full xl:min-h-[500px] max-w-md mx-auto bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out"
												style={{
													backgroundImage: `linear-gradient(
														0deg,
														rgba(0, 22, 64, 0),
														rgba(0, 22, 64, 0.25),
														rgba(0, 22, 64, 0.75),
														rgba(0, 22, 64, 0.85),
														rgba(0, 22, 64, 0.95)
													),url("${item?.card?.image?.sourceUrl}")`,
												}}
											>
												<motion.h3
													initial={initialTwo}
													whileInView={fadeIn}
													viewport={{once: true}}
													className="text-white uppercase text-3xl mb-6 font-extrabold leading-[2.5rem]"
												>
													{item?.card?.title}
												</motion.h3>
												<Paragraph
													content={
														item?.card?.paragraph
															? item?.card?.paragraph?.substring(0, 125) + ""
															: ``
													}
													tailwindStyling="pb-20 text-white text-base text-center"
												/>
												<motion.div
													initial={initial}
													whileInView={stagger}
													viewport={{once: true}}
													className="absolute -bottom-6 right-4"
												>
													<div className="flex justify-end gap-4 mb-4">
														<div className="flex items-center justify-center w-12 h-12 bg-orange-default hover:bg-blue-default">
															<Image
																width={550}
																height={550}
																alt="Black Arrow Icon"
																src="/svg/navigation-menu-dropdown-arrow-white.svg"
																className="my-auto rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
															/>
														</div>
														<div className="w-12 h-12 bg-orange-default bg-opacity-50" />
														<div className="w-12 h-12 bg-orange-default bg-opacity-50" />
													</div>
													<div className="flex gap-4">
														<div className="w-12 h-12 bg-orange-default bg-opacity-50" />
														<div className="w-12 h-12 bg-orange-default bg-opacity-50" />
														<div className="w-12 h-12 bg-orange-default bg-opacity-50" />
														<div className="w-12 h-12 bg-orange-default bg-opacity-50" />
													</div>
												</motion.div>
											</motion.div>
										</Link>
									</>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default OurServices;
