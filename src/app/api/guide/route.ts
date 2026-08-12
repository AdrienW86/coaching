import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Le nom et l'email sont requis." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL!;
    const senderEmail = process.env.SENDER_EMAIL!;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

    // 1. Envoi de la notification à Baptiste
    await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      subject: `📥 Téléchargement Guide Gratuit : ${name}`,
      html: `
        <h2>Nouveau téléchargement du guide gratuit</h2>
        <p><strong>Nom & Prénom :</strong> ${name}</p>
        <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
      `,
    });

    // 2. Envoi du lien vers le guide au prospect
    await resend.emails.send({
      from: senderEmail,
      to: [email],
      subject: "Votre guide gratuit de prospection B2B",
      html: `
        <div style="font-family: sans-serif; color: #1e293b; line-height: 1.6;">
          <p>Bonjour ${name},</p>
          <p>Merci pour votre intérêt ! Voici le lien pour télécharger votre guide gratuit de prospection B2B au format PDF :</p>
          <p style="margin: 24px 0;">
            <a href="${siteUrl}/guide-prospection.pdf" style="background-color: #4f46e5; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
              Télécharger le guide PDF
            </a>
          </p>
          <p>Si vous souhaitez faire un point direct sur votre stratégie d'acquisition, vous pouvez m'appeler directement au <strong>06 04 09 02 97</strong>.</p>
          <p>À très vite,<br/><strong>Baptiste Rubens</strong></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur d'envoi email guide:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi." },
      { status: 500 }
    );
  }
}