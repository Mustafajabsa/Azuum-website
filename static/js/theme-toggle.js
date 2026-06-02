(function () {
  const storageKey = "azuum-theme";
  const root = document.documentElement;

  function getStoredTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      // Ignore storage failures so the toggle still works for this page view.
    }
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");

      const icon = button.querySelector("[data-theme-icon]");
      if (icon) {
        icon.setAttribute("data-lucide", isDark ? "sun" : "moon");
      }

      const label = button.querySelector("[data-theme-label]");
      if (label) {
        label.textContent = isDark ? "Light" : "Dark";
      }
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function preferredTheme() {
    return getStoredTheme() || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  function bindToggle() {
    applyTheme(root.classList.contains("dark") ? "dark" : preferredTheme());

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextTheme = root.classList.contains("dark") ? "light" : "dark";
        setStoredTheme(nextTheme);
        applyTheme(nextTheme);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindToggle);
  } else {
    bindToggle();
  }
})();
