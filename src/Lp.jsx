import { Navbar } from "./Components/Navbar"
import { HamburgerMenu } from "./Components/HamburgerMenu"
import { Hero } from "./Sections/Hero"
import { Services } from "./Sections/Services"
import { Protections } from "./Sections/Protections"
import { Gallery } from "./Sections/Gallery"
import { Testimonials } from "./Sections/Testimonials"

export const Lp = () => {
  return (
    <>
      <HamburgerMenu />
      <Navbar />
      <Hero />
      <Services />
      <Protections />
      <Gallery />
      <Testimonials />
    </>
  )
}

