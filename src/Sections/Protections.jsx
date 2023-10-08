import { useRef, useEffect } from "react"
import { titleUnderlineAnimation } from "../animation/titleUnderline"
import HomeCareIcon from "../assets/home-insurance-icon.svg";
import GuaranteeIcon from "../assets/premium-icon.svg";
import InsuranceIcon from "../assets/trust-icon.svg";

export const Protections = () => {
  const titleElem = useRef(null)
  const underline = useRef(null)

  useEffect(() => {
    titleUnderlineAnimation(titleElem.current, underline.current)
  }, [])

  return (
    <div
      id="protections"
      className="border-2 border-y-[#145B19] border-x-white mt-[4rem] md:mt-[7rem] mb-[4rem] mx-[1rem] md:mx-[4rem] pt-[2rem] pb-[5rem]"
    >
      <div ref={titleElem} className="relativ w-fit mx-auto my-[1rem] mt-[3rem] mb-[5rem]">
        <h2 className="text-[#145B19] w-fit text-[2rem] uppercase text-center font-bold decoration-1">Protections</h2>
        <div ref={underline} className="w-full bg-[#145B19] h-[2px]"></div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-around md:items-start gap-10 md:gap-0">
        <div className="w-[90%] md:w-[25%] flex flex-col mb-5">
          <img
            src={HomeCareIcon}
            alt="Home care icon"
            className="w-[3rem] h-[3rem] self-center mb-5"
          />
          <h3 className="text-xl font-bold mb-[1rem]">
            Workers’ Compensation Board member
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </div>
        <div className="w-[90%] md:w-[25%] flex flex-col mb-5">
          <img
            src={GuaranteeIcon}
            alt="Home care icon"
            className="w-[3rem] h-[3rem] self-center mb-5"
          />
          <h3 className="text-xl font-bold mb-[1rem]">
            Liability Insurance ($5 million)
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </div>
        <div className="w-[90%] md:w-[25%] flex flex-col mb-5">
          <img
            src={InsuranceIcon}
            alt="Home care icon"
            className="w-[3rem] h-[3rem] self-center mb-5"
          />
          <h3 className="text-xl font-bold mb-[1rem]">
            3-year application guarantee
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </div>
      </div>
    </div>
  );
};
