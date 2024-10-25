import ServicesHero from '@/components/servicesHeader'
import MainNavigation from '@/components/navigation'
import { Baskervville, Poppins } from 'next/font/google'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

import seviceBody from '@/assets/images/service-body.jpg'
import seviceFacial from '@/assets/images/hero-img.jpg'
import seviceSkinCare from '@/assets/images/skin-care-2.jpg'

const baskervville = Baskervville({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-baskervville',
})

export default function ServicesPage() {
  return (
    <div className={`min-h-screen bg-offwithe font-sans`}>
      <MainNavigation />
      <ServicesHero />

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16" id='corporales'>
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
            <div className="md:w-1/2">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 leading-tight ${baskervville.className}`}>Tratamientos Corporales</h2>
              <p className="text-lg text-gray-600 mb-8">Descubre nuestros tratamientos corporales diseñados para relajar, rejuvenecer y revitalizar tu cuerpo. Ofrecemos una variedad de servicios que se adaptan a tus necesidades específicas.</p>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-64 md:h-80 aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={seviceBody}
                  alt="Tratamientos corporales"
                  fill
                  className="transition-transform duration-300 hover:scale-105 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Reflexología facial + Masaje en espalda",
                description: "Una combinación perfecta para aliviar el estrés y la tensión en dos áreas clave del cuerpo. Este tratamiento de 50 minutos te dejará completamente renovado."
              },
              {
                title: "Masaje cuerpo completo",
                description: "Disfruta de una hora de puro relax con nuestro masaje de cuerpo completo. Perfecto para aliviar dolores musculares y mejorar la circulación."
              },
              {
                title: "Masaje espalda y cuello",
                description: "Enfocado en las áreas que más acumulan tensión, este masaje de 30 minutos es ideal para un alivio rápido y efectivo."
              },
              {
                title: "Limpieza profunda en espalda",
                description: "Un tratamiento especializado para purificar y revitalizar la piel de tu espalda, dejándola suave y radiante."
              },
              {
                title: "Electrodos",
                description: "Tratamiento de 8 sesiones en una zona específica, ideal para tonificar y mejorar la apariencia de la piel."
              },
              {
                title: "Radiofrecuencia corporal",
                description: "8 sesiones de tratamiento avanzado para reducir la celulitis y mejorar la firmeza de la piel en una zona específica."
              },
            ].map((treatment, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{treatment.title}</h3>
                <p className="text-gray-600">{treatment.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16" id='faciales'>
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <div className="md:w-1/2">
              <div className="relative w-full aspect-[4/3] h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src={seviceFacial}
                  alt="Tratamientos faciales"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 leading-tight ${baskervville.className}`}>Tratamientos Faciales</h2>
              <p className="text-lg text-gray-600 mb-8">Nuestros tratamientos faciales están diseñados para realzar tu belleza natural y mantener una piel saludable. Desde limpiezas profundas hasta tratamientos anti-edad, tenemos algo para cada tipo de piel.</p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Limpieza facial profunda",
                description: "Un tratamiento completo para purificar y revitalizar tu piel, eliminando impurezas y células muertas."
              },
              {
                title: "Limpieza facial + shock de hidratación",
                description: "Combina una limpieza profunda con un boost de hidratación para una piel radiante y revitalizada."
              },
              {
                title: "Shock tensor iluminador",
                description: "Tratamiento intensivo para reafirmar la piel y darle un aspecto más luminoso y juvenil."
              },
              {
                title: "Limpieza facial + yoga facial",
                description: "Fusiona los beneficios de una limpieza profunda con técnicas de yoga facial para tonificar los músculos."
              },
              {
                title: "Peeling químico",
                description: "Tratamiento exfoliante que renueva la piel, mejorando su textura y apariencia general."
              },
              {
                title: "Limpieza facial + Radiofrecuencia",
                description: "Combina limpieza profunda con radiofrecuencia para mejorar la elasticidad y firmeza de la piel."
              },
            ].map((treatment, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{treatment.title}</h3>
                <p className="text-gray-600">{treatment.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id='skincare'>
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
            <div className="md:w-1/2">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 leading-tight ${baskervville.className}`}>Servicios de Skincare</h2>
              <p className="text-lg text-gray-600 mb-8">Nuestros servicios de skincare están diseñados para ayudarte a mantener una piel saludable y radiante. Ofrecemos asesoramiento personalizado y tratamientos adaptados a tus necesidades específicas.</p>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-64 aspect-[4/3] md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src={seviceSkinCare}
                  alt="Skin care"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cuidado de la Piel",
                description: "Incluye todos los servicios relacionados con la piel, desde rutinas hasta asesoría sobre cremas."
              },
              {
                title: "Asesoría Personalizada",
                description: "Consultas y recomendaciones personalizadas según las necesidades del cliente."
              },
              {
                title: "Rutinas de Belleza",
                description: "Enfocada en las rutinas de limpieza y cuidado diario, ideal para aquellos que buscan guías prácticas para el cuidado de la piel."
              },
              {
                title: "Consultoría de Skincare",
                description: "Asesoría experta en productos y tratamientos específicos para cada tipo de piel."
              },
              {
                title: "Servicios de Skincare",
                description: "Agrupa todos los servicios de limpieza, hidratación y cuidado personalizado."
              },
              {
                title: "Productos Recomendados",
                description: "Recomendaciones y venta de cremas y productos para el cuidado de la piel."
              },
            ].map((service, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="bg-grayishbeige py-16 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold text-center mb-12 text-black">¿Listo para experimentar nuestros servicios?</h3>
            <Button size="lg" className="w-full md:w-auto bg-black hover:opacity-60 text-offwhite">
              Reserva tu turno
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}