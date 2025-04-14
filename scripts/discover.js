// Visit Message Logic
const msPerDay = 1000 * 60 * 60 * 24;
const today = Date.now();
const lastVisit = Number(localStorage.getItem("lastVisit"));
const visitMsg = document.querySelector(".visit-message");

if (!lastVisit) {
  visitMsg.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((today - lastVisit) / msPerDay);
  visitMsg.textContent = days < 1
    ? "Back so soon! Awesome!"
    : `You last visited ${days} day${days > 1 ? "s" : ""} ago.`;
}

localStorage.setItem("lastVisit", today);

// Load Items of Interest
fetch("data/discover.json")
  .then((res) => res.json())
  .then((data) => {
    const gallery = document.querySelector(".gallery");
    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure><img src="${item.image}" alt="${item.name}" /></figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;
      gallery.appendChild(card);
    });
  });

  const apiKey = '644c26440276cf97e48f8ea210357b03'; 
const city = "Accra";
const units = "metric";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("temp").textContent = `🌡️ ${data.main.temp.toFixed(1)} °C`;
    document.getElementById("desc").textContent = `⛅ ${data.weather[0].description}`;
  })
  .catch(err => console.log("Weather fetch error:", err));

fetch('data/attractions.json')
.then(response => response.json())
.then(data => {
const container = document.getElementById('discover-cards');
data.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <h2>${item.name}</h2>
    <figure><img src="${item.image}" alt="${item.name}"><figcaption>${item.name}</figcaption></figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button>Learn More</button>
    `;
    container.appendChild(card);
});
});

