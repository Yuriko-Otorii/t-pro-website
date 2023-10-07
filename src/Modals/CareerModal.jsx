import { useState } from "react";
import careerImg from "../assets/career-img.jpg";

export const CareerModal = ({ isCareerModalOpen, setIsCareerModalOpen }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleEmailCopy = async () => {
    setIsCopied(true);
    await navigator.clipboard.writeText("tpropainting03@gmail.com");
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <div className="flex justify-center items-center py-5 h-screen fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="overlay absolute inset-0 z-0 bg-gray-400 opacity-80"></div>
      <div
        className={`p-5 md:px-8 border-0 rounded-lg shadow-lg relative w-[95%] h-fit md:w-[95%] md:max-w-[700px] md:h-full md:max-h-[500px] overflow-y-scroll bg-white outline-none focus:outline-none ${
          isCareerModalOpen && "animate-slide-in"
        }`}
      >
        <div
          onClick={() => setIsCareerModalOpen(false)}
          className="absolute top-[3%] md:top-[5%] right-[5%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 translate rounded-full hover:bg-gray-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <img
          src={careerImg}
          alt="Career image"
          className="hidden md:block w-[70%] h-full absolute top-0 left-0 bg-gradient-to-r from-transparent to-white"
        />
        <div className="hidden md:block w-[70%] h-full absolute top-0 left-0 z-40 bg-gradient-to-r from-transparent to-white"></div>

        <div className="md:absolute md:top-[15%] md:right-[3%] md:z-50">
          <h2 className="text-[1.5rem] uppercase text-center font-bold underline underline-offset-4 decoration-1 mb-5">
            Work with us
          </h2>
          <h3 className="text-center">
            Send your resume and let us know your passion!
          </h3>
          <div className="flex flex-col justify-center gap-6 mt-20 mb-10">
            <a
              href="mailto:yuriko.otorii@gmail.com"
              className="text-white text-[1.2rem] py-[.5rem] px-[2rem] mx-auto rounded-lg bg-[#145B19] font-bold hover:text-[#145B19] hover:bg-white hover:border hover:border-[#145B19] transition duration-[500ms]"
            >
              Open your mailer
            </a>
            <div
              onClick={handleEmailCopy}
              className="cursor-pointer flex gap-1 align-center mx-auto transition hover:translate-y-[-3px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                />
              </svg>
              <p>Copy email address</p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="toast-simple"
        className={`absolute left-[50%] translate-x-[-50%] z-50 mx-auto bg-green-100 w-fit whitespace-nowrap flex items-center justify-center w-fit h-fit p-4 space-x-4 z-20 divide-x divide-gray-200 rounded-lg shadow space-x ease-linear duration-[300ms] ${
          isCopied ? "top-[3%]" : "top-[-100px]"
        }`}
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <div className="md:pl-2 text-lg font-bold">Copied email address!</div>
      </div>
    </div>
  );
};
