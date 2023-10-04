import { useRef, useEffect } from "react"
import { titleUnderlineAnimation } from "../animation/titleUnderline"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

import { testimonials } from '../Data/testimonials'
import { TestimonialCard } from '../Components/TestimonialCard'

export const Testimonials = () => {
  const titleElem = useRef(null)
  const underline = useRef(null)

  useEffect(() => {
    titleUnderlineAnimation(titleElem.current, underline.current)
  }, [])

  return (
    <div className="w-full p-[1rem]" id='testimonials'>
      <div ref={titleElem} className="relativ w-fit mx-auto my-[1rem] my-[2rem] md:mb-[4rem]">
        <h2 className="text-[#145B19] w-fit text-[2rem] uppercase text-center font-bold decoration-1">Testimonials</h2>
        <div ref={underline} className="w-full bg-[#145B19] h-[2px]"></div>
      </div>
      <div className="flex flex-col xl:w-[80%] mx-auto">
        <FontAwesomeIcon icon={faQuoteLeft} style={{color: "#b5b5b5", alignSelf: "start"}} size='4x'/>
        <div className='flex flex-col md:flex-row gap-[1rem] my-[2rem] md:w-[90%] lg:w-[80%] mx-auto'>
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonialInfo={testimonial} />
          ))}
        </div>
        <FontAwesomeIcon icon={faQuoteRight} style={{color: "#b5b5b5", alignSelf: "end"}} size='4x'/>
      </div>
    </div>
  )
}
