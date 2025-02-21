document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 60, // adjust offset for sticky navbar
          behavior: "smooth"
        });
      });
    });
  
    // Back to Top Button functionality
    const backToTopBtn = document.getElementById("back-to-top");
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
    backToTopBtn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  