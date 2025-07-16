"use client";
import { useState } from 'react';

export default function Home() {
  const [showCookies, setShowCookies] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* HEADER avec logo */}
      <header className="flex items-center justify-between p-4 border-b border-gray-700">
        <img src="/logo-autogain.png" alt="Logo AutoGain" className="h-10 w-auto" />
      </header>

      {/* CONTENU CENTRAL */}
      <main className="flex flex-col flex-1 items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Bienvenue sur AutoGain</h1>
        <p className="text-lg text-gray-300 max-w-xl">
          Automatisez vos gains. Simplement. Intelligemment.
        </p>
      </main>

      {/* COOKIES BANNER */}
      {showCookies && (
        <div className="fixed bottom-0 w-full bg-gray-800 text-white text-sm px-6 py-4 flex justify-between items-center">
          <span>Ce site utilise des cookies pour améliorer votre expérience.</span>
          <button
            onClick={() => setShowCookies(false)}
            className="bg-white text-black px-4 py-2 rounded-lg ml-4 font-semibold"
          >
            Accepter
          </button>
        </div>
      )}
    </div>
  );
}
