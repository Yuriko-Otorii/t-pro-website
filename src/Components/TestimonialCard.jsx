export const TestimonialCard = ({ testimonialInfo }) => {
  return (
    <div className="w-[260px] py-[1rem] bg-white border border-gray-200 rounded-lg shadow mx-auto relative">
      <p className="px-[1rem] text-lg">{testimonialInfo.description}</p>
      <div className="border border-gary-200 mt-[2rem] mb-[.5rem]"></div>
      <p className="px-[1rem] font-bold">{testimonialInfo.name}</p>
      <p className="mb-[1rem] px-[1rem]">{testimonialInfo.address}</p>
      <img
        src={testimonialInfo.img}
        alt="portrait image"
        className="w-[4rem] h-[4rem] rounded-full object-cover absolute bottom-[20%] right-[5%]"
      />
    </div>
  );
};
