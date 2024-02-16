// Imports
import * as React from "react";
import {IEmailFooter} from "@/types/email";
import {useGlobalContext} from "@/context/global";
import {Img, Row, Link, Text, Column, Section} from "@react-email/components";

const EmailFooter: React.FC = () => {
	const globalContext = useGlobalContext();

	const websiteUrl: string = "awlcarpentrydevelopments.co.uk";
	// const websiteUrl: string = process.env.SITE_URL
	// 	? `${process.env.SITE_URL}`
	// 	: "";

	const imagesDirUrl: string =
		"https://vzt.nmy.mybluehost.me/.website_a8dc575f/wp-content/uploads/2024/02";
	// const imagesDirUrl: string = process.env.IMAGE_DIR_URL
	// 	? `${process.env.IMAGE_DIR_URL}`
	// 	: "";
	return (
		<>
			<Section style={{border: "5px solid", borderColor: "#116dff"}}></Section>
			<Section style={footer}>
				<Section style={footerLogoSection}>
					<Link href={`https://${websiteUrl}`}>
						<Img
							src={`${imagesDirUrl}/awl-carpentry-developments-logo-white.svg`}
							width="105"
							height="105"
							style={footerLogo}
							alt="AWL Carpentry Developments Ltd Logo"
						/>
					</Link>
				</Section>
				<Row>
					<Column align="right" style={{width: "33%", paddingRight: "8px"}}>
						<Link
							href={globalContext?.themesOptionsContent?.facebookLink}
							style={link}
						>
							<Img
								style={{width: "100%", height: "35px"}}
								src={`${imagesDirUrl}/facebook-round-white.svg`}
							/>
						</Link>
					</Column>
					<Column align="center" style={{width: "33%", paddingLeft: "8px"}}>
						<Link
							href={globalContext?.themesOptionsContent?.instagramLink}
							style={link}
						>
							<Img
								style={{width: "100%", height: "35px"}}
								src={`${imagesDirUrl}/instagram-round-white.svg`}
							/>
						</Link>
					</Column>
					<Column align="left" style={{width: "33%", paddingLeft: "8px"}}>
						<Link
							href={globalContext?.themesOptionsContent?.twitterLink}
							style={link}
						>
							<Img
								style={{width: "100%", height: "35px"}}
								src={`${imagesDirUrl}/twitter-round-white.svg`}
							/>
						</Link>
					</Column>
				</Row>
				<Row>
					<Text
						style={{
							color: "#fafafa",
							fontSize: "0.8rem",
							textAlign: "center",
						}}
					>
						{globalContext?.themesOptionsContent?.copyrightText}
					</Text>
				</Row>
			</Section>
		</>
	);
};

export default EmailFooter;

const link: IEmailFooter.ILink = {
	color: "#20ce88",
	textDecoration: "underline",
};

const footer: IEmailFooter.IFooter = {
	maxWidth: "580px",
	margin: "0 auto",
	marginBottom: "30px",
	backgroundColor: "#001640",
};

const footerLogoSection: IEmailFooter.IFooterLogoSection = {
	width: "100%",
	padding: "0px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "#001640",
};

const footerLogo: IEmailFooter.IFooterLogo = {
	width: "100%",
	height: "125px",
};
