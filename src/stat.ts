/** Credibility figure + caption. Four of these form the band under the intro. */
export const statBlock = (stats: NodeListOf<HTMLDivElement>) => {
  for (const stat of stats) {
    const figure = stat.getAttribute("data-figure");
    const label = stat.getAttribute("data-label");

    stat.className =
      "scroll-elem flex flex-col justify-start gap-1.5 border-b border-r border-default p-4 last:border-r-0 md:px-6 md:py-5 lg:border-b-0 max-lg:nth-[2n]:border-r-0 max-lg:nth-last-[-n+2]:border-b-0";

    stat.innerHTML = /*html*/ `
      <span class="font-display tracking-[-0.03em] text-4xl leading-none xl:text-5xl">${figure}</span>
      <span class="font-mono text-xs leading-snug text-(--lighter-text) md:text-sm">${label}</span>
    `;
  }
};
