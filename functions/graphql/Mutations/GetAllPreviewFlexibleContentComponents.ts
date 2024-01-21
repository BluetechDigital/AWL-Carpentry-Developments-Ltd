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
        		mainContent: ${postType}(id: ${id}, idType: DATABASE_ID) {
        		  edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on ${postTypeFlexibleContent}_Hero {
												fieldGroupName
												video
												titleEnd
												paragraph
												titleStart
												titleMiddle
												displayVideo
												buttonLink {
													url
													title
													target
												}
												buttonLinkTwo {
													url
													title
													target
												}
												videoBackgroundImage {
													sourceUrl
												}
												smallImageOne {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
												smallImageTwo {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
												rightsideImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_HeroTwo {
												fieldGroupName
												title
												paragraph
												backgroundImage {
													sourceUrl
												}
											}
											... on ${postTypeFlexibleContent}_FeaturesGrid {
                      							fieldGroupName
                      							cardOne {
                      							  title
                      							  subtitle
                      							  paragraph
                      							}
                      							cardTwo {
                      							  backgroundImage {
                      							    altText
                      							    sourceUrl
                      							    mediaDetails {
                      							      height
                      							      width
                      							    }
                      							  }
                      							}
                      							cardThree {
                      							  foreground {
                      							    title
                      							    subtitle
                      							    paragraph
                      							  }
                      							  background {
                      							    title
                      							    subtitle
                      							    paragraph
                      							  }
                      							}
                      							lastCard {
                      							  backgroundImage {
                      							    altText
                      							    sourceUrl
                      							    mediaDetails {
                      							      height
                      							      width
                      							    }
                      							  }
                      							}
                      							gridContent {
                      							  card {
                      							    title
                      							    subtitle
                      							    paragraph
                      							    backgroundColor
                      							  }
                      							}
											}
											... on ${postTypeFlexibleContent}_FeaturesGridTwo {
                      							fieldGroupName
                      							cardOne {
                      							  title
                      							  subtitle
                      							  paragraph
                      							}
                      							cardTwo {
                      							  backgroundImage {
                      							    altText
                      							    sourceUrl
                      							    mediaDetails {
                      							      height
                      							      width
                      							    }
                      							  }
                      							}
                      							lastCard {
                      							  backgroundImage {
                      							    altText
                      							    sourceUrl
                      							    mediaDetails {
                      							      height
                      							      width
                      							    }
                      							  }
                      							}
                      							gridContent {
                      							  card {
                      							    title
                      							    subtitle
                      							    paragraph
                      							    backgroundColor
                      							  }
                      							}
											}
											... on ${postTypeFlexibleContent}_TwoColumnButtonContent {
												fieldGroupName
                  								title
                  								subtitle
                  								paragraph
												backgroundColor
												buttonLink {
													url
													title
													target
												}
                  								columnTwoContent {
                  									paragraph
                  									paragraphTwo
                  									paragraphThree
                  									buttonText
                  									buttonTextTwo
                  									buttonTextThree
                  								}
											}
											... on ${postTypeFlexibleContent}_JumboContentSection {
												fieldGroupName
												contentSection {
													content {
														title
														subtitle
														paragraph
														imageLocation
														backgroundDisplay
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
													}
												}
											}
											... on ${postTypeFlexibleContent}_JumboContentImage {
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
												bottomContent {
													text
													textTwo
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
													displayTextarea
													displayButtonOrImage
												}
											}
											... on ${postTypeFlexibleContent}_AchievementsStatsCta {
												fieldGroupName
												title
												paragraph
												displayAchievementsContent
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
													sourceUrl
												}
												achievements {
													card {
														title
														paragraph
														icon {
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
													}
												}
											}
											... on ${postTypeFlexibleContent}_TitleParagraph {
												fieldGroupName
												title
												paragraph
												displayParagraph
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
												paragraph
												subtitle
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
												servicesGrid {
													card {
														title
														subtitle
														paragraph
														buttonLinks {
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
											... on ${postTypeFlexibleContent}_Testimonials {
												fieldGroupName
												title
												subtitle
												paragraph
											}
											... on ${postTypeFlexibleContent}_TestimonialsTwo {
												fieldGroupName
												title
												subtitle
												paragraph
												buttonLink {
													url
													title
													target
												}
											}
											... on ${postTypeFlexibleContent}_TitleContentImage {
												fieldGroupName
												title
												subtitle
												paragraph
												imageLocation
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
											}
											... on ${postTypeFlexibleContent}_VideoBlock {
												fieldGroupName
												title
												video
												subtitle
												paragraph
												displayVideo
												highlightText
												displayYoutubeIcon
												buttonLink {
													url
													title
													target
												}
												videoBackgroundImage {
            										sourceUrl
              									}
											}
											... on ${postTypeFlexibleContent}_Gallery {
												fieldGroupName
												title
												paragraph
												highlightText
												gallery {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
												}
											}
											... on ${postTypeFlexibleContent}_NewsInsightsGrid {
												fieldGroupName
												title
												italic
												paragraph
											}
											... on ${postTypeFlexibleContent}_NewsInsightsThreeCards {
												fieldGroupName
												title
												italic
												paragraph
											}
											... on ${postTypeFlexibleContent}_Faq {
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
											... on ${postTypeFlexibleContent}_CtaTwo {
												fieldGroupName
												title
												highlightText
												backgroundColor
												highlightTextColor
												buttonLink {
													url
													title
													target
												}
											}
											... on ${postTypeFlexibleContent}_LinkedinCta {
												fieldGroupName
												title
												highlightText
												backgroundColor
												highlightTextColor
												displayLinkedinIcon
												buttonLink {
													url
													title
													target
												}
											}
											... on ${postTypeFlexibleContent}_ContactInfo {
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
