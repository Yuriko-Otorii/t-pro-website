import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const scrollShowUpAnimation = (targetElem) => {
  gsap.fromTo(
    targetElem.current,
    {
      scrollTrigger: {
        trigger: targetElem.current,
        start: "top 70%",
      },
      duration: 1.5,
      y: 50, 
      opacity: 0,
      ease: "power2.out"
    },
    {
      scrollTrigger: {
        trigger: targetElem.current,
        start: "top 70%",
      },
      duration: 1.5,
      y: 0, 
      opacity: 1,
      ease: "power2.out"
    },
  )
};
