// Imports
import {render} from "@react-email/components";
import {transporter} from "@/config/nodemailer";
import type {NextApiRequest, NextApiResponse} from "next";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";

// Components
import CustomerEnquiryConfirmationEmail from "@/public/emails/CustomerEnquiryConfirmationEmail";
import BusinessCustomerEnquiryConfirmationEmail from "@/public/emails/BusinessCustomerEnquiryConfirmationEmail";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const data = req.body;

		// If any of these values are undefined
		if (
			!data?.firstName ||
			!data?.lastName ||
			!data?.email ||
			!data?.phoneNumber ||
			!data?.selectedServices ||
			!data?.subject ||
			!data?.message
		) {
			return res.status(400).json({
				status: "error",
				message: "Bad request. Please try again.",
			});
		}

		try {
			const themesOptionsContent: any = await getThemesOptionsContent();

			const customerEmailHtml = render(
				<CustomerEnquiryConfirmationEmail
					firstName={`${data?.firstName}`}
					lastName={`${data?.lastName}`}
					email={`${data?.email}`}
					subject={`${data?.subject}`}
					phoneNumber={data?.phoneNumber}
					themesOptionsContent={themesOptionsContent}
					selectedServices={`${data?.selectedServices}`}
				/>
			);
			const businessEmailHtml = render(
				<BusinessCustomerEnquiryConfirmationEmail
					firstName={`${data?.firstName}`}
					lastName={`${data?.lastName}`}
					email={`${data?.email}`}
					subject={`${data?.subject}`}
					message={`${data?.message}`}
					phoneNumber={data?.phoneNumber}
					themesOptionsContent={themesOptionsContent}
					selectedServices={`${data?.selectedServices}`}
				/>
			);

			/* Customer Enquiry Confirmation Email */
			const customerEmail = {
				from: "toddowenmpeli02@gmail.com",
				to: `${data?.email}`,
				subject: `AWL Carpentry Inquiry: ${data?.subject}`,
				html: customerEmailHtml,
			};

			/* Business Customer Enquiry Confirmation Email */
			const businessEmail = {
				from: "toddowenmpeli02@gmail.com",
				to: `${data?.email}`,
				subject: `New Website Inquiry: ${data?.subject}`,
				html: businessEmailHtml,
			};

			await transporter.sendMail(customerEmail);
			await transporter.sendMail(businessEmail);

			return res.status(200).json({
				status: "success",
				message:
					"Thanks for your message! We'll endeavour to get back in touch with you as soon as possible.",
			});
		} catch (err) {
			console.log(err);

			return res.status(400).json({
				status: "error",
				message: "Something went wrong sending your enquiry. Please try again.",
				data: err,
			});
		}
	}

	return res.status(400).json({
		status: "error",
		message: "Bad request. Please try again.",
	});
};

export default handler;
