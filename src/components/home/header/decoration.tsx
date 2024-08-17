import Image from "next/image"

export const Decoration = () => {
  return (
    <div className="relative -z-10 fade-in-opacity select-none">
      <Image
        className="absolute -translate-y-[50%] top-0 left-1/2 -translate-x-1/2 min-w-[600px] lg:min-w-[848px]"
        src="/decoration.svg"
        alt="Decoración"
        width={900}
        height={800} />
      <img
        className="absolute min-w-[1410px] md:min-w-[1000px] md:w-[400px] 2xl:min-w-[1410px] left-1/2 -translate-x-1/2 -top-10"
        src="/grid-principal.svg"
        alt="Decoración"
      />
    </div>
  )
}
