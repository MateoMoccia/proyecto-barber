import { useState } from 'react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-barber-950/95 backdrop-blur-md border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text animate-fade-in">
              ✂️ Barbería .....
            </h1>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex list-none gap-8">
            <li className="animate-fade-in" style={{ animationDelay: '0ms' }}>
              <a
                href="#home"
                className="text-gray-300 hover:text-gold-400 font-medium transition-colors duration-300 relative group"
              >
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <a
                href="#services"
                className="text-gray-300 hover:text-gold-400 font-medium transition-colors duration-300 relative group"
              >
                Servicios
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <a
                href="#contact"
                className="text-gray-300 hover:text-gold-400 font-medium transition-colors duration-300 relative group"
              >
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <a href ="#contact" className="hidden md:inline-block btn-primary animate-fade-in">
            Agendar
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gold-400 hover:text-gold-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in-down">
            <a href="#home" className="block text-gray-300 hover:text-gold-400 py-2">Inicio</a>
            <a href="#services" className="block text-gray-300 hover:text-gold-400 py-2">Servicios</a>
            <a href="#contact" className="block text-gray-300 hover:text-gold-400 py-2">Contacto</a>
            <a href="#contact" className="btn-primary w-full mt-4 inline-block text-center">Agendar</a>
          </div>
        )}
      </div>
    </nav>
  )
}
