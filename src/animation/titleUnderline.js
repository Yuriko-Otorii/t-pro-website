import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const titleUnderlineAnimation = (titleElem, underlineElem) => {
  gsap.fromTo(
    underlineElem,
    {
      scaleX: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: titleElem,
        start: "top center",
      },
    },
    {
      scaleX: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: titleElem,
        start: "top center",
      },
    },
  )
};
