This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Konfiguracja formularza kontaktowego

Aby formularz kontaktowy działał poprawnie na Vercel, należy skonfigurować następujące zmienne środowiskowe w panelu projektu Vercel:

1. `GMAIL_USER` - adres email Gmail, z którego będą wysyłane wiadomości
2. `GMAIL_APP_PASS` - hasło aplikacji Gmail (nie regularne hasło do konta!)
3. `CONTACT_EMAIL` - adres email, na który mają trafiać wiadomości z formularza

Instrukcja generowania hasła aplikacji Gmail:
1. Przejdź do ustawień konta Google
2. Włącz weryfikację dwuetapową, jeśli nie jest jeszcze włączona
3. Przejdź do sekcji "Bezpieczeństwo" i wybierz "Hasła aplikacji"
4. Utwórz nowe hasło aplikacji (np. o nazwie "Loyster Contact Form")
5. Skopiuj wygenerowane hasło i umieść je jako wartość zmiennej `GMAIL_APP_PASS` w Vercel

Pamiętaj, aby te same zmienne dodać także do pliku `.env.local` podczas pracy nad projektem lokalnie.
