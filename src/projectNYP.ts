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
            <h1 class="scroll-words max-w-xl font-display tracking-[-0.03em] text-6xl xl:text-7xl">NYP Website Redesign</h1>
            <a class="text-link-external mt-5" target="_blank" href="https://www.nyp.edu.sg/student">Live site</a>

            <!-- Project info -->
            <ul class="w-full mt-8">
              <li class="casestudy-info-item" title="Role" description="Frontend Engineer"></li>
              <li class="casestudy-info-item" title="Timeline" description="1.5 Years (5-Month frontend execution phase)"></li>
              <li class="casestudy-info-item" title="Stack" description="Vanilla TypeScript, Tailwind CSS, GSAP, Lenis, Adobe Experience Manager (AEM)"></li>
              <li class="casestudy-info-item" title="Team" description="11-person cross-functional squad (2 Researchers, 3 Designers, 2 Frontend, 3 AEM Engineers, 1 PM)"></li>
            </ul>

          </div>
          <div class="checkered-row"></div>
      </div>

      <div class="flex flex-col w-full border dashed-guides-v dashed-guides-h">

        <!-- dot divider -->
        <div class="h-6.5 bg-dot border-b border-dashed border-black/30" aria-hidden="true">
        </div>

        <video
          autoplay
          loop
          muted
          playsinline
          poster="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-home.webp"
          width="1376"
          height="720"
          fetchpriority="high"
          class="w-full! h-auto! object-fill"
        >
          <source
            src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-home.mp4"
            type="video/mp4"
          />
          <source
            src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-home.webm"
            type="video/webm"
          />
        </video>
 
        <!-- grid divider -->
        <div class="h-12 bg-grid" aria-hidden="true">
        </div>

        <div class="flex flex-col relative z-10">
          <!-- The Project -->
          <div class="scroll-fade-up paragraph-container">
            <h2 class="scroll-words paragraph-title">The Project</h2>
            <p class="scroll-elem paragraph-text">
              Over the years, Nanyang Polytechnic’s public website had grown into thousands of unmapped, duplicate pages that were difficult for internal teams to maintain and confusing for students and alumni to navigate.
            </p>
            <p class="scroll-elem paragraph-text">
              As the frontend engineer, my job was to take the design team’s new persona-focused layouts and complex animation concepts and build them into clean, fully accessible, and CMS-compatible production code.
            </p>
          </div>

          <!-- dot divider -->
          <div class="h-6.5 bg-dot border-y border-dashed border-black/30" aria-hidden="true">
          </div>

          <video
            autoplay
            loop
            muted
            playsinline
            disablePictureInPicture
            poster="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-testimonials.webp"
            width="1572"
            height="720"
            class="w-full! h-auto! object-fill"
          >
            <source
              src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-testimonials.mp4"
              type="video/mp4"
            />
            <source
              src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-testimonials.webm"
              type="video/webm"
            />
          </video>

          <!-- grid divider -->
          <div class="h-12 bg-grid" aria-hidden="true">
          </div>

          <!-- Project Constraints -->
          <div class="scroll-fade-up paragraph-container">
            <h2 class="scroll-words paragraph-title">Project Constraints</h2>
            <ul class="list-disc paragraph-text pl-4 *:mt-3 *:first:mt-0">
              <li class="scroll-elem">
                <span class="font-bold">No Frameworks Allowed:</span> To keep the frontend stable and compatible inside <span class="font-bold">Adobe Experience Manager (AEM)</span>, we could not use modern frameworks like React or Vue. Everything had to be built with vanilla JS and CSS.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Persona-Based Styling:</span> The site needed to change its colors and accents depending on whether a prospect, student, or alumnus was viewing it. We needed to build this without duplicating code or bloating asset sizes.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Government Compliance:</span> The website had to strictly meet Singapore's Digital Service Standards (DSS) and WCAG 2.1 Level AA accessibility mandates from day one.
              </li>
            </ul>
          </div>

          <!-- dot divider -->
          <div class="h-6.5 bg-dot border-y border-dashed border-black/30" aria-hidden="true">
          </div>

          <video
            autoplay
            loop
            muted
            playsinline
            disablePictureInPicture
            poster="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-sustainability.webp"
            width="1399"
            height="720"
            class="w-full! h-auto! object-fill"
          >
            <source
              src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-sustainability.mp4"
              type="video/mp4"
            />
            <source
              src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-sustainability.webm"
              type="video/webm"
            />
          </video>

          <!-- grid divider -->
          <div class="h-12 bg-grid" aria-hidden="true">
          </div>

          <!-- What I Did -->
          <div class="scroll-fade-up paragraph-container">
            <h2 class="scroll-words paragraph-title">What I Did</h2>
            <ul class="list-disc paragraph-text pl-4 *:mt-3 *:first:mt-0">
              <li class="scroll-elem">
                <span class="font-bold">Creating Smooth Animations with Vanilla JS:</span> To deliver the design team’s scroll-driven storytelling elements without framework tools, I wrote custom animation code using GSAP and Lenis smooth scrolling directly in a vanilla TypeScript setup. I vetted the animations early to make sure they stayed smooth on low-end mobile devices.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Managing Themes Efficiently with Tailwind CSS:</span> To handle the different website colors for different student personas without writing redundant stylesheets, I built a theme system using Tailwind CSS and CSS custom variables. Allowing a single component to dynamically swap its color profile on the fly based on the user's section of the site.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Building and Auditing for Accessibility:</span> Accessibility was an engineering constraint from the start. I ran <span class="font-bold">Lighthouse audits</span> regularly throughout development alongside manual testing. This let me catch semantic errors and color contrast issues immediately, ensuring the AEM engineering team received pre-vetted, compliant components.
              </li>
            </ul>
          </div>

          <!-- dot divider -->
          <div class="h-6.5 bg-dot border-y border-dashed border-black/30" aria-hidden="true">
          </div>

          <video
            autoplay
            loop
            muted
            playsinline
            disablePictureInPicture
            poster="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-course-details.webp"
            width="1399"
            height="720"
            class="w-full! h-auto! object-fill"
          >
            <source
              src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-course-details.mp4"
              type="video/mp4"
            />
            <source
              src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-course-details.webm"
              type="video/webm"
            />
          </video>

          <!-- grid divider -->
          <div class="h-12 bg-grid" aria-hidden="true">
          </div>

          <!-- Outcomes -->
          <div class="scroll-fade-up paragraph-container">
            <h2 class="scroll-words paragraph-title">Outcomes</h2>
            <ul class="list-disc paragraph-text pl-4 *:mt-3 *:first:mt-0">
              <li class="scroll-elem">
                <span class="font-bold">90+ Lighthouse Scores:</span> Reached and maintained a <span class="font-bold">90+ score</span>  across Accessibility, Best Practices, and SEO, successfully clearing government DSS and WCAG 2.1 AA audits.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Self-Serve Content Management:</span> Swapped code-heavy updates for an author-friendly layout system. Marketing teams can now independently build and update pages using our components and AEM content fragments.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Zero Component Breakdown:</span> Delivered a thoroughly documented, reusable component library that allowed backend AEM developers to tie in data endpoints without breaking visual designs or responsive layouts.
              </li>
            </ul>
          </div>

          <!-- dot divider -->
          <div class="h-6.5 bg-dot border-y border-dashed border-black/30" aria-hidden="true">
          </div>

          <video
            autoplay
            loop
            muted
            playsinline
            disablePictureInPicture
            poster="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-living-lab.webp"
            width="1399"
            height="720"
            class="w-full! h-auto! object-fill"
          >
            <source
              src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-living-lab.mp4"
              type="video/mp4"
            />
            <source
              src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/nyp-living-lab.webm"
              type="video/webm"
            />
          </video>

          <!-- grid divider -->
          <div class="h-12 bg-grid" aria-hidden="true">
          </div>

          <!-- Project Reflection-->
          <div class="scroll-fade-up paragraph-container">
            <h2 class="scroll-words paragraph-title">Project Reflection</h2>
            <p class="scroll-elem paragraph-text">
              Working without a modern JavaScript framework while handling heavy GSAP scroll animations forced a high level of code structure and discipline.
            </p>
            <p class="scroll-elem paragraph-text">
              It showed me the true value of being an engineer who understands user experience. When you understand how a browser handles scroll calculations and paint cycles, you write code that honors the designer's intent while keeping the site fast and functional for the end user.
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
