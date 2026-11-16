
// Contact form functionality

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.textContent = "Please complete all fields.";
    return;
  }

  status.textContent =
    "Thank you, " + name + "! Your message was received in this demo.";

  form.reset();
});

// Welcome message in browser console

console.log("Welcome to CampusConnect!");

// Navigation link click feedback

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {
  link.addEventListener("click", function() {
    console.log("Navigating to: " + link.textContent);
  });
});
