export type ISeo = {
	canonical: string;
	cornerstone: Boolean;
	focuskw: string;
	fullHead: string;
	metaDesc: string;
	metaKeywords: string;
	metaRobotsNofollow: string;
	metaRobotsNoindex: string;
	opengraphAuthor: string;
	opengraphDescription: string;
	opengraphImage: {
		mediaItemUrl: string;
	};
	opengraphModifiedTime: string;
	opengraphPublishedTime: string;
	opengraphPublisher: string;
	opengraphSiteName: string;
	opengraphTitle: string;
	opengraphType: string;
	opengraphUrl: string;
	readingTime: number;
	title: string;
	twitterDescription: string;
	twitterTitle: string;
	twitterImage: {
		mediaItemUrl: string;
	};
};
export type IBlogs = [
	{
		node: {
			id: string;
			uri: string;
			date: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type IContent = [
	{
		content: any;
	}
];
export type IPostTypes = {
	pages: string;
	posts: string;
	locations: string;
	previewPage: string;
	previewPost: string;
	caseStudies: string;
	testimonials: string;
};
export type IMobileLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type ICaseStudies = [
	{
		node: {
			id: string;
			uri: string;
			date: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type IAboutUsLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type ITestimonials = [
	{
		node: {
			testimonialReview: {
				name: string;
				paragraph: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];
export type ICopyrightLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IFooterMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type INavbarMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IServicesSublinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type ILocationsSublinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];
export type IThemesOptionsContent = {
	email: string;
	address: string;
	emailTwo: string;
	textarea: string;
	businessHours: string;
	phoneNumber: string;
	phoneNumberTwo: string;
	copyrightText: string;
	facebookLink: string;
	twitterLink: string;
	linkedinLink: string;
	instagramLink: string;
	displayNoticeBanner: boolean;
	noticeBannerTextarea: string;
};

/* CONTEXT PROVIDERS  */
export type IPageContext = {
	seo: ISeo;
	content: IContent;
	postTypeFlexibleContent: IPostTypeFlexibleContent;
};
export type IGlobalProps = {
	blogs: IBlogs;
	blogsThreeCards: IBlogs;
	caseStudies: ICaseStudies;
	mobileLinks: IMobileLinks;
	aboutUsLinks: IAboutUsLinks;
	testimonials: ITestimonials;
	copyrightLinks: ICopyrightLinks;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	locationsLinks: ILocationsSublinks;
	servicesSublinks: IServicesSublinks;
	themesOptionsContent: IThemesOptionsContent;
};
export type IGlobalContext = {
	blogs: IBlogs;
	blogsThreeCards: IBlogs;
	caseStudies: ICaseStudies;
	mobileLinks: IMobileLinks;
	aboutUsLinks: IAboutUsLinks;
	testimonials: ITestimonials;
	copyrightLinks: ICopyrightLinks;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	locationsLinks: ILocationsSublinks;
	servicesSublinks: IServicesSublinks;
	themesOptionsContent: IThemesOptionsContent;
};
export type IPageContextProvider = {
	seo: ISeo;
	content: IContent;
	children: React.ReactNode;
	postTypeFlexibleContent: IPostTypeFlexibleContent;
};
export type IFlexibleContentType = {
	pages: string;
	previewPage: string;
	previewPost: string;
};
export type IGlobalContextProvider = {
	globalProps: IGlobalContext;
	children: React.ReactNode;
};
export type IPostTypeFlexibleContent = {
	postTypeFlexibleContent: string;
};
