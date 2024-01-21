// Imports
import "@/styles/globals.scss";
import {motion} from "framer-motion";
import type {AppProps} from "next/app";
import {client} from "@/config/apollo";
import {ApolloProvider} from "@apollo/client";

// Styling
import "../styles/globals.scss";

// Global Context Provider
import {IGlobalProps} from "@/types/context";

// Queries Functions
import {
	getMobileLinks,
	getCopyrightLinks,
	getFooterMenuLinks,
	getNavbarMenuLinks,
	getServicesSublinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getAllBlogsContent} from "@/functions/graphql/Queries/GetAllBlogs";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getAllCaseStudiesContent} from "@/functions/graphql/Queries/GetAllCaseStudies";

// Components
import PageLoadingSquares from "@/components/Global/PageLoadingSquares";
import GlobalContextProvider from "@/components/Context/GlobalContextProvider";
import PostHogContextProvider from "@/components/Context/PostHogProviderContext";

export default function App({
	Component,
	pageProps,
	globalProps,
}: AppProps | any) {
	return (
		<>
			<ApolloProvider client={client}>
				<GlobalContextProvider globalProps={globalProps}>
					<motion.div
						exit={{
							opacity: 0,
						}}
						initial="initial"
						animate="animate"
					>
						<PageLoadingSquares />
						{/* Cookie Policy Pop Up */}
						<PostHogContextProvider />
						<Component {...pageProps} />
					</motion.div>
				</GlobalContextProvider>
			</ApolloProvider>
		</>
	);
}

App.getInitialProps = async ({Component, ctx}: any) => {
	let pageProps = {};

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */
	const [
		blogs,
		caseStudies,
		mobileLinks,
		copyrightLinks,
		navbarMenuLinks,
		footerMenuLinks,
		servicesSublinks,
		themesOptionsContent,
	]: any = await Promise.all([
		getAllBlogsContent(),
		getAllCaseStudiesContent(),
		getMobileLinks(),
		getCopyrightLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getServicesSublinks(),
		getThemesOptionsContent(),
	]);

	const globalProps: IGlobalProps = {
		blogs: blogs,
		caseStudies: caseStudies,
		mobileLinks: mobileLinks,
		copyrightLinks: copyrightLinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,
		servicesSublinks: servicesSublinks,
		themesOptionsContent: themesOptionsContent,
	};

	return {
		pageProps,
		globalProps,
	};
};
