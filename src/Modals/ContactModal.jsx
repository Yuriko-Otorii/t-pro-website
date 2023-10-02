import { useState } from "react";
import { ContactForm } from "../Forms/ContactForm";
import contactImg from "../assets/paint img.jpg";
import { useEffect } from "react";

export const ContactModal = ({ setIsContactModalOpen }) => {
  const [isSentMessage, setIsSentMessage] = useState(false);

  useEffect(() => {
    if(isSentMessage){
      setTimeout(() => {
        setIsSentMessage(false)
        setIsContactModalOpen(false)
      }, 3000)
    }
  } ,[isSentMessage])

  return (
    <div className="flex justify-center items-center py-5 h-screen fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="overlay absolute inset-0 z-0 bg-gray-400 opacity-80"></div>
      {!isSentMessage &&(
        <div className="p-5 md:px-8 border-0 rounded-lg shadow-lg relative flex flex-col items-center justify-between w-[95%] h-[90%] md:w-[95%] md:max-w-[900px] md:h-full md:max-h-[580px] bg-white outline-none focus:outline-none">
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
              <ContactForm setIsSentMessage={setIsSentMessage} />
            </div>
          </div>
        </div>
      )}
      {isSentMessage && (
        <div
          id="toast-simple"
          className="flex items-center justify-center w-[95%] h-[40%] md:w-[500px] md:h-[300px] p-4 space-x-4 z-20 bg-white divide-x divide-gray-200 rounded-lg shadow space-x"
          role="alert"
        >
          <svg
            className="w-16 h-16 md:w-20 md:h-20 ml-2 text-blue-600 dark:text-blue-500 rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
            />
          </svg>
          <div className="pl-4 text-3xl">Your request sent successfully. Thank you for considering our service.</div>
        </div>
      )}
    </div>
  );
};
