const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service
    auth: {
      user: process.env.GMAIL_USER, // Your email from .env
      pass: process.env.GMAIL_PASS, // Your app password from .env
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER, // Your email address
    to: process.env.GMAIL_USER, // Your email (where you receive the message)
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    replyTo: email, // Allows replies to go to the user's email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

module.exports = router;
