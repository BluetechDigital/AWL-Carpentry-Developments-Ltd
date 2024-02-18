// Imports
import nodemailer from "nodemailer";
import {IMailOptions} from "@/types/email";

const email: any = process.env.EMAIL_USER;
const password: any = process.env.EMAIL_PASS;

export const emailTransporter: any = nodemailer.createTransport({
	host: "gmail",
	service: "gmail",
	port: 587,
	secure: false,
	auth: {
		user: email,
		pass: password,
	},
	tls: {rejectUnauthorized: false},
	logger: true,
	debug: true,
});

export const mailOptions: IMailOptions = {
	from: email,
	to: email,
};
