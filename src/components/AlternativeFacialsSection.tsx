"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Baskervville } from 'next/font/google';
import { ChevronRight, Clock, DollarSign, RefreshCw } from 'lucide-react';
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

interface AlternativeFacialsSectionProps {
  image: StaticImageData;
}

const AlternativeFacialsSection: React.FC<AlternativeFacialsSectionProps> = ({ image }) => {
  // State for content heights and refs
  const [contentHeights, setContentHeights] = useState<{ [key: number]: number }>({});
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // All treatments data
  const treatments: Treatment[] = [
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
    <section className="py-16 w-full bg-[#f8f5f2]" id="faciales-alt">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 pb-8">
          <div className="md:w-1/2">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${baskervville.className}`}>
              Tratamientos Faciales
            </h2>
          </div>
          <div className="md:w-1/2">

            <p className="text-xl text-gray-600">
              Tratamientos diseñados para cuidar, renovar y realzar la belleza natural de tu piel.
              Combinamos tecnología estética, productos profesionales y atención personalizada para brindarte resultados visibles y una experiencia de bienestar en cada sesión.
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
                          <span className="text-sm">Duración: {treatment.duration}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-gray-400" />
                          <span className="text-sm">Valor: ${treatment.price}</span>
                        </div>

                        {treatment.frequency && (
                          <div className="flex items-center gap-2">
                            <RefreshCw className="h-5 w-5 text-gray-400" />
                            <span className="text-sm">Frecuencia: {treatment.frequency}</span>
                          </div>
                        )}
                      </div>

                      <Button className="w-full bg-black hover:bg-gray-800 text-white">
                        Reservar Turno
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

export default AlternativeFacialsSection;
