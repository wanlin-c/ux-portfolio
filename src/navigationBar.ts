const navigationBar = (element: HTMLElement) => {
  element.classList =
    "fixed z-999 top-0 left-0 flex justify-center bg-(--bg-body) w-full px-4 lg:px-8";
  element.innerHTML = /*html*/ `
    <div class="flex items-center w-full max-w-[calc(var(--max-content-width)-4rem)] h-(--nav-height) mx-auto gap-4 border-b text-sm lg:max-w-[calc(var(--max-content-width)-4rem)]">
      <!-- Logo -->
      <a href="index.html" class="font-semibold leading-(--nav-height)">[Wanlin Cheung]</a>

      <!-- Links -->
      <div class="flex justify-end grow gap-2">
        <!-- Work -->
        <a href="index.html#work" class="nav-link">Work</a>

        <!-- Resume -->
        <a href="https://thebqcwwxioszdmfhrbh.supabase.co/storage/v1/object/public/portfolio-assets/resume-wanlin-cheung.pdf" class="nav-link">Resume</a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/wan-lin-cheung-10/" target="_blank" aria-label="LinkedIn profile" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/></svg>
        </a>
      </div>
    </div>
  `;

  const spaceOffset = document.createElement("div");
  spaceOffset.classList = "w-full h-(--nav-height)";
  spaceOffset.setAttribute("aria-hidden", "true");
  element.insertAdjacentElement("afterend", spaceOffset);
};

export default navigationBar;
