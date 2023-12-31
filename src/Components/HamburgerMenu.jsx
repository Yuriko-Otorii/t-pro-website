import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:block md:hidden">
      <button
        type="button"
        className="z-50 space-y-2 absolute top-[16px] right-[8px]"
        onClick={handleClick}
      >
        <div
          className={
            isOpen
              ? "w-6 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
              : "w-6 h-0.5 bg-white transition duration-500 ease-in-out"
          }
        />
        <div
          className={
            isOpen
              ? "opacity-0 transition duration-500 ease-in-out"
              : "w-6 h-0.5 bg-white transition duration-500 ease-in-out"
          }
        />
        <div
          className={
            isOpen
              ? "w-6 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out"
              : "w-6 h-0.5 bg-white transition duration-500 ease-in-out"
          }
        />
      </button>
      <nav
        className={
          isOpen
            ? "fixed right-0 top-0 w-[100%] h-screen z-40 bg-white h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300"
            : "fixed top-0 right-[-100%] h-screen z-40 bg-white pt-8 px-3 ease-linear duration-300"
        }
      >
        <ul className="flex flex-col items-center gap-10 pt-10 text-[1.3rem]">
          <li onClick={() => setIsOpen(false)}>
            <AnchorLink href="#services" className="text-[#333] border-b-2 boder-[#333] font-bold">
              Services
            </AnchorLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <AnchorLink href="#protections" className="text-[#333] border-b-2 boder-[#333] font-bold">
              Protections
            </AnchorLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <AnchorLink href="#gallery" className="text-[#333] border-b-2 boder-[#333] font-bold">
              Gallery
            </AnchorLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <AnchorLink href="#aboutus" className="text-[#333] border-b-2 boder-[#333] font-bold">
              About us
            </AnchorLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <AnchorLink href="#faq" className="text-[#333] border-b-2 boder-[#333] font-bold">
              FAQ
            </AnchorLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
