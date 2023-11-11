import { useRef, useEffect } from "react";
import { titleUnderlineAnimation } from "../animation/titleUnderline";

export const Contact = ({ setIsContactModalOpen }) => {
  const titleElem = useRef(null);
  const underline = useRef(null);

  useEffect(() => {
    titleUnderlineAnimation(titleElem.current, underline.current);
  }, []);

  return (
    <div className="w-screen bg-[#145B19] pt-8 pb-5">
      <div className="flex flex-col items-center">
        <div
          ref={titleElem}
          className="relativ w-fit mx-auto mb-3"
        >
          <h2 className="text-white w-fit text-[2rem] uppercase text-center font-bold decoration-1">
            Contact us
          </h2>
          <div ref={underline} className="w-full bg-white h-[2px]"></div>
        </div>
        <p className="text-xl text-white mt-2 mx-5">Are you intersted in our service? <span className="block md:inline">Ask away any details from here.</span></p>
        <button 
          className="text-[#145B19] text-2xl py-[.3rem] bg-white font-bold my-8 hover:text-white hober:border hover:border-white hover:bg-transparent transition duration-[500ms]"
          onClick={() => setIsContactModalOpen(true)}
        >
          Go to contact form
        </button>
      </div>
    </div>
  );
};
