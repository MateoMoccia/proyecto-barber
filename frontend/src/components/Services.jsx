export default function Services() {
  const services = [
    {
      id: 1,
      name: 'Corte de Cabello',
      image: '',
      price: '$0',
      duration: '1 hr'
    },
    {
      id: 2,
      name: 'Barba',
      image: '',
      price: '$0',
      duration: '30 min'
    },
    {
      id: 3,
      name: 'Colorimetría',
      image: '',
      price: '$0',
      duration: '2 hrs'
    },
    {
      id: 4,
      name: 'Corte y Barba',
      image: '',
      price: '$0',
      duration: '1:30 hr'
    },
  ]

  return (
    <section id="services" className="py-24 bg-barber-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Nuestros Servicios</span>
          </h2>
          <p className="text-gray-400 text-lg">Cada servicio diseñado para tu máxima satisfacción</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group glass overflow-hidden rounded-2xl border border-gold-400/10 shadow-2xl shadow-black/10 transition-all duration-500 hover:border-gold-400 animate-fade-in-up card-hover"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-56 overflow-hidden bg-gray-900">
                <img
                  src={service.image || 'https://via.placeholder.com/800x560?text=Imagen+del+servicio'}
                  alt={service.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400 mb-6">Precio: <span className="text-white font-semibold">{service.price}</span></p>

                <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gold-400/20 pt-4">
                  <span>Duración: {service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special offer */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gold-500/20 to-gold-600/20 rounded-2xl border border-gold-400/30 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gold-300 mb-2">✨ Oferta Especial</h3>
            <p className="text-gray-300 mb-4">Trayendo un cliente nuevo a la barberia 2x1</p>
            <a href="#contact" className="inline-block btn-primary px-8 py-3 font-semibold transition-transform transform hover:-translate-y-0.5">
              Reserva tu turno ya!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
