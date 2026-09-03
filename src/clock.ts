/** Live Singapore time — the "where I am, right now" marker in the hero meta row. */
export const localClock = (element: HTMLElement) => {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Singapore",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const render = () => {
    element.textContent = `SGT ${formatter.format(new Date())}`;
  };

  render();
  window.setInterval(render, 1000);
};
