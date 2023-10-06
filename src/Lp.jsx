import { useState, useEffect } from "react";

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
import { ContactModal } from "./Modals/ContactModal";
import { Footer } from "./Sections/Footer";
import { CareerModal } from "./Modals/CareerModal";

export const Lp = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
  const [isSentMessage, setIsSentMessage] = useState(false);

  useEffect(() => {
    if (isSentMessage) {
      setIsContactModalOpen(false)
      setTimeout(() => {
        setIsSentMessage(false);
      }, 3000);
    }
  }, [isSentMessage]);

  return (
    <>
      <HamburgerMenu />
      <Navbar setIsContactModalOpen={setIsContactModalOpen} />
      <main>
        <Hero setIsContactModalOpen={setIsContactModalOpen} />
        <Services />
        <Protections />
        <Gallery />
        <Testimonials />
        <AboutUs />
        <History />
        <Faq />
        <Contact setIsContactModalOpen={setIsContactModalOpen} />
        <Footer setIsCareerModalOpen={setIsCareerModalOpen} />

        {isContactModalOpen && (
          <ContactModal
            setIsContactModalOpen={setIsContactModalOpen}
            isContactModalOpen={isContactModalOpen}
            isSentMessage={isSentMessage}
            setIsSentMessage={setIsSentMessage}
          />
        )}
        {isCareerModalOpen && (
          <CareerModal
            setIsCareerModalOpen={setIsCareerModalOpen}
            isCareerModalOpen={isCareerModalOpen}
          />
        )}
        <div
          id="toast-simple"
          className={`absolute left-[50%] translate-x-[-50%] z-50 flex flex-col items-center justify-center w-[90%] h-[40%] md:w-[600px] md:h-[300px] h-fit p-4 space-x-4 z-20 bg-white divide-x divide-gray-200 rounded-lg shadow space-x ease-linear duration-[300ms] ${
            isSentMessage ? "top-[10%]" : "top-[-500px]"
          }`}
          role="alert"
        >
          <svg
            className="w-12 h-12 md:w-20 md:h-20 md:ml-2 text-blue-600 dark:text-blue-500 rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
            />
          </svg>
          <div className="md:pl-4 text-2xl md:text-3xl mt-10 md'mt-0">
            Your request sent successfully. Thank you for considering our
            service.
          </div>
        </div>
      </main>
    </>
  );
};
