import "./style.css";
import navigationBar from "./navigationBar.ts";
import footer from "./footer.ts";
import { homeCard } from "./card.ts";
import { checkeredRow } from "./checkeredRow.ts";
import { dividerStriped } from "./divider";
import { statBlock } from "./stat.ts";
import { marquee } from "./marquee.ts";
import { capabilityColumn } from "./capability.ts";
import { indexRow } from "./indexRow.ts";
import { localClock } from "./clock.ts";
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

      <!-- Hero meta row -->
      <div class="relative z-10 flex flex-wrap items-center w-full gap-x-4 gap-y-1 px-4 py-2 border-b border-default font-mono text-xs lg:px-6 lg:text-sm">
        <span class="flex items-center gap-2">
          <span class="status-dot" aria-hidden="true"></span>
          Open to new roles
        </span>
        <span class="text-(--lighter-text)">/ UI Designer &amp; Frontend Engineer</span>
        <span class="flex items-center gap-2 text-(--lighter-text) sm:ml-auto">
          Singapore
          <span aria-hidden="true">/</span>
          <span id="localClock" class="tabular-nums">SGT --:--:--</span>
        </span>
      </div>

      <!-- Header -->
      <div class="relative z-10 overflow-hidden">
        <h1 class="scroll-lines font-display tracking-[-0.03em] mx-4 mt-3 mb-5 text-6xl sm:text-7xl lg:mx-6 lg:mt-5 lg:mb-6 max-xl:max-w-5xl xl:text-[5.25rem]">
          I <span class="decoration-highlight">design</span> interfaces and write the <span class="decoration-highlight">code</span> that brings them to life.
        </h1>
      </div>

      <!-- stripe divider -->
      <div class="divider-striped divider-striped-inner"></div>

      <!-- grid divider -->
      <div class="w-full h-12 bg-grid border-b border-default" aria-hidden="true">
      </div>

       <!-- Intro -->
      <div class="scroll-fade-up relative z-10 flex flex-col w-full sm:flex-row">
        <div class="w-full px-4 pt-4 border-default sm:px-6 sm:pb-4 sm:max-w-(--intro-container-width-sm) sm:border-r xl:max-w-(--intro-container-width)">
            <span class="scroll-elem section-no">
              001—About.
            </span>
        </div>
        <div class="flex flex-col w-full max-w-lg gap-4 px-4 pb-4 sm:px-6 sm: pt-4 xl:max-w-xl">
          <p class="scroll-lines font-mono font-semibold text-lg xl:text-xl" role="group">
            Hi, I’m Wanlin. I’m a UI designer and frontend engineer — I design the interface, then I build it.
          </p>
          <p class="scroll-elem text-(--lighter-text) xl:text-lg">
            My strength is the middle: turning a direction into a pixel-exact interface, then a component library, then production code. Type, spacing and motion on one side; semantics, performance and accessibility on the other. Because I own both, what ships looks like what was designed.
          </p>
        </div>
      </div>

      <!-- dot divider -->
      <div class="w-full h-6.5 bg-dot border-y border-default" aria-hidden="true">
      </div>

      <!-- Organisations ticker -->
      <div class="relative z-10 flex flex-col w-full pt-1.5 pb-2">
        <span class="px-4 pt-3 font-mono text-xs text-(--lighter-text) md:text-sm sm:px-6">
          Design &amp; frontend work shipped for:
        </span>
        <div
          class="text-marquee border-t border-default"
          data-duration="45s"
          data-items="MOH | NYP | Tech in Asia | LTA | IRAS | MOE | Singtel | RCBC | STB | MCCY | ICA | SPH Zaobao Schools">
        </div>
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
            <div class="flex flex-col items-end gap-3">
              <h2 class="scroll-chars font-display tracking-[-0.03em] text-6xl sm:text-8xl xl:text-9xl">
                Work
              </h2>
            </div>
          </div>
          <div class="checkered-row"></div>
      </div>

      <div class="flex flex-col w-full border dashed-guides-v dashed-guides-h">
        <!-- dot divider -->
        <div class="h-6.5 bg-dot border-b border-default" aria-hidden="true">
        </div>

        <!-- Work 1 -->
        <div 
          class="home-card"
          data-title="Tech in Asia Platform Redesign"
          data-role="Product &amp; UI Design"
          data-year="2016—2018"
          data-tags="Design system | Cross-platform UI | iOS & Android | Information architecture | Prototyping | Sketch | Zeplin"
          data-description="I redesigned a standalone tech news platform into a media, jobs and startup-database ecosystem — across responsive web plus native iOS and Android."
          data-case-study="project-tia.html"
          data-thumbnail="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/tia-thumbnail.webp"
          data-alt="Interface of Tech in Asia mobile app">
        </div>

        <!-- grid divider -->
        <div class="h-12 bg-grid border-b border-default" aria-hidden="true">
        </div>

        <!-- Work 2 -->
        <div 
          class="home-card"
          data-title="NYP Website Redesign"
          data-role="Frontend Engineering"
          data-year="2023—2025"
          data-tags="TypeScript | Tailwind CSS | GSAP | Lenis | AEM | WCAG 2.1 AA | 90+ Lighthouse"
          data-description="I took the design team's persona-focused layouts and complex animation concepts and rebuilt a site into an accessible, component-driven website."
          data-case-study="project-nyp.html"
          data-live-site="https://www.nyp.edu.sg/student"
          data-thumbnail="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-thumbnail.webp"
          data-alt="Interface of NYP website">
        </div>

        <!-- grid divider -->
        <div class="h-12 bg-grid border-b border-default" aria-hidden="true">
        </div>

        <!-- Work 3 -->
        <div 
          class="home-card"
          data-title="MOH Intranet Portal"
          data-role="UI/UX Design & Frontend Development"
          data-year="2021—2023"
          data-tags="React | Next.js | TypeScript | Storybook | Ant Design | Figma | Design system"
          data-description="I worked as the hybrid designer and developer on a internal government portal used to monitor healthcare policies and claims."
          data-case-study="project-moh.html"
          data-thumbnail="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/moh-thumbnail.webp"
          data-alt="Interface of MOH portal">
        </div>

        <!-- dot divider -->
        <div class="h-6.5 bg-dot border-t border-default" aria-hidden="true">
        </div>

      </div>
    </div>
  </section>

  <!-- Capabilities section -->
  <section class="relative z-0 w-[calc(100%+1.5rem)] p-3 -mx-3 -mt-1 my-1 dashed-guides-v dashed-guides-h max-lg:before:hidden max-lg:after:hidden lg:w-full lg:mx-0 lg:mb-4.5 lg:-mt-4.25">
    <div class="flex flex-col w-full border dashed-guides-v dashed-guides-h">

      <!-- stripe divider -->
      <div class="divider-striped divider-striped-inner"></div>

      <!-- dot divider -->
      <div class="h-6.5 bg-dot border-b border-default" aria-hidden="true">
      </div>

      <!-- Section header -->
      <div class="scroll-fade-up relative z-10 grid flex-col w-full sm:grid-cols-4">
        <div class="w-full px-4 pt-4 border-default col-span-4 sm:pb-4 sm:px-6 sm:col-span-1 sm:border-r">
          <span class="scroll-elem section-no">
            003—Capabilities.
          </span>
        </div>
        <div class="flex flex-col w-full max-w-lg gap-2 px-4 pt-1 pb-4 col-span-4 sm:pt-4 sm:px-6 sm:col-span-3 xl:max-w-xl">
          <div class="overflow-hidden">
            <h2 class="scroll-chars font-display tracking-[-0.03em] text-5xl sm:text-6xl xl:text-7xl">
              What I do
            </h2>
          </div>
          <p class="scroll-elem text-(--lighter-text) xl:text-lg">
            Design and frontend aren’t two jobs I switch between — they’re one loop. I make the interface decisions, and I’m the one who has to build them, which keeps both honest.
          </p>
        </div>
      </div>

      <!-- Stats band -->
      <div class="scroll-fade-up relative z-10 grid w-full grid-cols-2 border-t border-default lg:grid-cols-4">
        <div class="stat-block" data-figure="8+" data-label="Years across design & frontend"></div>
        <div class="stat-block" data-figure="10+" data-label="Public-sector platforms shipped"></div>
        <div class="stat-block" data-figure="90+" data-label="Lighthouse a11y, SEO & best practices"></div>
        <div class="stat-block" data-figure="AA" data-label="WCAG 2.1 conformance, by default"></div>
      </div>

      <!-- grid divider -->
      <div class="h-12 bg-grid border-b border-default" aria-hidden="true">
      </div>

      <!-- Capability columns -->
      <div class="flex flex-col w-full lg:flex-row">
        <div
          class="capability-column"
          data-title="UI & Interaction Design"
          data-summary="Interfaces that hold up at scale — type, spacing, states and motion decided deliberately rather than left to defaults."
          data-items="Visual & interface design | Design systems | Component libraries | Wireframing & prototyping | Responsive & cross-platform (Web / iOS / Android) | Interaction & motion design">
        </div>
        <div
          class="capability-column"
          data-title="Frontend Engineering"
          data-summary="I build what I design. Component libraries, scroll-driven motion and theming — shipped and handed over to the rest of the team."
          data-items="TypeScript | React / Next.js | Tailwind CSS | GSAP / Lenis | Storybook | Semantic HTML & ARIA | Performance & Lighthouse">
        </div>
        <div
          class="capability-column"
          data-title="Design ↔ Engineering"
          data-summary="The seam where most products quietly lose their quality. Bridging the gap between design and production is my focus."
          data-items="Design tokens & theming | Component API design | Spec-accurate implementation | Accessibility (WCAG 2.1 AA) | Design-to-dev handoff | Partnering with researchers, BAs & PMs">
        </div>
      </div>

      <!-- grid divider -->
      <div class="h-12 bg-grid border-b border-default lg:hidden" aria-hidden="true">
      </div>

      <!-- Tools -->
      <div class="scroll-fade-up relative z-10 flex flex-col gap-3 px-4 pt-4 pb-5 border-default sm:px-6 lg:border-t">
        <span class="scroll-elem font-mono text-xs text-(--lighter-text) md:text-sm">
          Tools &amp; environments:
        </span>
        <ul class="scroll-elem flex flex-wrap gap-1.5">
          <li class="tag">Figma</li>
          <li class="tag">Storybook</li>
          <li class="tag">Ant Design</li>
          <li class="tag">Zeplin</li>
          <li class="tag">Sketch</li>
          <li class="tag">Adobe XD</li>
          <li class="tag">InVision</li>
          <li class="tag">Adobe Creative Suite</li>
          <li class="tag">Miro</li>
          <li class="tag">Jira / Confluence</li>
        </ul>
      </div>

      <!-- dot divider -->
      <div class="h-6.5 bg-dot border-t border-default" aria-hidden="true">
      </div>

    </div>
  </section>

  <!-- Experience section -->
  <section class="relative z-0 w-[calc(100%+1.5rem)] p-3 -mx-3 -mt-1 my-1 dashed-guides-v dashed-guides-h max-lg:before:hidden max-lg:after:hidden lg:w-full lg:mx-0 lg:mb-4.5 lg:-mt-4.25">
    <div class="flex flex-col w-full border dashed-guides-v dashed-guides-h">

      <!-- stripe divider -->
      <div class="divider-striped divider-striped-inner"></div>

      <!-- dot divider -->
      <div class="h-6.5 bg-dot border-b border-default" aria-hidden="true">
      </div>

      <!-- Section header -->
      <div class="scroll-fade-up relative z-10 grid flex-col w-full sm:grid-cols-4">
        <div class="w-full px-4 pt-4 border-default col-span-4 sm:pb-4 sm:px-6 sm:col-span-1 sm:border-r">
          <span class="scroll-elem section-no">
            004—Experience.
          </span>
        </div>
        <div class="flex flex-col w-full max-w-lg gap-2 px-4 pt-1 pb-4 col-span-4 sm:pt-4 sm:px-6 sm:col-span-3 xl:max-w-xl">
          <div class="overflow-hidden">
            <h2 class="scroll-chars font-display tracking-[-0.03em] text-5xl sm:text-6xl xl:text-7xl">
              Track record
            </h2>
          </div>
          <p class="scroll-elem text-(--lighter-text) xl:text-lg">
            A media startup in Singapore, then enterprise and government platforms at NCS — designing and building product end to end throughout.
          </p>
        </div>
      </div>

      <!-- grid divider -->
      <div class="h-12 bg-grid border-b border-default" aria-hidden="true">
      </div>

      <!-- Experience index -->
      <div class="scroll-fade-up relative z-10 flex flex-col w-full">
        <div
          class="experience-row"
          data-period="2018—2025"
          data-name="NCS"
          data-role="UI/UX Designer & Frontend Engineer"
          data-note="Design systems and production frontend for government and enterprise platforms">
        </div>
        <div
          class="experience-row"
          data-period="2016—2018"
          data-name="Tech in Asia"
          data-role="UI/UX Designer"
          data-note="Sole designer scaling a news site into a media, jobs and startup-database ecosystem across web, iOS and Android">
        </div>
      </div>

      <!-- Credentials -->
      <div class="scroll-fade-up relative z-10 flex flex-col w-full border-t border-default">
        <span class="scroll-elem bg-black/3 px-4 py-1.5 font-mono font-semibold text-xs sm:px-6 md:text-sm">
          Credentials:
        </span>
        <div
          class="credential-row"
          data-period="Certification"
          data-name="Nielsen Norman Group"
          data-role="Certificate in User Experience"
          data-note="NN/g — the industry benchmark for UX practice">
        </div>
        <div
          class="credential-row"
          data-period="Certification"
          data-name="Human Factors International"
          data-role="Certified Usability Analyst"
          data-note="HFI — usability testing and human-centred design methodology">
        </div>
        <div
          class="credential-row"
          data-period="Education"
          data-name="Nanyang Polytechnic"
          data-role="Diploma in Digital Media Design"
          data-note="The same institution whose website I later rebuilt">
        </div>
      </div>

      <!-- dot divider -->
      <div class="h-6.5 bg-dot border-t border-default" aria-hidden="true">
      </div>

    </div>
  </section>

  <!-- Contact section -->
  <section id="contact" class="relative z-0 w-[calc(100%+1.5rem)] p-3 -mx-3 -mt-1 my-1 scroll-mt-(--nav-height) dashed-guides-v dashed-guides-h max-lg:before:hidden max-lg:after:hidden lg:w-full lg:mx-0 lg:mb-4.5 lg:-mt-4.25">
    <div class="flex flex-col w-full border dashed-guides-v dashed-guides-h">

      <!-- stripe divider -->
      <div class="divider-striped divider-striped-reverse divider-striped-inner"></div>

      <!-- dot divider -->
      <div class="h-6.5 bg-dot border-b border-default" aria-hidden="true">
      </div>

      <div class="scroll-fade-up relative z-10 flex flex-col w-full p-4 md:p-6 xl:p-8">
        <span class="scroll-elem section-no">
          005—Contact.
        </span>

        <div class="overflow-hidden">
          <h2 class="scroll-lines font-display tracking-[-0.03em] max-w-4xl text-5xl sm:text-6xl xl:text-7xl">
            Got something worth <span class="decoration-highlight">building</span>? Let’s talk.
          </h2>
        </div>

        <div class="scroll-elem flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-(--lighter-text) mt-4 md:text-sm">
          <span class="flex items-center gap-2 text-black">
            <span class="status-dot" aria-hidden="true"></span>
            Open to Design Engineer &amp; Product Design roles
          </span>
          <span aria-hidden="true">/</span>
          <span>Singapore or remote</span>
        </div>

        <div class="scroll-elem flex flex-wrap items-center gap-3 border-default border-t mt-6 pt-6 xl:mt-8 xl:pt-8">
          <a href="mailto:wanlin.c.10@gmail.com" class="text-link-external">
            <span>Email</span>
          </a>
          <span aria-hidden="true">/</span>
          <a href="https://www.linkedin.com/in/wan-lin-cheung-10/" target="_blank" class="text-link-external">
            <span>LinkedIn</span>
          </a>
          <span aria-hidden="true">/</span>
          <a href="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/resume-wanlin-cheung.pdf" target="_blank" class="text-link-external">
            <span>Résumé (PDF)</span>
          </a>
          <span aria-hidden="true">/</span>
          <a href="index.html#work" class="text-link">
            <span>Back to work</span>
          </a>
        </div>
      </div>

      <!-- grid divider -->
      <div class="h-12 bg-grid" aria-hidden="true">
      </div>

    </div>
  </section>
  
  <!-- footer -->
  <footer id="footer"></footer>

</div>
`;

navigationBar(document.querySelector("#navigationBar")!);
footer(document.querySelector("#footer")!);
homeCard(document.querySelectorAll(".home-card"));
checkeredRow(document.querySelectorAll(".checkered-row"));
statBlock(document.querySelectorAll(".stat-block"));
marquee(document.querySelectorAll(".text-marquee"));
capabilityColumn(document.querySelectorAll(".capability-column"));
indexRow(document.querySelectorAll(".experience-row"));
indexRow(document.querySelectorAll(".credential-row"));
dividerStriped(document.querySelectorAll(".divider-striped"));
localClock(document.querySelector("#localClock")!);
scrollAnimation();
