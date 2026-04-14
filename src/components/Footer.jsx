export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-barber-950 border-t border-gold-400/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 animate-fade-in-up">
            <h3 className="text-2xl font-bold gradient-text mb-4">✂️ Barbería .....</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tu destino para estilos profesionales y atención personalizada. Hace +1 año transformando estilos.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noreferrer"
                className="text-gold-400 hover:text-white transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8">
                  <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.612-.921-2.211-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.075-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.695.248-1.29.173-1.414-.074-.124-.273-.198-.57-.347z" />
                  <path fill="currentColor" d="M12.004 2c-5.523 0-10 4.477-10 10 0 1.765.467 3.32 1.282 4.677L2 22l5.534-1.456A9.954 9.954 0 0 0 12.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.154a8.146 8.146 0 0 1-4.162-1.127l-.298-.177-3.287.865.877-3.206-.194-.324A8.158 8.158 0 0 1 3.846 12c0-4.507 3.647-8.154 8.158-8.154 4.49 0 8.145 3.644 8.156 8.124.011 4.48-3.657 8.138-8.156 8.184z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/barberiamm"
                target="_blank"
                rel="noreferrer"
                className="text-gold-400 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" preserveAspectRatio="xMidYMid meet">
                  <path fill="currentColor" d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 .9c1.699 0 3.1 1.401 3.1 3.1v10c0 1.699-1.401 3.1-3.1 3.1H7c-1.699 0-3.1-1.401-3.1-3.1V7c0-1.699 1.401-3.1 3.1-3.1h10z" />
                  <path fill="currentColor" d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@barberiamm"
                target="_blank"
                rel="noreferrer"
                className="text-gold-400 hover:text-white transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8" preserveAspectRatio="xMidYMid meet">
                  <path fill="currentColor" d="M9.5 3.5h1.5v8.25a3.75 3.75 0 1 0 3.75 3.75V10.5a5.25 5.25 0 0 1-5.25-5.25V3.5zm1.5 13.5a1.5 1.5 0 1 1 0-3h.75v3H11z" />
                  <path fill="currentColor" d="M15.5 6.5h1.25a3.75 3.75 0 0 0 3.75 3.75V11a5.25 5.25 0 0 1-5-4.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h4 className="text-lg font-bold text-gold-300 mb-6">Navegación</h4>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', href: '#home' },
                { label: 'Servicios', href: '#services' },
                { label: 'Contacto', href: '#contact' },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ubicación */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h4 className="text-lg font-bold text-gold-300 mb-6">Ubicación</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Calle Principal 123</p>
              <p>🏙️ Ciudad, País</p>
              <p>🌐 www.barberia.com</p>
            </div>
          </div>

          {/* Contacto */}
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h4 className="text-lg font-bold text-gold-300 mb-6">Contacto</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <a href="tel:+15551234567" className="text-gold-400 hover:text-gold-300 font-semibold">
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:info@barberiamm.com" className="text-gold-400 hover:text-gold-300 font-semibold">
                  info@barberia.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Horarios */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-gold-400/20 mb-8">
          {[
            { day: 'Lunes', time: '11:00 AM - 6:00 PM' },
            { day: 'Martes', time: '11:00 AM - 6:00 PM' },
            { day: 'Miércoles', time: '11:00 AM - 6:00 PM' },
            { day: 'Jueves', time: '11:00 AM - 6:00 PM' },
          ].map((schedule, i) => (
            <div key={i} className="text-center animate-fade-in-up" style={{ animationDelay: `${400 + i * 50}ms` }}>
              <p className="text-sm font-semibold text-gold-400">{schedule.day}</p>
              <p className="text-xs text-gray-500">{schedule.time}</p>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm pt-8 border-t border-gold-400/20">
          <p>
            &copy; {currentYear} <span className="text-gold-400">Barbería MM</span> — Todos los derechos reservados.
          </p>
          <p className="mt-2 text-xs">Diseñado  para tu estilo</p>
        </div>
      </div>
    </footer>
  )
}
