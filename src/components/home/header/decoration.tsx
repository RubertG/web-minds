import Image from "next/image"

export const Decoration = () => {
  return (
    <div className="relative -z-10">
      <Image
        className="absolute -translate-y-[50%] top-0 left-1/2 -translate-x-1/2 lg:w-[848px] select-none"
        src="/decoration.svg"
        alt="Logo de WebMinds"
        width={900}
        height={800} />
      <Image
        className="absolute min-w-[1000px] md:w-[400px] 2xl:min-w-[1410px] left-1/2 -translate-x-1/2 -top-10"
        src="/grid-principal.svg"
        alt="Logo de WebMinds"
        width={1410}
        height={750}
      />
    </div>
  )
}
