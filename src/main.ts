import "./style.css";
import navigationBar from "./navigationBar.ts";
import footer from "./footer.ts";
import { homeCard } from "./card.ts";
import { checkeredRow } from "./checkeredRow.ts";
import { dividerStriped } from "./divider";
import scrollAnimation from "./scrollAnimation.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
<!-- Navigation bar -->
<nav id="navigationBar"></nav>

<div class="max-w-screen flex flex-col w-full px-4 lg:px-8 max-lg:overflow-x-hidden">
  <!-- Intro section -->
  <section class="relative z-0 w-[calc(100%+1.5rem)] p-3 -mx-3 my-1 dashed-guides-v dashed-guides-h max-lg:before:hidden max-lg:after:hidden lg:w-full lg:mx-0 lg:my-4.5">
    <div class="flex flex-col items-start justify-start w-full border dashed-guides-v dashed-guides-h">
      <!-- stripe divider -->
      <div class="divider-striped divider-striped-reverse divider-striped-inner"></div>

      <!-- dot divider -->
      <div class="w-full h-6.5 bg-dot border-b border-dashed border-black/30" aria-hidden="true">
      </div>

      <!-- Header -->
      <div class="relative z-10 overflow-hidden">
        <h1 class="scroll-lines font-display tracking-[-0.03em] mx-4 mt-3 mb-5 text-6xl sm:text-7xl lg:mx-6 lg:mt-5 lg:mb-6 max-xl:max-w-5xl xl:text-[5.25rem]">
          I <span class="decoration-highlight">design</span> interfaces and write the <span class="decoration-highlight">code</span> that brings them to live.
        </h1>
      </div>

      <!-- stripe divider -->
      <div class="divider-striped divider-striped-inner"></div>

      <!-- grid divider -->
      <div class="w-full h-12 bg-grid border-b border-dashed border-black/30" aria-hidden="true">
      </div>

       <!-- Intro -->
      <div class="scroll-fade-up relative z-10 flex flex-col w-full pt-4 pb-5 sm:flex-row">
        <div class="w-full max-w-45 px-4 border-dashed border-black/30 sm:px-6 sm:max-w-(--intro-container-width-sm) sm:border-r xl:max-w-(--intro-container-width)">
            <span class="scroll-elem section-no mb-4">
              001—About.
            </span>
        </div>
        <div class="flex flex-col w-full max-w-lg gap-4 px-4 sm:px-6 xl:max-w-xl">
          <p class="scroll-lines font-mono font-semibold text-lg xl:text-xl">
            Hi, I’m Wanlin. I’m a hybrid UI/UX designer and frontend engineer with over 8 years of experience.
          </p>
          <p class="scroll-elem text-gray-500 xl:text-lg">
            I take products all the way from initial user research and wireframes to clean, compliant frontend code. Because I sit between both worlds, I build systems that look exactly like the design specs, run fast, and stay fully accessible for everyone.
          </p>
        </div>
      </div>

      <!-- dot divider -->
      <div class="w-full h-6.5 bg-dot border-t border-dashed border-black/30" aria-hidden="true">
      </div>

      <!-- stripe divider -->
      <div id="work" class="divider-striped divider-striped-reverse divider-striped-inner"></div>

    </div>
  </section>

  <!-- Work section -->
  <section class="relative z-0 w-[calc(100%+1.5rem)] p-3 -mx-3 -mt-1 my-1 dashed-guides-v dashed-guides-h max-lg:before:hidden max-lg:after:hidden lg:w-full lg:mx-0 lg:mb-4.5 lg:-mt-4.25">
    <div class="relative z-10 flex flex-col items-start w-full lg:flex-row lg:gap-3">
      <div class="flex flex-col w-full border dashed-guides-v dashed-guides-h max-lg:border-b-0 lg:max-w-(--intro-container-width-sm) lg:min-h-[calc(100vh-var(--nav-height)+2px)] lg:sticky! lg:top-(--nav-height-top) xl:max-w-(--intro-container-width)">
          <div class="checkered-row"></div>
          <div class="checkered-row"></div>
          <div class="scroll-fade-up flex flex-col grow items-end justify-between py-2 px-4 relative z-10 text-right">
            <span class="scroll-elem section-no">
              002.
            </span>
            <h2 class="scroll-chars font-display tracking-[-0.03em] text-6xl sm:text-8xl xl:text-9xl">
              Work
            </h2>
          </div>
          <div class="checkered-row"></div>
      </div>

      <div class="flex flex-col w-full border dashed-guides-v dashed-guides-h">
        <!-- dot divider -->
        <div class="h-6.5 bg-dot border-b border-dashed border-black/30" aria-hidden="true">
        </div>

        <!-- Work 1 -->
        <div 
          class="home-card"
          data-title="Tech in Asia Platform Redesign"
          data-role="UI/UX Product Design"
          data-description="I led the user experience overhaul to expand a standalone tech news platform into a broader ecosystem that included a jobs board and a startup database."
          data-case-study="project-tia.html"
          data-thumbnail="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/tia-thumbnail.webp">
        </div>

        <!-- grid divider -->
        <div class="h-12 bg-grid border-b border-dashed border-black/30" aria-hidden="true">
        </div>

        <!-- Work 2 -->
        <div 
          class="home-card"
          data-title="NYP Website Redesign"
          data-role="Frontend Engineering"
          data-description="I took the design team's persona-focused layouts and complex animation concepts and rebuilt a site into an accessible, component-driven website."
          data-case-study="project-nyp.html"
          data-live-site="https://www.nyp.edu.sg/student"
          data-thumbnail="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-thumbnail.webp">
        </div>

        <!-- grid divider -->
        <div class="h-12 bg-grid border-b border-dashed border-black/30" aria-hidden="true">
        </div>

        <!-- Work 3 -->
        <div 
          class="home-card"
          data-title="MOH Intranet Portal"
          data-role="UI/UX Design & Frontend Development"
          data-description="I worked as the hybrid designer and developer on a internal government portal used to monitor healthcare policies and claims."
          data-case-study="project-moh.html"
          data-thumbnail="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/moh-thumbnail.webp">
        </div>

        <!-- dot divider -->
        <div class="h-6.5 bg-dot border-t border-dashed border-black/30" aria-hidden="true">
        </div>

      </div>
    </div>
  </section>
  
  <!-- footer -->
  <footer id="footer"></footer>

<div>
`;

navigationBar(document.querySelector("#navigationBar")!);
footer(document.querySelector("#footer")!);
homeCard(document.querySelectorAll(".home-card"));
checkeredRow(document.querySelectorAll(".checkered-row"));
footer(document.querySelector("#footer")!);
dividerStriped(document.querySelectorAll(".divider-striped"));
scrollAnimation();
