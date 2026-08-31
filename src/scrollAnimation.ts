import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const scrollAnimation = () => {
  const scrollLines = gsap.utils.toArray(".scroll-lines");

  scrollLines.forEach((element: any) => {
    const parentContainer = element.parentElement;
    const split = SplitText.create(element, { type: "lines" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentContainer,
        start: "top 90%",
        toggleActions: "play reset play none",
      },
    });

    const initAnimation = () => {
      tl.from(split.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out",
      });
    };
    initAnimation();

    // 🔄 Listen for ScrollTrigger's recalculation phase
    ScrollTrigger.addEventListener("refreshInit", () => {
      // 1. Kill the current timeline so it doesn't hold old references
      tl.progress(0).kill();

      // 2. Un-wrap the lines back into plain, natural text
      split.revert();

      // 3. Re-calculate the line breaks based on the new browser width
      split.split({ type: "lines" });

      // 4. Reinitialize your timeline with the fresh array of lines
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentContainer,
          start: "top 90%",
          toggleActions: "play reset play none",
        },
      });

      initAnimation();
    });
  });

  const scrollWords = gsap.utils.toArray(".scroll-words");

  scrollWords.forEach((element: any) => {
    const parentContainer = element.parentElement;
    const split = SplitText.create(element, { type: "words" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentContainer,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    const initAnimation = () => {
      tl.from(split.words, {
        opacity: 0,
        yPercent: 100,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out",
      });
    };
    initAnimation();

    ScrollTrigger.addEventListener("refreshInit", () => {
      tl.progress(0).kill();
      split.revert();
      split.split({ type: "words" });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentContainer,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      initAnimation();
    });
  });

  const scrollChars = gsap.utils.toArray(".scroll-chars");

  scrollChars.forEach((element: any) => {
    const parentContainer = element.parentElement;
    const split = SplitText.create(element, { type: "chars" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentContainer,
        start: "bottom 110%",
        toggleActions: "play none none reverse",
      },
    });

    const initAnimation = () => {
      tl.from(split.chars, {
        opacity: 0,
        yPercent: 100,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out",
      });
    };
    initAnimation();

    ScrollTrigger.addEventListener("refreshInit", () => {
      tl.progress(0).kill();
      split.revert();
      split.split({ type: "chars" });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentContainer,
          start: "bottom 110%",
          toggleActions: "play none none reverse",
        },
      });

      initAnimation();
    });
  });

  const scrollFadeUp = gsap.utils.toArray(".scroll-fade-up");

  scrollFadeUp.forEach((element: any) => {
    // const parentContainer = element.parentElement;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(element.querySelectorAll(".scroll-elem"), {
      opacity: 0,
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: "expo.out",
    });
  });
};

export default scrollAnimation;
