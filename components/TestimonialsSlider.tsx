// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsSlider} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/Testimonials.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";

const TestimonialsSlider: FC<ITestimonialsSlider> = ({
	title,
	subtitle,
	paragraph,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div
				className={
					styles.testimonialsSlider +
					` px-0 py-12 lg:py-16 overflow-x-hidden bg-white border-t-[15px] border-solid border-blue-default`
				}
			>
				<div className="container px-4 mx-auto">
					<div className="flex items-center">
						<button className="hidden lg:block w-16 h-16 border-2 border-blue-darker hover:border-blue-darker text-blue-darker hover:text-blue-darker">
							<svg
								className="mx-auto"
								width="12"
								height="16"
								viewBox="0 0 12 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.75 0L11.25 2.5L5.75 8L11.25 13.5L8.75 16L0.75 8L8.75 0Z"
									fill="currentColor"
								></path>
							</svg>
						</button>
						<div className="max-w-3xl mx-auto flex flex-wrap items-center">
							<div className="relative w-full lg:w-3/5 mb-6 lg:mb-0 flex flex-wrap items-center justify-between">
								<div className="hidden lg:block absolute top-0 right-0 mr-20 mt-8">
									<svg
										width="204"
										height="155"
										viewBox="0 0 204 155"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M119.221 155V91.6208L175.519 0H204L166.909 81.1123L195.721 82.7543V155H119.221ZM0 155V91.6208L56.6299 0H85.1104L48.0195 81.1123L76.5 82.7543V155H0Z"
											fill="#f7f7f7"
										></path>
									</svg>
								</div>
								<div className="relative flex flex-col lg:flex-row items-center">
									<img
										className="h-52 w-52 mb-6 object-cover object-top"
										src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
										alt=""
									/>
									<div className="w-full md:w-auto md:ml-10">
										<motion.h3
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="mb-2 text-lg md:text-xl font-semibold font-heading text-blue-default"
										>
											Esther Howards
										</motion.h3>
										<motion.h4
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="text-darkGrey"
										>
											Product Manager
										</motion.h4>
									</div>
								</div>
								<div className="lg:hidden my-4 pt-4">
									<button className="w-12 h-12 mr-2 border-2 border-blue-darker text-blue-darker">
										<svg
											className="mx-auto"
											width="12"
											height="16"
											viewBox="0 0 12 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.75 0L11.25 2.5L5.75 8L11.25 13.5L8.75 16L0.75 8L8.75 0Z"
												fill="currentColor"
											></path>
										</svg>
									</button>
									<button className="w-12 h-12 border-2 border-blue-darker text-blue-darker">
										<svg
											className="mx-auto"
											width="12"
											height="16"
											viewBox="0 0 12 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M3.25 0L0.75 2.5L6.25 8L0.75 13.5L3.25 16L11.25 8L3.25 0Z"
												fill="currentColor"
											></path>
										</svg>
									</button>
								</div>
							</div>
							<div className="w-full lg:w-2/5">
								<Paragraph
									content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Aenean dignissim quam ultricies, placerat tellus sed,
										laoreet orci. Duis luctus quam ac metus gravida sodales. Sed
										a ex accumsan, pellentesque sem eget, scelerisque dolor.`}
									tailwindStyling="lg:max-w-md mx-auto lg:mx-0 text-base text-darkGrey leading-relaxed text-center lg:text-left"
								/>
							</div>
						</div>
						<button className="hidden lg:block w-16 h-16 border-2 border-blue-darker hover:border-blue-darker text-blue-darker hover:text-blue-darker">
							<svg
								className="mx-auto"
								width="12"
								height="16"
								viewBox="0 0 12 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3.25 0L0.75 2.5L6.25 8L0.75 13.5L3.25 16L11.25 8L3.25 0Z"
									fill="currentColor"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TestimonialsSlider;
