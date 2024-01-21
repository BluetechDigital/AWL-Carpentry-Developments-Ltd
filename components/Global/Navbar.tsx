"use client";

// Imports
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {useState, FC, Fragment, useEffect} from "react";
import {fadeIn, initial, initialTwo, stagger} from "@/animations/animations";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import SideMenu from "../Elements/SideMenu";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	// Background color scroll position change
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.scrollY;
			setScrollPosition(currentPosition);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Display all sublinks & Mobile Links
	const [menuActive, setMenuActive] = useState(false);
	const [newsInsightsSublinksOpen, setNewsInsightsSublinksOpen]: any =
		useState(false);
	const [navBackgroundSublinksOpen, setNavBackgroundSublinksOpen]: any =
		useState(false);
	const [ourServicesSublinksOpen, setOurServicesSublinksOpen]: any =
		useState(false);

	/* Hides or Displays the Full Nav Menu */
	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	/* Display's Navbar background Color
	when Mega sublinks are hoveblue*/
	const displayNavBackgroundColor = () => {
		setNavBackgroundSublinksOpen(!navBackgroundSublinksOpen);
	};

	// Hides or Display Our Services sublinks
	const displayOurServicesSublinks = () => {
		setNewsInsightsSublinksOpen(false);
		setOurServicesSublinksOpen(!ourServicesSublinksOpen);
	};

	// Hides or Display News & Insights Sublinks
	const displayNewsInsightsSublinks = () => {
		setOurServicesSublinksOpen(false);
		setNewsInsightsSublinksOpen(!newsInsightsSublinksOpen);
	};

	const resetNavbarStyling = () => {
		setNewsInsightsSublinksOpen(false);
		setNavBackgroundSublinksOpen(false);
		setOurServicesSublinksOpen(false);
	};

	return (
		<>
			<nav
				className={
					styles.navbar +
					` z-[999] w-full fixed group bg-transparent hover:bg-white transition-all ease-in-out duration-500 ${
						scrollPosition > 50 || navBackgroundSublinksOpen
							? "bg-white"
							: "bg-transparent"
					}`
				}
			>
				<div className="container mx-auto flex flex-col sm:flex-row items-baseline sm:items-center justify-between py-3 px-4">
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="flex flex-col justify-start"
					>
						<Link href="/">
							<Image
								priority
								width={500}
								height={500}
								alt="BluetechDigital Logo"
								src="/svg/logo/BluetechDigital-Logo-color.svg"
								className={`${
									scrollPosition > 50 ? "block" : "hidden group-hover:block"
								} object-contain object-center w-full h-[50px]`}
							/>
							<Image
								priority
								width={500}
								height={500}
								alt="BluetechDigital Logo White"
								src="/svg/logo/BluetechDigital-Logo-white.svg"
								className={`${
									scrollPosition > 50 ? "hidden" : "block group-hover:hidden"
								} object-contain object-center w-full h-[50px]`}
							/>
						</Link>
					</motion.div>
					<div className="hidden xl:flex items-center gap-8">
						<motion.ul
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex lg:items-center lg:gap-x-6"
						>
							{globalContext?.navbarMenuLinks?.length > 0 ? (
								globalContext?.navbarMenuLinks?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<li className="hidden xl:block">
											<Link
												href={`${item?.node?.url}`}
												className={`${
													scrollPosition > 50 ? "text-pureBlack" : "text-white"
												} group-hover:text-pureBlack group-hover:hover:text-blue-two text-tiny text-center tracking-[0.075rem] transition-all ease-in-out duration-500`}
											>
												{item?.node?.label}
											</Link>
										</li>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.ul>
					</div>
					<div className="opacity-0 xl:hidden" />
					<motion.div className="flex flex-col xl:hidden">
						<button
							type="button"
							onClick={toggleMenu}
							aria-label="toggle menu"
							className={menuActive ? styles.navToggleOpen : styles.navToggle}
						>
							<span aria-hidden="true"></span>
						</button>
						{/* Hidden Side Menu */}
						<SideMenu menuActive={menuActive} />
					</motion.div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
