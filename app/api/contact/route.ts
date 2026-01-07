import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, recaptchaToken } = await req.json();

    if (!name || !email || !subject || !message || !recaptchaToken) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (message.length < 30) {
      return NextResponse.json(
        { error: "Message too short" },
        { status: 400 }
      );
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
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
