import { Baskervville, Poppins } from 'next/font/google'

const baskervville = Baskervville({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-baskervville',
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function ServicesHero() {
  return (
    <div className={`${poppins.variable} ${baskervville.className} w-full pt-40 pb-20 px-4 bg-gradient-to-r from-grayishbeige via-beige to-[#D1C7C0]`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className={`text-4xl md:text-6xl font-bold mb-4 text-gray-900 ${baskervville.className}`}>
          Nuestros Servicios
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Descubre nuestra gama completa de tratamientos de belleza y bienestar diseñados para realzar tu belleza natural y rejuvenecer tu cuerpo y mente.
        </p>
      </div>
    </div>
  )
}