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
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getAboutUsSublinks,
	getLocationsSublinks,
	getOurServicesSublinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {
	getAllBlogsContent,
	getThreeBlogsContent,
} from "@/functions/graphql/Queries/GetAllBlogs";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getAllTestimonialsContent} from "@/functions/graphql/Queries/GetAllTestimonials";

// Components
import PageLoadingSquares from "@/components/Global/PageLoadingSquares";
import GlobalContextProvider from "@/components/Context/GlobalContextProvider";
import PostHogContextProvider from "@/components/Context/PostHogProviderContext";
import {getAllFeaturedProjectsContent} from "@/functions/graphql/Queries/GetAllFeaturedProjects";

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
	const mobileLinks: any = await getMobileLinks();
	const aboutUsSublinks: any = await getAboutUsSublinks();
	const copyrightLinks: any = await getCopyrightLinks();
	const navbarMenuLinks: any = await getNavbarMenuLinks();
	const footerMenuLinks: any = await getFooterMenuLinks();
	const locationsLinks: any = await getLocationsSublinks();
	const servicesSublinks: any = await getOurServicesSublinks();
	const themesOptionsContent: any = await getThemesOptionsContent();

	const blogs: any = await getAllBlogsContent();
	const blogsThreeCards: any = await getThreeBlogsContent();
	const testimonials: any = await getAllTestimonialsContent();
	const featuredProjects: any = await getAllFeaturedProjectsContent();

	const globalProps: IGlobalProps = {
		blogs: blogs,
		mobileLinks: mobileLinks,
		testimonials: testimonials,
		locationsLinks: locationsLinks,
		copyrightLinks: copyrightLinks,
		blogsThreeCards: blogsThreeCards,
		aboutUsSublinks: aboutUsSublinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,
		servicesSublinks: servicesSublinks,
		featuredProjects: featuredProjects,
		themesOptionsContent: themesOptionsContent,
	};

	return {
		pageProps,
		globalProps,
	};
};
