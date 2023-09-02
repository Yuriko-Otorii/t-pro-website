import smallHeroImg from "../assets/work image5.jpg";
import mediumHeroImg from "../assets/work image9.jpg";

export const Hero = () => {
  const displayContactPopup = () => {};

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
          <h1 className="text-white text-center text-[2rem] px-[1rem]">
            Transform your property by professional painters in Vancouver
          </h1>
          <button
            onClick={displayContactPopup}
            className="text-white text-center text-[1.5rem] py-[.5rem] font-bold bg-transparent border-2 border-white"
          >
            Request Estimate
          </button>
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
          <h1 className="text-white text-center text-[2.5rem] px-[1rem]">
            Transform your property by professional painters in Vancouver
          </h1>
          <button
            onClick={displayContactPopup}
            className="text-white text-center text-[1.5rem] py-[.5rem] font-bold bg-transparent border-2 border-white"
          >
            Request Estimate
          </button>
        </div>
      </div>
    </>
  );
};
