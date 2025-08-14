import Link from 'next/link';
import Footer from './footer/page';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-slate-800 mb-10">📚 Flashcards</h1>

      <ul className="grid gap-6 max-w-4xl mx-auto sm:grid-cols-2 md:grid-cols-2">
        <li className="bg-white rounded-2xl shadow-md p-6 transition-transform hover:scale-[1.02] hover:shadow-lg">
          <Link href="/verbLita" className="block hover:no-underline">
            <p className="text-lg font-semibold text-blue-600 mb-2">Verbliste for begynnere 331 ord</p>
          </Link>
        </li>

        <li className="bg-white rounded-2xl shadow-md p-6 transition-transform hover:scale-[1.02] hover:shadow-lg">
          <Link href="/prepos" className="block hover:no-underline">
            <p className="text-lg font-semibold text-blue-600">Preposisjoner Drill</p>
          </Link>
        </li>
      </ul>

      {/* Faydalı Siteler Bölümü */}
      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">🌐 Faydalı Siteler</h2>
        <ul className="space-y-4">
          <li>
            <a
              href="https://lesnorsk.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              📖 Les Norsk
            </a>
          </li>
          <li>
            <a
              href="https://voki.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              🎙️ Voki
            </a>
          </li>
          <li>
            <a
              href="https://grammatikk.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              📚 Grammatikk.com
            </a>
          </li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
