import ServicesHero from '@/components/servicesHeader'
import MainNavigation from '@/components/navigation'
import { Baskervville, Poppins } from 'next/font/google'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

import seviceBody from '@/assets/images/service-body.jpg'
import seviceFacial from '@/assets/images/servicos-faciales.jpg'
import seviceSkinCare from '@/assets/images/skin-care-2.jpg'

import { Clock, DollarSign, RefreshCw } from 'lucide-react'
import AlternativeFacialsSection from './FacialsSection'
import FacialsSection from './FacialsSection'
import CorporalSection from './CorporalSection'

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
        <FacialsSection image={seviceFacial} />
        <CorporalSection image={seviceBody} />

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