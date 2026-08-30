export const checkeredRow = (rows: NodeListOf<HTMLDivElement>) => {
  for (const row of rows) {
    const container = document.createElement("div");
    row.classList =
      "group checkered-row flex border-b last:border-b-0 border-black/30 border-dashed [&+*]:border-b [&+*]:border-dashed [&+*]:border-black/30 overflow-hidden";
    row.setAttribute("aria-hidden", "true");

    container.classList =
      "checkered-row-inner w-full flex shrink-0 animate-[checkered-row-marquee_30s_linear_infinite] group-odd:[&>*:nth-child(odd)]:bg-none group-even:[&>*:nth-child(even)]:bg-none group-even:animate-[checkered-row-marquee_20s_linear_infinite]";

    for (let i = 0; i < 20; i++) {
      const grid = document.createElement("div");
      grid.classList =
        "w-full aspect-square border-r border-dashed border-black/30 bg-striped-reverse";
      container.append(grid);
    }

    const cloneContainer = container.cloneNode(true);
    row.append(container);
    row.append(cloneContainer);
  }
};
