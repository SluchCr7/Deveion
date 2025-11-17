'use client'
import {useState , useEffect} from 'react'
import Image from "next/image";
import { About, Hero , Features ,Footer, ContactForm, Header, Pricing , Reviews , Services , Team } from "./Components";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Header/>
      <Hero />
      <About />
      <Services />
      <Features />
      <Reviews />
      <Team />
      <Pricing />
      {showScrollTop && (
        <button
          title="top"
          type="button"
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6
            bg-gradient-to-r from-purple-600 to-blue-600
            text-white p-4 rounded-full shadow-lg shadow-purple-500/30
            transition-all duration-300 
            hover:scale-110 hover:shadow-xl hover:shadow-purple-500/40
            animate-fade-in
          "
        >
          <FaArrowUp size={20}/>
        </button>
      )}
      <ContactForm isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Footer setIsContactOpen={setIsOpen}/>
    </div>
  );
}
