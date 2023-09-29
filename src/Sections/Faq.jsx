import { questions } from "../Data/questions";
import { FaqCollapse } from "../Components/FaqCollapse";

export const Faq = () => {
  return (
    <div className="w-full p-[1rem] mb-10" id="faq">
      <h2 className="text-[#145B19] text-[2rem] uppercase text-center font-bold underline underline-offset-4 decoration-1 my-[2rem] md:mb-[4rem]">
        Faq
      </h2>
      <div className="flex flex-col gap-5 rounded-t-lg bg-white">
        {questions &&
          questions.map((question) => (
            <FaqCollapse key={question.id} item={question}/>
            
          ))}
      </div>
    </div>
  );
};
