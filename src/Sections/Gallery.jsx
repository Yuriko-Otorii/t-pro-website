import { useRef, useEffect } from "react"
import { titleUnderlineAnimation } from "../animation/titleUnderline"

import Gallery1 from "../assets/work image14.jpg";
import Gallery2 from "../assets/work image11.jpg";
import Gallery3 from "../assets/work image1.jpg";
import Gallery4 from "../assets/work image6.jpg";
import Gallery5 from "../assets/work image9.jpg";
import Gallery6 from "../assets/work image7.jpg";
import { galleryAnimation } from "../animation/gallery";

export const Gallery = () => {
  const titleElem = useRef(null)
  const underline = useRef(null)
  const img1 = useRef(null)
  const img2 = useRef(null)
  const img3 = useRef(null)
  const img4 = useRef(null)
  const img5 = useRef(null)
  const img6 = useRef(null)

  useEffect(() => {
    titleUnderlineAnimation(titleElem.current, underline.current)
    galleryAnimation(img1, img2, img3, img4, img5, img6)
  }, [])

  return (
    <div className="w-full p-[1rem]" id="gallery">
      <div ref={titleElem} className="relativ w-fit mx-auto my-[1rem] my-[2rem] md:mb-[4rem]">
        <h2 className="text-[#145B19] w-fit text-[2rem] uppercase text-center font-bold decoration-1">Gallery</h2>
        <div ref={underline} className="w-full bg-[#145B19] h-[2px]"></div>
      </div>
      <div className="md:w-[80%] lg:w-[60%] max-w-[850px]  md:h-[1000px] lg:h-[1300px] mx-auto grid grid-cols-2 grid-rows-4 gap-[.5rem]">
        <img
          ref={img1}
          src={Gallery1}
          alt="Gallery image1"
          className="w-full h-full col-start-1 col-end-2 row-start-1 row-end-3"
        />
        <img
          ref={img2}
          src={Gallery2}
          alt="Gallery image2"
          className="w-full h-full col-start-2 col-end-3 row-start-1 row-end-2"
        />
        <img
          ref={img3}
          src={Gallery3}
          alt="Gallery image3"
          className="w-full h-full col-start-2 col-end-3 row-start-2 row-end-3"
        />
        <img
          ref={img4}
          src={Gallery4}
          alt="Gallery image4"
          className="w-full h-full col-start-1 col-end-2 row-start-3 row-end-4"
        />
        <img
          ref={img5}
          src={Gallery5}
          alt="Gallery image5"
          className="w-full h-full col-start-1 col-end-2 row-start-4 row-end-5"
        />
        <img
          ref={img6}
          src={Gallery6}
          alt="Gallery image6"
          className="object-cover w-full h-full col-start-2 col-end-3 row-start-3 row-end-5"
        />
      </div>
    </div>
  );
};
