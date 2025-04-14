document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const confirmation = document.createElement("p");
    confirmation.style.color = "green";
    confirmation.style.fontWeight = "bold";
    confirmation.style.marginTop = "1rem";
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const fullName = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const business = document.getElementById("business").value.trim();
      const membership = document.getElementById("membership").value;
  
      if (!fullName || !email || !business || !membership) {
        alert("Please fill in all required fields.");
        return;
      }
  
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Show confirmation message
      confirmation.textContent = "Thank you for joining the Accra Chamber of Commerce!";
      form.appendChild(confirmation);
  
      form.reset();
    });
  });
  