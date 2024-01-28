import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* LOCATIONS SLUGS (URLS) */
export const getAllLocationsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				locationsSlugs: locations(where: {status: PUBLISH}, last: 100) {
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

		return response?.data?.locationsSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch the locations slugs");
	}
};

// All Locations Content
export const getAllLocationsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				locationsContent: locations(where: {status: PUBLISH}, last: 100) {
					edges {
						node {
							id
							uri
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

		return response?.data?.locationsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the locations pages"
		);
	}
};
