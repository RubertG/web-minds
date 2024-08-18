"use client"

import { motion } from "framer-motion"

export const ServiceItem = ({
  item
}: {
  item: string
}) => {
  return (
    <motion.li
      initial={{
        opacity: 0,
        translateX: "50%"
      }}
      whileInView={{
        opacity: 1,
        translateX: 0
      }}
      viewport={{
        once: true,
        margin: "0px 0px -120px 0px"
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut"
      }}
      className="text-text-200 bg-bg-card/10 backdrop-blur-[2px] text-sm py-2.5 px-5 border border-bg-300 rounded-lg lg:text-base"
    >
      {item}
    </motion.li>
  )
}
