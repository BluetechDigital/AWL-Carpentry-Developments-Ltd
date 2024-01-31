// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IOurServicesCard} from "@/types/components";

// Styling
import styles from "../../styles/components/OurServices.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

const OurServicesCard: FC<IOurServicesCard> = ({
	link,
	image,
	title,
	paragraph,
}) => {
	return (
		<>
			<Link
				href={`${link?.url}`}
				target={link?.target}
				className={styles.card + " group overflow-hidden bg-white"}
				style={{
					boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
					clipPath: `polygon(95% 0, 100% 0, 100% 97%, 96% 100%, 3% 100%, 0 97%, 0 0)`,
				}}
			>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="bg-blue-darkerTwo group-hover:bg-orange-darker relative px-4 py-6 lg:py-12 h-[300px] bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out border-solid border-b-[15px] border-l-[15px] border-blue-default"
					style={{
						backgroundImage: `url("${image?.sourceUrl}")`,
						clipPath: `polygon(0 6%, 7% 0, 100% 0, 100% 100%, 7% 100%, 0 94%)`,
					}}
				>
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
						</div>
					</motion.div>
				</motion.div>
				<div className="h-[300px] px-4 py-6 lg:py-12 bg-white">
					<motion.h3
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="text-center text-black uppercase text-xl mb-6 font-extrabold leading-[2rem]"
					>
						{title}
					</motion.h3>
					<Paragraph
						content={
							paragraph?.length > 200
								? paragraph?.substring(0, 200) + "..."
								: paragraph
						}
						tailwindStyling="text-black text-base text-center"
					/>
				</div>
			</Link>
		</>
	);
};

export default OurServicesCard;
