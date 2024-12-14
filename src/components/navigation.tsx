'use client'

import logoNav from '@/assets/logos/LOGOS-02.png'
import {
  Menu
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from 'react'
  
export default function MainNavigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleSmoothScroll = (e: Event) => {
        const target = e.target as HTMLAnchorElement;
        if (target.hash) {
          e.preventDefault();
          const element = document.querySelector(target.hash);
          if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
          setMobileMenuOpen(false);
        }
      };
  
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
      });
  
      return () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.removeEventListener('click', handleSmoothScroll);
        });
      };
    }, []);

    return (
    <header className="bg-offwhite shadow-sm fixed top-0 left-0 right-0 z-50">
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
    <Link href="/">
        <Image src={logoNav} alt="Espacio Darsha" height={50} />
    </Link>
    <nav className="hidden md:block">
        <ul className="flex space-x-8">
        <li><Link href="/servicios" className="text-black hover:opacity-60 uppercase text-lg">Servicios</Link></li>
        <li><a href="#contact" className="text-black hover:opacity-60 uppercase text-lg">Contacto</a></li>
        </ul>
    </nav>
    <button aria-label="Menu" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <Menu className="h-6 w-6 text-gray-600" />
    </button>
    </div>
    {mobileMenuOpen && (
    <div 
        className={`md:hidden bg-offwhite overflow-hidden transition-all duration-400 ease-in-out ${
        mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <ul className="flex flex-col items-center space-y-4 mb-4">
        <li><Link href="/servicios" className="text-black hover:opacity-60 uppercase text-lg">Servicios</Link></li>
        <li><a href="#contact" className="text-black hover:opacity-60 uppercase text-lg">Contacto</a></li>
        </ul>
    </div>
    )}
    </header>
    )
}