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
		>
			<div className="container px-4 mx-auto">
				<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between py-4 gap-16 lg:gap-4">
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="flex flex-col items-center justify-center lg:items-start gap-2"
					>
						<Link href="/">
							<Image
								priority
								width={500}
								height={500}
								alt="Awl Carpentry Developments Logo"
								src="/svg/logos/awl-carpentry-developments-logo-white.svg"
								className="object-contain object-center w-full h-[100px]"
							/>
						</Link>
						<Paragraph
							content={globalContext?.themesOptionsContent?.textarea}
							tailwindStyling="px-4 lg:px-0 max-w-full lg:max-w-sm text-tiny text-lightGreyTwo text-center lg:text-left"
						/>
						<motion.ul
							initial={initial}
							viewport={{once: true}}
							whileInView={stagger}
							className="mt-2 grid grid-cols-4 gap-2"
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
					</motion.div>
					<div className="flex flex-col md:flex-row items-center lg:items-start justify-center gap-6 xl:gap-16">
						<div className="flex flex-col px-0">
							<h4 className="mb-5 text-paragraph font-semibold tracking-normal text-center text-lightGreyTwo uppercase lg:text-left">
								Links
							</h4>
							<motion.ul
								initial={initial}
								viewport={{once: true}}
								whileInView={stagger}
								className="flex flex-col w-auto gap-2 p-2 items-center justify-center lg:items-start"
							>
								{globalContext?.footerMenuLinks?.length > 0 ? (
									globalContext?.footerMenuLinks?.map(
										(item: any, keys: any) => (
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
										)
									)
								) : (
									<></>
								)}
							</motion.ul>
						</div>
						<div className="flex flex-col px-0">
							<h4 className="mb-5 text-paragraph font-semibold tracking-normal text-center text-lightGreyTwo uppercase lg:text-left">
								Info
							</h4>
							<div className="flex flex-col items-center lg:items-baseline justify-between">
								<Paragraph
									content={globalContext?.themesOptionsContent?.businessHours}
									tailwindStyling="block px-4 lg:px-0 max-w-full lg:max-w-xl text-tiny text-lightGreyTwo text-center lg:text-left"
								/>
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
												viewBox="0 0 24 24"
												fill="none"
												className="w-5 h-5"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													stroke-linecap="round"
													stroke-linejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													{" "}
													<path
														d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
														stroke="#ffffff"
														stroke-width="1.5"
														stroke-linecap="round"
														stroke-linejoin="round"
													></path>{" "}
												</g>
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
												viewBox="0 0 24 24"
												fill="none"
												className="w-5 h-5"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													stroke-linecap="round"
													stroke-linejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													{" "}
													<path
														d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
														stroke="#ffffff"
														stroke-width="1.5"
														stroke-linecap="round"
														stroke-linejoin="round"
													></path>{" "}
												</g>
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
							</div>
						</div>
					</div>
				</div>
				<div className="border-b border-orange-default opacity-50" />
				<div className="flex flex-col-reverse items-center justify-between py-4 m-0 lg:-m-6 lg:flex-row">
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
