// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {ITestimonialsCard} from "@/types/components";
import {initial, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const TestimonialsCard: FC<ITestimonialsCard> = ({name, image, paragraph}) => {
	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className="p-6 mb-6 overflow-hidden bg-white border-[5px] border-solid border-lightGrey flex flex-col justify-between"
				style={{
					boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
				}}
			>
				<div className="pb-6">
					<Paragraph
						content={paragraph?.substring(0, 250) + "..."}
						tailwindStyling="mb-3 text-center lg:text-left text-black text-base leading-relaxed"
					/>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex items-center justify-center"
					>
						<svg
							className="mr-1 w-3 h-3"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clip-rule="evenodd"
								d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z"
								fill="#FFD33C"
							></path>
						</svg>
						<svg
							className="mr-1 w-3 h-3"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clip-rule="evenodd"
								d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z"
								fill="#FFD33C"
							></path>
						</svg>
						<svg
							className="mr-1 w-3 h-3"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clip-rule="evenodd"
								d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z"
								fill="#FFD33C"
							></path>
						</svg>
						<svg
							className="mr-1 w-3 h-3"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clip-rule="evenodd"
								d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z"
								fill="#FFD33C"
							></path>
						</svg>
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							className="w-4 h-3"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clip-rule="evenodd"
								d="M11.227 0.796478L13.2574 5.09148C13.4564 5.51312 13.8405 5.8055 14.2859 5.87316L18.8282 6.56543C19.9504 6.73699 20.397 8.17711 19.5848 9.00228L16.3002 12.344C15.9774 12.6727 15.8305 13.1451 15.9068 13.609L16.682 18.3268C16.8729 19.4939 15.6997 20.3843 14.6967 19.8322L10.6369 17.6032C10.2389 17.3845 9.76225 17.3845 9.3631 17.6032L5.30334 19.8322C4.30026 20.3843 3.1271 19.4939 3.31916 18.3268L4.09316 13.609C4.16952 13.1451 4.02259 12.6727 3.6998 12.344L0.4152 9.00228C-0.396983 8.17711 0.0496019 6.73699 1.17185 6.56543L5.71406 5.87316C6.15949 5.8055 6.54475 5.51312 6.74375 5.09148L8.77305 0.796478C9.27517 -0.265493 10.7248 -0.265493 11.227 0.796478Z"
								fill="#FFD33C"
							></path>
						</svg>
					</motion.div>
				</div>
				<div className="flex items-center pt-3 border-t border-lightGreyTwo">
					<Image
						alt={image?.altText}
						src={image?.sourceUrl}
						width={image?.mediaDetails?.width}
						height={image?.mediaDetails?.height}
						className={
							image?.sourceUrl
								? `object-cover object-center w-14 h-14 rounded-full`
								: `hidden`
						}
					/>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="ml-4"
					>
						<span className="block text-paragraph font-medium text-black">
							{name}
						</span>
						<span className="block text-sm font-medium text-black">{name}</span>
					</motion.div>
				</div>
			</motion.div>
		</>
	);
};

export default TestimonialsCard;
