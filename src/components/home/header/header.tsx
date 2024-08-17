import { bebasNeue } from "@/fonts/bebas-neue.font"
import { poppins } from "@/fonts/poppins.font"
import Image from "next/image"
import { Decoration } from "./decoration"

export const Header = ({
  className
}: {
  className?: string
}) => {
  return (
    <>
      <div id="sobre-nosotros" />
      <Decoration />
      <header
        className={`min-h-screen mt-32 md:mt-0 md:grid md:grid-cols-2 md:justify-center md:items-center md:gap-5 ${className}`}
      >
        <section>
          <div>
            <h1 className={`${bebasNeue.className} text-7xl text-principal font-bold flex flex-col md:text-8xl fade-in`}>
              WebMinds
            </h1>
            <h2 className={`${poppins.className} text-text-100 text-3xl font-bold -mt-2 md:text-5xl fade-in`} style={{ animationDelay: "0.2s" }}>
              Colombia
            </h2>
          </div>
          <p className="text-text-200 text-sm mt-2 md:text-base fade-in" style={{ animationDelay: "0.4s" }}>
            Somos una empresa de desarrollo digital especializada en la creación de soluciones web y aplicaciones personalizadas para empresas y emprendedores.
          </p>
        </section>
        <div className="mt-8 md:mt-0 flex justify-endc fade-in" style={{ animationDelay: "0.6s" }}>
          <Image
            className="max-w-[600px] w-full select-none"
            src="/sobre-nosotros.svg"
            alt="Sobre nosotros"
            width={600}
            height={420}
          />
        </div>
      </header>
    </>
  )
}
