export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-barber-950 overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center animate-fade-in-down">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Bienvenido a</span>
            <br />
            <span className="text-white">Barbería ......</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Estilos  con atención personalizada
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                      <a href="#contact" className="inline-block btn-primary px-8 py-3 font-semibold transition-transform transform hover:-translate-y-0.5">
              Agenda tu turno ahora
            </a>
                       <a href="#services" className="inline-block btn-primary px-8 py-3 font-semibold transition-transform transform hover:-translate-y-0.5">
              Conocer servicios
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          {[
            { number: '500+', label: 'Clientes Satisfechos' },
            { number: '1+', label: 'Años Experiencia' },
            { number: '5⭐', label: 'Calificación' },
          ].map((stat, i) => (
            <div key={i} className="text-center glass p-6 hover:border-gold-400/50 group">
              <p className="text-2xl md:text-3xl font-bold gradient-text group-hover:text-gold-300">{stat.number}</p>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
