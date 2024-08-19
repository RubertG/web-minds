import type { Metadata } from "next"
import "./globals.css"
import { baseUrl } from "@/utils/common/base-url"
import { poppins } from "@/fonts/poppins.font"
import { Nav } from "@/components/common/nav/nav"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "WebMinds Colombia - Creador de soluciones web",
  description: "WebMinds Colombia es una empresa de desarrollo digital especializada en la creación de soluciones web y aplicaciones personalizadas para empresas y emprendedores.",
  keywords: "webminds, colombia, creador de sitios web, desarrollo web, desarrollo",
  openGraph: {
    title: "WebMinds Colombia - Creador de soluciones web",
    description: "WebMinds Colombia es una empresa de desarrollo digital especializada en la creación de soluciones web y aplicaciones personalizadas para empresas y emprendedor.",
    url: new URL("/", baseUrl),
    siteName: "WebMinds Colombia",
    images: [
      {
        url: "/logo.svg"
      }
    ],
    locale: "es_CO",
    type: "website"
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={`${poppins.className} bg-bg-100 antialiased overflow-x-hidden max-w-screen`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
