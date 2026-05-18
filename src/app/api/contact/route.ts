import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${user}>`,
    to: "agustin.molee@gmail.com",
    replyTo: email,
    subject: `[Portfolio] Mensaje de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#3730a3">Nuevo mensaje desde tu portfolio</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:8px 0;color:#71717a;font-size:14px;width:80px">Nombre</td>
            <td style="padding:8px 0;font-size:14px">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#71717a;font-size:14px">Email</td>
            <td style="padding:8px 0;font-size:14px"><a href="mailto:${email}">${email}</a></td>
          </tr>
        </table>
        <hr style="border:none;border-top:1px solid #e4e4e7;margin:16px 0"/>
        <p style="font-size:14px;line-height:1.6;white-space:pre-wrap">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
