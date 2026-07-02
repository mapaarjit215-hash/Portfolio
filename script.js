// ===============================
// Typing Animation
// ===============================

const typing = document.querySelector(".typing");

const words = [
  "B.Sc. Student",
  "Web Developer",
  "MERN Stack Developer",
  "YouTube Creator"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {

    typing.textContent = currentWord.substring(0, charIndex++);

    if (charIndex > currentWord.length) {
      deleting = true;

      setTimeout(typeEffect, 1200);
      return;
    }

  } else {

    typing.textContent = currentWord.substring(0, charIndex--);

    if (charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      charIndex = 0;
    }

  }

  setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

  if (navLinks.style.display === "flex") {

    navLinks.style.display = "none";

  } else {

    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "80px";
    navLinks.style.right = "20px";
    navLinks.style.background = "#111";
    navLinks.style.padding = "20px";
    navLinks.style.borderRadius = "15px";

  }

});


// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 50) {

    header.style.boxShadow = "0 0 25px rgba(139,92,246,.4)";

  } else {

    header.style.boxShadow = "none";

  }

});


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
  ".about-card, .skill-card, .project-card, .timeline-card, .contact-box"
);

function reveal() {

  revealElements.forEach((element) => {

    const top = element.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

      element.style.opacity = "1";
      element.style.transform = "translateY(0px)";

    }

  });

}

revealElements.forEach((element) => {

  element.style.opacity = "0";
  element.style.transform = "translateY(60px)";
  element.style.transition = "0.8s";

});

window.addEventListener("scroll", reveal);

reveal();
