/**
 * Numbered index row used by the experience and credentials lists.
 * Columns: period / organisation / role / note — stacked on small screens.
 */
export const indexRow = (rows: NodeListOf<HTMLDivElement>) => {
  rows.forEach((row, index) => {
    const rowNo = `[${String(index + 1).padStart(2, "0")}]`;
    const period = row.getAttribute("data-period");
    const name = row.getAttribute("data-name");
    const role = row.getAttribute("data-role");
    const note = row.getAttribute("data-note");

    row.className = "index-row scroll-elem";

    row.innerHTML = /*html*/ `
      <div class="flex gap-2 font-mono sm:col-span-2">
        <span class="text-[0.625rem] text-(--highlight-color) md:leading-5" aria-hidden="true">${rowNo}</span>
        <span class="text-xs md:text-sm">${period}</span>
      </div>
      <div class="flex flex-col sm:col-span-3">
        <span class="text-xl font-bold">${name}</span>
        <span class="font-mono text-sm">${role}</span>
      </div>
      <div class="text-sm text-(--lighter-text) sm:col-span-3 md:text-base">${note}</div>
    `;
  });
};
