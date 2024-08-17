'use client'

import clsx from "clsx"
import Link from "next/link"
import { useState } from "react"
import { NavItem } from "./nav-item"
import { bebasNeue } from "@/fonts/bebas-neue.font"
import Image from "next/image"

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
        <ul
          className={clsx("text-text-100 text-center bg-nav/80 lg:bg-inherit absolute w-full top-[60px] left-0 lg:static lg:w-auto lg:flex lg:items-center lg:justify-center gap-1 lg:gap-6", {
            "hidden": !open
          })}
          onClick={() => setOpen(false)}
        >
          {
            links.map((link) => (
              <li key={link.name}>
                <NavItem item={link} />
              </li>
            ))
          }
        </ul>
        <button
          className="flex justify-between items-center gap-[3px] flex-col lg:hidden"
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
