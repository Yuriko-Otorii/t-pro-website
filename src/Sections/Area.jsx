import { useRef, useEffect } from 'react'
import { titleUnderlineAnimation } from '../animation/titleUnderline'

export const Area = () => {
  const mobilTitleElem = useRef(null)
  const mobileUnderline = useRef(null)
  const mdTitleElem = useRef(null)
  const mdUnderline = useRef(null)

  useEffect(() => {
    titleUnderlineAnimation(mdTitleElem.current, mdUnderline.current)
    titleUnderlineAnimation(mobilTitleElem.current, mobileUnderline.current)
  }, [])

  return (
    <div
      className="w-full lg:w-2/3 mx-auto p-[1rem] mb-[3rem] md:my-[5rem]"
      id="area"
    >
      <div
        ref={mdTitleElem}
        className="relativ w-fit mx-auto my-[1rem] my-[2rem] md:mb-[4rem]"
      >
        <h2 className="text-[#145B19] w-fit text-[2rem] uppercase text-center font-bold decoration-1">
          Service area
        </h2>
        <div ref={mdUnderline} className="w-full bg-[#145B19] h-[2px]"></div>
      </div>
      <div className="flex flex-col justify-center md:gap-5 lg:justify-around md:flex-row items-center w-full">
        <div className="md:self-start lg:mt-10 md:w-[400px]">
          <h3 className="text-2xl text-center font-bold mb-6 mt-5">
            Areas we provide our services
          </h3>
          <div className="flex justify-center gap-10">
            <ul className="flex flex-col gap-3">
              <li className="text-xl">Vancouver</li>
              <li className="text-xl">Burnaby</li>
              <li className="text-xl">New Westminster</li>
              <li className="text-xl">Richmond</li>
              <li className="text-xl">Coquitlam</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="text-xl">North Vancouver</li>
              <li className="text-xl">West Vancouver</li>
              <li className="text-xl">Surrey</li>
              <li className="text-xl">South Surrey</li>
            </ul>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41601.010608932695!2d-123.04859413158638!3d49.33202295228478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5462ce9005f9dfa5%3A0xce9c6c979ef4fca6!2z44OW44Oq44OG44Kj44OD44K344Ol44Kz44Ot44Oz44OT44Ki5beeIOOCsOODrOODvOOCv-ODvOODu-ODkOODs-OCr-ODvOODkOODvA!5e0!3m2!1sja!2sca!4v1699661925792!5m2!1sja!2sca"
          className="m-6 w-[300px] md:w-[350px] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
