import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (message.length < 30) {
      return NextResponse.json(
        { error: "Message must be at least 30 characters" },
        { status: 400 }
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
    console.error("Zoho mail error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
