export const Contact = ({ setIsContactModalOpen }) => {
  return (
    <div className="w-screen bg-[#145B19] pt-8 pb-5">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-[2rem] uppercase text-center font-bold underline underline-offset-4 decoration-1">
          Contact us
        </h2>
        <p className="text-white mt-2 mx-5">Are you intersted in our service? <span className="block md:inline">Ask away any details from here.</span></p>
        <button 
          className="text-[#145B19] text-[1.2rem] py-[.3rem] bg-white font-bold my-8 hover:text-white hober:border hover:border-white hover:bg-transparent transition duration-[500ms]"
          onClick={() => setIsContactModalOpen(true)}
        >
          Go to contact form
        </button>
      </div>
    </div>
  );
};
