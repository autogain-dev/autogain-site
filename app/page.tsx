export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6">
      <div className="mb-10">
        <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full mr-1"></div>
          <div className="w-4 h-4 bg-white rounded-full ml-1"></div>
        </div>
      </div>
      <h1 className="text-5xl font-bold text-center tracking-tight mb-4">
        AutoGain
      </h1>
      <p className="text-lg text-center mb-8 max-w-md text-gray-300">
        Votre intelligence financière automatisée
      </p>
      <a
        href="/dashboard"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
      >
        Commencer maintenant
      </a>
    </main>
  )
}
