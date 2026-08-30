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
            <h1 class="scroll-words max-w-xl font-display tracking-[-0.03em] text-6xl xl:text-7xl">Tech in Asia Platform Redesign</h1>

            <!-- Project info -->
            <ul class="w-full mt-8">
              <li class="casestudy-info-item" title="Role" description="UI/UX Designer"></li>
              <li class="casestudy-info-item" title="Timeline" description="~2 Years"></li>
              <li class="casestudy-info-item" title="Tools" description="Sketch, InVision, Zeplin"></li>
              <li class="casestudy-info-item" title="Scope" description="Web Redesign + iOS & Android Apps"></li>
              <li class="casestudy-info-item" title="Team" description="2 Product Managers, 1 Designer (Myself), ~6 Software Engineers"></li>
            </ul>

          </div>
          <div class="checkered-row"></div>
      </div>

      <div class="flex flex-col w-full border dashed-guides-v dashed-guides-h">

        <!-- dot divider -->
        <div class="h-6.5 bg-dot border-b border-dashed border-black/30" aria-hidden="true">
        </div>

          <img
            src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/tia-mobile.webp"
            alt=""
            width="1343"
            height="1039"
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
              By 2016, Tech in Asia's organic monthly traffic growth had leveled off. To scale up sustainably, the business decided to expand from a standalone tech news site into a broader ecosystem that combined editorial content, a recruitment jobs board, and a company intelligence database.
            </p>
            <p class="scroll-elem paragraph-text">
              As the sole designer, my job was to overhaul TIA's information architecture and native apps to fit these new monetization channels without breaking the core reading experience.
            </p>
          </div>

          <!-- dot divider -->
          <div class="h-6.5 bg-dot border-y border-dashed border-black/30" aria-hidden="true">
          </div>

          <img
            src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/tia-article.webp"
            alt=""
            width="1744"
            height="1221"
            loading="lazy"
          />

          <!-- grid divider -->
          <div class="h-12 bg-grid" aria-hidden="true">
          </div>

          <!-- Project Challenges -->
          <div class="scroll-fade-up paragraph-container">
            <h2 class="scroll-words paragraph-title">Project Challenges</h2>
            <ul class="list-disc paragraph-text pl-4 *:mt-3 *:first:mt-0">
              <li class="scroll-elem">
                <span class="font-bold">Fractured Interfaces:</span> Over the years, the design language of the responsive website, iOS app, and Android app had drifted completely apart, creating a mismatched user experience.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Complex Feature Integration:</span> We had to insert employer profiles and job-seeker loops into a legacy layout built purely for reading articles—and introduce a paid premium subscription without hurting free user engagement.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Broad Scope & Missing Data:</span> The roadmap required rebuilding the web platform and both native apps simultaneously, even though we had no initial user data on what recruiters and job seekers actually looked for on our site.
              </li>
            </ul>
          </div>

          <!-- dot divider -->
          <div class="h-6.5 bg-dot border-y border-dashed border-black/30" aria-hidden="true">
          </div>

          <img
            src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/tia-typography.webp"
            alt=""
            width="1541"
            height="1062"
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
                <span class="font-bold">Research and Usability Testing:</span> To avoid guesswork, I started with a competitive analysis of existing jobs boards and database platforms. I followed this with usability testing sessions to pinpoint exactly what details tech recruiters and job seekers needed most. This research helped me restructure the global navigation so users could switch between news, jobs, and data seamlessly.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Setting Up an Engineering Feedback Loop:</span> To avoid wasting time on layouts that were too heavy to build, I reviewed wireframes directly with the product managers and engineering leads early on. We also decided to prioritize the responsive website layout first. This let us live-test feature experiments—like putting relevant job boards inside related news articles—before spending engineering resources on mobile app updates.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Standardizing the Design System for Handoff:</span> I built a shared design system to unify our visual language across web and mobile viewports, using subtle color coding to separate the Media, Jobs, and Database branches. I handed off layouts using <span class="font-bold">Zeplin</span>, which automatically generated clean CSS snippets and exportable assets. This took the guesswork out of spacing and styling measurements and minimized back-and-forth communication errors with the developers.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Designing Platform-Native Mobile Layouts:</span> Instead of using a generic web container for our mobile apps, I studied <span class="font-bold">iOS Human Interface Guidelines</span> and <span class="font-bold">Android Material Design</span> behaviors. I designed separate layouts for each platform so they felt natural to phone users. This also let our engineering team build faster by using stock, built-in mobile components instead of inventing custom UI wrappers.
              </li>
            </ul>
          </div>

          <!-- dot divider -->
          <div class="h-6.5 bg-dot border-y border-dashed border-black/30" aria-hidden="true">
          </div>

          <img
            src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/tia-jobs.webp"
            alt=""
            width="1248"
            height="872"
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
                <span class="font-bold">Successful Ecosystem Launch:</span> Shipped the unified desktop and mobile web platform alongside updated native iOS and Android apps, successfully rolling out the company's new jobs and database features.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Smoother Technical Execution:</span> Using Zeplin documentation and native mobile component patterns kept development timelines predictable with very few layout translation bugs.
              </li>
              <li class="scroll-elem">
                <span class="font-bold">Fast Design Scaling:</span> The implementation of the cross-platform design system shortened overall design timelines and allowed newly hired designers to start shipping consistent work on day one.
              </li>
            </ul>
          </div>

          <!-- dot divider -->
          <div class="h-6.5 bg-dot border-y border-dashed border-black/30" aria-hidden="true">
          </div>

          <img
            src="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/tia-events.webp"
            alt=""
            width="1412"
            height="1039"
            loading="lazy"
          />

          <!-- grid divider -->
          <div class="h-12 bg-grid" aria-hidden="true">
          </div>

          <!-- Project Reflection-->
          <div class="scroll-fade-up paragraph-container">
            <h2 class="scroll-words paragraph-title">Project Reflection</h2>
            <p class="scroll-elem paragraph-text">
              Trying to redesign a website and two native mobile apps while launching brand-new features at the same time stretched our timeline out to two years. It taught me that a phased approach is almost always better.
            </p>
            <p class="scroll-elem paragraph-text">
              When you ship too many massive changes at once, it becomes very difficult to look at analytics and tell exactly which design tweak moved the needle. Moving forward, I always advocate for smaller, more measurable software releases.
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
