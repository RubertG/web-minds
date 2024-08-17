import Link from "next/link"

interface Props {
  item: {
    name: string
    href: string
  }
}

export const NavItem = ({
  item: { name, href }
}: Props) => {
  return (
    <Link
      href={href}
      className="block py-2 px-3 lg:py-0 lg:px-0 w-full border-b lg:border-none border-bg-200 lg:hover:text-principal lg:transition-colors">
      {name}
    </Link>
  )
}
