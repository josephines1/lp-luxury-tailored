document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".navbar").style.opacity = "1";
  document.querySelector("#home .fade-in-left").classList.add("active");
  document.querySelector("#home .fade-in-right").classList.add("active");
});

function addActiveClass(sectionId, offset, fadeClass) {
  var section = document.getElementById(sectionId);
  var sectionOffsetTop = section.offsetTop;
  if (window.scrollY > sectionOffsetTop - offset) {
    section.classList.add("active");
    document
      .querySelectorAll(`#${sectionId} .${fadeClass}`)
      .forEach(function (element) {
        element.classList.add("active");
      });
  }
}

document.addEventListener("scroll", function () {
  addActiveClass("about", 400, "fade-in-up");
  addActiveClass("collections", 300, "fade-in-up");
  addActiveClass("features", 300, "fade-in-left");
  addActiveClass("features", 300, "fade-in-right");
  addActiveClass("collections", 300, "fade-in-big");
});
