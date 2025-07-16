export default function Welcome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-bounceIn flex items-center justify-center shadow-2xl mb-6">
        <div className="w-4 h-4 bg-white rounded-full mr-1"></div>
        <div className="w-4 h-4 bg-white rounded-full ml-1"></div>
      </div>
      <h1 className="text-6xl font-extrabold tracking-tight text-center mb-4">
        AutoGain
      </h1>
      <p className="text-xl text-center max-w-lg text-gray-300 mb-8">
        Le futur du trading automatisé, intelligent et rentable. Une IA qui travaille pendant que vous vivez.
      </p>
      <a
        href="#"
        className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg hover:scale-105"
      >
        Commencer maintenant
      </a>
    </main>
  )
}
