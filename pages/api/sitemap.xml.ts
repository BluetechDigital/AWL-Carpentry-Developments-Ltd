// Imports
import {Readable} from "stream";
import {SitemapStream, streamToPromise} from "sitemap";
import {getAllBlogsSlugs} from "@/functions/graphql/Queries/GetAllBlogs";
import {getAllPagesSlugs} from "@/functions/graphql/Queries/GetAllPagesSlugs";
import {getAllLocationsSlugs} from "@/functions/graphql/Queries/GetAllLocations";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
	const [pagesSlugs, blogsPostsSlugs, locationsSlugs] = await Promise.all([
		getAllPagesSlugs(),
		getAllBlogsSlugs(),
		getAllLocationsSlugs(),
	]);

	/* Pages, News Insights Posts Arrays */
	const pagesLinks: any = [];
	const blogsPostsLinks: any = [];
	const locationsPagesLinks: any = [];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// Blogs Dynamic Links
	blogsPostsSlugs?.map((keys: any) => {
		const object = {
			url: `/blogs/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		blogsPostsLinks.push(object);
	});

	// Locations Dynamic Links
	locationsSlugs?.map((keys: any) => {
		const object = {
			url: `/locations/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		locationsPagesLinks.push(object);
	});

	// Arrays with your all dynamic links
	const allLinks: any = [
		...pagesLinks,
		...blogsPostsLinks,
		...locationsPagesLinks,
	];

	// Create a stream to write to
	const stream = new SitemapStream({hostname: process.env.SITE_URL});

	req;

	res.writeHead(200, {
		"Content-Type": "application/xml",
	});

	const xmlString = await streamToPromise(
		Readable.from(allLinks).pipe(stream)
	).then((data: any) => data.toString());

	res.end(xmlString);
};
