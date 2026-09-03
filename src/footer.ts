const footer = (footer: HTMLElement) => {
  footer.classList = "flex flex-col";
  footer.innerHTML = /*html*/ `
      <div class="divider-striped"></div>
      <div class="flex items-center justify-center w-full pb-2 text-sm border-t">
        <span class="font-mono">©2026 — Wanlin Cheung</span>

        <!--Social media -->
        <div class="flex items-center justify-end grow gap-2.5">
          <!--LinkedIn -->
          <a href="https://www.linkedin.com/in/wan-lin-cheung-10/" target="_blank" aria-label="LinkedIn profile" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/></svg>
          </a>

          <!--Email -->
          <a href="mailto:wanlin.c.10@gmail.com" aria-label="Email me" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
          </a>
        </div>

      </div>
  `;
};

export default footer;
