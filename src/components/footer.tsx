import {
    Instagram,
  } from "lucide-react"

export default function Footer() {
    return (
    <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4" id='social'>
            <a href="https://www.instagram.com/espaciodarsha/" target="_blank" className="text-offwhite hover:text-beige-dark"><Instagram /></a>
        </div>
        <p className="text-offwhite">&copy; {new Date().getFullYear()} Espacio Darsha. All rights reserved.</p>
        </div>
    </footer>
    )
}