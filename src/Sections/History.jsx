import { useRef, useEffect } from "react";
import { titleUnderlineAnimation } from "../animation/titleUnderline";

import logoOutline from "../assets/Logo outline top.png";

export const History = () => {
  const titleElem = useRef(null);
  const underline = useRef(null);

  useEffect(() => {
    titleUnderlineAnimation(titleElem.current, underline.current);
  }, []);

  return (
    <div
      id="history"
      className="flex flex-col items-center justify-center px-10 relative bg-[#145B19] w-screen min-h-screen h-fit px-[1rem] py-[2rem]"
    >
      <div className="relative">
        <img
          src={logoOutline}
          alt="Logo outline"
          className="h-auto md:block md:w-[500px] md:h-[150px] lg:w-[700px] lg:h-[180px] xl:w-[1000px] xl:h-[250px] mx-auto mt-10"
        />
        <div
          ref={titleElem}
          className="relativ w-fit mx-auto"
        >
          <h2 className="text-white w-fit text-[2rem] uppercase text-center font-bold decoration-1">
            Our history
          </h2>
          <div ref={underline} className="w-full bg-white h-[2px]"></div>
        </div>
      </div>
      <div className="w-[80%] md:w-[450px] lg:w-[650px] xl:w-[800px]">
        <p className="text-white text-2xl mt-16 mb-20">
          Welcome to our painting company, where creativity meets craftsmanship.
          With a passion for painting, we bring your visions to life,
          transforming spaces one brushstroke at a time. From residential to
          commercial projects, we take pride in our exceptional artistry and
          unwavering attention to detail.
        </p>
      </div>
      <div className="bg-[#B98C59] w-[90%] h-[2px] md:w-[500px] md:h-[5px] lg:w-[700px] xl:w-[1000px] xl:h-[8px] xl:mt-10"></div>
    </div>
  );
};
