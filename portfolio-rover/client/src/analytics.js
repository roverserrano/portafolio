// The site works without analytics. Configure both VITE_UMAMI_* variables to enable it.
export function track(name, properties = {}) {
  window.dispatchEvent(
    new CustomEvent("portfolio:analytics", { detail: { name, properties } }),
  );
  window.umami?.track(name, properties);
}

export function initAnalytics() {
  const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
  const scriptUrl = import.meta.env.VITE_UMAMI_SCRIPT_URL;
  if (websiteId && scriptUrl) {
    try {
      const url = new URL(scriptUrl);
      if (
        url.protocol === "https:" ||
        (import.meta.env.DEV && url.hostname === "localhost")
      ) {
        const script = document.createElement("script");
        script.defer = true;
        script.src = url.href;
        script.dataset.websiteId = websiteId;
        document.head.appendChild(script);
      }
    } catch {
      /* An invalid optional setting should never prevent rendering. */
    }
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest?.("a[href]");
    if (!link) return;
    const url = new URL(link.href);
    if (link.hasAttribute("download")) track("cv_download");
    else if (
      url.hostname === "linkedin.com" ||
      url.hostname.endsWith(".linkedin.com")
    )
      track("linkedin_click");
    else if (link.closest("[data-project]") && url.hostname === "github.com")
      track("project_code_click", {
        project: link.closest("[data-project]").dataset.project,
      });
    else if (link.dataset.demo)
      track("project_demo_click", { project: link.dataset.demo });
  });
}
