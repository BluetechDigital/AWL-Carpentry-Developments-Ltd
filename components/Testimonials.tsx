// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ITestimonials} from "@/types/components/index";
import fadeInUp, {
	fadeIn,
	initial,
	initialTwo,
	stagger,
} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const Testimonials: FC<ITestimonials> = ({
	title,
	subtitle,
	paragraph,
	testimonialsGrid,
}) => {
	return (
		<>
			<div className="py-16 px-4 lg:px-0 bg-white">
				<div className="container px-0 mx-auto">
					<div className="flex flex-col items-center">
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="text-center text-paragraph text-yellow-Two"
						>
							{subtitle}
						</motion.h4>
						<motion.h2
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-2 max-w-2xl mx-auto mb-6 text-center font-semibold leading-tight text-4xl lg:text-5xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto text-black leading-[1.75rem] text-paragraph text-center"
						/>
					</div>
					<div className="max-w-6xl mx-auto">
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="grid items-center justify-center grid-cols-2 lg:grid-cols-4 gap-4 lg:items-center lg:justify-between py-12"
						>
							{testimonialsGrid?.length > 0 ? (
								testimonialsGrid.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<></>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonials;
