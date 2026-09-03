/** One column of the capabilities grid. Skill list is pipe-separated. */
export const capabilityColumn = (columns: NodeListOf<HTMLDivElement>) => {
  columns.forEach((column, index) => {
    const columnNo = `[0${index + 1}]`;
    const title = column.getAttribute("data-title");
    const summary = column.getAttribute("data-summary");
    const items = (column.getAttribute("data-items") ?? "")
      .split("|")
      .map((item) => item.trim())
      .filter(Boolean);

    column.className =
      "scroll-fade-up relative z-10 flex w-full flex-col gap-2 border-default p-4 max-lg:border-b max-lg:last:border-b-0 sm:p-6 lg:border-r lg:last:border-r-0";

    column.innerHTML = /*html*/ `
      <span class="scroll-elem font-mono text-[0.625rem] text-(--highlight-color) -mb-1" aria-hidden="true">${columnNo}</span>
      <h3 class="scroll-words text-xl font-bold leading-[1.2] md:text-2xl">${title}</h3>
      <p class="scroll-elem text-sm text-(--lighter-text) md:text-base">${summary}</p>
      <ul class="scroll-elem mt-3 flex flex-col">
        ${items
          .map(
            (item) => /*html*/ `
              <li class="flex gap-2 border-t border-default py-1.5 font-mono text-xs md:text-sm">
                <span class="text-highlight" aria-hidden="true">•</span>
                <span>${item}</span>
              </li>`,
          )
          .join("")}
      </ul>
    `;
  });
};
