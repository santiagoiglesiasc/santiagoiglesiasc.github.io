const menuButton = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-list");

if (menuButton && menu) {
  menu.id = "navigation-menu";
  menuButton.setAttribute("aria-controls", menu.id);
  menuButton.setAttribute("aria-expanded", "false");

  function closeMenu() {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu.classList.contains("open")) {
      closeMenu();
      menuButton.focus();
    }
  });
}

// Display the current year in the footer.
const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Enable the back-to-top button.
const backToTop = document.querySelector(".back-to-top");
if (backToTop) {
  function updateBackToTop() {
    backToTop.style.display = window.scrollY > 300 ? "flex" : "none";
  }

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0 });
  });
}
