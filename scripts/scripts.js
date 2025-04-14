document.addEventListener('DOMContentLoaded', () => {
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
        const container = document.querySelector('.members-container');
        data.forEach(member => {
          const div = document.createElement('div');
          div.classList.add('member');
          div.innerHTML = `
            <img src="${member.logo}" alt="${member.name}" />
            <p>${member.name}</p>
          `;
          container.appendChild(div);
        });
      });
    });

    const apiKey = '644c26440276cf97e48f8ea210357b03';
    const city = 'Accra';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector('.widget');
        weather.innerHTML = `
        <strong>${data.name} Weather:</strong> ${data.main.temp}°C, ${data.weather[0].description}
        `;
    });

    const sidebar = document.querySelector(".visit-message"); // Create a div with this class in HTML
const msPerDay = 1000 * 60 * 60 * 24;
const today = Date.now();
let message = "";

const lastVisit = Number(localStorage.getItem("lastVisit"));

if (!lastVisit) {
  message = "Welcome! Let us know if you have any questions.";
} else {
  const daysBetween = Math.floor((today - lastVisit) / msPerDay);
  if (daysBetween < 1) {
    message = "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${daysBetween} days ago.`;
  }
}

sidebar.textContent = message;
localStorage.setItem("lastVisit", today);

  