// components/LandingPage.tsx

import heroImage from '@/assets/images/hero-img.jpg'
import verticalImage from '@/assets/images/vertical-prod.jpg'
import verticalImage2 from '@/assets/images/vertical-prod-2.jpg'
import verticalImage3 from '@/assets/images/vertical-prod-3.jpg'
import verticalImage4 from '@/assets/images/vertical-prod-4.jpg'
import verticalImage5 from '@/assets/images/vertical-prod-5.jpg'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Search,
  ShoppingBag,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <header className="bg-offwhite shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-serif text-darkgreen">Espacio Darsha</h1>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#services" className="text-darkgreen hover:text-coral uppercase text-sm">Servicios</a></li>
              <li><a href="#shop" className="text-darkgreen hover:text-coral uppercase text-sm">Shop</a></li>
              <li><a href="#social" className="text-darkgreen hover:text-coral uppercase text-sm">Social</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="bg-peach">
        <section className="container mx-auto px-4 py-16 flex items-center">
          <div className="w-1/2 pr-8">
            <h2 className="text-6xl font-serif mb-4 leading-tight">Espacio Darsha</h2>
            <p className="text-xl mb-8 text-darkgreen">Se tu mejor version de ti</p>
            <Button size="lg" className="bg-coral hover:opacity-90 text-offwhite">Reserva tu turno</Button>
          </div>
          <div className="w-1/2 relative">
            <div className="absolute inset-0 bg-coral rounded-full"></div>
            <Image
                src={heroImage}
                alt="Beautiful woman"
                height={500}
                className="rounded-full relative z-10"
            />
          </div>
        </section>

        <section id="services" className="bg-offwhite py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-serif text-center mb-4">Services</h2>
            <p className="text-xl text-center text-darkgreen mb-12">
              Relaxation of body and mind in which time does not exist.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Hydro Therapy", image: verticalImage },
                { name: "Sauna Rooms", image: verticalImage3 },
                { name: "Massages", image: verticalImage },
                { name: "Reflexology", image: verticalImage3, isNew: true },
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
                      <span className="absolute top-2 right-2 bg-darkgreen text-offwhite text-xs px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{service.name}</h3>
                  <Link href="#" className="text-darkgreen hover:text-coral inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-4xl font-serif mb-4 text-darkgreen">Aroma Therapy</h2>
              <p className="text-darkgreen mb-6">
                Give yourself the ultimate home spa experience with a type of therapy that uses
                gentle pressure on specific points along your feet (and possibly on your hands or ears as
                well) to help you feel better. The theory is that this eases stress, and that helps your body
                work better.
              </p>
              <Link href="#" className="text-darkgreen hover:text-coral-dark inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
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
            <h2 className="text-4xl font-serif text-center mb-12 text-darkgreen">Review from our clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "John Doe",
                  image: "/placeholder.svg?height=80&width=80",
                  title: "Amazing place!",
                  review: "The service was impeccable and the staff was the best we've met. Thank you from the bottom.",
                  service: "Sauna Rooms"
                },
                {
                  name: "Jane Smith",
                  image: "/placeholder.svg?height=80&width=80",
                  title: "BEST massage",
                  review: "The BEST massage I have ever had, every time I call Reka Spa to my private venue for body work!",
                  service: "Massages"
                },
                {
                  name: "Mike Johnson",
                  image: "/placeholder.svg?height=80&width=80",
                  title: "Wonderful vacation",
                  review: "Thank you! We have had a wonderful vacation at your heavenly resort. You are precious.",
                  service: "Reflexology"
                },
                {
                  name: "Emily Brown",
                  image: "/placeholder.svg?height=80&width=80",
                  title: "Relaxing experience",
                  review: "The hydro therapy session was incredibly relaxing. I left feeling refreshed and rejuvenated.",
                  service: "Hydro Therapy"
                }
              ].map((review, index) => (
                <Card key={index} className="bg-peach">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                      <div>
                        <h3 className="font-semibold text-darkgreen">{review.title}</h3>
                        <p className="text-sm text-darkgreen">{review.name}</p>
                      </div>
                    </div>
                    <p className="mb-4 text-darkgreen">{review.review}</p>
                    <Link href="#" className="text-darkgreen hover:text-coral-dark font-semibold inline-flex items-center text-sm">
                      {review.service} <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-peach py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12 text-darkgreen">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "123 Beauty Lane, Cityville" },
                { icon: Clock, text: "Mon-Sat: 9AM - 7PM" }
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center justify-center">
                  <Icon className="mr-2 text-darkgreen" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-offwhite py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-text-coral hover:text-coral-dark"><Instagram /></a>
            <a href="#" className="text-text-coral hover:text-coral-dark"><Facebook /></a>
          </div>
          <p className="text-gray-600">&copy; 2024 Espacio Darsha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
