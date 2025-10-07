document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

function filterProjects(category) {
  const projects = document.querySelectorAll(".project");
  projects.forEach(project => {
    if (category === "all" || project.classList.contains(category)) {
      project.classList.remove("hidden");
    } else {
      project.classList.add("hidden");
    }
  });
}
const filterElement = document.getElementById("filter");
if (filterElement) {
  filterElement.addEventListener("change", function() {
    filterProjects(this.value);
  });
}

// Code for contact form validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault();
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});