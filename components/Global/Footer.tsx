// Imports
import {
	stagger,
	initial,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/styles/components/Footer.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Footer: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<footer
			className={
				styles.footer +
				" py-4 px-0 overflow-hidden bg-blue-darker bg-cover bg-center bg-no-repeat"
			}
			style={{
				backgroundImage: `url("/svg/background/layered-peaks-haikei-blue-bluedarker.svg")`,
			}}
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
								className="object-contain object-center mx-auto lg:mx-0 w-fit h-[125px] sm:h-[115px]"
							/>
						</Link>
						<Paragraph
							content={globalContext?.themesOptionsContent?.textarea}
							tailwindStyling="px-4 lg:px-0 max-w-full lg:max-w-sm text-tiny text-lightGreyTwo text-center lg:text-left"
						/>
						<div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-4 lg:max-w-sm">
							{globalContext?.themesOptionsContent?.certificationsGallery
								?.length > 0 ? (
								globalContext?.themesOptionsContent?.certificationsGallery?.map(
									(item: any, keys: number) => (
										<Fragment key={keys}>
											<Image
												alt={item?.altText}
												src={item?.sourceUrl}
												width={item?.mediaDetails.width}
												height={item?.mediaDetails.height}
												className={`${
													item?.sourceUrl
														? "w-[125px] h-full md:w-full md:h-full object-contain object-center"
														: "hidden"
												}`}
											/>
										</Fragment>
									)
								)
							) : (
								<></>
							)}
						</div>
					</motion.div>
					<div className="flex flex-col md:flex-row items-center lg:items-start justify-center gap-6 xl:gap-20">
						<div className="flex flex-col px-0">
							<h4 className="mb-5 text-base font-semibold tracking-normal text-center text-lightGreyTwo uppercase lg:text-left">
								About
							</h4>
							<motion.ul
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex flex-col w-auto gap-2 py-2 px-0 items-center justify-center lg:items-start"
							>
								{globalContext?.footerMenuLinks?.length > 0 ? (
									globalContext?.footerMenuLinks?.map(
										(item: any, keys: number) => (
											<Fragment key={keys}>
												<motion.li
													custom={keys}
													initial={initial}
													whileInView="animate"
													viewport={{once: true}}
													variants={arrayLoopStaggerChildren}
												>
													<Link
														href={`${item?.node?.url}`}
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
							<h4 className="mb-5 text-base font-semibold tracking-normal text-center text-lightGreyTwo uppercase lg:text-left">
								Info
							</h4>
							<div className="flex flex-col items-center lg:items-baseline justify-between">
								<Paragraph
									content={globalContext?.themesOptionsContent?.businessHours}
									tailwindStyling="block px-4 lg:px-0 max-w-full lg:max-w-xl text-tiny text-lightGreyTwo text-center lg:text-left"
								/>
								<motion.div
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: true}}
									className="flex flex-col items-center justify-between w-auto gap-2 py-4 lg:items-baseline"
								>
									<div
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
									</div>
									<div
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
												fill="none"
												viewBox="0 0 20 20"
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
									</div>
									<div
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
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													{" "}
													<path
														d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
														stroke="#ffffff"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
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
									</div>
									<div
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
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													{" "}
													<path
														d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
														stroke="#ffffff"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
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
									</div>
								</motion.div>
								<div className="flex items-center justify-center mt-4 gap-4 text-center">
									<Link
										className="inline-block px-1 hover:opacity-70"
										href={`${globalContext?.themesOptionsContent?.facebookLink}`}
									>
										<svg
											height="100%"
											className="w-5 h-5"
											style={{
												fill: "#ffffff",
												fillRule: "evenodd",
												clipRule: "evenodd",
												strokeLinejoin: "round",
												strokeMiterlimit: "2",
											}}
											version="1.1"
											viewBox="0 0 512 512"
											width="100%"
										>
											<path
												d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
												style={{fillRule: "nonzero"}}
											/>
										</svg>
									</Link>
									<Link
										className="inline-block px-1 hover:opacity-70"
										href={`${globalContext?.themesOptionsContent?.twitterLink}`}
									>
										<svg
											height="100%"
											className="w-5 h-5"
											style={{
												fill: "#ffffff",
												fillRule: "evenodd",
												clipRule: "evenodd",
												strokeLinejoin: "round",
												strokeMiterlimit: "2",
											}}
											version="1.1"
											viewBox="0 0 512 512"
											width="100%"
										>
											<path
												d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104"
												style={{fillRule: "nonzero"}}
											/>
										</svg>
									</Link>
									<Link
										className="inline-block px-1 hover:opacity-70"
										href={`${globalContext?.themesOptionsContent?.linkedinLink}`}
									>
										<svg
											height="100%"
											style={{
												fill: "#ffffff",
												fillRule: "evenodd",
												clipRule: "evenodd",
												strokeLinejoin: "round",
												strokeMiterlimit: "2",
											}}
											version="1.1"
											viewBox="0 0 512 512"
											className="w-5 h-5"
											width="100%"
										>
											<path
												d="M473.305,-1.353c20.88,0 37.885,16.533 37.885,36.926l0,438.251c0,20.393 -17.005,36.954 -37.885,36.954l-436.459,0c-20.839,0 -37.773,-16.561 -37.773,-36.954l0,-438.251c0,-20.393 16.934,-36.926 37.773,-36.926l436.459,0Zm-37.829,436.389l0,-134.034c0,-65.822 -14.212,-116.427 -91.12,-116.427c-36.955,0 -61.739,20.263 -71.867,39.476l-1.04,0l0,-33.411l-72.811,0l0,244.396l75.866,0l0,-120.878c0,-31.883 6.031,-62.773 45.554,-62.773c38.981,0 39.468,36.461 39.468,64.802l0,118.849l75.95,0Zm-284.489,-244.396l-76.034,0l0,244.396l76.034,0l0,-244.396Zm-37.997,-121.489c-24.395,0 -44.066,19.735 -44.066,44.047c0,24.318 19.671,44.052 44.066,44.052c24.299,0 44.026,-19.734 44.026,-44.052c0,-24.312 -19.727,-44.047 -44.026,-44.047Z"
												style={{fillRule: "nonzero"}}
											/>
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ul className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-center justify-center lg:justify-start gap-2 py-2">
					{globalContext?.locationsLinks?.length > 0 ? (
						globalContext?.locationsLinks?.map((item: any, keys: number) => (
							<Fragment key={keys}>
								<motion.li
									custom={keys}
									initial={initial}
									whileInView="animate"
									viewport={{once: true}}
									variants={arrayLoopStaggerChildren}
									className="flex flex-col items-center lg:items-baseline"
								>
									<Link
										href={`${item?.node?.url}`}
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
				</ul>
				<div className="border-b border-aqua-default my-2 opacity-50" />
				<div className="flex flex-col-reverse items-center justify-between py-4 m-0 lg:-my-6 lg:flex-row">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="w-auto py-2"
					>
						<Paragraph
							content={globalContext?.themesOptionsContent?.copyrightText}
							tailwindStyling="max-w-full lg:max-w-lg text-lightGrey text-sm text-center lg:text-left"
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
					<ul className="flex flex-col sm:flex-row -m-6 w-auto gap-2 sm:gap-6 p-6">
						{globalContext?.copyrightLinks?.length > 0 ? (
							globalContext?.copyrightLinks?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.li
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
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
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
