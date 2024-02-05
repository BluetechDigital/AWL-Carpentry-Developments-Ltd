// Imports
import {FC} from "react";
import {usePageContext} from "@/context/pages";
import {IPostTypeFlexibleContent} from "@/types/context";

// Components
import CTA from "../CTA";
import Hero from "../Hero";
import Blogs from "../Blogs";
import FAQTwo from "../FAQTwo";
import HeroTwo from "../HeroTwo";
import Gallery from "../Gallery";
import OurClients from "../OurClients";
import ContactInfo from "../ContactInfo";
import OurServices from "../OurServices";
import ErrorPage from "../Global/ErrorPage";
import GettingStarted from "../GettingStarted";
import TitleParagraph from "../TitleParagraph";
import Maintenance from "../Global/Maintenance";
import BlogsThreeCards from "../BlogsThreeCards";
import TestimonialsGrid from "../TestimonialsGrid";
import AboutContentImage from "../AboutContentImage";
import TestimonialsSlider from "../TestimonialsSlider";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent: IPostTypeFlexibleContent =
		content?.postTypeFlexibleContent;

	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, keys: any) => (
					<section key={keys}>
						{item?.fieldGroupName === `${FlexibleContent}_Hero` ? (
							<>
								<Hero
									title={item?.title}
									paragraph={item?.paragraph}
									servicesLinks={item?.servicesLinks}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_HeroTwo` ? (
							<>
								<HeroTwo
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TitleParagraph` ? (
							<>
								<TitleParagraph
									title={item?.title}
									paragraph={item?.paragraph}
									displayParagraph={item?.displayParagraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_AboutContentImage` ? (
							<>
								<AboutContentImage
									title={item?.title}
									image={item?.image}
									quality={item?.quality}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									contentBox={item?.contentBox}
									checkatrade={item?.checkatrade}
									reliability={item?.reliability}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurClients` ? (
							<>
								<OurClients
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									imageGrid={item?.imageGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurServices` ? (
							<>
								<OurServices
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									servicesGrid={item?.servicesGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_GettingStarted` ? (
							<>
								<GettingStarted
									title={item?.title}
									subtitle={item?.subtitle}
									stepOne={item?.stepOne}
									stepTwo={item?.stepTwo}
									stepThree={item?.stepThree}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Gallery` ? (
							<>
								<Gallery
									title={item?.title}
									gallery={item?.gallery}
									paragraph={item?.paragraph}
									itemsDisplayedPerPage={item?.itemsDisplayedPerPage}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_TestimonialsSlider` ? (
							<>
								<TestimonialsSlider
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_TestimonialsGrid` ? (
							<>
								<TestimonialsGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_BlogsGrid` ? (
							<>
								<Blogs
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_BlogsThreeCards` ? (
							<>
								<BlogsThreeCards
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_CaseStudiesGrid` ? (
							<></>
						) : item?.fieldGroupName === `${FlexibleContent}_Faq` ? (
							<>
								<FAQTwo
									title={item?.title}
									image={item?.image}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									faqContent={item?.faqContent}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Cta` ? (
							<>
								<CTA
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContactInfo` ? (
							<>
								<ContactInfo title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContactForm` ? (
							<></>
						) : item?.fieldGroupName === `${FlexibleContent}_Maintenance` ? (
							<>
								<Maintenance
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ErrorPageContent` ? (
							<>
								<ErrorPage
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : (
							<></>
						)}
					</section>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
