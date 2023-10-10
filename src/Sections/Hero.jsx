import { useRef } from "react";
import smallHeroImg from "../assets/work image5.jpg";
import mediumHeroImg from "../assets/work image9.jpg";
import { useEffect } from "react";
import { heroAnimation } from "../animation/hero";

export const Hero = ({ setIsContactModalOpen }) => {
  const textElem = useRef()
  const btnElem = useRef()
  const mobileTextElem = useRef()
  const mobileBtnElem = useRef()

  useEffect(() => {
    heroAnimation(textElem, btnElem)
    heroAnimation(mobileTextElem, mobileBtnElem)
  }, [])

  return (
    <>
      <div className="relative w-screen h-screen md:hidden">
        <img
          src={smallHeroImg}
          alt="House image"
          className="w-screen h-screen absolute object-cover object-center"
        />
        <div className="w-screen h-screen absolute z-10 bg-gradient-to-t from-gray-900"></div>
        <div className="flex flex-col items-center gap-8 absolute bottom-[10%] z-10">
          <h1 ref={mobileTextElem} className="text-white text-center text-[2rem] px-[1rem]">
            Transform your property by professional painters in Vancouver
          </h1>
          <div ref={mobileBtnElem}>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-white text-center text-[1.5rem] py-[.5rem] font-bold bg-transparent border-2 border-white"
            >
              Request Estimate
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[calc(100vh-24px)] mt-[24px] hidden md:block">
        <img
          src={mediumHeroImg}
          alt="House image"
          className="w-full h-[calc(100vh-24px)] mt-[24px]  object-center"
        />
        <div className="w-full h-[calc(100vh-24px)] mt-[24px] absolute top-0 left-0 z-10 bg-gradient-to-t from-gray-900"></div>
        <div className="flex flex-col items-center gap-8 absolute bottom-[10%] left-[50%] translate-x-[-50%] z-10">
          <h1 ref={textElem} className="text-white text-center text-[2.5rem] px-[1rem]">
            Transform your property by professional painters in Vancouver
          </h1>
          <div ref={btnElem}>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-white text-center text-[1.5rem] py-[.5rem] font-bold bg-transparent border-2 border-white hover:text-[#145B19] hover:bg-white transition duration-[500ms]"
            >
              Request Estimate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
