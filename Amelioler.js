// =====================================
// MENU NAVIGASI MOBILE
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");

    menuToggle.textContent = navMenu.classList.contains("show") ? "✕" : "☰";
  });

  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("show");
      menuToggle.textContent = "☰";
    });
  });
}

// =====================================
// TAHUN OTOMATIS DI FOOTER
// =====================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// =====================================
// ANIMASI SAAT SCROLL
// =====================================

const revealElements = document.querySelectorAll(
  ".section-heading, .about-main, .about-side, " +
    ".tech-item, .portfolio-card, .timeline-item, " +
    ".experience-card, .blog-card, .contact-box",
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  revealElements.forEach(function (element) {
    element.classList.add("reveal");
    observer.observe(element);
  });
} else {
  revealElements.forEach(function (element) {
    element.classList.add("show");
  });
}

// =====================================
// LINK NAVIGASI AKTIF
// =====================================

const pageSections = document.querySelectorAll("main section[id]");
const pageLinks = document.querySelectorAll(".nav-menu a");

function updateActiveLink() {
  let currentSection = "";

  pageSections.forEach(function (section) {
    const sectionTop = section.offsetTop - 150;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSection = section.id;
    }
  });

  pageLinks.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

// =====================================
// EMAIL
// =====================================

const emailButton = document.getElementById("emailButton");

if (emailButton) {
  emailButton.addEventListener("click", function (event) {
    if (emailButton.getAttribute("href") === "mailto:") {
      event.preventDefault();

      alert(
        "Alamat email belum ditambahkan. Silakan isi email pada bagian kontak.",
      );
    }
  });
}

// =====================================
// LINK MEDIA SOSIAL
// =====================================

const socialLinks = document.querySelectorAll('[data-placeholder="true"]');

socialLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    alert("Link akun media sosial belum ditambahkan.");
  });
});
