import Image from "next/image"
import Link from "next/link"

export const ContactForm = ({
  className
}: {
  className?: string
}) => {
  return (
    <form
      className={`bg-bg-card/10 backdrop-blur-sm text-text-100 px-5 py-2.5 rounded-lg border border-bg-300 ${className}`}
    >
      <label
        className="block"
        htmlFor="name"
      >
        Nombre y apellido
      </label>
      <input
        className="lg:text-base w-full mt-2 text-text-200 bg-transparent px-5 py-2.5 rounded-lg border border-bg-300 focus:border-principal focus:outline-none transition-colors text-sm"
        type="text"
        name="name"
        id="name"
        placeholder="Pepito Perez..."
      />

      <label
        className="block mt-4"
        htmlFor="email"
      >
        Correo electrónico
      </label>
      <input
        className="lg:text-base w-full mt-2 text-text-200 bg-transparent px-5 py-2.5 rounded-lg border border-bg-300 focus:border-principal focus:outline-none transition-colors text-sm"
        type="email"
        name="email"
        id="email"
        placeholder="tucorreo@ejemplo.com"
      />

      <label
        className="block mt-4"
        htmlFor="phone"
      >
        Número telefónico
      </label>
      <input
        className="lg:text-base w-full mt-2 text-text-200 bg-transparent px-5 py-2.5 rounded-lg border border-bg-300 focus:border-principal focus:outline-none transition-colors text-sm appearance-none"
        type="text"
        name="phone"
        id="phone"
        pattern="[0-9]{10}"
        minLength={10}
        maxLength={10}
        placeholder="0000000000"
      />

      <label
        className="block mt-4"
        htmlFor="email"
      >
        ¿Para qué va dirigida tu web?
      </label>
      <textarea
        className="lg:text-base w-full mt-2 text-text-200 bg-transparent px-5 py-2.5 rounded-lg border border-bg-300 focus:border-principal focus:outline-none transition-colors text-sm appearance-none"
        name="email"
        id="email"
        placeholder="Descripción del negocio al cual le quieres crear la web..."
      />

      <footer className="flex items-center justify-start mt-3 gap-3 lg:gap-4">
        <button
          title="Hacer cotización por Whatsapp"
          className="text-text-100 bg-principal px-5 py-2.5 rounded-lg transition-colors lg:hover:bg-principal/85 lg:text-base w-full"
        >
          Hacer cotización
        </button>
        <Link
          className="lg:hover:scale-110 lg:transition-transform"
          target="_blank"
          title="Visitar nuestro Instagram"
          href="https://www.instagram.com/webminds.col/"
        >
          <Image
            src="/instagram.svg"
            alt="Intagram"
            width={40}
            height={40}
          />
        </Link>
      </footer>
    </form>
  )
}
