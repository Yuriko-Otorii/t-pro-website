import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const heroAnimation = (textElem, btnElem) => {
  gsap.fromTo(
    textElem.current,
    {
      y: 0,
      opacity: 0,
      ease: 'power2.out',
    },
    {
      duration: 1.7,
      y: 15,
      opacity: 1,
      ease: 'power2.out',
    },
    1
  )

  gsap.fromTo(
    btnElem.current,
    {
      y: 0,
      opacity: 0,
      ease: 'power2.out',
    },
    {
      duration: 1.3,
      y: 15,
      opacity: 1,
      ease: 'power2.out',
    },
    2
  )
};
