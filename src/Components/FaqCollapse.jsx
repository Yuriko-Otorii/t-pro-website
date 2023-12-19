import { useState } from "react";
import { Transition } from "@headlessui/react";

export const FaqCollapse = ({item}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-[60%] lg:w-[40%] mx-auto">
      <button
        className={`w-full flex justify-between items-center px-4 py-2 rounded-none border border-[#145B19] focus:outline-none ${isOpen && 'border-b-transparent rounded-none'}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-bold text-xl text-left">{item.question}</p>
        {isOpen
          ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>

          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          )
        }
      </button>
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-100 ease-in"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div className="">
          <p className="px-4 py-2 text-xl border border-x-[#145B19] border-b-[#145B19]">{item.answer}</p>
        </div>
      </Transition>
    </div>
  );
};
