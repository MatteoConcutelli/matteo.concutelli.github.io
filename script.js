document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll(".main-nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetEl = document.getElementById(targetId);
      window.scrollTo({
        top: targetEl.offsetTop - 60, // offset for header
        behavior: "smooth"
      });
    });
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Mobile Nav Toggle (optional)
  // Add a button in your HTML for mobile nav toggle if you want a hamburger icon
  // For example:
  // <button class="nav-toggle">Menu</button>
  // Then uncomment the code below:
  /*
  const navToggle = document.querySelector(".nav-toggle");
  const navUl = document.querySelector(".main-nav ul");

  navToggle.addEventListener("click", () => {
    navUl.classList.toggle("show");
  });
  */
});
