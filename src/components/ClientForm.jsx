import { useState } from 'react'

export default function ClientForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Cita agendada:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 bg-barber-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Agendar Cita</span>
          </h2>
          <p className="text-gray-400">Completa el formulario y nos pondremos en contacto contigo</p>
        </div>

        {submitted ? (
          <div className="animate-fade-in-up glass p-12 rounded-2xl border-gold-400">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-pulse">✅</div>
              <h3 className="text-2xl font-bold text-gold-400 mb-2">¡Cita Agendada!</h3>
              <p className="text-gray-400">Nos pondremos en contacto pronto para confirmar.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-2xl border-gold-400/30 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Nombre */}
              <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <label htmlFor="name" className="block text-sm font-semibold text-gold-300 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  required
                  className="w-full px-4 py-3 bg-barber-800/50 border border-gold-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <label htmlFor="email" className="block text-sm font-semibold text-gold-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="juan@email.com"
                  required
                  className="w-full px-4 py-3 bg-barber-800/50 border border-gold-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                />
              </div>

              {/* Teléfono */}
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <label htmlFor="phone" className="block text-sm font-semibold text-gold-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+54 9 11 1234 5678"
                  required
                  className="w-full px-4 py-3 bg-barber-800/50 border border-gold-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                />
              </div>

              {/* Servicio */}
              <div className="animate-fade-in-up" style={{ animationDelay: '250ms' }}>
                <label htmlFor="service" className="block text-sm font-semibold text-gold-300 mb-2">
                  Selecciona Servicio
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-barber-800/50 border border-gold-400/30 rounded-lg text-white focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                >
                  <option value="">Elige un servicio</option>
                  <option value="corte-de-cabello">Corte de Cabello</option>
                  <option value="barba">Barba</option>
                  <option value="colorimetria">Colorimetría</option>
                  <option value="corte-y-barba">Corte y Barba</option>
                </select>
              </div>

              {/* Fecha */}
              <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <label htmlFor="date" className="block text-sm font-semibold text-gold-300 mb-2">
                  Fecha Preferida
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-barber-800/50 border border-gold-400/30 rounded-lg text-white focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                />
              </div>

              {/* Hora */}
              <div className="animate-fade-in-up" style={{ animationDelay: '350ms' }}>
                <label htmlFor="time" className="block text-sm font-semibold text-gold-300 mb-2">
                  Hora Preferida
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-barber-800/50 border border-gold-400/30 rounded-lg text-white focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                >
                  <option value="">Elige una hora</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary py-4 text-lg font-bold animate-fade-in-up"
              style={{ animationDelay: '350ms' }}
            >
              Agendar Mi Cita ✂️
            </button>


          </form>
        )}
      </div>
    </section>
  )
}
