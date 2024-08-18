'use client'

import clsx from "clsx"
import Link from "next/link"
import { useState } from "react"
import { bebasNeue } from "@/fonts/bebas-neue.font"
import Image from "next/image"
import { NavItems } from "./nav-items"

const links = [
  {
    name: "Sobre nosotros",
    href: "/#sobre-nosotros"
  },
  {
    name: "Servicios",
    href: "/#servicios"
  },
  {
    name: "Contáctanos",
    href: "/#contacto"
  }
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="fixed w-full top-0 left-0 z-30 lg:mt-2.5"
    >
      <nav
        className="flex items-center justify-between max-w-7xl bg-nav/80 lg:bg-nav/40 lg:backdrop-blur-sm lg:rounded-xl px-4 py-2.5 mx-auto">
        <Link
          className="flex items-center gap-2"
          href="/"
        >
          <Image src="/logo.svg" alt="Logo de WebMinds" width={40} height={40} />
          <h1
            className={`text-2xl lg:text-2xl text-text-100 lg:hover:text-principal lg:transition-colors ${bebasNeue.className}`}>
            WebMinds
          </h1>
        </Link>
        <NavItems 
          links={links}
          open={open}
          setOpen={setOpen}
        />
        <button
          className="flex justify-between items-center gap-[3px] flex-col lg:hidden"
          title="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <span className={clsx("h-[2px] w-5 bg-gray-200 rounded-lg transition-transform", {
            "translate-y-[5px] -rotate-45": open
          })}></span>
          <span className={clsx("h-[2px] w-5 bg-gray-200 rounded-lg transition-transform", {
            "opacity-0": open
          })}></span>
          <span className={clsx("h-[2px] w-5 bg-gray-200 rounded-lg transition-transform", {
            "-translate-y-[5px] rotate-45": open
          })}></span>
        </button>
      </nav>
    </nav>
  )
}
