import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Sprawdzanie wymaganych pól
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Wymagane pola: imię, email i wiadomość' },
        { status: 400 }
      );
    }

    // Konfiguracja transportera Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    // Przygotowanie treści wiadomości
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: subject ? `[Kontakt Loyster] ${subject}` : '[Kontakt Loyster] Nowa wiadomość',
      html: `
        <h2>Nowa wiadomość z formularza kontaktowego Loyster</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Tytuł:</strong> ${subject}</p>` : ''}
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    // Wysłanie wiadomości
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Błąd podczas wysyłania wiadomości:', error);
    return NextResponse.json(
      { error: 'Wystąpił problem podczas wysyłania wiadomości' },
      { status: 500 }
    );
  }
} 