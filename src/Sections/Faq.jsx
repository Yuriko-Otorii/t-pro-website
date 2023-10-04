import { useRef, useEffect } from "react"
import { titleUnderlineAnimation } from "../animation/titleUnderline"

import { questions } from "../Data/questions";
import { FaqCollapse } from "../Components/FaqCollapse";

export const Faq = () => {
  const titleElem = useRef(null)
  const underline = useRef(null)

  useEffect(() => {
    titleUnderlineAnimation(titleElem.current, underline.current)
  }, [])

  return (
    <div className="w-full p-[1rem] mb-10" id="faq">
      <div ref={titleElem} className="relativ w-fit mx-auto my-[1rem] my-[2rem] md:mb-[4rem]">
        <h2 className="text-[#145B19] w-fit text-[2rem] uppercase text-center font-bold decoration-1">Faq</h2>
        <div ref={underline} className="w-full bg-[#145B19] h-[2px]"></div>
      </div>
      <div className="flex flex-col gap-5 rounded-t-lg bg-white">
        {questions &&
          questions.map((question) => (
            <FaqCollapse key={question.id} item={question}/>
            
          ))}
      </div>
    </div>
  );
};
