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
	testimonials: string;
	featuredProjects: string;
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
export type ITestimonials = [
	{
		node: {
			testimonialReview: {
				name: string;
				position: string;
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
export type IAboutUsSublinks = [
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
export type IFeaturedProjects = [
	{
		node: {
			id: string;
			slug: string;
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
	certificationsGallery: [
		{
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		}
	];
	menuColumnThree: {
		text: string;
		checkatrade: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		mainImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
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
	mobileLinks: IMobileLinks;
	testimonials: ITestimonials;
	copyrightLinks: ICopyrightLinks;
	aboutUsSublinks: IAboutUsSublinks;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	locationsLinks: ILocationsSublinks;
	servicesSublinks: IServicesSublinks;
	featuredProjects: IFeaturedProjects;
	themesOptionsContent: IThemesOptionsContent;
};
export type IGlobalContext = {
	blogs: IBlogs;
	blogsThreeCards: IBlogs;
	mobileLinks: IMobileLinks;
	testimonials: ITestimonials;
	copyrightLinks: ICopyrightLinks;
	aboutUsSublinks: IAboutUsSublinks;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	locationsLinks: ILocationsSublinks;
	featuredProjects: IFeaturedProjects;
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
