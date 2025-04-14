document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from refreshing the page
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const confirmation = document.getElementById("form-confirmation");
  
    if (!name || !email || !message) {
      confirmation.style.color = "red";
      confirmation.textContent = "Please fill out all fields.";
      return;
    }
  
    // Show confirmation message
    confirmation.style.color = "green";
    confirmation.textContent = "Thanks for contacting us! We'll get back to you soon.";
  
    // Optionally clear the form
    this.reset();
  });
  