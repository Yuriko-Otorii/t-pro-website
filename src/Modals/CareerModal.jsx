import { CareerForm } from "../Forms/CareerForm"

export const CareerModal = ({ setIsCareerModalOpen }) => {
  return (
    <div className="flex justify-center items-center py-5 h-screen fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="overlay absolute inset-0 z-0 bg-gray-400 opacity-80"></div>
      <div className="p-5 md:px-8 border-0 rounded-lg shadow-lg relative flex flex-col items-center justify-between w-4/5 md:w-[60%] h-fit max-h-[90%] overflow-y-scroll bg-white outline-none focus:outline-none">
        <div
          onClick={() => setIsCareerModalOpen(false)}
          className="flex justify-end absolute top-[3%] md:top-[5%] right-[5%]"
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
        <h2 className="text-[1.5rem] uppercase text-center font-bold underline underline-offset-4 decoration-1 mb-5">
          Work with us
        </h2>
        <CareerForm />
      </div>
    </div>
  )
}
