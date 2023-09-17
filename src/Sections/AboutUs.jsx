import housePicture from "../assets/work image9.jpg";

export const AboutUs = () => {
  return (
    <div className="w-full p-[1rem] mb-[3rem] md:my-[5rem]">
      <div className="md:hidden">
        <h2 className="text-[#145B19] text-[2rem] uppercase text-center font-bold underline underline-offset-4 decoration-1 my-[2rem] md:mb-[4rem]">
          About us
        </h2>
        <img
            src={housePicture}
            alt="House picture"
            className="w-full h-auto mx-auto mb-[2rem]"
          />
        <p className="font-bold text-center text-[1.3rem]">
          Quality first
        </p>
        <p className="m-[1rem]">
          We are the professional painters in Vancouver. From residential to
          commercial property, we transform your property into bland new
          design.
          </p>
      </div>
      <div className="flex items-start gap-[.5rem] mx-auto md:w-[100%] lg:w-[80%] xl:w-[60%] hidden md:flex">
        <div className="relative flex-1">
          <img
            src={housePicture}
            alt="House picture"
            className="w-[300px] h-[300px] mx-auto"
          />
          <div className="w-[300px] h-[300px] bg-[#145B19] absolute top-[-5%] left-[5%] -z-10"></div>
        </div>
        <div className="flex-1">
          <h2 className="text-[#145B19] text-[2rem] uppercase text-center font-bold underline underline-offset-4 decoration-1 mb-[2rem] md:mb-[4rem]">
            About us
          </h2>
          <p className="mx-[1rem]">
            We are the professional painters in Vancouver. From residential to
            commercial property, we transform your property into bland new
            design.
          </p>
        </div>
      </div>
    </div>
  );
};
