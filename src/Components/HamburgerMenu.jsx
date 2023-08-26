import { useState } from "react";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:block md:hidden">
      <button
        type="button"
        className="z-10 space-y-2 absolute top-[16px] right-[16px]"
        onClick={handleClick}
      >
        <div
          className={
            isOpen
              ? "w-6 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
              : "w-6 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
          }
        />
        <div
          className={
            isOpen
              ? "opacity-0 transition duration-500 ease-in-out"
              : "w-6 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
          }
        />
        <div
          className={
            isOpen
              ? "w-6 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out"
              : "w-6 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
          }
        />
      </button>
      <nav
        className={
          isOpen
            ? "fixed right-0 top-[50px] w-[100%] h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300"
            : "fixed top-[50px] right-[-100%] pt-8 px-3 ease-linear duration-300"
        }
      >
        {/* <div className={`transition-all ${isOpen? "animate-slide-in": "animate-slide-out"}`}> */}
        <ul className="flex flex-col gap-10">
          <li className="">
            <a href="#" className="text-[#333] border-b-2 boder-[#333]">
              Services
            </a>
          </li>
          <li className="">
            <a href="#" className="text-[#333] border-b-2 boder-[#333]">
              Gallery
            </a>
          </li>
          <li className="">
            <a href="#" className="text-[#333] border-b-2 boder-[#333]">
              About us
            </a>
          </li>
          <li className="">
            <a href="#" className="text-[#333] border-b-2 boder-[#333]">
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
