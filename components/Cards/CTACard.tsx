// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {ICTACard} from "@/types/components/index";
import {initial, stagger} from "../../animations/animations";

// Components
import Paragraph from "./../Elements/Paragraph";

const CTACard: FC<ICTACard> = ({title, paragraph, buttonLink}) => {
	return (
		<>
			<div
				className="bg-top bg-no-repeat bg-cover"
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-blue-bluedarker-two.svg")`,
				}}
			>
				<div className="container px-4 py-12 mx-auto">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col items-center justify-between gap-10 px-0 lg:px-4 lg:flex-row"
					>
						<div className="flex flex-col justify-between gap-4">
							<h3 className="mb-3 max-w-xl lg:max-w-sm xl:max-w-xl mx-auto xl:mx-0 uppercase text-white text-center lg:text-left font-extrabold text-lg">
								{title}
							</h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-xl text-white text-base text-center lg:text-left"
							/>
						</div>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							className={buttonLink?.url ? "block" : "hidden"}
						>
							<div className="py-6 pl-4 pr-10 cursor-pointer bg-aqua-default hover:bg-orange-default transition-all ease-in-out duration-500">
								<span className="relative flex items-center justify-center pl-4 text-lightGrey text-tiny text-center">
									{buttonLink?.title}
									<Image
										width={550}
										height={550}
										alt="Black Arrow Icon"
										src="/svg/navigation-menu-dropdown-arrow-white.svg"
										className="my-auto ml-2 absolute top-[-25px] right-[-40px] rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
									/>
								</span>
							</div>
						</Link>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default CTACard;
