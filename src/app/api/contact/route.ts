import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Le nom et le téléphone sont requis." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL!;
    const senderEmail = process.env.SENDER_EMAIL!;

    await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      subject: `🔔 Nouvelle demande de rappel : ${name}`,
      html: `
        <h2>Nouvelle demande de rappel depuis le site</h2>
        <p><strong>Nom & Prénom :</strong> ${name}</p>
        <p><strong>Téléphone :</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Besoin / Message :</strong> ${message || "Non renseigné"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur d'envoi email contact:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi." },
      { status: 500 }
    );
  }
}