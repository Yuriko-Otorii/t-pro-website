import { ServiceCard } from "../Components/serviceCard"
import { services } from "../Data/services"

export const Services = () => {

  return (
    <div id="services">
      <h2 className="text-[#145B19] text-[2rem] uppercase text-center font-bold my-[1rem] underline underline-offset-4 decoration-1 md:mt-[5rem] md:mb-[4rem]">Services</h2>
      <div className="w-full my-[1.2rem] px-[1rem] flex flex-col items-center gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 xl:w-[80%] mx-auto">
        {services.map(service => (
          <ServiceCard key={service.id} serviceInfo={service} />
        ))}
      </div>
    </div>
  )
}

