import { useState } from "react";
import { ContactForm } from "../Forms/ContactForm";
import contactImg from "../assets/paint img.jpg";

export const ContactModal = ({
  isContactModalOpen,
  setIsContactModalOpen,
  isSentMessage,
  setIsSentMessage,
}) => {
  const [isError, setIsError] = useState(false);

  return (
    <div className="flex justify-center items-center py-5 h-screen fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="overlay absolute inset-0 z-0 bg-gray-400 opacity-80"></div>
      <div
        className={`p-5 md:px-8 border-0 rounded-lg shadow-lg relative flex flex-col items-center justify-between w-[95%] h-[90%] md:w-[95%] md:max-w-[900px] md:h-full md:max-h-[580px] bg-white outline-none focus:outline-none ${
          isContactModalOpen && "animate-slide-in"
        } ${isSentMessage ? "opacity-0" : "opacity-1"}`}
      >
        <div
          onClick={() => setIsContactModalOpen(false)}
          className="flex justify-end absolute top-[3%] md:top-[5%] right-[5%] z-30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:w-7 md:h-7 translate rounded-full hover:bg-gray-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <img
          src={contactImg}
          alt="Contact image"
          className="hidden md:block w-[55%] h-full rounded-lg absolute top-0 left-[-5%] z-0 bg-gradient-to-r from-transparent to-white"
        />
        <div className="hidden md:block w-[55%] h-full rounded-lg absolute top-0 left-0 bg-gradient-to-r from-transparent to-white"></div>

        <div className="flex w-full overflow-y-scroll z-20">
          <div className="hidden md:block w-[55%] h-full"></div>
          <div className="flex flex-col">
            <h2 className="text-[1.5rem] uppercase text-center font-bold underline underline-offset-4 decoration-1 mb-3">
              Contact us
            </h2>
            <ContactForm
              setIsSentMessage={setIsSentMessage}
              setIsError={setIsError}
            />
          </div>
        </div>
      </div>
      <div
        id="toast-simple"
        className={`absolute left-[50%] translate-x-[-50%] z-50 mx-auto bg-red-100 w-fit whitespace-nowrap flex items-center justify-center w-fit h-fit p-4 space-x-4 z-20 divide-x divide-gray-200 rounded-lg shadow space-x ease-linear duration-[300ms] ${
          isError ? "top-[3%]" : "top-[-100px]"
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
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <div className="md:pl-2 text-lg font-bold">
          Something went wrong. Please try again.
        </div>
      </div>
    </div>
  );
};
