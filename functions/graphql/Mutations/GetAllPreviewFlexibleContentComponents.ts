// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PREVIEW PAGES & BLOGS */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllPreviewFlexibleContentComponents = async (
	id: number,
	postType: string,
	authToken: string,
	loginRedirectURL: string,
	postTypeFlexibleContent: string
) => {
	try {
		const content: DocumentNode = gql`
			{
        		mainContent: ${postType}(where: {id: "${id}", status: PUBLISH}) {
        		  edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on ${postTypeFlexibleContent}_Hero {
												fieldGroupName
												title
												paragraph
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
												servicesLinks {
													icon {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
													buttonLink {
														url
														title
														target
													}
												}
											}
											... on ${postTypeFlexibleContent}_HeroTwo {
												fieldGroupName
												title
												paragraph
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_TitleParagraph {
												fieldGroupName
												title
												paragraph
												displayParagraph
											}
											... on ${postTypeFlexibleContent}_AboutContentImage {
                								fieldGroupName
                								title
                								subtitle
                								paragraph
												quality {
													title
													paragraph
												}
												reliability {
													title
													paragraph
												}
                								checkatrade {
                									altText
                									sourceUrl
                									mediaDetails {
                										height
                										width
                									}
                								}
                								image {
                									altText
                									sourceUrl
                									mediaDetails {
                										height
                										width
                									}
                								}
												contentBox {
													text
													subtext
													icon {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
													}
												}
                							}
											... on ${postTypeFlexibleContent}_TitleContentImage {
            									fieldGroupName
            									title
            									paragraph
            									buttonLink {
            										url
            										title
            										target
            									}
            									image {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
            									displayContentOption
            									displayBackgroundColor
            								}
											... on ${postTypeFlexibleContent}_OurClients {
												fieldGroupName
												title
												subtitle
												paragraph
												imageGrid {
													link {
														url
														title
														target
													}
													image {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
												}
											}
											... on ${postTypeFlexibleContent}_OurServices {
												fieldGroupName
												title
												subtitle
												paragraph
												servicesGrid {
													card {
														title
														paragraph
														link {
															url
															title
															target
														}
														image {
															altText
															sourceUrl
															mediaDetails {
																height
																width
															}
														}
													}
												}
											}... on ${postTypeFlexibleContent}_OurLocation {
												fieldGroupName
												title
												paragraph
											}
											... on ${postTypeFlexibleContent}_GettingStarted {
            									fieldGroupName
            									title
												subtitle
            									stepOne {
            										title
            										paragraph
            										image {
            											altText
            											sourceUrl
            											mediaDetails {
            												height
            												width
            											}
            										}
            									}
            									stepTwo {
            										title
            										paragraph
            										image {
            											altText
            											sourceUrl
            											mediaDetails {
            												height
            												width
            											}
            										}
            									}
            									stepThree {
            										title
            										paragraph
            										image {
            											altText
            											sourceUrl
            											mediaDetails {
            												height
            												width
            											}
            										}
            									}
            								}
											... on ${postTypeFlexibleContent}_FeaturedProjectsGrid {
												fieldGroupName
												title
												subtitle
												paragraph
											}
											... on ${postTypeFlexibleContent}_Gallery {
												fieldGroupName
												title
												paragraph
												itemsDisplayedPerPage
												gallery {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_TestimonialsSlider {
												fieldGroupName
											}
											... on ${postTypeFlexibleContent}_TestimonialsGrid {
												fieldGroupName
												title
												subtitle
												paragraph
											}
											... on ${postTypeFlexibleContent}_BlogsGrid {
												fieldGroupName
												title
												subtitle
												paragraph
											}
											... on ${postTypeFlexibleContent}_BlogsThreeCards {
												fieldGroupName
												title
												subtitle
												paragraph
											}
											... on ${postTypeFlexibleContent}_Faq {
												fieldGroupName
												title
												subtitle
												paragraph
												faqGrid {
													card {
														title
														paragraph
														link {
															url
															title
															target
														}
														image {
															altText
															sourceUrl
															mediaDetails {
																height
																width
															}
														}
													}
												}
											... on ${postTypeFlexibleContent}_FaqTwo {
												fieldGroupName
												title
												subtitle
												paragraph
												buttonLink {
													url
													title
													target
												}
												image {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
												faqContent {
													card {
														title
														paragraph
													}
												}
											}
											... on ${postTypeFlexibleContent}_Cta {
												fieldGroupName
												title
												paragraph
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
													sourceUrl
												}
											}
											... on ${postTypeFlexibleContent}_ContactInfo {
												fieldGroupName
												title
												paragraph
											}
											... on ${postTypeFlexibleContent}_ContactForm {
												fieldGroupName
												title
												paragraph
											}
											... on ${postTypeFlexibleContent}_Maintenance {
												fieldGroupName
												title
												paragraph
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_ErrorPageContent {
												fieldGroupName
												title
												paragraph
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
													sourceUrl
												}
											}
										}
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
			variables: {
				id: id,
			},
			context: {
				headers: {
					authorization: authToken ? `Bearer ${authToken}` : "",
				},
			},
		});

		return {
			content: response?.data?.mainContent?.flexibleContent?.flexibleContent,
		};
	} catch (error) {
		return loginRedirectURL;
	}
};
