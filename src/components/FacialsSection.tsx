"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Baskervville } from 'next/font/google';
import { ChevronRight, Clock, DollarSign, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Importar las imágenes de elipses
import ellipse1 from '@/assets/images/ellipse-2.png';
import ellipse2 from '@/assets/images/ellipse-1.png';

// Import the font
const baskervville = Baskervville({
  weight: '400',
  subsets: ['latin'],
});

// Define the treatment type
interface Treatment {
  title: string;
  description: string;
  price: string;
  duration: string;
  frequency?: string;
}

interface FacialsSectionProps {
  image: StaticImageData;
}

const FacialsSection: React.FC<FacialsSectionProps> = ({ image }) => {
  // State for content heights and refs
  const [contentHeights, setContentHeights] = useState<{ [key: number]: number }>({});
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // All treatments data
  const treatments: Treatment[] = [
    {
      title: "Limpieza Facial Profunda",
      description: "Una experiencia completa para cuidar, renovar y equilibrar tu piel desde el primer paso. El tratamiento incluye: evaluación personalizada, limpieza profunda, exfoliación química o mecánica, aplicación de puntas de diamante o renovadores celulares, extracciones, máscara y sérum adaptados a tu piel, hidratación y protector solar. Ideal para eliminar impurezas, mejorar la textura, oxigenar la piel y potenciar tu rutina de cuidado facial.",
      price: "1.600",
      duration: "60 a 70 minutos"
    },
    {
      title: "Tratamiento Revitalizante con Velo de Colágeno",
      description: "Una caricia nutritiva para pieles que necesitan frescura, hidratación y luminosidad. Incluye: evaluación personalizada, limpieza suave, exfoliación profunda, tonificación, aplicación de velo de colágeno con efecto tensor, crema hidratante y protector solar. Ideal para pieles apagadas, deshidratadas o con signos de fatiga.",
      price: "1.800",
      duration: "60 a 70 minutos"
    },
    {
      title: "Tratamiento Iluminador con Radiofrecuencia y Vitamina C",
      description: "Un protocolo completo para devolverle a tu piel vitalidad, suavidad y luminosidad. Incluye: limpieza profunda, exfoliación con puntas de diamante, radiofrecuencia facial, loción de vitamina C, máscara tensora, sérum regenerador, hidratación y protector solar. Ideal para pieles opacas, cansadas o con primeros signos de envejecimiento.",
      price: "1.900",
      duration: "70 minutos"
    },
    {
      title: "Limpieza Facial + Masaje Yoga Facial",
      description: "Una limpieza profunda combinada con una experiencia relajante y restauradora para tu rostro. Incluye: evaluación de la piel, limpieza, exfoliación, extracciones, tonificación, máscara descongestiva e hidratante, emulsión según tu tipo de piel y una secuencia de masajes de yoga facial, que relajan los músculos, mejoran la circulación y realzan la luminosidad natural. Ideal para purificar, equilibrar y revitalizar tu piel.",
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
      description: "Una experiencia completa que combina limpieza profunda, cuidado personalizado y relajación. Incluye evaluación de la piel, limpieza con puntas de diamante, vapor de ozono, extracciones, mascarilla, suero, hidratación intensa y masajes en rostro, cuello y escote. Finaliza con fotoprotección.",
      price: "1.900",
      duration: "75 minutos"
    },
    {
      title: "Tratamiento Anti-Acné",
      description: "Plan progresivo y personalizado para pieles con acné, que trabaja en profundidad para equilibrar, limpiar y renovar la piel. Cada sesión incluye técnicas y productos específicos para regular el sebo, tratar imperfecciones, suavizar marcas y lograr una piel más clara y uniforme.",
      price: "1.700 por sesión | Pack x3 sesiones: 4.500",
      duration: "60 minutos",
      frequency: "cada 10 a 15 días (mínimo 3 meses)"
    },
    {
      title: "Tratamiento Despigmentante",
      description: "Ideal para atenuar manchas solares, hormonales o post-acné, recuperando un tono más uniforme, luminoso y saludable. Incluye peelings personalizados en consultorio y acompañamiento con producto despigmentante domiciliario. Se recomienda un mínimo de 6 sesiones (cada 15 días) durante 3 meses.",
      price: "1.700 por sesión | Pack x3 sesiones: 4.500",
      duration: "45 a 60 minutos",
      frequency: "cada 15 días (mínimo 3 meses)"
    },
    {
      title: "Lifting Facial Reafirmante Timexpert Lift(In)",
      description: "Tratamiento de alta cosmética profesional con productos Germaine de Capuccini, diseñado para reafirmar, tensar y redefinir el contorno facial, con efecto lifting visible desde la primera sesión. Actúa en profundidad para combatir flacidez, signos de cansancio y pérdida de firmeza. Ideal para pieles maduras o con primeros signos de flacidez.",
      price: "2.500",
      duration: "60 minutos",
      frequency: "1 vez por semana (mínimo 3 sesiones)"
    },
    {
      title: "Peeling Químico Profesional",
      description: "Tratamiento dermocosmético que renueva la piel en profundidad mediante la aplicación de ácidos específicos. Ayuda a mejorar la textura, unificar el tono, reducir manchas, controlar el acné y atenuar líneas finas. Se adapta al tipo de piel y a los objetivos de cada persona, logrando una piel más luminosa, suave y revitalizada desde las primeras sesiones.",
      price: "1.700",
      duration: "45 a 60 minutos",
      frequency: "cada 15 días"
    }
  ];

  // State for the selected treatment
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Effect to measure content heights when they change
  useEffect(() => {
    // Update heights when active index changes
    if (activeIndex !== null && contentRefs.current[activeIndex]) {
      const newHeights = { ...contentHeights };
      Object.keys(contentRefs.current).forEach((key) => {
        const index = parseInt(key);
        const ref = contentRefs.current[index];
        if (ref) {
          newHeights[index] = ref.scrollHeight;
        }
      });
      setContentHeights(newHeights);
    }
  }, [activeIndex]);

  const handleTreatmentClick = (treatment: Treatment, index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Function to set ref for content
  const setContentRef = (element: HTMLDivElement | null, index: number) => {
    if (element) {
      contentRefs.current[index] = element;
      // Measure initial height
      if (!contentHeights[index] && element) {
        setContentHeights(prev => ({
          ...prev,
          [index]: element.scrollHeight
        }));
      }
    }
  };

  return (
    <section className="py-16 w-full" id="faciales">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 pb-8">
          <div className="md:w-1/2">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${baskervville.className}`}>
              Tratamientos Faciales
            </h2>
          </div>
          <div className="md:w-1/2">

            <p className="text-xl text-gray-600">
            Tratamientos diseñados para realzar la belleza natural de tu piel con tecnología estética, productos profesionales y atención personalizada. 
            Cada sesión está pensada para brindarte resultados visibles y una experiencia de bienestar.  
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column: Title and accordion */}
          <div className="md:w-1/2">
            {/* Accordion treatment list */}
            <div className="space-y-2">
              {treatments.map((treatment, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div
                    onClick={() => handleTreatmentClick(treatment, index)}
                    className={`p-4 flex items-center justify-between cursor-pointer transition-all ${activeIndex === index
                        ? 'bg-black text-white'
                        : 'hover:bg-gray-100'
                      }`}
                  >
                    <div className="flex items-center">
                      <span className="text-xs opacity-60 mr-3">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      <h3 className="font-medium">{treatment.title}</h3>
                    </div>
                    <ChevronRight className={`h-4 w-4 transition-transform ${activeIndex === index ? 'rotate-90' : ''
                      }`} />
                  </div>

                  {/* Treatment details that show below the selected item with smooth animation */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out border-t border-gray-200"
                    style={{
                      maxHeight: activeIndex === index ? `${contentHeights[index] || 1000}px` : '0px',
                      opacity: activeIndex === index ? 1 : 0,
                      transform: `translateY(${activeIndex === index ? 0 : -20}px)`,
                      transitionProperty: 'max-height, opacity, transform'
                    }}
                  >
                    <div
                      ref={(el) => setContentRef(el, index)}
                      className="bg-white p-6"
                    >
                      <p className="text-gray-600 mb-6">
                        {treatment.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-gray-400" />
                          <span className="text-sm"> {treatment.duration}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-gray-400" />
                          <span className="text-sm"> {treatment.price}</span>
                        </div>

                        {treatment.frequency && (
                          <div className="flex items-center gap-2">
                            <RefreshCw className="h-5 w-5 text-gray-400" />
                            <span className="text-sm"> {treatment.frequency}</span>
                          </div>
                        )}
                      </div>

                      <Button className="w-full bg-black hover:bg-gray-800 text-white" asChild>
                        <Link href="https://wa.me/59892396930" target="_blank" rel="noopener noreferrer">
                          Reserva tu turno
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Image and description */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-full max-w-md mx-auto my-12">
              {/* Elipse superior */}
              <div className="absolute -top-10 right-0 w-full flex justify-end">
                <Image
                  src={ellipse1}
                  alt="Decorative curve"
                  width={300}
                  height={30}
                  className="object-contain"
                />
              </div>
              
              {/* Imagen principal */}
              <div className="relative w-full aspect-[4/5] rounded-full overflow-hidden">
                <Image
                  src={image}
                  alt="Tratamientos faciales"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Elipse inferior */}
              <div className="absolute -bottom-10 left-0 w-full">
                <Image
                  src={ellipse2}
                  alt="Decorative curve"
                  width={300}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacialsSection;
