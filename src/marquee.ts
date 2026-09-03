/**
 * Seamless text ticker. The item list is rendered twice — the second copy is
 * hidden from assistive tech — so the CSS translation loops without a seam.
 * Items are pipe-separated so that names may contain commas.
 */
export const marquee = (elements: NodeListOf<HTMLDivElement>) => {
  for (const element of elements) {
    const items = (element.getAttribute("data-items") ?? "")
      .split("|")
      .map((item) => item.trim())
      .filter(Boolean);

    if (!items.length) continue;

    element.className = "marquee";
    element.style.setProperty(
      "--marquee-duration",
      element.getAttribute("data-duration") ?? "40s",
    );

    const track = document.createElement("ul");
    track.className = "marquee-track";
    track.innerHTML = items
      .map(
        (item) => /*html*/ `
          <li class="flex items-center whitespace-nowrap">
            <span class="font-display tracking-[-0.03em] px-4 py-2.5 text-2xl sm:text-3xl xl:text-4xl">${item}</span>
            <span class="text-highlight text-sm" aria-hidden="true">◆</span>
          </li>`,
      )
      .join("");

    const clone = track.cloneNode(true) as HTMLUListElement;
    clone.setAttribute("aria-hidden", "true");

    element.append(track, clone);
  }
};
