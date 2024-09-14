import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
	endpoint: process.env.MAILTRAP_ENDPOINT,
	token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
	email: "mailtrap@demomailtrap.com",
	name: "Burak",
};
// const Nodemailer = require("nodemailer");
// const { MailtrapTransport } = require("mailtrap");

// const TOKEN = "2e571fa9eeb318017f80ec6827dd6e98";

// const transport = Nodemailer.createTransport(
//   MailtrapTransport({
//     token: TOKEN,
//   })
// );

// const sender = {
//   address: "mailtrap@demomailtrap.com",
//   name: "Mailtrap Test",
// };
// const recipients = [
//   "22it3044@rgipt.ac.in",
// ];

// transport
//   .sendMail({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);

// const Nodemailer = require("nodemailer");
// const { MailtrapTransport } = require("mailtrap");

// const TOKEN = "a9e245a1edafab12f144bfe0338e852e";

// const transport = Nodemailer.createTransport(
//   MailtrapTransport({
//     token: TOKEN,
//     testInboxId: 3128791,
//   })
// );

// const sender = {
//   address: "mailtrap@example.com",
//   name: "Mailtrap Test",
// };
// const recipients = [
//   "22it3044@rgipt.ac.in",
// ];

// transport
//   .sendMail({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//     sandbox: true
//   })
//   .then(console.log, console.error);