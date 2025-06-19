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
      title: "Masaje de Espalda y Cuello",
      description: "Un momento de pausa para reconectar con tu cuerpo. Este masaje se enfoca en liberar tensiones acumuladas en la zona alta de la espalda, cuello y hombros, combinando maniobras suaves y profundas que alivian contracturas, mejoran la circulación y reducen el estrés físico y emocional. Ideal para quienes necesitan un respiro en medio de la rutina o buscan aliviar molestias por posturas prolongadas.",
      price: "1.500",
      duration: "50 minutos"
    },
    {
      title: "Masaje Corporal Relajante",
      description: "Una experiencia integral de bienestar para todo el cuerpo. Este masaje de 60 minutos trabaja de forma armónica cada zona corporal, combinando maniobras suaves y profundas que ayudan a liberar tensiones musculares, mejorar la circulación y favorecer un estado general de calma y equilibrio. Ideal para quienes buscan desconectar del estrés diario y reconectar con la sensación de liviandad y descanso físico.",
      price: "1.800",
      duration: "60 minutos"
    },
    {
      title: "Limpieza Profunda en Espalda",
      description: "Un tratamiento completo para renovar, equilibrar y cuidar la piel de tu espalda. Comienza con una limpieza y exfoliación profunda, seguida de puntas de diamante para eliminar células muertas y mejorar la textura. Se realizan extracciones localizadas para desobstruir poros y prevenir imperfecciones. Luego se aplica una mascarilla equilibrante y suero específico, finalizando con una hidratación que deja la piel suave, limpia y visiblemente más saludable. Ideal para pieles con tendencia a impurezas o para quienes desean lucir una espalda radiante y cuidada.",
      price: "2.000",
      duration: "75 minutos"
    },
    {
      title: "Peeling en Espalda",
      description: "Un tratamiento intensivo para renovar la piel de la espalda, mejorar su textura y reducir imperfecciones. Iniciamos con una limpieza profunda y exfoliación, seguida de la aplicación de un peeling químico específico, que actúa sobre manchas, poros obstruidos y piel engrosada. Este procedimiento favorece la regeneración celular, ayuda a disminuir marcas y deja la piel visiblemente más uniforme, suave y luminosa. Finalizamos con productos calmantes e hidratantes para restaurar y proteger la piel tratada. Ideal para pieles con acné, manchas o textura irregular.",
      price: "2.500",
      duration: "70 minutos"
    },
    {
      title: "Pack de 8 Sesiones – Radiofrecuencia Corporal",
      description: "Reafirmá, tonificá y revitalizá tu piel con este tratamiento corporal avanzado. La radiofrecuencia estimula la producción de colágeno y elastina, mejorando la flacidez, la textura de la piel y la apariencia de la celulitis, de manera no invasiva y progresiva. Podés trabajar zonas específicas como piernas, glúteos, abdomen o brazos, según tus objetivos. Cada sesión tiene una duración de 30 minutos y se recomienda una frecuencia de una sesión cada 7 a 21 días, dependiendo del caso. Un plan ideal para quienes desean resultados visibles y duraderos, mejorando el contorno y firmeza de su cuerpo.",
      price: "1.300 por sesión | Pack x8 sesiones: $8.900",
      duration: "30 minutos"
    },
    {
      title: "Pack de 8 Sesiones – Electrodos",
      description: "Mejorá el tono y la firmeza de tu cuerpo con este tratamiento localizado, ideal para trabajar una zona específica de forma efectiva y no invasiva. Los electrodos estimulan los músculos mediante corrientes controladas, favoreciendo la tonificación, activación muscular y mejora de la circulación. Es un plan cómodo, seguro y eficaz para acompañar tu rutina estética y lograr resultados visibles. Podés elegir entre piernas, glúteos, abdomen o brazos. Se recomienda una frecuencia de 2 a 3 sesiones por semana para potenciar los efectos.",
      price: "4.500 Pack x8 sesiones",
      duration: "30 minuto por sesión"
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
    <section className="py-16 w-full bg-[#f8f5f2]" id="corporales">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 pb-8">
          <div className="md:w-1/2">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${baskervville.className}`}>
              Servicios Corporales
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-xl text-gray-600">
              En Espacio Darsha brindamos tratamientos corporales para mejorar la firmeza, la calidad de la piel y el bienestar general.
              Utilizamos técnicas profesionales como radiofrecuencia, electrodos, masajes y peelings, adaptando cada protocolo a las necesidades de tu cuerpo.
              Combinamos tecnología, cuidado y efectividad para ofrecerte resultados visibles en un entorno armonioso.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column: Image */}
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
          {/* Right column: Title and accordion */}
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

                      <Button className="w-full bg-black hover:bg-gray-800 text-white">
                        Reservar Turno
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeFacialsSection;
