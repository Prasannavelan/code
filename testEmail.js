const nodemailer = require('nodemailer');
require('dotenv').config(); // Ensure this loads the environment variables

async function sendTestEmail() {
  // Create a transporter using Hostinger's SMTP settings from environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,  // Hostinger SMTP server
    port: process.env.SMTP_PORT,  // Port (SSL Port 465)
    secure: true,                 // Use true for SSL
    auth: {
      user: process.env.EMAIL_USER,  // Your email address (e.g., your-email@hostinger.com)
      pass: process.env.EMAIL_PASS,  // Your email password (or app-specific password if using 2FA)
    },
    tls: {
      rejectUnauthorized: false  // Disables certificate validation (for testing)
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,      // Sender's email
    to: process.env.RECEIVER_EMAIL,    // Receiver's email
    subject: 'Test Email from NodeMailer',  // Email subject
    text: 'This is a test email from your Node.js server!',  // Email body
  };

  try {
    // Attempt to send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully:', info.response);
  } catch (error) {
    // Log more detailed error information for troubleshooting
    console.error('Error sending test email:', error.message);
    console.error('Error stack:', error.stack);
  }
}

// Call the function to send the email
sendTestEmail();
