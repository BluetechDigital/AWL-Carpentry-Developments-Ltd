// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {fadeIn, stagger, initial, initialTwo} from "@/animations/animations";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

const SubMegaMenuLinks: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="fixed mt-[1.5rem] w-full left-0 flex justify-end">
				<div
					className="w-[95%] xl:w-[80%] mx-auto grid grid-cols-3 bg-white"
					style={{
						boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
					}}
				>
					<div className="flex flex-col items-center justify-start py-10 bg-blue-darker border-l-[5px] border-blue-default">
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-5 text-base font-semibold tracking-normal text-center uppercase md:text-left text-white"
						>
							Our Services
						</motion.h3>
						<motion.ul
							initial={initialTwo}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={
								styles.ourServicesLinks +
								" px-8 py-0 w-full grid grid-cols-2 items-center my-auto gap-2 z-[999]"
							}
						>
							{/* Menu Link*/}
							{globalContext?.servicesSublinks?.length > 0 ? (
								globalContext?.servicesSublinks?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<Link href={`${item?.node?.url}`}>
											<li className="w-full group-scoped">
												<Link
													href={`${item?.node?.url}`}
													className="block px-4 font-medium text-tiny text-white hover:text-aqua-default"
												>
													{item?.node?.label}
												</Link>
											</li>
										</Link>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.ul>
					</div>
					<div className="flex flex-col items-center justify-start py-10 bg-blue-default">
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-5 text-base font-semibold tracking-normal text-center uppercase md:text-left text-white"
						>
							Location Services
						</motion.h3>
						<motion.ul
							initial={initialTwo}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={
								styles.ourServicesLinks +
								" p-8 w-full flex flex-col items-center my-auto gap-2 z-[999]"
							}
						>
							{/* Menu Link*/}
							{globalContext?.locationsLinks?.length > 0 ? (
								globalContext?.locationsLinks?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<Link href={`${item?.node?.url}`}>
											<li className="w-full">
												<Link
													href={`${item?.node?.url}`}
													className="block px-4 font-medium text-tiny text-white hover:text-orange-two"
												>
													{item?.node?.label}
												</Link>
											</li>
										</Link>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.ul>
					</div>
					<div className="h-full p-4 bg-white group block">
						<Image
							alt={
								globalContext?.themesOptionsContent?.menuColumnThree?.mainImage
									?.altText
							}
							src={
								globalContext?.themesOptionsContent?.menuColumnThree?.mainImage
									?.sourceUrl
							}
							width={
								globalContext?.themesOptionsContent?.menuColumnThree?.mainImage
									?.mediaDetails?.width
							}
							height={
								globalContext?.themesOptionsContent?.menuColumnThree?.mainImage
									?.mediaDetails?.height
							}
							className={`${
								globalContext?.themesOptionsContent?.menuColumnThree?.mainImage
									?.sourceUrl
									? "block w-full h-64 mb-4 object-cover object-center"
									: "hidden"
							}`}
						/>
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-4 font-extrabold uppercase text-center text-black"
						>
							{globalContext?.themesOptionsContent?.menuColumnThree?.text}
						</motion.h3>
						<Image
							alt={
								globalContext?.themesOptionsContent?.menuColumnThree
									?.checkatrade?.altText
							}
							src={
								globalContext?.themesOptionsContent?.menuColumnThree
									?.checkatrade?.sourceUrl
							}
							width={
								globalContext?.themesOptionsContent?.menuColumnThree
									?.checkatrade?.mediaDetails?.width
							}
							height={
								globalContext?.themesOptionsContent?.menuColumnThree
									?.checkatrade?.mediaDetails?.height
							}
							className={`${
								globalContext?.themesOptionsContent?.menuColumnThree
									?.checkatrade?.sourceUrl
									? "mx-auto w-full h-[125px] object-contain object-center"
									: "hidden"
							}`}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default SubMegaMenuLinks;
