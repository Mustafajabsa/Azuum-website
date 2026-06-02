(function () {
  const revealSelectors = [
    "section > div > div",
    ".card-hover",
    ".pricing-card",
    ".chart-container",
    ".sidebar-item",
    "footer > div > div",
  ];

  const revealVariants = ["reveal-left", "reveal-right", "reveal-zoom", "reveal-flip"];

  function shouldSkip(element) {
    return (
      element.classList.contains("scroll-reveal") ||
      element.closest("nav") ||
      element.closest("#mobile-menu") ||
      element.dataset.noScrollReveal === "true"
    );
  }

  function collectRevealElements() {
    const elements = new Set();

    revealSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        if (!shouldSkip(element)) {
          elements.add(element);
        }
      });
    });

    document.querySelectorAll("section").forEach((section) => {
      const headings = section.querySelectorAll("h1, h2, h3");
      headings.forEach((heading) => {
        if (!shouldSkip(heading)) {
          elements.add(heading);
        }
      });
    });

    return Array.from(elements);
  }

  function prepareElements(elements) {
    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");

      if (element.matches(".card-hover, .pricing-card, .chart-container")) {
        element.classList.add("reveal-glow", revealVariants[index % revealVariants.length]);
      }

      const siblingIndex = Array.from(element.parentElement ? element.parentElement.children : []).indexOf(element);
      const delay = Math.max(0, Math.min(siblingIndex, 5)) * 90;
      element.style.setProperty("--reveal-delay", `${delay}ms`);
    });
  }

  function revealOnScroll(elements) {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    );

    elements.forEach((element) => observer.observe(element));
  }

  document.addEventListener("DOMContentLoaded", function () {
    const elements = collectRevealElements();
    prepareElements(elements);
    revealOnScroll(elements);
  });
})();
