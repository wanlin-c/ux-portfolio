export const casestudyInfo = (items: NodeListOf<HTMLDivElement>) => {
  for (let i = 0, itemsLength = items.length; i < itemsLength; i++) {
    const item = items[i];
    const itemNo = `[0${i + 1}]`;
    const title = `${item.getAttribute("title")}:`;
    const description = item.getAttribute("description");

    item.classList =
      "scroll-elem flex py-1 border-t border-dashed border-black/30";

    item.innerHTML = /*html*/ `
      <span class="inline-block shrink-0 w-8 font-mono text-[0.625rem] leading-[1.9]" aria-hidden="true">${itemNo}</span>
      <div class="inline-flex lg:flex-col xl:flex-row text-sm">
        <span class="inline-block shrink-0 w-25 sm:w-40 font-bold">${title}</span>
        <span class="inline-block grow max-w-sm text-gray-500">${description}</span>
      </div>
    `;
  }
};
