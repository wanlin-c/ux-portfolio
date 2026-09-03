export const homeCard = (cards: NodeListOf<HTMLDivElement>) => {
  for (let i = 0, cardsLength = cards.length; i < cardsLength; i++) {
    const card = cards[i];
    const cardNo = `[0${i + 1}]`;
    const title = card.getAttribute("data-title");
    const role = card.getAttribute("data-role");
    const description = card.getAttribute("data-description");
    const liveSite = card.getAttribute("data-live-site");
    const caseStudy = card.getAttribute("data-case-study");
    const thumbnail = card.getAttribute("data-thumbnail");
    const altText = card.getAttribute("data-alt");
    const year = card.getAttribute("data-year");
    const tags = (card.getAttribute("data-tags") ?? "")
      .split("|")
      .map((tag) => tag.trim())
      .filter(Boolean);

    // Card CSS classes
    card.classList =
      "home-card flex flex-col-reverse grow w-full relative sm:flex-row ";

    // Card content
    card.innerHTML = /*html*/ `
      <div class="scroll-fade-up flex flex-col w-full gap-1 justify-center p-4 md:p-6 xl:p-8 relative z-10">
        <h3 class="scroll-words text-xl font-bold leading-[1.2] sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">${title}</h3>
        <p class="scroll-words font-mono text-sm md:text-base lg:text-sm xl:text-base">${role}</p>
        <p class="scroll-elem text-(--lighter-text) mt-2.5 text-sm md:text-base lg:text-sm xl:text-base">${description}</p>
        ${
          tags.length
            ? /*html*/ `
              <ul class="scroll-elem mt-3.5 flex flex-wrap gap-1.5">
                ${tags.map((tag) => `<li class="tag">${tag}</li>`).join("")}
              </ul>`
            : ""
        }
      </div>
      <span class="absolute z-20 flex items-center gap-1.5 -top-px right-0 px-1 bg-black font-mono text-[0.625rem] text-white">
        ${year ? `<span>${year}</span>` : ""}${cardNo}
      </span>
    `;

    // Links container
    if (liveSite || caseStudy) {
      // Create link container
      const linkContainer = document.createElement("div");
      linkContainer.classList = "flex flex-wrap gap-3 mt-4";

      // Insert link container
      const cardContainer = card.querySelector("div");
      cardContainer && cardContainer.append(linkContainer);

      // Create and insert case study link
      if (caseStudy) {
        const link = document.createElement("a");
        link.setAttribute("href", caseStudy);
        link.classList = "text-link";
        link.innerHTML = /*html*/ `
          <span>Case study</span>
        `;
        linkContainer.append(link);
      }

      // Create and insert live site link
      if (liveSite) {
        const link = document.createElement("a");
        link.setAttribute("href", liveSite);
        link.setAttribute("target", "_blank");
        link.classList = "text-link-external";
        link.innerHTML = /*html*/ `
          <span>Live site</span>
        `;

        // Insert divider if more than 1 link
        if (caseStudy && liveSite) {
          const divider = document.createElement("div");
          divider.textContent = "/";
          linkContainer.append(divider);
        }

        // Insert live site link
        linkContainer.append(link);
      }

      // Insert thumbnail
      if (thumbnail) {
        // Create thumbnail container
        const thumbnailContainer = document.createElement("a");
        caseStudy && thumbnailContainer.setAttribute("href", caseStudy);
        thumbnailContainer.classList =
          "group relative z-10 shrink-0 w-full border-default overflow-hidden max-sm:border-b max-sm:aspect-video sm:border-l sm:w-70 md:w-100 lg:w-70";

        // Create thumbnail image
        const thumbnailImage = document.createElement("img");
        thumbnailImage.setAttribute("src", thumbnail);
        thumbnailImage.setAttribute("alt", altText ? altText : "");
        thumbnailImage.classList =
          "object-cover object-top w-full h-full group-hover:scale-[110%] transition-transform duration-300 ease-out";

        // Insert image
        thumbnailContainer.append(thumbnailImage);

        // Insert thumbnail container
        card.append(thumbnailContainer);
      }
    }
  }
};
