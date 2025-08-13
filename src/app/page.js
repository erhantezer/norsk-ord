import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-12 px-4">
    <h1 className="text-4xl font-extrabold text-center text-slate-800 mb-10">📚 Flashcards</h1>
  
    <ul className="grid gap-6 max-w-4xl mx-auto sm:grid-cols-2 md:grid-cols-2">
      <li className="bg-white rounded-2xl shadow-md p-6 transition-transform hover:scale-[1.02] hover:shadow-lg">
        <Link href="/verbLita" className="block hover:no-underline">
          <p className="text-lg font-semibold text-blue-600 mb-2">Verbliste for begynnere [75 ord]</p>
        </Link>
        
      </li>
  
      <li className="bg-white rounded-2xl shadow-md p-6 transition-transform hover:scale-[1.02] hover:shadow-lg">
        <Link href="/verb256" className="block hover:no-underline">
          <p className="text-lg font-semibold text-blue-600">De vanligste verbene [256 ord]</p>
        </Link>
      </li>
  
      <li className="bg-white rounded-2xl shadow-md p-6 transition-transform hover:scale-[1.02] hover:shadow-lg">
        <Link href="/verbStor" className="block hover:no-underline">
          <p className="text-lg font-semibold text-blue-600 mb-2">Liste over uregelmessige verb [167 ord]</p>
        </Link>
      
      </li>
  
      <li className="bg-white rounded-2xl shadow-md p-6 transition-transform hover:scale-[1.02] hover:shadow-lg">
        <Link href="/prepos" className="block hover:no-underline">
          <p className="text-lg font-semibold text-blue-600">Preposisjoner drill</p>
        </Link>
      </li>
    </ul>
  </main>
  
  );
}
