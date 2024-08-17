export const ServiceItem = ({
  item
}: {
  item: string
}) => {
  return (
    <li className="text-text-200 bg-bg-card/10 backdrop-blur-[2px] text-sm py-2.5 px-5 border border-bg-300 rounded-lg lg:text-base">
      {item}
    </li>
  )
}
