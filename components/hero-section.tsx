export function HeroSection() {
  return (
    <section
      id="top"
      className="relative w-full py-20 md:py-32 lg:py-48 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 overflow-hidden"
    >
      <div className="container px-4 md:px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-4">
          福岡薬院キャンフェスサイト
        </h1>
      </div>
      {/* Abstract shapes for background, mimicking screenshot */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-300 opacity-30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-300 opacity-30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-yellow-300 opacity-30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </section>
  )
}
