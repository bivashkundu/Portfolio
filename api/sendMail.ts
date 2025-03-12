import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phoneNumber, subject, message } = req.body;

  try {
    // Configure your email transport
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS // Your email app password
      }
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email to receive the message
      subject: `New Contact Form Submission - ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phoneNumber}
        Subject: ${subject}
        Message: ${message}
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
