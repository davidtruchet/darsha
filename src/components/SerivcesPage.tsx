import ServicesHero from '@/components/servicesHeader'
import MainNavigation from '@/components/navigation'
import { Baskervville, Poppins } from 'next/font/google'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

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

      <main className="min-h-screen pt-16">
        <FacialsSection image={seviceFacial} />
        <CorporalSection image={seviceBody} />
        <section id="contact" className="bg-grayishbeige py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold text-center mb-12 text-black">¿Listo para experimentar nuestros servicios?</h3>
            <Button size="lg" className="w-full md:w-auto bg-black hover:opacity-60 text-offwhite" asChild>
              <Link href="https://wa.me/59894123456" target="_blank" rel="noopener noreferrer">
                Reserva tu turno
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}