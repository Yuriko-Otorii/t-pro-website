import { useRef, useEffect } from "react"
import { ServiceCard } from "../Components/serviceCard"
import { services } from "../Data/services"
import { titleUnderlineAnimation } from "../animation/titleUnderline"

export const Services = () => {
  const titleElem = useRef(null)
  const underline = useRef(null)

  useEffect(() => {
    titleUnderlineAnimation(titleElem.current, underline.current)
  }, [])

  return (
    <div id="services">
      <div ref={titleElem} className="relativ w-fit mx-auto my-[1rem] md:mt-[5rem] md:mb-[4rem]">
        <h2 className="text-[#145B19] w-fit text-[2rem] uppercase text-center font-bold decoration-1">Services</h2>
        <div ref={underline} className="w-full bg-[#145B19] h-[2px]"></div>
      </div>
      <div className="w-full my-[1.2rem] px-[1rem] flex flex-col items-center gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 xl:w-[80%] mx-auto">
        {services.map(service => (
          <ServiceCard key={service.id} serviceInfo={service} />
        ))}
      </div>
    </div>
  )
}

