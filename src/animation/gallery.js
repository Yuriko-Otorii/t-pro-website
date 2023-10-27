import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const galleryAnimation = (img1, img2, img3, img4, img5, img6) => {
  gsap.fromTo(
    img1.current,
    {
      scrollTrigger: {
        trigger: img1.current,
        start: "top 70%",
      },
      duration: 1.5,
      y: 50, 
      opacity: 0,
      ease: "power2.out"
    },
    {
      scrollTrigger: {
        trigger: img1.current,
        start: "top 70%",
      },
      duration: 1.5,
      y: 0, 
      opacity: 1,
      ease: "power2.out"
    },
  )
  gsap.fromTo(
    img2.current,
    {
      scrollTrigger: {
        trigger: img2.current,
        start: "top 60%",
      },
      duration: 1.5,
      y: 50, 
      opacity: 0,
      ease: "power2.out"
    },
    {
      scrollTrigger: {
        trigger: img2.current,
        start: "top 60%",
      },
      duration: 1.5,
      y: 0, 
      opacity: 1,
      ease: "power2.out"
    },
  )
  gsap.fromTo(
    img3.current,
    {
      scrollTrigger: {
        trigger: img3.current,
        start: "top 60%",
      },
      duration: 1.5,
      y: 50, 
      opacity: 0,
      ease: "power2.out"
    },
    {
      scrollTrigger: {
        trigger: img3.current,
        start: "top 60%",
      },
      duration: 1.5,
      y: 0, 
      opacity: 1,
      ease: "power2.out"
    },
  )
  gsap.fromTo(
    img4.current,
    {
      scrollTrigger: {
        trigger: img4.current,
        start: "top 60%",
      },
      duration: 1.5,
      y: 50, 
      opacity: 0,
      ease: "power2.out"
    },
    {
      scrollTrigger: {
        trigger: img4.current,
        start: "top 60%",
      },
      duration: 1.5,
      y: 0, 
      opacity: 1,
      ease: "power2.out"
    },
  )
  gsap.fromTo(
    img5.current,
    {
      scrollTrigger: {
        trigger: img5.current,
        start: "top 60%",
      },
      duration: 1.5,
      y: 50, 
      opacity: 0,
      ease: "power2.out"
    },
    {
      scrollTrigger: {
        trigger: img5.current,
        start: "top 60%",
      },
      duration: 1.5,
      y: 0, 
      opacity: 1,
      ease: "power2.out"
    },
  )
  gsap.fromTo(
    img6.current,
    {
      scrollTrigger: {
        trigger: img6.current,
        start: "top 70%",
      },
      duration: 1.5,
      y: 50, 
      opacity: 0,
      ease: "power2.out"
    },
    {
      scrollTrigger: {
        trigger: img6.current,
        start: "top 70%",
      },
      duration: 1.5,
      y: 0, 
      opacity: 1,
      ease: "power2.out"
    },
  )
};
