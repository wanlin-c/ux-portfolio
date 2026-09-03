const createDividerStriped = (divider: HTMLDivElement) => {
  divider.setAttribute("aria-hidden", "true");

  if (divider.classList.contains("divider-striped-reverse")) {
    if (divider.classList.contains("divider-striped-inner")) {
      divider.classList = "flex justify-end w-full h-7 bg-striped xl:h-8";
      divider.innerHTML = /*html*/ `
        <div class="h-full w-full bg-striped-reverse sm:max-w-[calc(100%-var(--intro-container-width-sm)-0.6875rem)] xl:max-w-[calc(100%-var(--intro-container-width)-0.6875rem)]"></div>
      `;
    } else {
      divider.classList = "flex justify-end w-full h-7 bg-striped xl:h-8";
      divider.innerHTML = /*html*/ `
        <div class="h-full w-full  bg-striped-reverse sm:max-w-[calc(100%-var(--intro-container-width-sm)-1.4375rem)] xl:max-w-[calc(100%-var(--intro-container-width)-1.4375rem)]"></div>
      `;
    }
  } else {
    if (divider.classList.contains("divider-striped-inner")) {
      divider.classList = "flex w-full h-7 bg-striped xl:h-8";
      divider.innerHTML = /*html*/ `
        <div class="h-full w-full bg-striped-reverse sm:max-w-[calc(var(--intro-container-width-sm)+0.0625rem)] xl:max-w-[calc(var(--intro-container-width)+0.0625rem)]"></div>
      `;
    } else {
      divider.classList = "flex w-full h-7 bg-striped xl:h-8";
      divider.innerHTML = /*html*/ `
        <div class="h-full w-full bg-striped-reverse sm:max-w-[calc(var(--intro-container-width-sm)+0.75rem)] xl:max-w-[calc(var(--intro-container-width)+0.75rem)]"></div>
      `;
    }
  }
};

export const dividerStriped = (
  dividers: NodeListOf<HTMLDivElement> | HTMLDivElement,
) => {
  if (dividers instanceof HTMLDivElement) {
    createDividerStriped(dividers);
  }

  if (dividers instanceof NodeList) {
    for (const divider of dividers) {
      createDividerStriped(divider);
    }
  }
};
