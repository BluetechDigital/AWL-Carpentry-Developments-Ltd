// Imports
import {FC} from "react";
import {GlobalContext} from "@/context/global";
import {IGlobalContextProvider} from "@/types/context";

const GlobalContextProvider: FC<IGlobalContextProvider> = ({
	children,
	globalProps,
}) => {
	return (
		<>
			<GlobalContext.Provider
				value={{
					blogs: globalProps?.blogs,
					caseStudies: globalProps?.caseStudies,
					mobileLinks: globalProps?.mobileLinks,
					copyrightLinks: globalProps?.copyrightLinks,
					navbarMenuLinks: globalProps?.navbarMenuLinks,
					footerMenuLinks: globalProps?.footerMenuLinks,
					servicesSublinks: globalProps?.servicesSublinks,
					themesOptionsContent: globalProps?.themesOptionsContent,
				}}
			>
				{children}
			</GlobalContext.Provider>
		</>
	);
};

export default GlobalContextProvider;
