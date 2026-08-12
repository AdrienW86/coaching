import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "L'adresse e-mail est requise." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL!;
    const senderEmail = process.env.SENDER_EMAIL!;

    // 1. Notification pour toi
    await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      subject: `📰 Nouvel abonné newsletter : ${email}`,
      html: `
        <h2>Nouvelle inscription à la newsletter</h2>
        <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
      `,
    });

    // 2. E-mail de bienvenue automatique pour l'inscrit
    await resend.emails.send({
      from: senderEmail,
      to: [email],
      subject: "Bienvenue dans la newsletter !",
      html: `
        <div style="font-family: sans-serif; color: #1e293b; line-height: 1.6;">
          <p>Bonjour,</p>
          <p>Merci pour ton inscription à la newsletter ! Tu recevras directement mes conseils et retours d'expérience sur la prospection B2B.</p>
          <p>À très vite,<br/><strong>Baptiste Rubens</strong></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur d'envoi email newsletter:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'inscription." },
      { status: 500 }
    );
  }
}