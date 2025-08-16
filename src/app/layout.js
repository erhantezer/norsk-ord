// app/layout.js
import "../app/globals.css";
import Script from "next/script";

export const metadata = {
  title: "Flashcards",
  description: "Norsk verbøvelse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RE2JQ4BPWB"
        />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-RE2JQ4BPWB');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
