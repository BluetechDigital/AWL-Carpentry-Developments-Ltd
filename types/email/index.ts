export type IMailOptions = {
	from: string;
	to: string;
};

export type IContactMessageFields = {
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	message: string;
};

export type IGenerateEmailContent = {
	text: string;
	html: string;
};

/* Types Namespace - (EMAIL HEADER)
Global Email Header (IEmailHeader) */
export namespace IEmailHeader {
	export type IEmailHeader = {
		imagesDirPath: string;
	};
	export type IImageSection = {
		width: string;
		padding: string;
		display: string;
		alignItems: string;
		justifyContent: string;
		backgroundColor: string;
	};
	export type ILogo = {
		width: string;
		height: string;
		minHeight: string;
	};
}

/* Types Namespace - (EMAIL FOOTER)
Global Email Footer (IEmailFooter) */
export namespace IEmailFooter {
	export type ILink = {
		color: string;
		textDecoration: string;
	};
	export type IFooter = {
		maxWidth: string;
		margin: string;
		marginBottom: string;
		backgroundColor: string;
	};
	export type IFooterLogoSection = {
		width: string;
		padding: string;
		display: string;
		alignItems: string;
		justifyContent: string;
		backgroundColor: string;
	};
	export type IFooterLogo = {
		width: string;
		height: string;
	};
}

/* Types Namespace - (CUSTOMER)
Customer Enquiry Confirmation Email (ICECE) */
export namespace ICustomerEmail {
	export type ICustomerConfirmationEmail = {
		email?: string;
		subject?: string;
		lastName?: string;
		firstName?: string;
		updatedDate?: Date;
	};
	export type IMain = {
		fontFamily: string;
		backgroundColor: string;
	};
	export type IIntroParagraph = {
		lineHeight: number;
		fontSize: number;
		fontWeight: string;
		padding: string;
		paddingTop: string;
	};
	export type IParagraph = {
		lineHeight: number;
		fontSize: number;
		fontWeight: string;
		padding: string;
	};
	export type IContainer = {
		maxWidth: string;
		margin: string;
		marginBottom: string;
		backgroundColor: string;
	};
	export type IContent = {
		padding: string;
	};
	export type IImageSection = {
		width: string;
		padding: string;
		display: string;
		alignItems: string;
		justifyContent: string;
		backgroundColor: string;
	};
	export type ILink = {
		color: string;
		textDecoration: string;
	};
	export type ILogo = {
		width: string;
		height: string;
		minHeight: string;
	};
	export type IFooter = {
		maxWidth: string;
		margin: string;
		marginBottom: string;
		backgroundColor: string;
	};
	export type IFooterLogoSection = {
		width: string;
		padding: string;
		display: string;
		alignItems: string;
		justifyContent: string;
		backgroundColor: string;
	};
	export type IFooterLogo = {
		width: string;
		height: string;
	};
}

/* Types Namespace - (BUSINESS)
Business Customer Enquiry Confirmation Email (IBCECE) */
export namespace IBusinessEmail {
	export type IBusinessConfirmationEmail = {
		email?: string;
		message?: string;
		subject?: string;
		lastName?: string;
		firstName?: string;
		updatedDate?: Date;
	};
	export type IMain = {
		fontFamily: string;
		backgroundColor: string;
	};
	export type IIntroParagraph = {
		lineHeight: number;
		fontSize: number;
		fontWeight: string;
		padding: string;
		paddingTop: string;
	};
	export type IDetailsParagraph = {
		lineHeight: number;
		fontSize: number;
		fontWeight: string;
		padding: string;
	};
	export type IParagraph = {
		lineHeight: number;
		fontSize: number;
		fontWeight: string;
		padding: string;
	};
	export type IContainer = {
		maxWidth: string;
		margin: string;
		marginBottom: string;
		backgroundColor: string;
	};
	export type IContent = {
		padding: string;
	};
	export type IImageSection = {
		width: string;
		padding: string;
		display: string;
		alignItems: string;
		justifyContent: string;
		backgroundColor: string;
	};
	export type ILink = {
		color: string;
		textDecoration: string;
	};
	export type ILogo = {
		width: string;
		height: string;
		minHeight: string;
	};
	export type IFooter = {
		maxWidth: string;
		margin: string;
		marginBottom: string;
		backgroundColor: string;
	};
	export type IFooterLogoSection = {
		width: string;
		padding: string;
		display: string;
		alignItems: string;
		justifyContent: string;
		backgroundColor: string;
	};
	export type IFooterLogo = {
		width: string;
		height: string;
	};
}
