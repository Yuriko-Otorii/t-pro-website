import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

import { testimonials } from '../Data/testimonials'
import { TestimonialCard } from '../Components/TestimonialCard'

export const Testimonials = () => {
  return (
    <div className="w-full p-[1rem]" id='testimonials'>
      <h2 className="text-[#145B19] text-[2rem] uppercase text-center font-bold underline underline-offset-4 decoration-1 my-[2rem] md:mb-[4rem]">
        Testimonials
      </h2>
      <div className="flex flex-col">
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
