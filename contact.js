const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Route to handle contact form submission
router.post('/', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body; // Match the names you use in your form

  // Validate form fields
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create a transporter to send email via Hostinger with SSL
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',   // Hostinger's SMTP server
      port: 465,                    // Port for SSL (465)
      secure: true,                  // Use true for SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email
      to: process.env.RECEIVER_EMAIL, // Receiver's email
      subject: 'New Contact Form Submission',
      text: `Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);  // Log detailed error
    res.status(500).json({
      message: 'Server error. Please try again later.',
      error: error.message,  // Include the error message
      stack: error.stack,    // Include the stack trace for debugging
    });
  }
});

module.exports = router;
