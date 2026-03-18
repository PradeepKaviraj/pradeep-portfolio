import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    let transporter;

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      // Production configuration using standard Gmail SMTP service
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    } else {
      // Development fallback: using Ethereal Email to prevent crashes
      console.log('⚠️ Missing EMAIL_USER and EMAIL_PASS. Using Ethereal Email for testing.');
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'pradeepmvk12@gmail.com', // Sending specifically to the user's email
      replyTo: email,
      subject: `Portfolio Contact: ${subject || 'New Message'} from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject || 'N/A'}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    // Log the Ethereal preview link for testing when real credentials aren't set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('✅ Dummy Email Sent! Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send the email. Please try again later.' },
      { status: 500 }
    );
  }
}
