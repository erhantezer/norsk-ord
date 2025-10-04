import Link from 'next/link';
import Footer from './footer/page';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-8 px-4">
      <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-8">📚 Flashkort</h2>

      {/* Kartlar: telefonda 1 sütun, sm ve üzeri 2 sütun */}
      <ul className="grid gap-3 max-w-4xl mx-auto grid-cols-1 sm:grid-cols-2">
  <li className="bg-white rounded-2xl shadow-md p-4 transition-transform hover:scale-[1.02] hover:shadow-lg">
    <Link href="/verbLita" className="block hover:no-underline">
      <p className="text-base font-medium text-blue-600 mb-1">
        Verbliste for begynnere 331 ord
      </p>
    </Link>
  </li>
  <li className="bg-white rounded-2xl shadow-md p-4 transition-transform hover:scale-[1.02] hover:shadow-lg">
    <Link href="/godinorsk" className="block hover:no-underline">
      <p className="text-base font-medium text-blue-600 mb-1">
        God I Norsk 1 (Uttrykk)
      </p>
    </Link>
  </li>
  <li className="bg-white rounded-2xl shadow-md p-4 transition-transform hover:scale-[1.02] hover:shadow-lg">
    <Link href="/prepos" className="block hover:no-underline">
      <p className="text-base font-medium text-blue-600 mb-1">
        Preposisjoner Drill
      </p>
    </Link>
  </li>
</ul>


      {/* Nyttige Nettsteder: her boyutta 2 sütun sabit */}
      <section className="max-w-4xl mx-auto mt-9">
        <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">🌐 Nyttige Nettsteder</h3>
        <ul className="grid grid-cols-2 gap-3">
          <li>
            <Link
              href="/ntnu"
              className="block rounded-lg px-3 py-2 text-blue-600 hover:underline hover:bg-slate-100"
            >
              🇳🇴 NTNU Nettsider
            </Link>
          </li>
          <li>
            <a
              href="https://lesnorsk.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-blue-600 hover:underline hover:bg-slate-100"
            >
              📖 Les Norsk
            </a>
          </li>
          <li>
            <a
              href="https://www.elevkanalen.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-blue-600 hover:underline hover:bg-slate-100"
            >
              👨‍🎓 Elevkanalen
            </a>
          </li>
          <li>
            <a
              href="https://voki.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-blue-600 hover:underline hover:bg-slate-100"
            >
              🎙️ Voki
            </a>
          </li>
          <li>
            <a
              href="https://grammatikk.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-blue-600 hover:underline hover:bg-slate-100"
            >
              📚 Grammatikk
            </a>
          </li>
          <li>
            <a
              href="https://nyinorge.portfolio.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-blue-600 hover:underline hover:bg-slate-100"
            >
              🎓 Ny i Norge
            </a>
          </li>
          <li>
            <a
              href="https://minvei.no/read_container/f20bf7e5-d2a6-4c62-8d9a-b6c8ad8c0bda"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-blue-600 hover:underline hover:bg-slate-100"
            >
              🏫 MIn Vei
            </a>
          </li>
          <li>
            <a
              href="https://norskgrammatikk.cappelendamm.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-blue-600 hover:underline hover:bg-slate-100"
            >
              ✏️ Norsk grammatikk
            </a>
          </li>
          <li>
            <a
              href="https://norsksidene.no/web/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-blue-600 hover:underline hover:bg-slate-100"
            >
              📘 Norsksidene
            </a>
          </li>
          <li>
            <a
              href="https://www.klartale.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-blue-600 hover:underline hover:bg-slate-100"
            >
            🗞️ Klar Tale
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </main>
  );
}
