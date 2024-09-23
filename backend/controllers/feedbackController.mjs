import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

const handleFeedback = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${name} - ${subject} <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      text: `You have received a new message from your contact form:
             \nName: ${name}
             \nEmail: ${email}
             \nSubject: ${subject}
             \nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message received successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    if (error.code === "EAUTH") {
      res.status(500).json({
        success: false,
        error: "Invalid email credentials. Please check your email settings.",
      });
    } else {
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  }
};

export { handleFeedback };
