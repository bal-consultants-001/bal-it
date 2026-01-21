import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Destructure the new termsAccepted field
    const { name, email, subject, message, recaptchaToken, termsAccepted } = await req.json();

    if (!name || !email || !subject || !message || !recaptchaToken) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (message.length < 30) {
      return NextResponse.json({ error: "Message too short" }, { status: 400 });
    }

    // Verify reCAPTCHA
    const captchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const captchaData = await captchaRes.json();

    if (!captchaData.success || captchaData.score < 0.5) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 403 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: "bal-admin@bal-it.com",
        pass: process.env.ZOHO_APP!,
      },
    });

    const termsText = termsAccepted ? "Yes" : "No"; // <-- Add this line

    /* ========================
       1) INTERNAL EMAIL
       ======================== */
    await transporter.sendMail({
      from: '"BAL-IT Website" <information@bal-it.com>',
      to: "information@bal-it.com",
      replyTo: email,
      subject: `[${subject}] New BAL-IT Support Request from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Terms & Conditions accepted: ${termsText}  <-- Include here
      `,
    });

    /* ========================
       2) AUTO-REPLY EMAIL
       ======================== */
    await transporter.sendMail({
      from: '"BAL-IT Support" <information@bal-it.com>',
      to: email,
      subject: "We’ve received your message – BAL-IT",
      text: `
Hi ${name},

Thanks for contacting BAL-IT.

We’ve received your message regarding:
"${subject}"

Terms & Conditions accepted: ${termsText}  <-- Include here

Our team will review your request and get back to you as soon as possible.
Typical response time is within 1 business day.

If your enquiry is urgent, please reply to this email.

Kind regards,
BAL-IT Support
https://bal-it.com
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
