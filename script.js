const links = document.querySelectorAll("nav li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((sec) => {
    const top = sec.offsetTop - 100;
    if (scrollY >= top) current = sec.id;
  });

  links.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
});

function abrirMenu() {
  if (document.getElementById("menu-content").style.display === "none") {
    document.getElementById("menu-content").style.display = "flex";
  } else {
    document.getElementById("menu-content").style.display = "none";
  }
}
