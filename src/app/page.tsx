import { Header } from "@/components/home/header/header"
import { Services } from "@/components/home/services/services"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 overflow-hidden lg:overflow-visible xl:px-0">
      <Header />
      <Services className="-mt-40 md:mt-2 mb-24" />
    </main>
  )
}
