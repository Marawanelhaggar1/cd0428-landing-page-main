/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const ul = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (var i = 1; i <= sections.length; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.classList.add("menu__link");
  a.textContent = "Section" + " " + i;
  //   a.setAttribute("id", `section${i}`);
  a.setAttribute("href", `#section${i}`);
  li.appendChild(a);
  fragment.appendChild(li);
}
ul.appendChild(fragment);
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll("a.menu__link");

const callBack = (entries) => {
  let section = entries[0];
  section.target.classList.remove("your-active-class");
  if (section.isIntersecting) {
    section.target.classList.add("your-active-class");
    links.forEach((link) => {
      if (link.textContent === section.target.dataset.nav) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    });
  } else {
    section.target.classList.remove("your-active-class");
  }
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const observer = new IntersectionObserver(callBack, options);
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    observer.observe(section);
  });
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
