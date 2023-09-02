import HomeCareIcon from "../assets/home-insurance-icon.svg"
import GuaranteeIcon from "../assets/premium-icon.svg"
import InsuranceIcon from "../assets/trust-icon.svg"

export const Protections = () => {
  return (
    <div className="border-2 border-y-[#145B19] border-x-white mt-[4rem] md:mt-[7rem] mb-[4rem] mx-[1rem] md:mx-[4rem] md:pt-[2rem] md:pb-[5rem]">
      <h2 className="text-[#145B19] text-[2rem] uppercase text-center font-bold underline underline-offset-4 decoration-1 my-[2rem] md:mb-[4rem]">Protections</h2>
      <div className="flex flex-col items-center md:flex-row md:justify-around md:items-start gap-10 md:gap-0">
        <div className="w-[70%] md:w-[25%] flex flex-col mb-5">
          <img src={HomeCareIcon} alt="Home care icon" className="w-[3rem] h-[3rem] self-center mb-5" />
          <h3 className="text-[1.3rem] font-bold mb-[.5rem]">Workers’ Compensation Board member</h3>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        </div>
        <div className="w-[70%] md:w-[25%] flex flex-col mb-5">
          <img src={GuaranteeIcon} alt="Home care icon" className="w-[3rem] h-[3rem] self-center mb-5" />
          <h3 className="text-[1.3rem] font-bold mb-[.5rem]">Liability Insurance ($5 million)</h3>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        </div>
        <div className="w-[70%] md:w-[25%] flex flex-col mb-5">
          <img src={InsuranceIcon} alt="Home care icon" className="w-[3rem] h-[3rem] self-center mb-5" />
          <h3 className="text-[1.3rem] font-bold mb-[.5rem]">3-year application guarantee</h3>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        </div>
      </div>
    </div>
  )
}