"use client"

import { useForm } from "@/hooks/common/use-form"
import { contactSchema } from "@/schemas/home/contact/contact.schema"
import Image from "next/image"
import Link from "next/link"
import { FormError } from "./form-error"
import clsx from "clsx"
import { Input, Textarea } from "./input"

interface Inputs {
  name: string
  email: string
  number: string
  message?: string
}

export const ContactForm = ({
  className
}: {
  className?: string
}) => {
  const { errors, handleSubmit, loading, register } = useForm<Inputs>({
    schema: contactSchema,
    actionSubmit: async (inputs) => {
      const message = `
        ¡Hola WebMinds!
        %0ASoy ${inputs.name} y quiero más información sobre tus servicios. 
        %0A
        %0AMi correo: ${inputs.email} 
        %0AMi número de telefono: ${inputs.number}
        %0A${inputs.message && `Mi web va dirigida para: ${inputs.message}`}
      `

      if (!window) return

      window.open(`https://wa.me/57${process.env.NEXT_PUBLIC_PHONE}?text=${message}`, '_blank')
    }
  })

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-bg-card/10 backdrop-blur-sm text-text-100 px-5 py-2.5 rounded-lg border border-bg-300 ${className}`}
    >
      <Input
        label="Nombre y apellido"
        className={clsx("", {
          "!border-red-700": errors.name?.message
        })}
        type="text"
        id="name"
        placeholder="Pepito Perez..."
        {...register("name")}
      />
      {errors.name?.message && <FormError>{errors.name?.message}</FormError>}

      <Input
        label="Correo electrónico"
        classNameLabel="mt-4"
        className={clsx("", {
          "!border-red-700": errors.email?.message
        })}
        type="email"
        id="email"
        placeholder="tucorreo@ejemplo.com"
        {...register("email")}
      />
      {errors.email?.message && <FormError>{errors.email?.message}</FormError>}

      <Input
        label="Número telefónico"
        classNameLabel="mt-4"
        className={clsx("appearance-none", {
          "!border-red-700": errors.number?.message
        })}
        type="text"
        id="phone"
        placeholder="0000000000"
        {...register("number")}
      />
      {errors.number?.message && <FormError>{errors.number?.message}</FormError>}

      <Textarea
        label="¿Para qué va dirigida tu web?"
        classNameLabel="mt-4"
        className="appearance-none"
        id="message"
        placeholder="Descripción del negocio al cual le quieres crear la web..."
        optional
        {...register("message")}
      />
      {errors.message?.message && <FormError>{errors.message?.message}</FormError>}

      <footer className="flex items-center justify-start mt-3 gap-3 lg:gap-4">
        <button
          title="Hacer cotización por Whatsapp"
          className="text-text-100 bg-principal px-5 py-2.5 rounded-lg transition-colors lg:hover:bg-principal/85 lg:text-base w-full"
        >
          {loading ? "Haciendo cotización..." : "Hacer cotización"}
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
