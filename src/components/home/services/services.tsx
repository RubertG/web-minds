import { bebasNeue } from "@/fonts/bebas-neue.font"
import { Decoration } from "./decoration"
import Image from "next/image"
import { ServiceItem } from "./service-item"

const services = [
  "Páginas web", "Diseño web", "Panel administrativo", "Tienda virtual",
  "Blogs", "Apliaciones web", "landing pages", "Catálogos virtuales",
  "Páginas linktree", "Dominio web", "Certificado SSL", "Hosting",
  "Correos corporativos"
]

export const Services = ({
  className
}: {
  className?: string
}) => {
  return (
    <main
      id="servicios"
      className={`min-h-screen relative md:py-10 ${className}`}
    >
      <Decoration />
      <h2
        className={`${bebasNeue.className} text-5xl text-text-100 font-bold text-center`}
      >¿Qué te ofrecemos?</h2>
      <section className="mt-10 md:grid md:grid-cols-[auto_55%] md:justify-center md:items-center md:gap-24">
        <div className="relative select-none">
          <Image
            className="absolute -translate-y-[50%] top-1/2 left-1/2 -translate-x-1/2 -z-20 min-w-[600px]"
            src="/decoration.svg"
            alt="Decoración"
            width={600}
            height={600}
          />
          <Image
            className="max-w-[400px] w-full"
            src="/servicios.svg"
            alt="Servicios"
            width={400}
            height={410}
          />
        </div>
        <ul className="flex flex-wrap gap-2.5 mt-7 md:mt-0 justify-center md:justify-start">
          {
            services.map((item, index) => (
              <ServiceItem
                key={index}
                item={item}
              />
            ))
          }
        </ul>
      </section>
      <footer className="flex justify-center">
        <h3 className="text-lg font-semibold text-text-100 italic text-center mt-10 lg:border-b lg:border-principal lg:px-1">
          WebMinds ayuda a las marcas a destacarse en el entorno digital competitivo
        </h3>
      </footer>
    </main>
  )
}
