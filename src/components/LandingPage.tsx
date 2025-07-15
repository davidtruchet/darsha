'use client'

// pages/landingPage.tsx
import heroHome from '@/assets/images/women-home.jpg'
import verticalImage from '@/assets/images/vertical-prod.jpg'
import contactUsImage from '@/assets/images/contact-us.jpg'
import verticalSkinCare2 from '@/assets/images/skin-care-v2.jpg'
import verticalSkinCare from '@/assets/images/spa-face-mask.jpg'
import verticalBodyCare from '@/assets/images/body-care.jpg'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
  MessageSquareQuote,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Baskervville, Poppins } from 'next/font/google'
import MainNavigation from '@/components/navigation'
import { link } from 'fs'

const baskervville = Baskervville({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-baskervville',
})

export default function LandingPage() {
  return (
    <div className={`min-h-screen bg-offwhite font-sans`}>
      <MainNavigation />
      <main className="bg-grayishbeige pt-16">
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src={heroHome}
                    alt="Beautiful woman"
                    fill
                    sizes="100vw"
                    className="object-cover object-[center_30%]"
                    quality={100}
                />
            </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-lg mx-auto md:mx-0 bg-grayishbeige bg-opacity-80 p-6 md:p-8 rounded-lg">
              <h1 className={`text-4xl md:text-5xl ${baskervville.className} font-bold mb-4 text-gray-900`}>
              Espacio Darsha
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-800">
              Invierte en ti, eres tu proyecto más importante.
              </p>
                <Button size="lg" className="w-full md:w-auto bg-black hover:opacity-60 text-offwhite" asChild>
                <Link href="https://wa.me/59894123456" target="_blank" rel="noopener noreferrer">
                  Reserva tu turno
                </Link>
                </Button>
            </div>
          </div>
        </section>

        <section id="services" className="bg-offwhite py-16">
          <div className="container mx-auto px-4 text-gray-900">
            <h2 className={`text-4xl md:text-5xl text-center mb-4 ${baskervville.className}`}>Servicios</h2>
            <p className="text-xl text-center mb-12">
            Descubre nuestra gama completa de tratamientos de belleza
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Tratamientos Corporales", image: verticalBodyCare, link: "/servicios#corporales" },
                { name: "Tratamientos Faciales", image: verticalSkinCare, link: "/servicios#faciales" },
                { name: "Tienda", image: verticalImage, link: "/", isNew: true },
              ].map((service, index) => (
                <div key={index} className="text-center group">
                  <Link href={service.link} className="block">
                  <div className="relative mb-4 aspect-square w-[400px] sm:w-[280px] lg:w-[260px] xl:w-[360px] mx-auto">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-transparent group-hover:border-beige">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 640px) 300px, (max-width: 768px) 280px, (max-width: 1024px) 360px, 400px"
                        className="object-cover"
                      />
                      {service.isNew && (
                  <div className="absolute inset-0">
                  <span className="absolute right-[15%] top-[12%] bg-black text-offwhite text-xs px-3 py-1 rounded-full z-10 transform -rotate-12">
                    Proximamente!
                  </span>
                </div>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2 transition-colors duration-300 group-hover:text-gray-500">
                    {service.name}
                  </h3>
                  <span className="text-black group-hover:text-gray-500 inline-flex items-center transition-colors duration-300">
                    Más Información <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className={`md:w-1/2 md:pr-10 mb-8 md:mb-0 text-xl text-gray-900  ${baskervville.className}`}>
              <h2 className={`text-3xl md:text-5xl mb-6`}>Sobre Nosotros</h2>
              <p className="mb-6">
              Espacio Darsha se creó con un propósito claro: ofrecer un lugar de bienestar y relajación donde las personas puedan tomarse un momento para sí mismas. Creemos en la importancia de cuidar cuerpo y mente para alcanzar una armonía integral, y por eso hemos desarrollado un ambiente acogedor y profesional.
              </p>
              <p className="mb-6">
              En nuestro consultorio, brindamos una variedad de tratamientos de cosmetología y masajes, enfocados en mejorar el bienestar físico y emocional de nuestros clientes. Ya sea para relajarse, revitalizarse o cuidar de su piel, Espacio Darsha es el lugar ideal para encontrar ese equilibrio tan necesario en la vida diaria.
              </p>
              <p className="mb-6">
              Nos comprometemos a ofrecer una atención personalizada, siempre guiados por valores de profesionalismo, responsabilidad y calidad. Aquí, cada cliente es importante, y trabajamos para que cada experiencia en nuestro espacio sea única y gratificante.
</p>
            </div>
            <div className="md:w-1/2">
              <img
                src={contactUsImage.src}
                alt="Contact Us"
                className="object-cover w-full h-auto rounded-2xl max-h-[650px]"
              />
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-offwhite py-16">
          <div className="container mx-auto px-4">
            <h2 className={`text-4xl md:text-5xl text-center mb-12 text-gray-900 ${baskervville.className}`}>Reseñas de nuestros clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Maria Laura",
                  title: "Excelente lugar!",
                  review: "Es una excelente profesional. Asesoramiento altamente personalizado y con productos magníficos.",
                  service: "Peeling, masajes, faciales, radiofrecuencia, relax, limpieza cutis."
                },
                {
                  name: "Anahy F.",
                  title: "Hermoso Espacio",
                  review: "Hermoso espacio brindado por Euge, una excelente profesional!",
                  service: ""
                },
                {
                  name: "Rosimeri B.",
                  title: "Excelente profesional",
                  review: "Eugenia una excelente profesional y una persona divina! La recomiendo siempre.",
                  service: ""
                },
                {
                  name: "Carolina R.",
                  title: "Espacio muy recomendable",
                  review: "Muy recomendable. Excelente profesional Euge y servicios que brinda son maravillosos.  Ideal para las que nos gusta darnos un mimo…",
                  service: ""
                }
              ].map((review, index) => (
                <Card key={index} className="bg-beige">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MessageSquareQuote className="text-black" />
                      <div className="pl-3">
                        <h3 className="font-semibold text-black">{review.title}</h3>
                        <p className="text-sm text-black">{review.name}</p>
                      </div>
                    </div>
                    <p className="mb-4 text-black">{review.review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-grayishbeige py-16">
          <div className="container mx-auto px-4" id='contact'>
            <h2 className="text-3xl font-semibold text-center mb-12 text-black">Contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Phone, text: "(+598) 92 396 930", link: "tel:+59892396930" },
                { icon: MapPin, text: "Torre Barcelona, Punta del Este.", link: "https://maps.app.goo.gl/N6cF1KoATANfZV3f7" },
                { icon: MessageCircle, text: "Contacto de Whatsapp", link: "https://wa.me/59894123456" },
              ].map(({ icon: Icon, text, link }) => (
                // add an optional link to this element
                <a
                  key={text}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <div key={text} className="flex items-center justify-center">
                    <Icon className="mr-2 text-black" />
                    <span>{text}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
