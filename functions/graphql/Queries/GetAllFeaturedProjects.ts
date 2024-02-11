import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* FEATURED PROJECTS SLUGS (URLS) */
export const getAllFeaturedProjectsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				featuredProjectsSlugs: featuredProjects(
					where: {status: PUBLISH}
					last: 100
				) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.featuredProjectsSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the featured projects slugs"
		);
	}
};

// All Featured Projects Content
export const getAllFeaturedProjectsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				featuredProjectsContent: featuredProjects(
					where: {status: PUBLISH, orderby: {field: DATE, order: DESC}}
					first: 100
				) {
					edges {
						node {
							slug
							date
							excerpt
							title(format: RENDERED)
							featuredImage {
								node {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.featuredProjectsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the featured projects content"
		);
	}
};
