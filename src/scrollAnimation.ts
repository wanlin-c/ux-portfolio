import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const scrollAnimation = () => {
  const scrollLines = gsap.utils.toArray(".scroll-lines");

  scrollLines.forEach((element: any) => {
    const parentContainer = element.parentElement;
    const split = SplitText.create(element, { type: "lines" });

    gsap.from(split.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out",
      scrollTrigger: {
        trigger: parentContainer,
        start: "top 90%",
        toggleActions: "play reset play none",
        invalidateOnRefresh: true,
      },
    });
  });

  const scrollWords = gsap.utils.toArray(".scroll-words");

  scrollWords.forEach((element: any) => {
    const parentContainer = element.parentElement;
    const split = SplitText.create(element, { type: "words" });

    gsap.from(split.words, {
      opacity: 0,
      yPercent: 100,
      duration: 0.8,
      stagger: 0.05,
      ease: "back.out",
      scrollTrigger: {
        trigger: parentContainer,
        start: "top 90%",
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
      },
    });
  });

  const scrollChars = gsap.utils.toArray(".scroll-chars");

  scrollChars.forEach((element: any) => {
    const parentContainer = element.parentElement;
    const split = SplitText.create(element, { type: "chars" });

    gsap.from(split.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 0.8,
      stagger: 0.05,
      ease: "back.out",
      scrollTrigger: {
        trigger: parentContainer,
        start: "bottom 110%",
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
      },
    });
  });

  const scrollFadeUp = gsap.utils.toArray(".scroll-fade-up");

  scrollFadeUp.forEach((element: any) => {
    // const parentContainer = element.parentElement;

    gsap.from(element.querySelectorAll(".scroll-elem"), {
      opacity: 0,
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
      },
    });
  });
};

export default scrollAnimation;
