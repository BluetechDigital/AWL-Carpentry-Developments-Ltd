// Imports
import {fadeIn, initial, fadeInUp, initialTwo} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IOurCaseStudiesCard} from "@/types/components";

// Styling
import styles from "../../styles/components/OurServices.module.scss";

const OurCaseStudiesCard: FC<IOurCaseStudiesCard> = ({
	link,
	image,
	title,
	subtitle,
}) => {
	return (
		<>
			<Link href={`${link?.url}`} target={link?.target} className={styles.card}>
				<div
					className="flex flex-col items-center justify-end p-0 w-full h-full min-h-[400px] bg-center bg-no-repeat bg-cover"
					style={{
						backgroundImage: `url("${image?.sourceUrl}")`,
					}}
				>
					<div className="bg-blue-darkerTwo/50 px-4 py-10 w-full">
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="text-center lg:text-left font-bold text-base lg:text-paragraph text-aqua-default"
						>
							{subtitle}
						</motion.h4>
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mt-2 text-white text-center lg:text-left font-extrabold leading-[2rem] text-paragraph lg:text-lg"
						>
							{title}
						</motion.h3>
					</div>
				</div>
			</Link>
		</>
	);
};

export default OurCaseStudiesCard;
