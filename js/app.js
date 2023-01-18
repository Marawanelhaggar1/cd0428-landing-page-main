/**
 * Define Global Variables
 *
 */
let ul = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll("section");

/**
 * End Global Variables*/

// build the nav
for (var i = 1; i <= sections.length; i++) {
  const a = document.createElement("a");
  const li = document.createElement("li");
  a.classList.add("menu__link");
  a.textContent = "Section" + " " + i;
  // Scroll to anchor ID using scrollTO event
  a.setAttribute("href", `#section${i}`);
  li.appendChild(a);
  fragment.appendChild(li);
}
ul.appendChild(fragment);

// Add class 'active' to section when near top of viewport

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

// Set sections as active
const observer = new IntersectionObserver(callBack, options);
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Scroll to section on link click
let prevScrollpos;
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
});

// Build menu
const icon = document.querySelector("a");
icon.addEventListener("click", () => {
  if (ul.style.display === "none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
});

// const  = ul.querySelectorAll("a")

// sections.forEach(function (section) {
//   links.forEach((link) => {
//     link.addEventListener("click", (evt) => {
//       evt.preventDefault();
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "end",
//         inline: "nearest",
//       });
//     });
//   });
// });

document.documentElement.style.scrollBehavior = "smooth";
