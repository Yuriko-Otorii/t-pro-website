import { useRef, useEffect } from "react";
import { titleUnderlineAnimation } from "../animation/titleUnderline";

import housePicture from "../assets/work image9.jpg";

export const AboutUs = () => {
  const mobilTitleElem = useRef(null);
  const mobileUnderline = useRef(null);
  const mdTitleElem = useRef(null);
  const mdUnderline = useRef(null);

  useEffect(() => {
    titleUnderlineAnimation(mdTitleElem.current, mdUnderline.current);
    titleUnderlineAnimation(mobilTitleElem.current, mobileUnderline.current);
  }, []);

  return (
    <div className="w-full p-[1rem] mb-[3rem] md:my-[5rem]" id="aboutus">
      <div className="md:hidden">
        <div
          ref={mdTitleElem}
          className="relativ w-fit mx-auto my-[1rem] my-[2rem] md:mb-[4rem]"
        >
          <h2 className="text-[#145B19] w-fit text-[2rem] uppercase text-center font-bold decoration-1">
            About us
          </h2>
          <div ref={mdUnderline} className="w-full bg-[#145B19] h-[2px]"></div>
        </div>
        <img
          src={housePicture}
          alt="House picture"
          className="w-full h-auto mx-auto mb-[2rem]"
        />
        <p className="font-bold text-center text-[1.3rem]">Quality first</p>
        <p className="m-[1rem] text-xl">
          We, T-Pro Painting, are the professional painters in Vancouver. From residential to
          commercial property, we transform your property into bland new design.
        </p>
      </div>
      <div className="hidden md:flex flex items-start gap-[.5rem] mx-auto md:w-[100%] lg:w-[80%] xl:w-[60%]">
        <div className="relative flex-1">
          <img
            src={housePicture}
            alt="House picture"
            className="w-[300px] h-[300px] md:w-[330px] md:h-[330px] mx-auto"
          />
          <div className="w-[300px] h-[300px] md:w-[330px] md:h-[330px] bg-[#145B19] absolute top-[-5%] left-[5%] -z-10"></div>
        </div>
        <div className="flex-1">
          <div
            ref={mobilTitleElem}
            className="relativ w-fit mx-auto my-[1rem] my-[2rem] md:mb-[4rem]"
          >
            <h2 className="text-[#145B19] w-fit text-[2rem] uppercase text-center font-bold decoration-1">
              About us
            </h2>
            <div ref={mobileUnderline} className="w-full bg-[#145B19] h-[2px]"></div>
          </div>
          <p className="mx-[1rem] text-xl">
            We, T-Pro Painting, are the professional painters in Vancouver. From residential to
            commercial property, we transform your property into bland new
            design. 
          </p>
        </div>
      </div>
    </div>
  );
};
