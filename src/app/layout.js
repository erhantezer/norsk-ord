import '../app/globals.css'; // ✅ doğru yol

export const metadata = {
  title: 'Flashcards',
  description: 'Norsk verbøvelse',
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <head>
        
      </head>
      <body>{children}</body>
    </html>
  );
}

