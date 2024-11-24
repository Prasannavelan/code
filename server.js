const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();  // Make sure to load environment variables

// Initialize Express app
const app = express();

// Enable CORS to allow requests from your frontend (adjust for production)
app.use(cors({
  origin: 'http://localhost:3000',  // Frontend URL (adjust if needed)
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type'],
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Create a transporter to send email via Hostinger with SSL
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',  // Hostinger SMTP server
  port: 465,                   // SSL Port for sending emails
  secure: true,                // Use true for SSL
  auth: {
    user: process.env.EMAIL_USER,  // Your Hostinger email address
    pass: process.env.EMAIL_PASS,  // Your Hostinger email password
  },
  tls: {
    rejectUnauthorized: false,  // Ignore self-signed certificate errors
  },
});

// Route to handle contact form submission
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Log the incoming request data
  console.log('Form submission received:', req.body);

  // Validate form fields
  if (!firstName || !lastName || !email || !phone || !message) {
    console.log('Missing fields');  // Log missing fields
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,      // Sender's email
      to: process.env.RECEIVER_EMAIL,    // Receiver's email
      subject: 'New Contact Form Submission',  // Email subject
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `, // Body of the email
    };

    // Send the email
    console.log('Sending email...'); // Log sending email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully'); // Log success

    // Return a success response
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);  // Log the error stack trace
    res.status(500).json({
      message: 'Server error. Please try again later.',
      error: error.message,
      stack: error.stack,
    });
  }
});

// Start the Express server
const port = process.env.PORT || 5000;  // Default to port 5000 or use the environment variable
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
