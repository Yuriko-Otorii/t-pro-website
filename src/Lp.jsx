import { Navbar } from "./Components/Navbar"
import { HamburgerMenu } from "./Components/HamburgerMenu"
import { Hero } from "./Sections/Hero"
import { Services } from "./Sections/Services"



export const Lp = () => {
  return (
    <>
      <HamburgerMenu />
      <Navbar />
      <Hero />
      <Services />
    </>
  )
}

