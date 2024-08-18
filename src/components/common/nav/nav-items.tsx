"use client"

import { AnimatePresence, motion } from "framer-motion"
import { NavItem } from "./nav-item"

interface Props {
  open: boolean
  links: {
    name: string
    href: string
  }[]
  setOpen: (open: boolean) => void
}

export const NavItems = ({
  open, setOpen, links
}: Props) => {
  return (
    <>
      <AnimatePresence>
        {
          open && (
            <motion.ul
              className="text-text-100 text-center bg-nav/80 absolute w-full top-[60px] left-0 gap-1 lg:hidden"
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut"
              }}
              exit={{
                opacity: 0
              }}
              onClick={() => setOpen(false)}
            >
              {
                links.map((link) => (
                  <li key={link.name}>
                    <NavItem item={link} />
                  </li>
                ))
              }
            </motion.ul>
          )
        }
      </AnimatePresence>
      <motion.ul
        className="text-text-100 text-center hidden lg:bg-transparentlg:w-auto lg:flex lg:items-center lg:justify-center lg:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.25
        }}
        exit={{ opacity: 0 }}
        onClick={() => setOpen(false)}
      >
        {
          links.map((link) => (
            <li key={link.name}>
              <NavItem item={link} />
            </li>
          ))
        }
      </motion.ul>
    </>
  )
}
