fetch('data/members.json')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('directory-cards');
        data.forEach(member => {
          const card = document.createElement('div');
          card.className = 'member-card';
          card.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
          `;
          container.appendChild(card);
        });
      });

    document.getElementById('grid-view').addEventListener('click', () => {
      document.getElementById('directory-cards').classList.remove('list');
    });
    document.getElementById('list-view').addEventListener('click', () => {
      document.getElementById('directory-cards').classList.add('list');
    });