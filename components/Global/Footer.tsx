// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/styles/components/Footer.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

const Footer: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<footer
			className={styles.footer + " py-4 px-0 overflow-hidden bg-blue-darker"}
			style={{
				clipPath: `polygon(96% 0, 100% 21%, 100% 99%, 0 100%, 0 0)`,
			}}
		>
			<div className="container px-4 mx-auto">
				<div className="flex flex-col xl:flex-row items-center justify-between">
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-center gap-4"
					>
						<Link href="/">
							<Image
								priority
								width={500}
								height={500}
								alt="BluetechDigital Logo"
								src="/img/logos/BluetechDigital-Logo-color.png"
								className="object-contain object-center w-full h-[85px]"
							/>
						</Link>
						<Paragraph
							content={globalContext?.themesOptionsContent?.textarea}
							tailwindStyling="block px-4 lg:px-0 max-w-full lg:max-w-sm text-tiny text-white text-center lg:text-left"
						/>
					</motion.div>
					<div className="flex flex-col lg:flex-row items-center justify-center gap-6 ">
						<div className="flex flex-col items-center justify-between w-auto gap-2 py-4 lg:items-baseline">
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={
									globalContext?.themesOptionsContent?.email
										? "flex items-center justify-center gap-2"
										: "hidden"
								}
							>
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-aqua-two sm:mr-1">
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
											stroke="#ffffff"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</div>
								<Link
									className="font-medium text-tiny tracking-wide text-lightGrey hover:text-aqua-two"
									href={`mailto:${globalContext?.themesOptionsContent?.email}`}
								>
									{globalContext?.themesOptionsContent?.email}
								</Link>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={
									globalContext?.themesOptionsContent?.emailTwo
										? "flex items-center justify-center gap-2"
										: "hidden"
								}
							>
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-aqua-two sm:mr-1">
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
											stroke="#ffffff"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</div>
								<Link
									className="font-medium text-tiny tracking-wide text-lightGrey hover:text-aqua-two"
									href={`mailto:${globalContext?.themesOptionsContent?.emailTwo}`}
								>
									{globalContext?.themesOptionsContent?.emailTwo}
								</Link>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={
									globalContext?.themesOptionsContent?.phoneNumber
										? "flex items-center justify-center gap-2"
										: "hidden"
								}
							>
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-aqua-two sm:mr-1">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.61 14.99 15.86 14.89 16.12 14.89C16.22 14.89 16.33 14.9 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3Z"
											fill="#ffffff"
										/>
									</svg>
								</div>
								<Link
									className="font-medium text-tiny tracking-wide text-lightGrey hover:text-aqua-two"
									href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
								>
									{globalContext?.themesOptionsContent?.phoneNumber}
								</Link>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={
									globalContext?.themesOptionsContent?.phoneNumberTwo
										? "flex items-center justify-center gap-2"
										: "hidden"
								}
							>
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-aqua-two sm:mr-1">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.61 14.99 15.86 14.89 16.12 14.89C16.22 14.89 16.33 14.9 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3Z"
											fill="#ffffff"
										/>
									</svg>
								</div>
								<Link
									className="font-medium text-tiny tracking-wide text-lightGrey hover:text-aqua-two"
									href={`tel:${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
								>
									{globalContext?.themesOptionsContent?.phoneNumberTwo}
								</Link>
							</motion.div>
						</div>
						<Paragraph
							content={globalContext?.themesOptionsContent?.businessHours}
							tailwindStyling="block px-4 lg:px-0 max-w-full lg:max-w-xl text-tiny text-white text-center lg:text-left"
						/>
					</div>
				</div>
				<div className="py-4">
					<motion.ul
						initial={initial}
						viewport={{once: true}}
						whileInView={stagger}
						className="flex flex-col sm:flex-row -m-6 w-auto gap-2 sm:gap-6 p-6 items-center justify-center xl:justify-start"
					>
						{globalContext?.locationsLinks?.length > 0 ? (
							globalContext?.locationsLinks?.map((item: any, keys: any) => (
								<Fragment key={keys}>
									<motion.li
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
									>
										<Link
											href={`locations/${item?.node?.url}`}
											className="text-lightGrey transition-all duration-200 ease-in-out text-tiny hover:text-aqua-default"
										>
											{item?.node?.label}
										</Link>
									</motion.li>
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.ul>
				</div>
				<div className="border-b border-orange-default opacity-50" />
				<div className="py-4 flex flex-col-reverse items-center justify-between m-0 lg:-m-6 lg:flex-row">
					<motion.div
						initial={initialTwo}
						viewport={{once: true}}
						whileInView={fadeIn}
						className="w-auto p-6"
					>
						<Paragraph
							content={globalContext?.themesOptionsContent?.copyrightText}
							tailwindStyling="text-lightGrey text-sm text-center lg:text-left"
						/>
						<Link
							className="lg:inline-block items-center justify-center px-1 text-lightGrey hover:text-aqua-default hover:underline"
							href={`https://bluetech-digital.co.uk`}
							target="_blank"
						>
							<span className="flex items-center justify-center lg:justify-left gap-2">
								<Image
									priority
									width={500}
									height={500}
									alt="BluetechDigital Logo"
									src="/img/logos/BluetechDigital-Logo-color.png"
									className="object-contain object-center w-[25px] h-[25px]"
								/>
								<Paragraph
									content={`Website by BluetechDigital`}
									tailwindStyling="w-fit lg:w-full text-sm text-center lg:text-left"
								/>
							</span>
						</Link>
					</motion.div>
					<motion.ul
						initial={initial}
						viewport={{once: true}}
						whileInView={stagger}
						className="flex flex-col sm:flex-row -m-6 w-auto gap-2 sm:gap-6 p-6"
					>
						{globalContext?.copyrightLinks?.length > 0 ? (
							globalContext?.copyrightLinks?.map((item: any, keys: any) => (
								<Fragment key={keys}>
									<motion.li
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
									>
										<Link
											href={`${item?.node?.url}`}
											className="text-lightGrey transition-all duration-200 ease-in-out text-sm hover:text-aqua-default"
										>
											{item?.node?.label}
										</Link>
									</motion.li>
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
