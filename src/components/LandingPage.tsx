'use client'

// pages/landingPage.tsx
import heroImage from '@/assets/images/hero-img.jpg'
import heroHome from '@/assets/images/women-home.jpg'
import verticalImage from '@/assets/images/vertical-prod.jpg'
import verticalSkinCare2 from '@/assets/images/skin-care-v2.jpg'
import verticalImage3 from '@/assets/images/face.jpg'
import verticalSkinCare from '@/assets/images/skin-care.jpg'
import verticalBodyCare from '@/assets/images/body-care.jpg'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquareQuote,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Baskervville, Poppins } from 'next/font/google'
import { useEffect, useState } from 'react'
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
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center 30%"
                    quality={100}
                />
            </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-lg mx-auto md:mx-0 bg-grayishbeige bg-opacity-80 p-6 md:p-8 rounded-lg">
              <h1 className={`text-4xl md:text-5xl ${baskervville.className} font-bold mb-4 text-gray-900`}>
              Espacio Darsha
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-800">
              Se tu mejor version de ti
              </p>
              <Button size="lg" className="w-full md:w-auto bg-black hover:opacity-60 text-offwhite">
              Reserva tu turno
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="bg-offwhite py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center mb-4">Servicos</h2>
            <p className="text-xl text-center text-black mb-12">
            Descubre nuestra gama completa de tratamientos de belleza.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Tratamientos Corporales", image: verticalBodyCare, link: "/servicios#corporales" },
                { name: "Tratamientos Faciales", image: verticalSkinCare, link: "/servicios#faciales" },
                { name: "Servicios de Skincare", image: verticalSkinCare2, link: "/servicios#skincare" },
                { name: "Tienda", image: verticalImage, link: "/servicios", isNew: true },
              ].map((service, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-4">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={300}
                      height={300}
                      className="rounded-full mx-auto"
                    />
                    {service.isNew && (
                      <span className="absolute top-2 right-2 bg-black text-offwhite text-xs px-2 py-1 rounded-full">
                        Nuevo
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{service.name}</h3>
                  <Link href={service.link} className="text-black hover:text-beige inline-flex items-center">
                  Más Información <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 text-xl">
              <h2 className="text-4xl md:text-5xl mb-6 text-black">Sobre Nosotros</h2>
              <p className="text-black mb-6">
              En Espacio Darsha, creemos que una piel sana es el reflejo de un cuidado personalizado. Somos un equipo apasionado por el bienestar y la belleza, dedicados a ayudarte a encontrar la rutina de skincare perfecta para ti.
              </p>
              <p className="text-black mb-6">
Nos especializamos en ofrecer asesoría personalizada para elegir las cremas y productos más adecuados según tu tipo de piel y estilo de vida. Ya sea que busques una limpieza profunda, hidratación o rejuvenecimiento, estamos aquí para guiarte en cada paso del camino.
              </p>
              <p className="text-black mb-6">
Nuestro compromiso es ayudarte a sentirte bien en tu piel, con soluciones de cuidado que realmente funcionen para ti. Con productos cuidadosamente seleccionados y recomendaciones expertas, te ayudamos a lograr una piel radiante y saludable todos los días.
</p>
<strong>Tu piel, nuestra pasión.</strong>
            </div>
            <div className="md:w-1/2">
              <Image
                src={heroImage}
                alt="Aroma Therapy"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-offwhite py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center mb-12 text-black">Reseñas de nuestros clientes</h2>
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
                  title: "Excelente profesionales",
                  review: "Eugenia una excelente profesional y una persona divina! La recomiendo siempre.",
                  service: ""
                },
                {
                  name: "Antonio R.",
                  title: "Espacio muy recomendable",
                  review: "Espacio muy recomendable, Eugenia muy profesional",
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
                { icon: Phone, text: "(+598) 92 396 930" },
                { icon: MapPin, text: "Torre More Atlántico, Punta del Este." },
                { icon: Clock, text: "Lunes a Viernes de 8:00 a 12:00hs - 16:30 a 20:30hs" }
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center justify-center">
                  <Icon className="mr-2 text-black" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
