import { Navbar } from "./Components/Navbar"
import { HamburgerMenu } from "./Components/HamburgerMenu"
import { Hero } from "./Sections/Hero"
import { Services } from "./Sections/Services"
import { Protections } from "./Sections/Protections"

export const Lp = () => {
  return (
    <>
      <HamburgerMenu />
      <Navbar />
      <Hero />
      <Services />
      <Protections />
    </>
  )
}

