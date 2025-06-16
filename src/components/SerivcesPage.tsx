import ServicesHero from '@/components/servicesHeader'
import MainNavigation from '@/components/navigation'
import { Baskervville, Poppins } from 'next/font/google'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

import seviceBody from '@/assets/images/service-body.jpg'
import seviceFacial from '@/assets/images/servicos-faciales.jpg'
import seviceSkinCare from '@/assets/images/skin-care-2.jpg'

import { Clock, DollarSign, RefreshCw } from 'lucide-react'
import AlternativeFacialsSection from './AlternativeFacialsSection'

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

      <main className="min-h-screen py-16">
        <section className="mb-16 container mx-auto px-4 " id='corporales'>
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

        <section className="mb-16 container mx-auto px-4 " id='faciales'>
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
              <p className="text-lg text-gray-600 mb-8">Tratamientos diseñados para cuidar, renovar y realzar la belleza natural de tu piel.
              Combinamos tecnología estética, productos profesionales y atención personalizada para brindarte resultados visibles y una experiencia de bienestar en cada sesión.</p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Limpieza Facial Profunda",
                description: "Una experiencia completa para renovar, equilibrar y cuidar tu piel desde el primer paso. Este tratamiento comienza con una evaluación personalizada, seguida de una limpieza, exfoliación química o mecánica, aplicación de puntas de diamante o renovadores celulares, extracciones, y finaliza con una máscara y sérum adaptados a las necesidades de tu piel, hidratación y protector solar.",
                price: "1.600",
                duration: "60 a 70 minutos"
              },
              {
                title: "Tratamiento Revitalizante con Velo de Colágeno",
                description: "Una caricia nutritiva para pieles que necesitan recuperar frescura, hidratación y luminosidad. Comienza con una evaluación personalizada, seguida de limpieza suave, exfoliación profunda y tonificación, para preparar la piel. Luego se aplica un velo de colágeno, que aporta elasticidad, firmeza y efecto tensor inmediato.",
                price: "1.800",
                duration: "60 a 70 minutos"
              },
              {
                title: "Tratamiento Iluminador con Radiofrecuencia y Vitamina C",
                description: "Un protocolo completo para devolverle a tu piel su vitalidad natural, suavidad y luminosidad. Comienza con una limpieza profunda y exfoliación con puntas de diamante para renovar la superficie cutánea. Luego se aplica radiofrecuencia facial, que estimula el colágeno y mejora la firmeza.",
                price: "1.900",
                duration: "70 minutos"
              },
              {
                title: "Limpieza Facial + Masaje Yoga Facial",
                description: "Un tratamiento que combina limpieza profunda con una experiencia relajante y restauradora para tu rostro. Finaliza con una secuencia de masajes de yoga facial, que relajan los músculos del rostro, mejoran la circulación y realzan la luminosidad natural.",
                price: "1.900",
                duration: "75 minutos"
              },
              {
                title: "Radiofrecuencia Facial Tensora",
                description: "Tratamiento ideal para tensar, redefinir y revitalizar la piel sin necesidad de procedimientos invasivos. La radiofrecuencia estimula la producción natural de colágeno y elastina, mejorando visiblemente la firmeza, la textura y la definición del contorno facial.",
                price: "1.700 por sesión | Pack x3: 4.500",
                duration: "60 minutos",
                frequency: "Entre 4 y 6 sesiones para obtener resultados óptimos."
              },
              {
                title: "Limpieza Facial Deluxe",
                description: "El equilibrio perfecto entre limpieza profunda, cuidado personalizado y un momento de relajación. Este tratamiento integral comienza con una evaluación profesional de la piel, para adaptar cada paso a tus necesidades. Se realiza una limpieza profunda con tecnología de puntas de diamante que renueva la piel.",
                price: "1.900",
                duration: "75 minutos"
              },
              {
                title: "Tratamiento Anti-Acné",
                description: "Un plan progresivo y personalizado para pieles con tendencia acneica, pensado para transformar la piel desde adentro hacia afuera. El objetivo es limpiar profundamente la piel, eliminar comedones, equilibrar la oleosidad, suavizar marcas y manchas.",
                price: "1.700 por sesión | Pack x3 sesiones: 4.500",
                duration: "60 minutos",
                frequency: "Cada 10 a 15 días por un mínimo de 3 meses"
              },
              {
                title: "Tratamiento Despigmentante",
                description: "Un tratamiento integral para atenuar manchas solares, hormonales o post-acné, devolviendo a la piel un tono más uniforme, luminoso y saludable. En cada sesión se realiza un peeling en consultorio, adaptado al tipo de piel y al grado de pigmentación.",
                price: "1.700 por sesión | Pack x3 sesiones: 4.500",
                duration: "45 a 60 minutos",
                frequency: "Cada 15 días durante al menos 3 meses"
              },
              {
                title: "Lifting Facial Reafirmante Timexpert Lift(In)",
                description: "Redefinición facial sin cirugía – Efecto lifting visible desde la primera sesión. Un tratamiento de alta cosmética profesional diseñado para reafirmar, tensar y redefinir el contorno del rostro. Inspirado en las técnicas médico-estéticas.",
                price: "2.500",
                duration: "60 minutos",
                frequency: "1 sesión por semana | Mínimo: 3 sesiones"
              }
            ].map((treatment, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{treatment.title}</h3>
                <p className="text-gray-600 mb-3">{treatment.description}</p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-sm font-medium flex items-center gap-1"><Clock className="h-4 w-4" /> {treatment.duration}</p>
                  <p className="text-sm font-medium flex items-center gap-1"><DollarSign className="h-4 w-4" /> {treatment.price}</p>
                  {treatment.frequency && (
                    <p className="text-sm font-medium flex items-center gap-1"><RefreshCw className="h-4 w-4" /> {treatment.frequency}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alternative Facials Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="border-t border-gray-200 my-8"></div>
          <h2 className={`text-3xl font-bold mb-8 text-center ${baskervville.className}`}>Versión Alternativa</h2>
        </div>
        <AlternativeFacialsSection image={seviceFacial} />

        <section id='skincare' className="container mx-auto px-4 mt-8">
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