export const PORTFOLIO_NAVIGATE_EVENT = "portfolio:navigate";

export type PortfolioSection = "projects" | "cv" | "contact";

export function getPortfolioSectionFromHash(): PortfolioSection | null {
  const section = window.location.hash.slice(1);
  return section === "projects" || section === "cv" || section === "contact"
    ? section
    : null;
}

export function navigateToPortfolioSection(section: PortfolioSection): void {
  const target = `#${section}`;

  if (window.location.pathname !== "/") {
    window.location.assign(`/${target}`);
    return;
  }

  window.history.pushState(null, "", target);
  window.dispatchEvent(
    new CustomEvent<PortfolioSection>(PORTFOLIO_NAVIGATE_EVENT, {
      detail: section,
    })
  );
}
