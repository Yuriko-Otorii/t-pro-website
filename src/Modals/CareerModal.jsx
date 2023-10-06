import careerImg from "../assets/career-img.jpg";

export const CareerModal = ({ isCareerModalOpen, setIsCareerModalOpen }) => {
  return (
    <div className="flex justify-center items-center py-5 h-screen fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="overlay absolute inset-0 z-0 bg-gray-400 opacity-80"></div>
      <div className={`p-5 md:px-8 border-0 rounded-lg shadow-lg relative w-[95%] h-fit md:w-[95%] md:max-w-[700px] md:h-full md:max-h-[500px] overflow-y-scroll bg-white outline-none focus:outline-none ${isCareerModalOpen && 'animate-slide-in'}`}>
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
          <div className="flex justify-center mt-20 mb-10">
            <a
              href="mailto:yuriko.otorii@gmail.com"
              className="text-white text-[1.2rem] py-[.5rem] px-[2rem] rounded-lg bg-[#145B19] font-bold hover:text-[#145B19] hover:bg-white hover:border hover:border-[#145B19] transition duration-[500ms]"
            >
              Open your mailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
