const menuIcon = document.querySelector(".nav--menu-icon");
const navLinks = document.querySelector("ul");
const navLinksList = document.querySelectorAll(".nav--link");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navLinksList.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});
