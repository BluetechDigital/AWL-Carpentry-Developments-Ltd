// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IBlogs} from "@/types/components";
import {useGlobalContext} from "@/context/global";
import {initial, stagger} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";

const BlogsThreeCards: FC<IBlogs> = ({title, subtitle, paragraph}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="py-16 bg-white container px-4 mx-auto">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={
						title && subtitle
							? "max-w-2xl mx-auto mb-24 text-center flex flex-col items-center lg:max-w-5xl"
							: "hidden"
					}
				>
					<h4 className="max-w-2xl mx-auto xl:mx-0 text-center xl:text-left uppercase font-bold text-base text-aqua-default">
						{subtitle}
					</h4>
					<h3 className="my-3 max-w-xl mx-auto xl:mx-0 uppercase text-black text-center font-extrabold text-lg md:text-xl">
						{title}
					</h3>
					<Paragraph
						content={paragraph}
						tailwindStyling="max-w-3xl mx-auto text-black text-paragraph"
					/>
				</motion.div>
				<Pagination
					contentType="BlogsCard"
					numberOfItemsRenderedPerPage={12}
					contentArray={globalContext?.blogs}
					tailwindStyling={`grid px-4 lg:-m-4 gap-y-12 sm:gap-8 grid-col md:grid-cols-2 lg:grid-cols-3`}
				/>
			</div>
		</>
	);
};

export default BlogsThreeCards;
