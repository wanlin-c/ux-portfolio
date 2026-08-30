import "./style.css";
import navigationBar from "./navigationBar.ts";
import footer from "./footer.ts";
import { checkeredRow } from "./checkeredRow.ts";
import { casestudyInfo } from "./casestudy.ts";
import { dividerStriped } from "./divider";
import scrollAnimation from "./scrollAnimation.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
<!-- Navigation bar -->
<nav id="navigationBar"></nav>

<div class="max-w-screen flex flex-col w-full px-4 lg:px-8 max-lg:overflow-x-hidden">

  <!-- stripe divider -->
  <div class="divider-striped divider-striped-reverse"></div>

  <!-- Main section -->
  <section class="relative z-0 w-[calc(100%+1.5rem)] p-3 -mx-3 my-1 dashed-guides-v dashed-guides-h max-lg:before:hidden max-lg:after:hidden lg:w-full lg:mx-0 lg:my-4.5">
    <div class="relative z-10 flex flex-col items-start lg:flex-row lg:gap-3">
      <div class="scroll-fade-up flex flex-col w-full border dashed-guides-v dashed-guides-h max-lg:border-b-0 lg:max-w-(--intro-container-width-sm) lg:min-h-[calc(100vh-var(--nav-height)+2px)] lg:sticky! lg:top-(--nav-height-top) xl:max-w-(--intro-container-width)">
          <div class="checkered-row"></div>
          <div class="checkered-row"></div>
          <div class="flex flex-col grow items-start gap-2 p-4 md:px-6 md:pt-8 relative z-10 lg:min-h-[calc(100vh-11.25rem)] lg:max-h-[calc(100vh-var(--nav-height)-3rem)] lg:overflow-y-auto">
            <span class="scroll-elem section-no">
              Case study
            </span>
            <h1 class="scroll-words max-w-xl font-display tracking-[-0.03em] text-6xl xl:text-7xl">MOH Intranet Portal</h1>

            <!-- Project info -->
            <ul class="w-full mt-8">
              <li class="casestudy-info-item" title="Role" description="UI/UX Designer & Frontend Developer"></li>
              <li class="casestudy-info-item" title="Timeline" description="~2 Years"></li>
              <li class="casestudy-info-item" title="Stack" description="React, Next.js, TypeScript, Storybook, Ant Design, Figma"></li>
              <li class="casestudy-info-item" title="Team" description="Multiple feature teams (Each: 2 Business Analysts, 1 Designer, 1–3 Engineers)"></li>
            </ul>

          </div>
          <div class="checkered-row"></div>
      </div>

      <div class="flex flex-col w-full border dashed-guides-v dashed-guides-h">

        <!-- dot divider -->
        <div class="h-6.5 bg-dot border-b border-dashed border-black/30" aria-hidden="true">
        </div>

        <img
          src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/moh-main.webp"
          alt=""
          width="1260"
          height="728"
          loading="lazy"
        />

        <!-- grid divider -->
        <div class="h-12 bg-grid" aria-hidden="true">
        </div>

        <div class="flex flex-col relative z-10">
          <!-- The Project -->
          <div class="scroll-fade-up paragraph-container">
            <h2 class="scroll-words paragraph-title">The Project</h2>
            <p class="scroll-elem paragraph-text">
              During the COVID-19 pandemic, the existing healthcare system made policy changes too slow because data was split across multiple government agencies using different systems. Officers lacked a single workspace, meaning policy updates and health claims data tracking had to be manually cross-referenced.
            </p>
            <p class="scroll-elem paragraph-text">
              The goal was to replace this setup with a single intranet portal where officers could update health policies and process claims faster.
            </p>
          </div>

          <!-- dot divider -->
          <div class="h-6.5 bg-dot border-y border-dashed border-black/30" aria-hidden="true">
          </div>

          <img
            src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/moh-style.webp"
            alt=""
            width="1520"
            height="1254"
            loading="lazy"
          />

          <!-- grid divider -->
          <div class="h-12 bg-grid" aria-hidden="true">
          </div>

          <!-- Project Constraints -->
          <div class="scroll-fade-up paragraph-container">
            <h2 class="scroll-words paragraph-title">Project Constraints</h2>
            <ul class="list-disc paragraph-text pl-4 *:mt-3 *:first:mt-0">
              <li class="scroll-elem">
                <span class="font-bold">Limited User Access:</span> Due to high security and data confidentiality, we could only test and research with a handful of real health officers.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">New Tech Stack:</span> The client required the frontend to be built in React and Next.js, which was a stack our development team had no prior experience with.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Tight Timeline:</span> We had a very short window to finalize requirements, design the interfaces, and deliver a working frontend while simultaneously building a full component library from scratch.
              </li>
            </ul>
          </div>

          <!-- dot divider -->
          <div class="h-6.5 bg-dot border-y border-dashed border-black/30" aria-hidden="true">
          </div>

        <img
          src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/moh-cards.webp"
          alt=""
          width="1398"
          height="872"
          loading="lazy"
        />

          <!-- grid divider -->
          <div class="h-12 bg-grid" aria-hidden="true">
          </div>

          <!-- What I Did -->
          <div class="scroll-fade-up paragraph-container">
            <h2 class="scroll-words paragraph-title">What I Did</h2>
            <ul class="list-disc paragraph-text pl-4 *:mt-3 *:first:mt-0">
              <li class="scroll-elem">
                <span class="font-bold">Building UI Screens Early to Speed Up Decisions:</span> Because we had a tight deadline and unconfirmed specifications, I designed high-fidelity screens ahead of our official requirements-gathering sessions. Giving stakeholders concrete layouts to look at and react to eliminated confusion, accelerated final sign-offs, and let the team move into actual frontend development much faster.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Using Ant Design for Data-Heavy Interfaces:</span> Since the portal required processing massive amounts of data for claims and policies, I chose <span class="font-bold">Ant Design</span> as our UI library. It gave us a solid foundation of ready-made complex forms and advanced data tables. Instead of wasting time building standard components from scratch, I could focus on customizing specialized elements where the default library fell short.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Developing and Documenting Components in Storybook:</span> To make sure design work didn't bottleneck core feature development, I built and tested all custom components in isolation using <span class="font-bold">Storybook</span>. I turned the design system into reusable page templates and modular UI blocks using React and TypeScript. Full-stack engineers could then take these templates and plug in backend business logic without breaking the frontend layout.
              </li>
            </ul>
          </div>

          <!-- dot divider -->
          <div class="h-6.5 bg-dot border-y border-dashed border-black/30" aria-hidden="true">
          </div>

          <img
            src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/moh-misc.webp"
            alt=""
            width="1485"
            height="783"
            loading="lazy"
          />

          <!-- grid divider -->
          <div class="h-12 bg-grid" aria-hidden="true">
          </div>

          <!-- Outcomes -->
          <div class="scroll-fade-up paragraph-container">
            <h2 class="scroll-words paragraph-title">Outcomes</h2>
            <ul class="list-disc paragraph-text pl-4 *:mt-3 *:first:mt-0">
              <li class="scroll-elem">
                <span class="font-bold">On-Time Delivery:</span> Delivered the entire intranet portal frontend on schedule despite the compressed timeline and the team learning a new Next.js stack on the job.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Faster Ongoing Development:</span> The library of reusable React templates and components significantly sped up production times for the team when building newer features.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Easy Designer Onboarding:</span> The documented design system made it easy for newly joined designers to start contributing consistent layouts almost immediately.
              </li>
            </ul>
          </div>

          <!-- dot divider -->
          <div class="h-6.5 bg-dot border-y border-dashed border-black/30" aria-hidden="true">
          </div>

          <img
            src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/moh-form.webp"
            alt=""
            width="1211"
            height="665"
            loading="lazy"
          />

          <!-- grid divider -->
          <div class="h-12 bg-grid" aria-hidden="true">
          </div>

          <!-- Project Reflection-->
          <div class="scroll-fade-up paragraph-container">
            <h2 class="scroll-words paragraph-title">Project Reflection</h2>
            <p class="scroll-elem paragraph-text">
              This project gave me my first experience handling a full workflow from raw requirements to design and production code. Running design and engineering phases at the same time required deep discipline.
            </p>
            <p class="scroll-elem paragraph-text">
                Working directly with active <span class="font-bold">CI/CD pipelines</span> and Scrum sprints gave me a real appreciation for testing boundaries, showing me exactly why even minor user interface adjustments require careful engineering to deploy safely.
            </p>
          </div>

          <!-- dot divider -->
          <div class="h-6.5 bg-dot border-t border-dashed border-black/30" aria-hidden="true">
          </div>

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
checkeredRow(document.querySelectorAll(".checkered-row"));
casestudyInfo(document.querySelectorAll(".casestudy-info-item"));
dividerStriped(document.querySelectorAll(".divider-striped"));
scrollAnimation();
