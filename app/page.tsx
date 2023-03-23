import HeroSection from "@/components/HeroSection"
import Nosotras from "@/components/Nosotras"
import Productos from "@/components/Productos"
import Recetas from "@/components/Recetas"
import Contacto from "@/components/Contacto"
export default function Home() {
  return (
    <main className = "bg-scroll bg-my_bg_image bg-local bg-cover bg-center">
    <HeroSection/>
    <Nosotras/>
    <Productos/>
    <Recetas/>
    <Contacto/>
    </main>
  )
}
