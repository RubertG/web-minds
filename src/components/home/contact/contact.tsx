import { bebasNeue } from "@/fonts/bebas-neue.font"
import { Decoration } from "./decoration"
import { ContactForm } from "./contact-form"
import Image from "next/image"

export const Contact = ({
  className
}: {
  className?: string
}) => {
  return (
    <main
      id="contacto"
      className={`min-h-screen relative py-16 lg:py-24 ${className}`}
    >
      <Decoration />
      <h2
        className={`${bebasNeue.className} text-5xl text-text-100 font-bold text-center`}
      >¡Contáctanos!</h2>
      <section className="md:grid md:grid-cols-2 md:items-center md:gap-4 mt-10">
        <ContactForm />
        <Image
          className="justify-self-end"
          src="/contacto.svg"
          alt="Contacto"
          width={500}
          height={500}
        />
      </section>
    </main>
  )
}
