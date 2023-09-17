const pageRoot = document.getElementById("page-root");
const pageFetch = async (page) => {
  const res = await fetch(`pages/${page}.html`);
  const text = await res.text();
  document.title = `AutoKings | ${page.toUpperCase()}`;
  return text;
};
window.onload = async () => {
  pageRoot.innerHTML = await pageFetch("home");
  const navLinks = document.querySelectorAll("a.nav--link");
  navLinks[0].classList.add("active");
  navLinks.forEach((link) => {
    link.addEventListener("click", async () => {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      const text = await pageFetch(link.id);
      link.classList.add("active");
      pageRoot.innerHTML = text;
      if (link.id === "book") {
        initFormValidation();
      }
      if (link.id === "articles") {
        initArticles();
      }
    });
  });
};
