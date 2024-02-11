// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "../../animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IFeaturedProjectsCard} from "@/types/components/index";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const FeaturedProjectsCard: FC<IFeaturedProjectsCard> = ({
	slug,
	title,
	excerpt,
	featuredImage,
}) => {
	return (
		<>
			<div
				className="w-full h-full p-0 border-l-[5px] border-b-[5px] border-blue-darkerTwo"
				style={{
					boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
				}}
			>
				<div className="relative px-0 h-[225px] border-r-[5px] border-t-[5px] border-b-0 border-blue-darkerTwo">
					<Link target="" href={slug ? `projects/${slug}` : `/`}>
						<Image
							alt={featuredImage?.node?.altText}
							src={featuredImage?.node?.sourceUrl}
							width={featuredImage?.node?.mediaDetails?.width}
							height={featuredImage?.node?.mediaDetails?.height}
							className={`${
								featuredImage?.node?.sourceUrl
									? "object-cover object-center w-full h-full"
									: "hidden"
							}`}
						/>
					</Link>
				</div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col items-baseline justify-between px-6 py-4"
				>
					<Link target="" href={slug ? `projects/${slug}` : `/`}>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="mb-2 text-base text-black transition-all ease-in-out duration-200 hover:text-blue-default"
						>
							{title}
						</motion.h3>
					</Link>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
					>
						<Paragraph
							content={
								excerpt?.length > 200
									? excerpt?.substring(0, 200) + "..."
									: excerpt
							}
							tailwindStyling="block px-0 text-tiny text-black"
						/>
					</motion.div>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="mt-6"
					>
						<Link
							target=""
							href={slug ? `projects/${slug}` : `/`}
							className={slug ? "block" : "hidden"}
						>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="relative px-6 py-2 text-white text-tiny w-fit bg-blue-three hover:bg-aqua-default transition-all ease-in-out duration-500 before:left-[15%]"
								style={{
									clipPath: `polygon(95% 0, 100% 15%, 100% 100%, 0 100%, 0 0)`,
								}}
							>
								Read More
							</motion.button>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default FeaturedProjectsCard;
