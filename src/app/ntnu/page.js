"use client";
import Footer from "../footer/page";
export default function Ntnu (){
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-12 px-4">
        <h1 className="text-4xl font-extrabold text-center text-slate-800 mb-8">📚 NTNU Nettsider</h1>

        <section className="max-w-4xl mx-auto mt-12 text-center">
          
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.ntnu.edu/learnnow/1/alex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                1️⃣ LearnNow - Alex
              </a>
            </li>
            <li>
              <a
                href="https://www.ntnu.edu/now/1/ken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                2️⃣ Now - Ken
              </a>
            </li>
            <li>
            <a
                href="https://www.ntnu.edu/now2/1/1a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                3️⃣ Now 2 
              </a>
              
            </li>
            <li>
            <a
                href="https://www.ntnu.edu/web/learnnow2-hs/kap1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                4️⃣ LearnNow 2 
              </a>
            </li>
          </ul>
        </section>
  
        <Footer />
      </main>
    );
};
