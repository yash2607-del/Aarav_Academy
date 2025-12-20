import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create a transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // You can change this to your email provider
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS  // Your email app password
    }
  });
};

// POST route to handle query form submission
app.post('/api/send-query', async (req, res) => {
  try {
    const { name, email, phone, class: studentClass, course, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !studentClass || !course) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill all required fields' 
      });
    }

    const transporter = createTransporter();

    // Email content for admin
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL, // Admin's email address
      subject: `New Query from ${name} - Aarav Academy`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0d6efd; text-align: center;">New Student Query</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #333; margin-top: 0;">Student Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Class:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">Class ${studentClass}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Course:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${course}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px 0;"><strong>Message:</strong></td>
                <td style="padding: 10px 0;">${message}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-left: 4px solid #0d6efd; border-radius: 4px;">
            <p style="margin: 0; color: #084298;">
              <strong>Action Required:</strong> Please respond to this query within 24 hours.
            </p>
          </div>
          <div style="margin-top: 20px; text-align: center; color: #6c757d; font-size: 12px;">
            <p>This is an automated notification from Aarav Academy Website</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to the student
    const studentMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Your Query - Aarav Academy',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0d6efd; text-align: center;">Thank You for Contacting Us!</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p>Dear ${name},</p>
            <p>Thank you for your interest in Aarav Academy. We have received your query and our team will get back to you within 24 hours.</p>
            <h3 style="color: #333;">Your Query Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="padding: 8px 0;"><strong>Class:</strong> Class ${studentClass}</li>
              <li style="padding: 8px 0;"><strong>Course:</strong> ${course}</li>
              ${message ? `<li style="padding: 8px 0;"><strong>Message:</strong> ${message}</li>` : ''}
            </ul>
          </div>
          <div style="margin-top: 20px; text-align: center;">
            <p style="color: #6c757d;">For any urgent queries, feel free to call us or visit our academy.</p>
          </div>
          <div style="margin-top: 20px; text-align: center; color: #6c757d; font-size: 12px;">
            <p>Best Regards,<br/>Team Aarav Academy</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(studentMailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Query sent successfully! We will contact you soon.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send query. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
