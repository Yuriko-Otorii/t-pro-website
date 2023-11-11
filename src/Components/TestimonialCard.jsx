export const TestimonialCard = ({ testimonialInfo }) => {
  return (
    <div className="w-[260px] py-[1rem] bg-white border border-gray-200 rounded-lg shadow mx-auto relative">
      <p className="px-[1.2rem] text-2xl">{testimonialInfo.description}</p>
      <div className="border border-gary-200 mt-[2rem] mb-[.5rem]"></div>
      <p className="px-[1rem] font-bold text-xl">{testimonialInfo.name}</p>
      <p className="mb-[1rem] px-[1rem] text-xl">{testimonialInfo.address}</p>
      <img
        src={testimonialInfo.img}
        alt="portrait image"
        className="w-[4rem] h-[4rem] rounded-full object-cover absolute bottom-[20%] right-[5%]"
      />
    </div>
  );
};
