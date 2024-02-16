// Imports
import {
	Head,
	Html,
	Link,
	Text,
	Body,
	Section,
	Preview,
	Container,
} from "@react-email/components";
import * as React from "react";
import {IBusinessEmail} from "@/types/email";

// Components
import EmailFooter from "./Layout/EmailFooter";
import EmailHeader from "./Layout/EmailHeader";

export const BusinessCustomerEnquiryConfirmationEmail: React.FC<
	IBusinessEmail.IBusinessConfirmationEmail
> = ({email, subject, message, lastName, firstName, updatedDate}) => {
	const imagesDirUrl: string =
		"https://vzt.nmy.mybluehost.me/.website_a8dc575f/wp-content/uploads/2024/02";
	// const imagesDirUrl: string = process.env.IMAGE_DIR_URL
	// 	? `${process.env.IMAGE_DIR_URL}`
	// 	: "";

	return (
		<Html>
			<Head />
			<Preview>New Website Inquiry: {`${subject}`}</Preview>
			<Body style={main}>
				<Container style={container}>
					<EmailHeader
						imagesDirPath={`${imagesDirUrl}/AWL-Carpentry-Developments-Ltd-Email-Header-1.png`}
					/>
					<Section style={content}>
						<Text style={introParagraph}>Hello Team,</Text>
						<Text style={paragraph}>
							We've just received a new inquiry through our website's regarding{" "}
							{subject} and our general carpentry & developments services.
						</Text>
						<Text style={detailsParagraph}>Inquiry Details:</Text>
						<Text style={paragraph}>
							<strong>First Name:</strong> {firstName}
							<br />
							<strong>Last Name:</strong> {lastName}
							<br />
							<strong>Email:</strong>{" "}
							<Link href={`mailto:${email}`} style={link}>
								{email}
							</Link>
							<br />
							<strong>Subject:</strong> {subject} Services
						</Text>
						<Text style={paragraph}>
							<strong>Message:</strong> "{message}"
						</Text>
						<Text style={paragraph}>
							Can we begin reviewing the details of {firstName}'s inquiry
							shortly and promptly follow up! We need to address his questions
							and provide any additional information he may need. Thanks Team!
						</Text>
						<Text style={paragraph}>Best regards,</Text>
						<Text style={paragraph}>
							Adam Long,
							<br />
							Director,
							<br />
							AWL Carpentry & Developments Ltd
						</Text>
					</Section>
					<EmailFooter />
				</Container>
			</Body>
		</Html>
	);
};

export default BusinessCustomerEnquiryConfirmationEmail;

const fontFamily: string = "PlusJakartaSans,Helvetica,Arial,sans-serif";

const main: IBusinessEmail.IMain = {
	fontFamily,
	backgroundColor: "#ffffff",
};
const introParagraph: IBusinessEmail.IIntroParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "600",
	padding: "0.25rem 1.5rem",
	paddingTop: "1.5rem",
};
const detailsParagraph: IBusinessEmail.IDetailsParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "600",
	padding: "0.25rem 1.5rem",
};
const paragraph: IBusinessEmail.IParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "400",
	padding: "0.25rem 1.5rem",
};
const container: IBusinessEmail.IContainer = {
	maxWidth: "580px",
	margin: "30px auto",
	marginBottom: "0px",
	backgroundColor: "#ffffff",
};
const content: IBusinessEmail.IContent = {
	padding: "10px 20px",
};
const link: IBusinessEmail.ILink = {
	color: "#20ce88",
	textDecoration: "underline",
};
