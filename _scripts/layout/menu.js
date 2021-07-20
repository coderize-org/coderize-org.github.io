const btn = document.querySelector(".navigation__toggle");
const nav = document.querySelector(".navigation");
const hero = document.getElementById("home");
const urls = document.querySelectorAll(".navigation__link,.hero__prompt__link");
const headerOffset = 75;
const mobileBreakpoint = 576;

btn.addEventListener(
  "click",
  function() {
    btn.classList.toggle("navigation--open");
    nav.classList.toggle("navigation--open");
  },
  false
);

urls.forEach(function(el) {
  el.addEventListener("click", function() {
    event.preventDefault();
    btn.classList.remove("navigation--open");
    nav.classList.remove("navigation--open");

    // Change url hash:
    history.pushState(null, null, el.getAttribute("href"));
    scrollToTargetAdjusted(el.getAttribute("href"));
  });

  window.addEventListener("scroll", function() {
    if (window.scrollY < hero.offsetTop + hero.offsetHeight - 200) {
      nav.classList.remove("navigation--has-shadow");
    } else {
      nav.classList.add("navigation--has-shadow");
    }
  });
});

function scrollToTargetAdjusted(query) {
  const element = document.querySelector(query);
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  let offsetPosition = elementPosition;

  if (window.outerWidth > mobileBreakpoint)
    offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
