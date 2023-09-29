import { Navbar } from "./Components/Navbar";
import { HamburgerMenu } from "./Components/HamburgerMenu";
import { Hero } from "./Sections/Hero";
import { Services } from "./Sections/Services";
import { Protections } from "./Sections/Protections";
import { Gallery } from "./Sections/Gallery";
import { Testimonials } from "./Sections/Testimonials";
import { AboutUs } from "./Sections/AboutUs";
import { History } from "./Sections/History";
import { Faq } from "./Sections/Faq";
import { Contact } from "./Sections/Contact";
import { useState } from "react";
import { ContactModal } from "./Modals/ContactModal";

export const Lp = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

  return (
    <>
      <HamburgerMenu />
      <Navbar setIsContactModalOpen={setIsContactModalOpen} />
      <Hero setIsContactModalOpen={setIsContactModalOpen} />
      <Services />
      <Protections />
      <Gallery />
      <Testimonials />
      <AboutUs />
      <History />
      <Faq />
      <Contact setIsContactModalOpen={setIsContactModalOpen} />

      {isContactModalOpen && <ContactModal setIsContactModalOpen={setIsContactModalOpen} />}
    </>
  );
};
