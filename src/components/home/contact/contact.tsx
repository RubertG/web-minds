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
      className={`min-h-screen relative py-16 lg:py-24 flex flex-col justify-center ${className}`}
    >
      <Decoration />
      <h2
        className={`${bebasNeue.className} text-5xl text-text-100 font-bold text-center`}
      >¡Contáctanos!</h2>
      <section className="grid md:grid-cols-2 md:items-center gap-7 md:gap-4 mt-10">
        <ContactForm />
        <div className="relative justify-self-end">
          <Image
            className="absolute -translate-y-[50%] top-1/2 left-1/2 -translate-x-1/2 -z-20 opacity-70"
            src="/decoration.svg"
            alt="Decoración"
            width={700}
            height={700}
          />
          <Image
            src="/contacto.svg"
            alt="Contacto"
            width={500}
            height={500}
          />
        </div>
      </section>
    </main>
  )
}
